// Instaluje repo-owe git hooki (katalog .githooks/) przez ustawienie
// core.hooksPath — uruchamiane automatycznie po `npm install` (patrz
// "prepare" w package.json). Bez zewnętrznych zależności (np. husky).
//
// Efekt: hook .githooks/pre-commit (patrz ten plik) automatycznie
// aktualizuje datę "updated" w src/data/defects.js przy każdym commicie
// dotykającym tego pliku — patrz scripts/update-defect-dates.js.

import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

try {
  execFileSync("git", ["config", "core.hooksPath", ".githooks"], { cwd: root });
  console.log("[install-git-hooks] core.hooksPath -> .githooks (auto-aktualizacja dat wad przy commicie aktywna)");
} catch (err) {
  // Środowisko bez gita (np. czysty deploy z archiwum) — nic się nie psuje,
  // po prostu nie ma tu czego zainstalować.
  console.warn("[install-git-hooks] Pominięto (brak repo gita w tym środowisku):", err.message);
}
