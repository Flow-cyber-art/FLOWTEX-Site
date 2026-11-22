// Wspólna logika punktu rosy: używa jej strona /kalkulator-punktu-rosy
// oraz narzędzie WebMCP (src/utils/webmcp.js), więc wynik jest identyczny.
// Wzór Magnusa (a = 17,62, b = 243,12), wynik orientacyjny.

const MAGNUS_A = 17.62;
const MAGNUS_B = 243.12;

export function dewPoint(tempC, rhPercent) {
  const gamma = Math.log(rhPercent / 100) + (MAGNUS_A * tempC) / (MAGNUS_B + tempC);
  return (MAGNUS_B * gamma) / (MAGNUS_A - gamma);
}

// Wejście: liczby (NaN = brak). Wyjście: { state: "empty" | "error" | "ok", ... }.
export function assessDewPoint({ t, h, s, m, mn, mx }) {
  if ([t, h, s].some(Number.isNaN)) return { state: "empty" };
  if (h <= 0 || h > 100) return { state: "error", msg: "Wilgotność względna musi mieścić się w przedziale 1–100%." };
  if (t < -40 || t > 60 || s < -40 || s > 60) return { state: "error", msg: "Kalkulator działa w zakresie temperatur od -40 do 60°C." };
  const dp = dewPoint(t, h);
  const need = Number.isNaN(m) || m < 0 ? 3 : m;
  const gap = s - dp;
  const notes = [];
  if (!Number.isNaN(mn) && s < mn) notes.push(`Temperatura podłoża (${s.toFixed(1)}°C) jest niższa od minimum z karty technicznej (${mn}°C).`);
  if (!Number.isNaN(mx) && h > mx) notes.push(`Wilgotność względna (${h}%) przekracza maksimum z karty technicznej (${mx}%).`);
  let level = "ok";
  if (gap <= 0) level = "stop";
  else if (gap < need) level = "warn";
  if (notes.length && level === "ok") level = "warn";
  return { state: "ok", dp, gap, need, level, notes, t, h, s };
}
