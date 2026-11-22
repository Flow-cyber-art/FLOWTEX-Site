// Proste zabezpieczenia formularzy przed automatami (poza ukrytym polem "website"):
// - minimalny czas od otwarcia formularza do wysłania (człowiek potrzebuje więcej niż 3 s),
// - limit wysyłek na przeglądarkę: odstęp 60 s i maks. 3 na dobę.
// To zabezpieczenie po stronie przeglądarki: zatrzymuje proste boty i przypadkowe
// podwójne kliknięcia. Przed botem uderzającym wprost w API EmailJS chronią
// ustawienia konta EmailJS (dozwolone domeny, blokada API spoza przeglądarki).

const KEY = "flowtex_form_sends";
const MIN_FILL_MS = 3000;
const MIN_GAP_MS = 60 * 1000;
const DAY_MS = 24 * 60 * 60 * 1000;
const MAX_PER_DAY = 3;

function readSends() {
  try {
    const arr = JSON.parse(localStorage.getItem(KEY) || "[]");
    return Array.isArray(arr) ? arr.filter((t) => Number.isFinite(t) && Date.now() - t < DAY_MS) : [];
  } catch {
    return [];
  }
}

// openedAt: Date.now() z chwili wyświetlenia formularza.
// Zwraca { ok: true } albo { ok: false, reason: "too_fast" | "too_soon" | "daily_limit", message }.
export function checkSendAllowed(openedAt) {
  if (Date.now() - openedAt < MIN_FILL_MS) return { ok: false, reason: "too_fast", message: "" };
  const sends = readSends();
  const last = sends.length ? Math.max(...sends) : 0;
  if (Date.now() - last < MIN_GAP_MS) {
    return { ok: false, reason: "too_soon", message: "Formularz został właśnie wysłany. Odczekaj chwilę i spróbuj ponownie." };
  }
  if (sends.length >= MAX_PER_DAY) {
    return { ok: false, reason: "daily_limit", message: "Osiągnięto dzienny limit wysyłek z tej przeglądarki. Napisz na kontakt@flowtex.pl lub zadzwoń." };
  }
  return { ok: true };
}

export function markSent() {
  try {
    localStorage.setItem(KEY, JSON.stringify([...readSends(), Date.now()]));
  } catch {
    // brak dostępu do localStorage (tryb prywatny) — pomijamy limit
  }
}
