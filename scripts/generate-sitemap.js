// Auto-generowanie public/sitemap.xml.
//
// Dlaczego to istnieje: sitemap.xml była wcześniej utrzymywana ręcznie i
// przez to wypadła z niej cała podstrona usługi (/fitout) — nikt tego nie
// zauważył, bo nic nie wymuszało spójności z rzeczywistą listą usług.
// Ten skrypt czyta te same dane co scripts/prerender.js (SERVICES, DEFECTS)
// — jedno źródło prawdy — więc nowa usługa albo nowa wada w katalogu
// automatycznie trafia też do sitemap, bez ręcznego dopisywania.
//
// Uruchamiane automatycznie na starcie `npm run build` (patrz package.json),
// PRZED buildem Vite, bo nie zależy od niczego poza plikami w src/data.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const { SERVICES } = await import(path.join(root, "src/data/services.js"));
const { DEFECTS } = await import(path.join(root, "src/data/defects.js"));
const { REALIZACJE } = await import(path.join(root, "src/data/realizacje.js"));

const HOST = "https://www.flowtex.pl";
const today = new Date().toISOString().slice(0, 10);

// "Sierpień 2026" -> "2026-08-01". Realizacje mają w danych prawdziwą datę
// publikacji, więc dla nich lastmod nie musi (i nie powinien) być zawsze
// dniem builda — Google jawnie zaznacza, że niewiarygodny/zawsze-dzisiejszy
// lastmod z czasem bywa po prostu ignorowany.
const MONTHS_PL = {
  styczeń: "01", luty: "02", marzec: "03", kwiecień: "04", maj: "05", czerwiec: "06",
  lipiec: "07", sierpień: "08", wrzesień: "09", październik: "10", listopad: "11", grudzień: "12",
};
function toISODate(dateStr) {
  const [monthName, year] = dateStr.toLowerCase().split(" ");
  const month = MONTHS_PL[monthName];
  return month ? `${year}-${month}-01` : today;
}

// Priorytet inny niż domyślny 0.8 — tylko dla stron o podwyższonym
// znaczeniu biznesowym/SEO. Wszystko inne dostaje 0.8.
const PRIORITY_OVERRIDES = {
  "/": 1.0,
  "/posadzki-zywiczne": 0.9,
  "/dobor-posadzki": 0.9,
  "/katalog-wad": 0.9,
};

// Statyczne trasy publiczne (bez polityk — te mają noindex, patrz
// PrivacyPolicy.jsx / CookiePolicy.jsx, więc świadomie nie trafiają do
// sitemap: nie ma sensu prosić Google o indeksację strony, którą i tak
// sam odrzuci).
const staticRoutes = [
  { path: "/", changefreq: "monthly" },
  { path: "/realizacje", changefreq: "weekly" },
  { path: "/katalog-wad", changefreq: "monthly" },
  { path: "/dobor-posadzki", changefreq: "monthly" },
];

const serviceRoutes = SERVICES.map((s) => ({
  path: `/${s.slug}`,
  changefreq: "monthly",
}));

const defectRoutes = DEFECTS.map((d) => ({
  path: `/katalog-wad/${d.id}`,
  changefreq: "monthly",
  priority: 0.7,
}));

const realizacjaRoutes = REALIZACJE.map((r) => ({
  path: `/realizacje/${r.slug}`,
  changefreq: "monthly",
  priority: 0.7,
  lastmod: toISODate(r.date),
}));

const routes = [...staticRoutes, ...serviceRoutes, ...defectRoutes, ...realizacjaRoutes];

const body = routes
  .map((r) => {
    const priority = r.priority ?? PRIORITY_OVERRIDES[r.path] ?? 0.8;
    return `  <url>
    <loc>${HOST}${r.path}</loc>
    <lastmod>${r.lastmod ?? today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`;
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

const outPath = path.join(root, "public", "sitemap.xml");
fs.writeFileSync(outPath, xml, "utf-8");
console.log(`[sitemap] Wygenerowano ${routes.length} URL-i -> public/sitemap.xml`);
