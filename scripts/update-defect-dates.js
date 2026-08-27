// Automatyczna aktualizacja pola `updated` w src/data/defects.js.
//
// Po co to istnieje: schema.org (Article) i widoczny na stronie napis
// "Zaktualizowano: [data]" przy każdej karcie wady opierają się na polu
// `updated` w defects.js. Ręczne pilnowanie tej daty przy każdej zmianie
// treści (nowa przyczyna, poprawiony opis, dodane pytanie do FAQ) jest
// w praktyce niewykonalne — ktoś prędzej czy później o tym zapomni.
//
// Ten skrypt uruchamia się automatycznie jako git hook pre-commit
// (patrz scripts/install-git-hooks.js + .githooks/pre-commit,
// instalowane przez `npm install` via "prepare"): przed każdym commitem
// sprawdza, które wpisy w DEFECTS mają zmienione linie w commitowanym
// diffie (poza samym polem `updated`), i dla nich samodzielnie wstawia
// dzisiejszą datę — po czym dopisuje tę zmianę do tego samego commita.
//
// Można też uruchomić ręcznie: `node scripts/update-defect-dates.js`
// (bez --staged) sprawdza zmiany w working tree względem HEAD zamiast
// indeksu — przydatne do podglądu przed `git add`.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const TARGET = "src/data/defects.js";
const targetAbs = path.join(root, TARGET);

const staged = process.argv.includes("--staged");

function todayLocalISODate() {
  const d = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

// Zwraca listę numerów linii (1-indexed, w wersji PO zmianie), które
// faktycznie się zmieniły w danym pliku — tylko dodane/zmodyfikowane
// linie po stronie "new", bez kontekstu.
function changedLineNumbers() {
  const diffArgs = staged
    ? ["diff", "--cached", "-U0", "--", TARGET]
    : ["diff", "-U0", "--", TARGET];
  let diff;
  try {
    diff = execFileSync("git", diffArgs, { cwd: root, encoding: "utf8" });
  } catch {
    return [];
  }
  const lines = new Set();
  const hunkRe = /^@@ -\d+(?:,\d+)? \+(\d+)(?:,(\d+))? @@/;
  for (const line of diff.split("\n")) {
    const m = hunkRe.exec(line);
    if (!m) continue;
    const start = parseInt(m[1], 10);
    const count = m[2] === undefined ? 1 : parseInt(m[2], 10);
    for (let i = 0; i < count; i++) lines.add(start + i);
  }
  return lines;
}

function main() {
  if (!fs.existsSync(targetAbs)) return;
  const changed = changedLineNumbers();
  if (changed.size === 0) return; // brak zmian w defects.js — nic do zrobienia

  const source = fs.readFileSync(targetAbs, "utf8");
  const lines = source.split("\n");

  // Granice bloków: każdy wpis DEFECTS zaczyna się od linii `id: "...",`.
  // Blok i-tej wady obejmuje linie [idLineIndex[i], idLineIndex[i+1] - 1]
  // (0-indexed), ostatni blok sięga do końca pliku.
  const idLineIdx = []; // indeksy 0-based linii z `id: "..."`
  const idValues = [];
  const idLineRe = /^\s*id:\s*"([^"]+)"/;
  lines.forEach((line, idx) => {
    const m = idLineRe.exec(line);
    if (m) {
      idLineIdx.push(idx);
      idValues.push(m[1]);
    }
  });
  if (idLineIdx.length === 0) return;

  const updatedLineRe = /^(\s*)updated:\s*"[^"]*",?\s*$/;

  let touched = 0;
  const today = todayLocalISODate();

  for (let i = 0; i < idLineIdx.length; i++) {
    const blockStart = idLineIdx[i]; // 0-based
    const blockEnd = (i + 1 < idLineIdx.length ? idLineIdx[i + 1] : lines.length) - 1; // 0-based inclusive
    // Zakres w numeracji 1-based (git diff jest 1-based).
    const start1 = blockStart + 1;
    const end1 = blockEnd + 1;

    let relevantChange = false;
    for (const lineNo of changed) {
      if (lineNo < start1 || lineNo > end1) continue;
      // Zmiana WYŁĄCZNIE linii `updated:` nie liczy się jako powód do
      // ponownego stemplowania — inaczej skrypt sam siebie by zapętlał
      // przy kolejnych uruchomieniach na tym samym, już oznaczonym wpisie.
      const idx0 = lineNo - 1;
      if (idx0 >= 0 && idx0 < lines.length && updatedLineRe.test(lines[idx0])) continue;
      relevantChange = true;
      break;
    }
    if (!relevantChange) continue;

    // Szukamy istniejącej linii `updated:` w obrębie bloku.
    let updatedIdx = -1;
    for (let l = blockStart; l <= blockEnd; l++) {
      if (updatedLineRe.test(lines[l])) {
        updatedIdx = l;
        break;
      }
    }

    if (updatedIdx !== -1) {
      const indent = updatedLineRe.exec(lines[updatedIdx])[1];
      const newLine = `${indent}updated: "${today}",`;
      if (lines[updatedIdx] !== newLine) {
        lines[updatedIdx] = newLine;
        touched++;
      }
    } else {
      // Wpis bez pola `updated` — wstawiamy je zaraz po linii `id:`,
      // z tym samym wcięciem co reszta pól bloku.
      const idLine = lines[blockStart];
      const indentMatch = /^(\s*)/.exec(idLine);
      const indent = indentMatch ? indentMatch[1] : "    ";
      lines.splice(blockStart + 1, 0, `${indent}updated: "${today}",`);
      // Przesuwamy indeksy kolejnych bloków o 1 w dół.
      for (let j = i + 1; j < idLineIdx.length; j++) idLineIdx[j] += 1;
      touched++;
    }
  }

  if (touched === 0) return;

  fs.writeFileSync(targetAbs, lines.join("\n"));
  if (staged) {
    execFileSync("git", ["add", TARGET], { cwd: root });
  }
  console.log(
    `[update-defect-dates] Zaktualizowano pole "updated" (${today}) w ${touched} ` +
      `wpis${touched === 1 ? "ie" : "ach"} src/data/defects.js.`
  );
}

main();
