// Auto-generowanie src/data/generated-dates.json.
//
// Po co to istnieje: schema.org (Article/FAQPage) na kartach wad chce
// datePublished/dateModified — silniki AI (ChatGPT, Perplexity, Claude)
// mocno ważą świeżość treści przy wyborze źródeł do cytowania. Ręczne
// wpisywanie i pamiętanie o aktualizacji tych dat przy każdej zmianie
// treści wady jest w praktyce niewykonalne, więc daty są wyciągane
// automatycznie z historii gita danego pliku danych — commit, który
// ostatni raz zmienił plik, JEST datą ostatniej aktualizacji treści.
// Zero ręcznego utrzymania: edytujesz defects.js, commitujesz, data się
// sama aktualizuje przy najbliższym buildzie.
//
// Uruchamiane automatycznie na starcie `npm run build` (patrz package.json),
// PRZED buildem Vite — analogicznie do scripts/generate-sitemap.js.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

// Pliki danych, dla których liczymy datePublished/dateModified na
// podstawie historii gita. Dopisz kolejny wpis, jeśli inna sekcja
// treści (np. services.js) dostanie własne pole daty w schema.
const TRACKED_FILES = {
  defects: "src/data/defects.js",
};

const todayISO = new Date().toISOString();

// git log --follow zwraca commity od najnowszego do najstarszego —
// pierwsza linia to dateModified, ostatnia to datePublished. Przy
// płytkim klonie (typowe na CI/CD hostingach z depth=1) historia może
// mieć tylko jeden wpis — wtedy obie daty są takie same, co jest
// bezpieczną, gorszą-ale-poprawną degradacją zamiast błędu builda.
function datesForFile(relPath) {
  try {
    const out = execFileSync(
      "git",
      ["log", "--follow", "--format=%aI", "--", relPath],
      { cwd: root, encoding: "utf8" }
    ).trim();
    const dates = out.split("\n").filter(Boolean);
    if (dates.length === 0) return { published: todayISO, modified: todayISO };
    return { published: dates[dates.length - 1], modified: dates[0] };
  } catch {
    // Brak gita / brak historii w środowisku builda (np. archiwum bez
    // .git) — nie wywalamy builda, tylko wracamy do daty builda.
    return { published: todayISO, modified: todayISO };
  }
}

const result = Object.fromEntries(
  Object.entries(TRACKED_FILES).map(([key, relPath]) => [key, datesForFile(relPath)])
);

const outPath = path.join(root, "src/data/generated-dates.json");
fs.writeFileSync(outPath, JSON.stringify(result, null, 2) + "\n");
console.log(`[content-dates] Wygenerowano daty dla: ${Object.keys(result).join(", ")} -> src/data/generated-dates.json`);
