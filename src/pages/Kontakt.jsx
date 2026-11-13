import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { COLORS } from "../theme.js";
import { ContactForm } from "../components/ContactForm.jsx";

const URL = "https://www.flowtex.pl/kontakt";
const DESCRIPTION =
  "Zamów wizję lokalną i wycenę posadzki przemysłowej. Tel. 507 394 552, kontakt@flowtex.pl. Opisz obiekt w formularzu, a wrócimy z propozycją systemu i wyceną.";

export default function Kontakt() {
  const [searchParams] = useSearchParams();
  const context = searchParams.get("kontakt") || "Strona Kontakt";
  return (
    <>
      <Helmet>
        <title>Kontakt i wycena posadzki przemysłowej | FLOWTEX Polska</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={URL} />
        <meta property="og:title" content="Kontakt i wycena posadzki przemysłowej | FLOWTEX Polska" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={URL} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Kontakt — FLOWTEX Polska",
            url: URL,
            about: { "@type": "LocalBusiness", name: "FLOWTEX Polska", telephone: "+48507394552", email: "kontakt@flowtex.pl" },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://www.flowtex.pl/" },
              { "@type": "ListItem", position: 2, name: "Kontakt", item: URL },
            ],
          })}
        </script>
      </Helmet>

      <div style={{ backgroundColor: COLORS.darkBg }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 ft-mono text-xs" style={{ color: COLORS.mutedOnDarkSecondary }}>
          <Link to="/" className="hover:opacity-80" style={{ color: COLORS.mutedOnDarkSecondary }}>Strona główna</Link>{" "}
          <span className="mx-2">/</span>
          <span style={{ color: COLORS.white }}>Kontakt</span>
        </div>
      </div>

      <section style={{ backgroundColor: COLORS.darkBg }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 pb-14 md:pb-16">
          <h1 className="ft-display mt-4" style={{ color: COLORS.white, fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 800 }}>
            Kontakt i wycena posadzki
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg" style={{ color: COLORS.mutedOnDark }}>
            Opisz obiekt w kilku pytaniach — przeanalizujemy go i wrócimy z propozycją systemu i wyceną.
            Wycenę przygotowujemy po oględzinach obiektu lub analizie dokumentacji.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-5 gap-10 md:gap-14 items-start">
        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="ft-display text-2xl mb-4" style={{ fontWeight: 700 }}>Wolisz porozmawiać?</h2>
            <ul className="space-y-3 text-base" style={{ color: COLORS.textOnLight }}>
              <li>
                <a href="tel:+48507394552" className="inline-flex items-center gap-3 font-semibold hover:opacity-80">
                  <Phone size={18} style={{ color: COLORS.accent }} /> +48 507 394 552
                </a>
              </li>
              <li>
                <a href="mailto:kontakt@flowtex.pl" className="inline-flex items-center gap-3 hover:opacity-80">
                  <Mail size={18} style={{ color: COLORS.accent }} /> kontakt@flowtex.pl
                </a>
              </li>
              <li className="inline-flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0" style={{ color: COLORS.accent }} />
                <span>FLOWTEX Polska Paweł Najduk<br />Ciółkowo Małe 32, 07-215 Ciółkowo Małe<br />NIP: 7621744781</span>
              </li>
              <li className="inline-flex items-start gap-3">
                <Clock size={18} className="mt-1 shrink-0" style={{ color: COLORS.accent }} />
                <span>Pon.–pt. 8:00–16:00<br />Sob. 8:00–14:00</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="ft-display text-2xl mb-3" style={{ fontWeight: 700 }}>Co przygotować do wyceny</h2>
            <ul className="list-disc pl-5 space-y-2 text-base" style={{ color: COLORS.textOnLight }}>
              <li>rodzaj obiektu i orientacyjną powierzchnię,</li>
              <li>lokalizację i planowany termin prac,</li>
              <li>obciążenia (wózki, maszyny), kontakt z wodą i chemią,</li>
              <li>opis problemów z obecną posadzką, jeśli to renowacja.</li>
            </ul>
            <p className="mt-4 text-sm" style={{ color: COLORS.mutedOnLight }}>
              Nie masz wszystkich danych? Wyślij, co masz — resztę ustalimy przy oględzinach.
            </p>
          </div>
        </div>
        <div className="md:col-span-3" style={{ backgroundColor: COLORS.darkBg, padding: "clamp(16px, 3vw, 28px)" }}>
          <ContactForm prefillContext={context} formId="formularz_kontakt" defaultType="Nowa posadzka" />
        </div>
      </section>
    </>
  );
}
