// Wstawia do public/llms.txt listę opublikowanych poradników (między
// znacznikami PORADNIKI:START / PORADNIKI:END). Zaplanowane poradniki
// (publishAt w przyszłości) nie trafiają na listę, więc llms.txt nigdy nie
// linkuje do strony, której jeszcze nie ma. Uruchamiane na starcie
// `npm run build`, razem z generowaniem sitemap.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const { PORADNIKI } = await import(path.join(root, "src/data/poradniki.js"));

const lines = PORADNIKI.map(
  (p) => `- [${p.title}](https://www.flowtex.pl/poradniki/${p.slug}): ${p.llmsSummary || p.metaDescription}`
).join("\n");

const file = path.join(root, "public", "llms.txt");
const txt = fs.readFileSync(file, "utf-8");
const re = /(<!-- PORADNIKI:START[^>]*-->\n)[\s\S]*?(<!-- PORADNIKI:END -->)/;
if (!re.test(txt)) {
  console.warn("[llms] Brak znaczników PORADNIKI w public/llms.txt — pomijam.");
  process.exit(0);
}
fs.writeFileSync(file, txt.replace(re, `$1${lines}\n$2`), "utf-8");
console.log(`[llms] Wpisano ${PORADNIKI.length} poradników do public/llms.txt`);
