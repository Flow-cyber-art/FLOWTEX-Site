import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { COLORS } from "../theme.js";
import ContactSection from "../components/ContactSection.jsx";
import pawelPhoto from "../assets/team/pawel-najduk.webp";
import certIcon1 from "../assets/certyfikaty/cert-1.webp";
import certIcon2 from "../assets/certyfikaty/cert-2.webp";

const URL = "https://www.flowtex.pl/o-firmie";
const TITLE = "O firmie — wykonawca posadzek przemysłowych | FLOWTEX Polska";
const DESCRIPTION =
  "FLOWTEX Polska: nowa marka zespołu z 20-letnim doświadczeniem w posadzkach przemysłowych. Autoryzowany wykonawca Flowcrete i Sika. Poznaj zespół i sposób pracy.";

const STATS = [
  { value: "2,4 mln m²", label: "wykonanych posadzek" },
  { value: "20 lat", label: "doświadczenia zespołu" },
  { value: "180+", label: "obsłużonych zakładów" },
  { value: "7 krajów", label: "zasięgu realizacji" },
];

const STEPS = [
  { title: "Oględziny lub analiza dokumentacji", text: "Zaczynamy od poznania obiektu: warunków pracy posadzki, obciążeń, chemii procesowej i wymagań higienicznych." },
  { title: "Dobór systemu", text: "System dobieramy indywidualnie do obciążeń, chemii i wymagań obiektu, a parametry weryfikujemy w karcie technicznej producenta." },
  { title: "Indywidualna wycena", text: "Wycena uwzględnia metraż, wymagany system posadzkowy i harmonogram prac." },
  { title: "Opis technologii przed budową", text: "Przed wejściem na budowę przygotowujemy opis technologii: system, przygotowanie podłoża, warstwy, zużycie materiałów i detale." },
  { title: "Wykonanie i kontrola", text: "Po wykonaniu posadzek ESD i ATEX kontrolujemy parametry elektryczne. Prace w działającym zakładzie planujemy etapami." },
];

export default function OFirmie() {
  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={URL} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={URL} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "O firmie FLOWTEX Polska",
            url: URL,
            about: { "@id": "https://www.flowtex.pl/#organization" },
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://www.flowtex.pl/" },
              { "@type": "ListItem", position: 2, name: "O firmie", item: URL },
            ],
          })}
        </script>
      </Helmet>

      <div style={{ backgroundColor: COLORS.darkBg }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 ft-mono text-xs" style={{ color: COLORS.mutedOnDarkSecondary }}>
          <Link to="/" className="hover:opacity-80" style={{ color: COLORS.mutedOnDarkSecondary }}>Strona główna</Link>{" "}
          <span className="mx-2">/</span>
          <span style={{ color: COLORS.white }}>O firmie</span>
        </div>
      </div>

      <section style={{ backgroundColor: COLORS.darkBg }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 pb-14 md:pb-16">
          <h1 className="ft-display mt-4" style={{ color: COLORS.white, fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 800 }}>
            O firmie FLOWTEX Polska
          </h1>
          <p className="mt-4 max-w-3xl text-base md:text-lg" style={{ color: COLORS.mutedOnDark }}>
            FLOWTEX Polska projektuje i wykonuje posadzki żywiczne i przemysłowe dla zakładów
            produkcyjnych, spożywczych i farmaceutycznych w całej Polsce. To nowa marka zespołu
            z ponad 20-letnim doświadczeniem w branży.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2 className="ft-display text-2xl md:text-3xl" style={{ fontWeight: 700 }}>Kim jesteśmy</h2>
          </div>
          <div className="md:col-span-8 space-y-4 text-base md:text-lg" style={{ color: COLORS.textOnLight }}>
            <p>
              Jesteśmy firmą wykonawczą: dobieramy system posadzkowy do warunków pracy zakładu,
              wykonujemy go i, tam gdzie to potrzebne, kontrolujemy parametry po zakończeniu prac.
              Pracujemy bezpośrednio dla inwestorów oraz jako podwykonawca generalnych wykonawców.
            </p>
            <p>
              FLOWTEX Polska jest wykonawcą, a nie producentem materiałów. Nie należy jej mylić
              z produktem posadzkowym Flowtex FR marki Flowcrete. Jesteśmy autoryzowanym wykonawcą
              systemów Flowcrete i Sika.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-b" style={{ borderColor: COLORS.borderOnLight }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="ft-display" style={{ fontSize: "2.2rem", fontWeight: 700, color: COLORS.darkBg }}>{s.value}</div>
                <div className="ft-mono text-xs uppercase tracking-wide mt-1" style={{ color: COLORS.mutedOnLight }}>{s.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm md:text-base" style={{ color: COLORS.mutedOnLight }}>
            Te liczby to dorobek zespołu zdobyty w ACME Group, której właścicielem był Paweł Najduk.
            FLOWTEX Polska to nowa marka tego samego zespołu, dlatego liczby odnoszą się do całego
            jego doświadczenia, a nie wyłącznie do realizacji pod nową nazwą.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-4">
            <h2 className="ft-display text-2xl md:text-3xl" style={{ fontWeight: 700 }}>Osoba odpowiedzialna za stronę techniczną</h2>
          </div>
          <div className="md:col-span-8 flex flex-col sm:flex-row gap-6">
            <img
              src={pawelPhoto}
              alt="Paweł Najduk, właściciel i dyrektor techniczny FLOWTEX Polska"
              width="700"
              height="875"
              loading="lazy"
              decoding="async"
              className="w-full sm:w-56 h-72 sm:h-auto object-cover shrink-0"
              style={{ objectPosition: "50% 15%" }}
            />
            <div>
              <div className="ft-display text-2xl" style={{ fontWeight: 700 }}>Paweł Najduk</div>
              <div className="ft-mono text-xs uppercase ft-tracking-wide mb-3" style={{ color: COLORS.mutedOnLight }}>
                Właściciel i dyrektor techniczny
              </div>
              <p className="text-base" style={{ color: COLORS.textOnLight }}>
                Osobiście nadzoruje techniczną stronę każdej realizacji FLOWTEX Polska: od doboru
                systemu posadzkowego, przez przygotowanie podłoża, po odbiór końcowy inwestycji.
                Doświadczenie budował jako właściciel ACME Group, odpowiedzialny za stronę techniczną
                realizowanych tam projektów. Jest autorem poradników i opisów w katalogu wad na tej stronie.
              </p>
              <p className="mt-4">
                <Link to="/poradniki" className="inline-flex items-center gap-2 ft-mono text-xs uppercase tracking-wide hover:opacity-80" style={{ color: COLORS.textOnLight, fontWeight: 600 }}>
                  Poradniki autora <ArrowRight size={14} />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t" style={{ borderColor: COLORS.borderOnLight }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <h2 className="ft-display text-2xl md:text-3xl" style={{ fontWeight: 700 }}>Autoryzacje</h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-base md:text-lg" style={{ color: COLORS.textOnLight }}>
              FLOWTEX Polska jest autoryzowanym wykonawcą systemów posadzkowych Flowcrete i Sika.
            </p>
            <div className="mt-6 flex items-center gap-6">
              <img src={certIcon1} alt="Autoryzowany wykonawca systemów Flowcrete" width="300" height="300" loading="lazy" decoding="async" className="w-32 h-32 md:w-40 md:h-40 object-contain" />
              <img src={certIcon2} alt="Autoryzowany wykonawca systemów Sika" width="300" height="300" loading="lazy" decoding="async" className="w-32 h-32 md:w-40 md:h-40 object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t" style={{ borderColor: COLORS.borderOnLight, backgroundColor: COLORS.lightBg }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <h2 className="ft-display text-2xl md:text-3xl mb-8" style={{ fontWeight: 700 }}>Jak pracujemy</h2>
          <ol className="grid md:grid-cols-5 gap-6">
            {STEPS.map((step, i) => (
              <li key={step.title} className="border-t-2 pt-4" style={{ borderColor: COLORS.accent }}>
                <div className="ft-mono text-xs mb-2" style={{ color: COLORS.accent, fontWeight: 600 }}>{String(i + 1).padStart(2, "0")}</div>
                <h3 className="ft-display text-lg mb-2" style={{ fontWeight: 700 }}>{step.title}</h3>
                <p className="text-sm" style={{ color: COLORS.mutedOnLight }}>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <h2 className="ft-display text-2xl md:text-3xl" style={{ fontWeight: 700 }}>Obszar działania i dane firmy</h2>
        </div>
        <div className="md:col-span-8 space-y-4 text-base" style={{ color: COLORS.textOnLight }}>
          <p>
            Realizujemy projekty w całej Polsce, a doświadczenie zespołu obejmuje także realizacje
            międzynarodowe. Siedziba firmy znajduje się na Mazowszu (Ciółkowo Małe). Zobacz
            {" "}<Link to="/realizacje" className="underline underline-offset-4">nasze realizacje</Link>.
          </p>
          <p>
            FLOWTEX Polska Paweł Najduk<br />
            Ciółkowo Małe 32, 07-215 Ciółkowo Małe<br />
            NIP: 7621744781<br />
            tel. <a href="tel:+48507394552" className="underline underline-offset-4">+48 507 394 552</a>,{" "}
            <a href="mailto:kontakt@flowtex.pl" className="underline underline-offset-4">kontakt@flowtex.pl</a>
          </p>
        </div>
      </section>

      <ContactSection
        formId="formularz_o_firmie"
        heading="Porozmawiajmy o Twoim obiekcie"
        context="Strona O firmie"
        defaultType="Nowa posadzka"
      />
    </>
  );
}
