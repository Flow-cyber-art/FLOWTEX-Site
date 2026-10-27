// Wypisuje "yes", jeśli któryś poradnik ma dziś (UTC) datę publikacji
// (publishAt), a w przeciwnym razie "no". Używane przez
// .github/workflows/publish-scheduled.yml do decyzji, czy uruchomić deploy.
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const today = process.env.BUILD_DATE || new Date().toISOString().slice(0, 10);

// Ładujemy surowe dane z pominięciem filtra: PORADNIKI zawiera tylko już
// opublikowane, więc do porównania wystarczy plik źródłowy.
const src = (await import("node:fs")).readFileSync(path.join(root, "src/data/poradniki.js"), "utf-8");
const due = [...src.matchAll(/publishAt:\s*"(\d{4}-\d{2}-\d{2})"/g)].some((m) => m[1] === today);
console.log(due ? "yes" : "no");
