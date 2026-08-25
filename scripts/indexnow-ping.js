// Ping IndexNow po każdym buildzie.
//
// Dlaczego to istnieje: Google odkrywa nowe/zmienione strony przez crawling
// i Search Console (osobno, powoli). IndexNow to protokół wspierany przez
// Bing i Yandex (Google go NIE obsługuje), który pozwala aktywnie zgłosić
// zmienione URL-e zamiast czekać, aż bot sam je odwiedzi. Jednorazowe
// wywołanie HTTP, zero kosztu, uruchamiane automatycznie po `npm run build`.
//
// Klucz weryfikacyjny musi być dostępny publicznie pod:
// https://www.flowtex.pl/{INDEXNOW_KEY}.txt (plik w public/, patrz niżej).
// Jeśli kiedyś zmienisz klucz, zaktualizuj też ten plik w public/.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const HOST = "www.flowtex.pl";
const INDEXNOW_KEY = "090214859c067fcecad4d6ded6225093";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

function getUrlsFromSitemap() {
  const sitemapPath = path.join(root, "public", "sitemap.xml");
  if (!fs.existsSync(sitemapPath)) {
    console.warn("[indexnow] Brak public/sitemap.xml — pomijam ping.");
    return [];
  }
  const xml = fs.readFileSync(sitemapPath, "utf-8");
  const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)];
  return matches.map((m) => m[1].trim()).filter(Boolean);
}

async function pingIndexNow() {
  const urlList = getUrlsFromSitemap();
  if (urlList.length === 0) {
    console.warn("[indexnow] Brak URL-i do zgłoszenia.");
    return;
  }

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });
    // IndexNow zwraca 200/202 przy sukcesie — nie rzucamy błędem przy innych
    // kodach, żeby nigdy nie wywalić builda z powodu zewnętrznego API.
    console.log(`[indexnow] Zgłoszono ${urlList.length} URL-i — status ${res.status}`);
  } catch (err) {
    console.warn("[indexnow] Ping nieudany (build kontynuowany):", err.message);
  }
}

pingIndexNow();
