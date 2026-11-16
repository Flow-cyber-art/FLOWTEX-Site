// Generuje dwa pliki dla czytników i systemów AI:
// - public/rss.xml — kanał RSS 2.0 z opublikowanymi poradnikami,
// - public/llms-full.txt — pełna treść strony w Markdown (llms.txt + pełne
//   teksty usług i poradników), żeby agent AI dostał całość w jednym pliku.
//
// Czyta te same dane co sitemap i prerendering (src/data), więc nowy poradnik
// lub usługa trafia tu automatycznie. Zaplanowane poradniki (publishAt w
// przyszłości) są pomijane tak samo jak w sitemap. Uruchamiane na starcie
// `npm run build`, PO generate-llms-poradniki.js (llms-full.txt zaczyna się
// od gotowego llms.txt). Oba pliki są generowane, więc nie trafiają do gita.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const { SERVICES } = await import(path.join(root, "src/data/services.js"));
const { PORADNIKI } = await import(path.join(root, "src/data/poradniki.js"));

const HOST = "https://www.flowtex.pl";

const MONTHS_PL = {
  styczeń: 0, luty: 1, marzec: 2, kwiecień: 3, maj: 4, czerwiec: 5,
  lipiec: 6, sierpień: 7, wrzesień: 8, październik: 9, listopad: 10, grudzień: 11,
};

// publishAt ("RRRR-MM-DD") albo date ("Miesiąc RRRR") -> Date (UTC, 8:00).
function pubDate(p) {
  if (p.publishAt) return new Date(`${p.publishAt}T08:00:00Z`);
  const [monthName, year] = (p.date || "").toLowerCase().split(" ");
  const month = MONTHS_PL[monthName];
  return month === undefined ? new Date() : new Date(Date.UTC(Number(year), month, 1, 8));
}

const xmlEscape = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Linki w danych są względne ([tekst](/ścieżka)) — w plikach dla agentów
// zamieniamy je na pełne adresy.
const absLinks = (s) => String(s).replace(/\]\((\/[^)]*)\)/g, `](${HOST}$1)`);
// Do RSS (zwykły tekst) usuwamy składnię linków, zostawiając sam tekst.
const plainText = (s) => String(s).replace(/\[([^\]]+)\]\([^)]*\)/g, "$1");

// ---------- RSS ----------

const items = [...PORADNIKI]
  .sort((a, b) => pubDate(b) - pubDate(a))
  .map((p) => {
    const url = `${HOST}/poradniki/${p.slug}`;
    const intro = (Array.isArray(p.intro) ? p.intro : [p.intro]).filter(Boolean).map(plainText).join("\n\n");
    return `    <item>
      <title>${xmlEscape(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${pubDate(p).toUTCString()}</pubDate>
${p.category ? `      <category>${xmlEscape(p.category)}</category>\n` : ""}      <description>${xmlEscape(p.metaDescription || "")}</description>
      <content:encoded><![CDATA[${intro.replace(/]]>/g, "]]&gt;")}]]></content:encoded>
    </item>`;
  });

const lastBuild = PORADNIKI.length ? new Date(Math.max(...PORADNIKI.map((p) => pubDate(p).getTime()))) : new Date();

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>FLOWTEX Polska — poradniki o posadzkach przemysłowych</title>
    <link>${HOST}/poradniki</link>
    <atom:link href="${HOST}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Poradniki FLOWTEX Polska o posadzkach żywicznych i przemysłowych: dobór systemu, wady posadzek, naprawy i wykonawstwo.</description>
    <language>pl-PL</language>
    <lastBuildDate>${lastBuild.toUTCString()}</lastBuildDate>
${items.join("\n")}
  </channel>
</rss>
`;

fs.writeFileSync(path.join(root, "public", "rss.xml"), rss, "utf-8");
console.log(`[feeds] Wygenerowano public/rss.xml (${items.length} poradników)`);

// ---------- llms-full.txt ----------

const list = (arr, ordered) => arr.map((x, i) => `${ordered ? `${i + 1}.` : "-"} ${absLinks(x)}`).join("\n");
const table = (head, rows) => {
  const cells = (r) => `| ${r.map((c) => String(c).replace(/\|/g, "\\|")).join(" | ")} |`;
  return [cells(head), cells(head.map(() => "---")), ...rows.map(cells)].join("\n");
};
const paragraphs = (v) => (Array.isArray(v) ? v : [v]).filter(Boolean).map(absLinks).join("\n\n");
const faq = (arr) => (arr?.length ? `### Najczęstsze pytania\n\n${arr.map((f) => `**${f.q}**\n\n${absLinks(f.a)}`).join("\n\n")}` : "");

function serviceMd(s) {
  const out = [`## ${s.h1 || s.title}`, `Adres: ${HOST}/${s.slug}`, paragraphs(s.intro)];
  if (s.highlights?.length) out.push(list(s.highlights));
  for (const sec of s.sections || []) {
    out.push(`### ${sec.heading}`);
    if (sec.body) out.push(paragraphs(sec.body));
    if (sec.items?.length) out.push(list(sec.items));
    if (sec.table) out.push(table(sec.table.head, sec.table.rows));
    if (sec.note) out.push(paragraphs(sec.note));
  }
  if (s.closing) out.push(paragraphs(s.closing));
  out.push(faq(s.faq));
  return out.filter(Boolean).join("\n\n");
}

function poradnikMd(p) {
  const out = [`## ${p.title}`, `Adres: ${HOST}/poradniki/${p.slug} · ${p.category || ""} · ${p.date || ""}`, paragraphs(p.intro)];
  for (const sec of p.sections || []) {
    out.push(`### ${sec.heading}`);
    for (const b of sec.blocks || []) {
      if (b.type === "paragraph") out.push(absLinks(b.text));
      else if (b.type === "list") out.push(list(b.items, b.ordered));
      else if (b.type === "table") out.push(table(b.head, b.rows));
    }
  }
  out.push(faq(p.faq));
  if (p.cta?.text) out.push(absLinks(p.cta.text));
  return out.filter(Boolean).join("\n\n");
}

const llms = fs.readFileSync(path.join(root, "public", "llms.txt"), "utf-8").replace(/<!--[\s\S]*?-->\n?/g, "");

const SEP = "\n\n---\n\n";
const full = [
  llms.trim(),
  `# Pełna treść: usługi\n\n${SERVICES.map(serviceMd).join(SEP)}`,
  `# Pełna treść: poradniki\n\n${PORADNIKI.map(poradnikMd).join(SEP)}`,
].join(SEP) + "\n";

fs.writeFileSync(path.join(root, "public", "llms-full.txt"), full, "utf-8");
console.log(`[feeds] Wygenerowano public/llms-full.txt (${SERVICES.length} usług, ${PORADNIKI.length} poradników, ${Math.round(full.length / 1024)} KB)`);
