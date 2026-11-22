import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle2, AlertTriangle, XCircle, ArrowRight, Thermometer } from "lucide-react";
import { COLORS } from "../theme.js";
import { getPoradnikBySlug } from "../data/poradniki.js";

// Kalkulator punktu rosy i marginesu bezpieczeństwa przed aplikacją żywicy.
// Punkt rosy liczony wzorem Magnusa (zakres ok. -45…60°C). Wynik jest
// orientacyjny: wiążące są wymagania karty technicznej systemu i pomiar
// kalibrowanym miernikiem na obiekcie.

const PAGE_URL = "https://www.flowtex.pl/kalkulator-punktu-rosy";
const TITLE = "Kalkulator punktu rosy dla posadzek żywicznych | FLOWTEX Polska";
const DESCRIPTION =
  "Oblicz punkt rosy i margines bezpieczeństwa przed aplikacją posadzki żywicznej. Podaj temperaturę powietrza, wilgotność i temperaturę podłoża, a sprawdzisz ryzyko skraplania wilgoci.";

const MAGNUS_A = 17.62;
const MAGNUS_B = 243.12;

export function dewPoint(tempC, rhPercent) {
  const gamma = Math.log(rhPercent / 100) + (MAGNUS_A * tempC) / (MAGNUS_B + tempC);
  return (MAGNUS_B * gamma) / (MAGNUS_A - gamma);
}

function parse(v) {
  if (v === "" || v == null) return NaN;
  return Number(String(v).replace(",", "."));
}

const FAQ = [
  {
    q: "Czym jest punkt rosy?",
    a: "To temperatura, w której para wodna zawarta w powietrzu zaczyna się skraplać. Jeśli podłoże lub świeża powłoka mają temperaturę zbyt bliską punktowi rosy, na powierzchni może pojawić się cienka warstwa wilgoci, co grozi gorszą przyczepnością, zmatowieniem lub lepką powierzchnią.",
  },
  {
    q: "Jaki margines od punktu rosy jest wymagany?",
    a: "Wiele systemów wymaga, aby temperatura podłoża była co najmniej o 3°C wyższa od punktu rosy. To wartość orientacyjna, a obowiązuje zapis z karty technicznej wybranego produktu, dlatego w kalkulatorze można go zmienić.",
  },
  {
    q: "Dlaczego liczy się temperatura podłoża, a nie powietrza?",
    a: "Skraplanie zachodzi na powierzchni, której temperatura jest niższa od punktu rosy. Masywny beton nagrzewa się znacznie wolniej niż powietrze w hali, więc po dogrzaniu pomieszczenia podłoże może nadal być chłodne.",
  },
  {
    q: "Czy wynik kalkulatora zastępuje pomiar na obiekcie?",
    a: "Nie. Kalkulator pomaga ocenić ryzyko na podstawie wprowadzonych danych. Przed aplikacją trzeba zmierzyć temperaturę podłoża i powietrza oraz wilgotność kalibrowanymi przyrządami i porównać wyniki z kartą techniczną systemu. Warunki kontroluje się też w trakcie i po aplikacji.",
  },
];

function Field({ id, label, unit, value, onChange, hint, placeholder }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold mb-1" style={{ color: COLORS.textOnLight }}>
        {label}
      </label>
      <div className="flex items-center gap-2">
        <input
          id={id}
          type="text"
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full px-3 py-2.5 rounded-sm border text-base"
          style={{ borderColor: COLORS.borderOnLight, backgroundColor: COLORS.white, color: COLORS.textOnLight }}
        />
        <span className="ft-mono text-sm" style={{ color: COLORS.mutedOnLight, minWidth: "2rem" }}>
          {unit}
        </span>
      </div>
      {hint && (
        <p className="mt-1 text-xs" style={{ color: COLORS.mutedOnLight }}>
          {hint}
        </p>
      )}
    </div>
  );
}

export default function DewPoint() {
  const [air, setAir] = useState("12");
  const [rh, setRh] = useState("70");
  const [substrate, setSubstrate] = useState("11");
  const [margin, setMargin] = useState("3");
  const [minSub, setMinSub] = useState("");
  const [maxRh, setMaxRh] = useState("");

  const r = useMemo(() => {
    const t = parse(air);
    const h = parse(rh);
    const s = parse(substrate);
    const m = parse(margin);
    const mn = parse(minSub);
    const mx = parse(maxRh);
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
  }, [air, rh, substrate, margin, minSub, maxRh]);

  const verdict = {
    ok: { Icon: CheckCircle2, color: "#15803D", title: "Margines bezpieczeństwa zachowany", text: "Przy podanych danych temperatura podłoża jest wystarczająco wysoko nad punktem rosy. Nadal sprawdź pozostałe wymagania karty technicznej i kontroluj warunki do końca utwardzania." },
    warn: { Icon: AlertTriangle, color: "#B45309", title: "Margines zbyt mały lub niespełnione wymaganie karty", text: "Ryzyko skraplania wilgoci lub niespełnienia warunków systemu jest podwyższone. Rozważ podniesienie temperatury podłoża, obniżenie wilgotności lub przełożenie prac." },
    stop: { Icon: XCircle, color: "#B91C1C", title: "Ryzyko kondensacji: nie zaczynaj aplikacji", text: "Podłoże ma temperaturę równą punktowi rosy lub niższą, więc na powierzchni może skraplać się woda. Aplikacja w takich warunkach grozi poważnymi wadami." },
  };

  const zima = getPoradnikBySlug("posadzka-zywiczna-zima-temperatura-punkt-rosy");
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const appLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Kalkulator punktu rosy dla posadzek żywicznych",
    url: PAGE_URL,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Web",
    inLanguage: "pl",
    description: DESCRIPTION,
    publisher: { "@type": "Organization", name: "FLOWTEX Polska", url: "https://www.flowtex.pl" },
  };

  const V = r.state === "ok" ? verdict[r.level] : null;

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
        <script type="application/ld+json">{JSON.stringify(appLd)}</script>
      </Helmet>

      <div style={{ backgroundColor: COLORS.darkBg }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 ft-mono text-xs" style={{ color: COLORS.mutedOnDarkSecondary }}>
          <Link to="/" className="hover:opacity-80" style={{ color: COLORS.mutedOnDarkSecondary }}>
            Strona główna
          </Link>{" "}
          <span className="mx-2">/</span>
          <span style={{ color: COLORS.white }}>Kalkulator punktu rosy</span>
        </div>
      </div>

      <section style={{ backgroundColor: COLORS.darkBg }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 pb-14 md:pb-16">
          <h1 className="ft-display mt-4" style={{ color: COLORS.white, fontSize: "clamp(2.1rem, 5vw, 3.2rem)", fontWeight: 800 }}>
            Kalkulator punktu rosy
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg" style={{ color: COLORS.mutedOnDark }}>
            Sprawdź, czy temperatura podłoża zapewnia bezpieczny margines od punktu rosy przed aplikacją posadzki żywicznej.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: COLORS.lightBg }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-12 md:py-16 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="ft-display text-xl mb-5" style={{ fontWeight: 700, color: COLORS.textOnLight }}>
              Dane z pomiaru
            </h2>
            <div className="space-y-5">
              <Field id="dp-air" label="Temperatura powietrza" unit="°C" value={air} onChange={setAir} placeholder="np. 12" />
              <Field id="dp-rh" label="Wilgotność względna powietrza" unit="%" value={rh} onChange={setRh} placeholder="np. 70" />
              <Field id="dp-sub" label="Temperatura podłoża" unit="°C" value={substrate} onChange={setSubstrate} placeholder="np. 11" hint="Zmierz na betonie, nie w powietrzu." />
              <Field id="dp-margin" label="Wymagany margines nad punktem rosy" unit="°C" value={margin} onChange={setMargin} hint="Domyślnie 3°C. Potwierdź w karcie technicznej systemu." />
            </div>
            <details className="mt-6">
              <summary className="cursor-pointer text-sm font-semibold" style={{ color: COLORS.textOnLight }}>
                Opcjonalnie: wymagania z karty technicznej
              </summary>
              <div className="space-y-5 mt-4">
                <Field id="dp-min" label="Minimalna temperatura podłoża" unit="°C" value={minSub} onChange={setMinSub} placeholder="np. 10" />
                <Field id="dp-max" label="Maksymalna wilgotność względna" unit="%" value={maxRh} onChange={setMaxRh} placeholder="np. 80" />
              </div>
            </details>
          </div>

          <div>
            <h2 className="ft-display text-xl mb-5" style={{ fontWeight: 700, color: COLORS.textOnLight }}>
              Wynik
            </h2>
            <div className="p-6 rounded-sm border" style={{ borderColor: COLORS.borderOnLight, backgroundColor: COLORS.white }} aria-live="polite">
              {r.state === "empty" && <p style={{ color: COLORS.mutedOnLight }}>Wpisz temperaturę powietrza, wilgotność i temperaturę podłoża.</p>}
              {r.state === "error" && <p style={{ color: "#B91C1C" }}>{r.msg}</p>}
              {r.state === "ok" && (
                <>
                  <div className="flex items-center gap-3">
                    <Thermometer size={22} style={{ color: COLORS.accent }} />
                    <div>
                      <div className="ft-mono text-xs uppercase" style={{ color: COLORS.mutedOnLight }}>
                        Punkt rosy
                      </div>
                      <div className="ft-display" style={{ fontSize: "2rem", fontWeight: 800, color: COLORS.textOnLight }}>
                        {r.dp.toFixed(1)}°C
                      </div>
                    </div>
                  </div>
                  <dl className="mt-4 grid grid-cols-2 gap-3 text-sm" style={{ color: COLORS.textOnLight }}>
                    <div>
                      <dt style={{ color: COLORS.mutedOnLight }}>Podłoże minus punkt rosy</dt>
                      <dd className="font-semibold">{r.gap.toFixed(1)}°C</dd>
                    </div>
                    <div>
                      <dt style={{ color: COLORS.mutedOnLight }}>Wymagany margines</dt>
                      <dd className="font-semibold">{r.need}°C</dd>
                    </div>
                  </dl>
                  <div className="mt-5 p-4 rounded-sm" style={{ backgroundColor: COLORS.lightBg, borderLeft: `4px solid ${V.color}` }}>
                    <div className="flex items-center gap-2 font-semibold" style={{ color: V.color }}>
                      <V.Icon size={18} /> {V.title}
                    </div>
                    <p className="mt-2 text-sm" style={{ color: COLORS.textOnLight }}>
                      {V.text}
                    </p>
                    {r.notes.length > 0 && (
                      <ul className="mt-2 text-sm list-disc pl-5" style={{ color: COLORS.textOnLight }}>
                        {r.notes.map((n) => (
                          <li key={n}>{n}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </>
              )}
            </div>
            <p className="mt-4 text-xs" style={{ color: COLORS.mutedOnLight }}>
              Wynik jest orientacyjny. Wiążące są wymagania karty technicznej systemu oraz pomiar kalibrowanymi przyrządami na obiekcie, wykonywany przed aplikacją, w jej trakcie i po niej.
            </p>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: COLORS.white }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-12 md:py-16">
          <h2 className="ft-display text-2xl mb-6" style={{ fontWeight: 700, color: COLORS.textOnLight }}>
            Najczęstsze pytania
          </h2>
          <div className="space-y-6">
            {FAQ.map((f) => (
              <div key={f.q}>
                <h3 className="font-semibold text-lg" style={{ color: COLORS.textOnLight }}>
                  {f.q}
                </h3>
                <p className="mt-1" style={{ color: COLORS.textOnLight }}>
                  {f.a}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-8 border-t space-y-3" style={{ borderColor: COLORS.borderOnLight }}>
            {zima && (
              <Link to={`/poradniki/${zima.slug}`} className="inline-flex items-center gap-2 font-semibold hover:opacity-80">
                Poradnik: układanie posadzki żywicznej zimą <ArrowRight size={15} />
              </Link>
            )}
            <div>
              <Link to="/katalog-wad/lepka-powierzchnia" className="inline-flex items-center gap-2 font-semibold hover:opacity-80">
                Katalog wad: lepka lub niedoutwardzona powierzchnia <ArrowRight size={15} />
              </Link>
            </div>
            <div>
              <Link to="/kontakt" className="inline-flex items-center gap-2 font-semibold hover:opacity-80">
                Zapytaj o wycenę i wizję lokalną <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
