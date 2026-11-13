import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle2, Phone, ArrowRight } from "lucide-react";
import { COLORS } from "../theme.js";

// Strona po wysłaniu zapytania. Osobny adres pozwala mierzyć konwersję
// także jako odsłonę strony. Nie jest indeksowana ani dodawana do sitemap.
export default function Dziekujemy() {
  const { state } = useLocation();
  const leadId = state?.leadId;
  const links = [
    { to: "/realizacje", label: "Zobacz nasze realizacje" },
    { to: "/poradniki", label: "Przeczytaj poradniki o posadzkach" },
    { to: "/dobor-posadzki", label: "Sprawdź narzędzie doboru systemu" },
  ];
  return (
    <>
      <Helmet>
        <title>Dziękujemy za zapytanie | FLOWTEX Polska</title>
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.flowtex.pl/dziekujemy" />
      </Helmet>
      <section className="max-w-3xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <CheckCircle2 size={44} style={{ color: COLORS.accent }} />
        <h1 className="ft-display mt-5 mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800 }}>
          Dziękujemy za zapytanie
        </h1>
        <p className="text-base md:text-lg" style={{ color: COLORS.textOnLight }}>
          Przeanalizujemy opis obiektu i odezwiemy się z propozycją systemu i wyceną. Wycenę
          przygotowujemy po oględzinach obiektu lub analizie dokumentacji.
        </p>
        {leadId && (
          <p className="mt-4 ft-mono text-sm" style={{ color: COLORS.mutedOnLight }}>
            Numer zapytania: {leadId}
          </p>
        )}
        <p className="mt-8 text-base" style={{ color: COLORS.textOnLight }}>
          Sprawa pilna?{" "}
          <a href="tel:+48507394552" className="inline-flex items-center gap-1.5 font-semibold underline underline-offset-4">
            <Phone size={15} /> +48 507 394 552
          </a>
        </p>
        <div className="mt-10 pt-8 border-t" style={{ borderColor: COLORS.borderOnLight }}>
          <div className="ft-mono text-xs ft-tracking-wide uppercase mb-4" style={{ color: COLORS.accent }}>Do tego czasu</div>
          <ul className="space-y-3">
            {links.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="inline-flex items-center gap-2 font-semibold hover:opacity-80">
                  {l.label} <ArrowRight size={15} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
