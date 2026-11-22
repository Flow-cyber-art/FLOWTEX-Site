// Narzędzia WebMCP dla agentów AI w przeglądarce (document.modelContext).
// Ładowane dynamicznie z main.jsx tylko wtedy, gdy przeglądarka obsługuje
// WebMCP — zwykli odwiedzający nie pobierają tego kodu.
//
// - dobierz_posadzke: ta sama logika co /dobor-posadzki (src/data/floor-selector.js)
// - znajdz_wade_posadzki: wyszukiwanie w katalogu wad (src/data/defects.js)
// - oblicz_punkt_rosy: kalkulator punktu rosy (src/utils/dewpoint.js, ta sama
//   logika co /kalkulator-punktu-rosy)
// - znajdz_poradnik: wyszukiwanie w opublikowanych poradnikach (zaplanowane
//   poradniki są ukryte tak samo jak na stronie)
// - protokol_odbioru_info: opis i adresy protokołu odbioru posadzki (PDF)
// Wszystkie narzędzia tylko odczytują dane (readOnlyHint) i niczego nie wysyłają.
// Formularz zapytania ofertowego jest osobnym narzędziem (atrybuty toolname
// w ContactForm.jsx).

import { QUICK_KEYS, STEPS, matchScores } from "../data/floor-selector.js";
import { DEFECTS } from "../data/defects.js";
import { PORADNIKI } from "../data/poradniki.js";
import { assessDewPoint } from "./dewpoint.js";

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

// ---------- oblicz_punkt_rosy ----------

const num = (v) => (v === undefined || v === null || v === "" ? NaN : Number(String(v).replace(",", ".")));

function obliczPunktRosy(rawArgs) {
  const a = parseArgs(rawArgs);
  const r = assessDewPoint({
    t: num(a.temperatura_powietrza),
    h: num(a.wilgotnosc_wzgledna),
    s: num(a.temperatura_podloza),
    m: num(a.wymagany_margines),
    mn: num(a.min_temperatura_podloza),
    mx: num(a.max_wilgotnosc),
  });
  if (r.state === "empty") {
    return `Podaj temperaturę powietrza (°C), wilgotność względną (%) i temperaturę podłoża (°C). Kalkulator: ${HOST}/kalkulator-punktu-rosy.`;
  }
  if (r.state === "error") return `${r.msg} Kalkulator: ${HOST}/kalkulator-punktu-rosy.`;
  const verdict = { ok: "margines zachowany", warn: "margines za mały lub niespełnione wymaganie karty", stop: "ryzyko kondensacji — nie zaczynaj aplikacji" }[r.level];
  return [
    `Punkt rosy: ${r.dp.toFixed(1)}°C (powietrze ${r.t}°C, wilgotność ${r.h}%).`,
    `Temperatura podłoża: ${r.s}°C, odstęp od punktu rosy: ${r.gap.toFixed(1)}°C (wymagany co najmniej ${r.need}°C).`,
    `Ocena: ${verdict}.`,
    ...r.notes,
    "Wynik orientacyjny: wiążące są wymagania karty technicznej systemu i pomiar kalibrowanym miernikiem na obiekcie.",
    `Kalkulator: ${HOST}/kalkulator-punktu-rosy. Poradnik: ${HOST}/poradniki/posadzka-zywiczna-zima-temperatura-punkt-rosy. ${CONTACT}`,
  ].join("\n");
}

// ---------- znajdz_poradnik ----------

const GUIDE_INDEX = PORADNIKI.map((p) => ({
  p,
  fields: [
    [new Set(words(`${p.title} ${p.category || ""}`)), 3],
    [new Set(words(`${p.metaDescription || ""} ${p.llmsSummary || ""}`)), 2],
  ],
}));

function znajdzPoradnik(rawArgs) {
  const a = parseArgs(rawArgs);
  const q = String(a.temat || "").slice(0, 300);
  const stems = expand([...new Set(words(q).map(stem))].filter((s) => !STOP.has(s)));
  const ranked = GUIDE_INDEX.map((e) => ({ p: e.p, s: stems.length ? score(e, stems) : 0 }))
    .filter((h) => h.s > 0)
    .sort((x, y) => y.s - x.s)
    .slice(0, 4);
  const fmt = (p) => `- ${p.title} — ${HOST}/poradniki/${p.slug}\n  ${p.metaDescription || p.llmsSummary || ""}`;
  if (!ranked.length) {
    return `Nie znaleziono poradnika dla tego tematu. Wszystkie poradniki (${PORADNIKI.length}):\n${PORADNIKI.map(fmt).join("\n")}\n\nLista: ${HOST}/poradniki. ${CONTACT}`;
  }
  return `Pasujące poradniki FLOWTEX Polska:\n${ranked.map((h) => fmt(h.p)).join("\n")}\n\nPełna lista: ${HOST}/poradniki. ${CONTACT}`;
}

// ---------- protokol_odbioru_info ----------

function protokolInfo() {
  return [
    "Protokół odbioru posadzki żywicznej — wzór do wypełnienia (PDF, 3 strony A4): dane obiektu i systemu, warunki aplikacji, kontrola podłoża, kontrola powierzchni (wygląd, przyczepność, grubość), dokumentacja, wynik odbioru i podpisy stron.",
    `Strona z formularzem (materiał wysyłany na e-mail): ${HOST}/protokol-odbioru-posadzki`,
    `Bezpośredni plik PDF: ${HOST}/pliki/protokol-odbioru-posadzki-zywicznej.pdf`,
    `Poradnik o odbiorze: ${HOST}/poradniki/odbior-posadzki-zywicznej-co-sprawdzic`,
    "Wzór ma charakter pomocniczy i nie zastępuje umowy ani wymagań karty technicznej systemu.",
    CONTACT,
  ].join("\n");
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
    {
      name: "oblicz_punkt_rosy",
      description:
        "Oblicza punkt rosy i margines bezpieczeństwa przed aplikacją posadzki żywicznej na podstawie temperatury powietrza, wilgotności względnej i temperatury podłoża. Zwraca ocenę: margines zachowany, za mały albo ryzyko kondensacji. Wynik orientacyjny — wiążąca jest karta techniczna systemu.",
      inputSchema: {
        type: "object",
        properties: {
          temperatura_powietrza: { type: "number", description: "Temperatura powietrza w °C (-40 do 60)." },
          wilgotnosc_wzgledna: { type: "number", description: "Wilgotność względna powietrza w % (1–100)." },
          temperatura_podloza: { type: "number", description: "Temperatura podłoża (betonu) w °C." },
          wymagany_margines: { type: "number", description: "Wymagany odstęp temperatury podłoża od punktu rosy w °C; domyślnie 3." },
          min_temperatura_podloza: { type: "number", description: "Opcjonalnie: minimalna temperatura podłoża z karty technicznej, °C." },
          max_wilgotnosc: { type: "number", description: "Opcjonalnie: maksymalna wilgotność względna z karty technicznej, %." },
        },
        required: ["temperatura_powietrza", "wilgotnosc_wzgledna", "temperatura_podloza"],
      },
      annotations: { readOnlyHint: true },
      execute: obliczPunktRosy,
    },
    {
      name: "znajdz_poradnik",
      description:
        "Wyszukuje w poradnikach FLOWTEX Polska o posadzkach żywicznych i przemysłowych (odbiór, wilgoć w betonie, przyczepność, ESD, normy, wady, zima) artykuł pasujący do tematu i zwraca tytuły z adresami i krótkim opisem.",
      inputSchema: {
        type: "object",
        properties: { temat: { type: "string", description: "Temat lub pytanie, np. „test folii wilgoć w betonie” albo „odbiór posadzki”." } },
        required: ["temat"],
      },
      annotations: { readOnlyHint: true },
      execute: znajdzPoradnik,
    },
    {
      name: "protokol_odbioru_info",
      description:
        "Zwraca opis i adresy wzoru protokołu odbioru posadzki żywicznej (PDF do wypełnienia) oraz poradnika o odbiorze. Niczego nie wysyła ani nie zapisuje; pobranie wysyłanego e-mailem pliku odbywa się przez formularz na stronie.",
      inputSchema: { type: "object", properties: {} },
      annotations: { readOnlyHint: true },
      execute: protokolInfo,
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
