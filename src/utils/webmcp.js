// Narzędzia WebMCP dla agentów AI w przeglądarce (document.modelContext).
// Ładowane dynamicznie z main.jsx tylko wtedy, gdy przeglądarka obsługuje
// WebMCP — zwykli odwiedzający nie pobierają tego kodu.
//
// - dobierz_posadzke: ta sama logika co /dobor-posadzki (src/data/floor-selector.js)
// - znajdz_wade_posadzki: wyszukiwanie w katalogu wad (src/data/defects.js)
// Oba narzędzia tylko odczytują dane (readOnlyHint) i niczego nie wysyłają.
// Formularz zapytania ofertowego jest osobnym narzędziem (atrybuty toolname
// w ContactForm.jsx).

import { QUICK_KEYS, STEPS, matchScores } from "../data/floor-selector.js";
import { DEFECTS } from "../data/defects.js";

const HOST = "https://www.flowtex.pl";
const CONTACT = `Wycena i konsultacja: ${HOST}/kontakt, tel. +48 507 394 552, kontakt@flowtex.pl.`;

// Agent może przekazać argumenty jako obiekt albo tekst JSON.
const parseArgs = (args) => {
  if (typeof args === "string") {
    try {
      return JSON.parse(args) || {};
    } catch {
      return {};
    }
  }
  return args || {};
};

// ---------- dobierz_posadzke ----------

const selectorSchema = {
  type: "object",
  properties: Object.fromEntries(
    STEPS.map((s) => [
      s.key,
      {
        type: "string",
        enum: s.options.map(([value]) => value),
        description: `${s.title} ${s.description} Opcje: ${s.options
          .map(([value, label, desc]) => `${value} = ${label} (${desc})`)
          .join("; ")}.`,
      },
    ])
  ),
};

function dobierzPosadzke(rawArgs) {
  const args = parseArgs(rawArgs);
  const answers = {};
  const ignored = [];
  for (const s of STEPS) {
    const v = args[s.key];
    if (v === undefined || v === null || v === "") continue;
    if (s.options.some(([value]) => value === v)) answers[s.key] = v;
    else ignored.push(`${s.key}=${v}`);
  }
  if (!Object.keys(answers).length) {
    return `Nie podano żadnych warunków pracy posadzki. Podaj przynajmniej podstawowe parametry: ${QUICK_KEYS.join(", ")} (dozwolone wartości są w opisie parametrów narzędzia).`;
  }

  const label = (key, value) => {
    const step = STEPS.find((s) => s.key === key);
    const opt = step?.options.find(([v]) => v === value);
    return `${step?.title || key} → ${opt ? opt[1] : value}`;
  };
  const missing = QUICK_KEYS.filter((k) => !answers[k]);
  const ranking = matchScores(answers);

  return [
    "Wynik doboru systemu posadzki (narzędzie FLOWTEX Polska, logika jak na stronie /dobor-posadzki):",
    ...ranking.map((r, i) => `${i + 1}. ${r.name} — dopasowanie ${r.score}% (${r.label}). ${r.note}`),
    "",
    "Uwzględnione warunki:",
    ...Object.entries(answers).map(([k, v]) => `- ${label(k, v)}`),
    missing.length ? `\nNie podano podstawowych parametrów: ${missing.join(", ")} — wynik jest mniej pewny.` : "",
    ignored.length ? `Pominięto nieprawidłowe wartości: ${ignored.join(", ")}.` : "",
    "",
    "Wynik jest koncepcyjny: wymaga potwierdzenia kartą techniczną systemu i oceną podłoża na miejscu.",
    `Narzędzie interaktywne: ${HOST}/dobor-posadzki. ${CONTACT}`,
  ]
    .filter((l) => l !== "")
    .join("\n");
}

// ---------- znajdz_wade_posadzki ----------

const normalize = (s) =>
  String(s)
    .toLowerCase()
    .replace(/ł/g, "l")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");

// Prosty „rdzeń” słowa, żeby polska odmiana się zgadzała (rysa/rysy, żywica/żywicy).
const stem = (w) => (w.length <= 5 ? w.slice(0, 3) : w.slice(0, 5));
const STOP = new Set(["posad", "jest", "sie", "mam", "nasz", "hali", "hala", "jak", "nie", "czy", "przy", "tylk", "bard", "duzo", "nasze", "naszej"].map(stem));
const words = (s) => normalize(s).split(/[^a-z0-9]+/).filter((w) => w.length >= 3);

// Potoczne określenia, których nie ma w kartach wad. Klucz = rdzeń słowa
// z funkcji stem() (np. „odchodzi” → „odcho”), wartość = słowa z katalogu.
const SYNONYMS = {
  odcho: "odspojenie", odpad: "odspojenie", luszc: "odspojenie", odkle: "odspojenie", odpry: "odspojenie",
  kur: "pylenie", pyl: "pylenie", kaluz: "zastoiny", sto: "zastoiny",
  slizg: "sliska", bal: "pecherze", bab: "pecherze",
  szpar: "dylatacje", szcze: "dylatacje", dziur: "ubytki", wykru: "ubytki", pla: "przebarwienia",
};
const expand = (stems) => [...new Set(stems.flatMap((st) => (SYNONYMS[st] ? [st, ...words(SYNONYMS[st]).map(stem)] : [st])))];

const INDEX = DEFECTS.map((d) => {
  const weighted = [
    [`${d.title} ${d.tag}`, 3],
    [d.intro, 2],
    [`${d.explanation} ${(d.causes || []).join(" ")}`, 1],
  ];
  return { d, fields: weighted.map(([text, w]) => [new Set(words(text)), w]) };
});

function score(entry, queryStems) {
  let total = 0;
  for (const st of queryStems) {
    for (const [set, w] of entry.fields) {
      for (const word of set) {
        if (word.startsWith(st)) {
          total += w;
          break;
        }
      }
    }
  }
  return total;
}

const defectCard = (d) =>
  [
    `## ${d.title} — ${HOST}/katalog-wad/${d.id}`,
    d.intro,
    d.explanation,
    d.causes?.length ? `Możliwe przyczyny:\n${d.causes.map((c) => `- ${c}`).join("\n")}` : "",
    d.solutions?.length ? `Kierunek naprawy:\n${d.solutions.map((c) => `- ${c}`).join("\n")}` : "",
  ]
    .filter(Boolean)
    .join("\n");

function znajdzWade(rawArgs) {
  const args = parseArgs(rawArgs);
  if (args.id) {
    const d = DEFECTS.find((x) => x.id === args.id);
    if (d) return `${defectCard(d)}\n\nOstateczna diagnoza wymaga oględzin obiektu. ${CONTACT}`;
  }
  const opis = String(args.opis || "").slice(0, 500);
  const queryStems = expand([...new Set(words(opis).map(stem))].filter((s) => !STOP.has(s)));
  const ranked = INDEX.map((e) => ({ d: e.d, s: score(e, queryStems) }))
    .filter((h) => h.s > 0)
    .sort((a, b) => b.s - a.s);
  // Pokazujemy najwyżej 3 wyniki i tylko te, które pasują choć w połowie tak dobrze jak najlepszy.
  const hits = ranked.filter((h) => h.s >= ranked[0]?.s * 0.5).slice(0, 3);

  const list = DEFECTS.map((d) => `- ${d.id}: ${d.title}`).join("\n");
  if (!hits.length) {
    return `Nie znaleziono wady pasującej do opisu. Wady w katalogu FLOWTEX (wywołaj ponownie z parametrem id, aby dostać pełną kartę):\n${list}\n\nKatalog: ${HOST}/katalog-wad. ${CONTACT}`;
  }
  return [
    `Najbardziej pasujące wady z katalogu FLOWTEX Polska (${hits.length}):`,
    ...hits.map((h) => defectCard(h.d)),
    `Treści mają charakter poglądowy — ostateczna diagnoza wymaga oględzin obiektu. ${CONTACT}`,
  ].join("\n\n");
}

// ---------- rejestracja ----------

export function registerWebMcpTools() {
  const mc = document.modelContext;
  if (!mc?.registerTool) return;
  const tools = [
    {
      name: "dobierz_posadzke",
      description:
        "Wstępny dobór systemu posadzki przemysłowej (PU-cement, epoksyd posypkowy, system poliasparaginowy) na podstawie warunków pracy: środowisko, woda i mycie, obciążenia, chemia, temperatura, podłoże, czas przestoju i wymagania specjalne (ESD, higiena, UV). Zwraca ranking z procentem dopasowania. Wystarczą parametry podstawowe: environment, moisture, traffic, chemistry, thermal, substrate, downtime; pozostałe doprecyzowują wynik.",
      inputSchema: selectorSchema,
      annotations: { readOnlyHint: true },
      execute: dobierzPosadzke,
    },
    {
      name: "znajdz_wade_posadzki",
      description:
        "Wyszukuje w katalogu wad posadzek FLOWTEX Polska problem pasujący do opisu objawów (np. pęknięcia, pylenie, pęcherze, odspojenie żywicy, zastoiny wody, śliska powierzchnia) i zwraca opis wady, możliwe przyczyny i kierunek naprawy. Podaj opis objawów albo id wady z katalogu.",
      inputSchema: {
        type: "object",
        properties: {
          opis: { type: "string", description: "Opis objawów na posadzce własnymi słowami, np. „żywica odchodzi płatami przy bramie”." },
          id: {
            type: "string",
            enum: DEFECTS.map((d) => d.id),
            description: `Id wady, jeśli jest znane: ${DEFECTS.map((d) => `${d.id} = ${d.title}`).join("; ")}.`,
          },
        },
      },
      annotations: { readOnlyHint: true },
      execute: znajdzWade,
    },
  ];
  for (const t of tools) {
    try {
      mc.registerTool(t);
    } catch (err) {
      // Np. narzędzie już zarejestrowane — WebMCP jest eksperymentalne, nie psujemy strony.
      console.warn("[webmcp]", t.name, err?.message);
    }
  }
}
