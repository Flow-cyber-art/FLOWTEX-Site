import React, { useState, useEffect } from "react";
import { COLORS, ACCENT_TEXT } from "../theme.js";
import { Link, useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Sparkles, Search, Phone, Utensils, FlaskConical, Cpu, Flame, Warehouse, Wrench, MapPin } from "lucide-react";
import { LayerStack, LAYERS } from "../components/LayerStack.jsx";
import { HeroCarousel } from "../components/HeroCarousel.jsx";
import { useReveal } from "../hooks/useReveal.js";
import { CORE_SERVICES as SERVICES } from "../data/services.js";
import { REALIZACJE } from "../data/realizacje.js";
import { ContactForm } from "../components/ContactForm.jsx";
import certIcon1 from "../assets/certyfikaty/cert-1.webp";
import certIcon2 from "../assets/certyfikaty/cert-2.webp";
import pawelPhoto from "../assets/team/pawel-najduk.webp";

const FAQ = [
  {
    q: "Po czym poznać dobrą firmę wykonującą posadzki przemysłowe?",
    a: "Dobra firma wykonawcza prowadzi klienta przez cały proces, a nie tylko układa warstwę żywicy. Kluczowe elementy to: rzetelne badanie i przygotowanie podłoża (wilgotność, wytrzymałość i czystość betonu — to najczęstsza przyczyna reklamacji przy tańszych wykonawcach), dobór systemu posadzkowego dopasowanego do realnych warunków eksploatacji (obciążenia, chemia procesowa, wymogi higieniczne), wykonawstwo własnym, doświadczonym zespołem, udokumentowane certyfikaty i zgodność z normami (ISO, GMP, HACCP) oraz gwarancja i opieka serwisowa po zakończeniu inwestycji. Najlepszym dowodem takiego doświadczenia jest portfolio zrealizowanych obiektów, a nie same deklaracje.",
  },
  {
    q: "Jakie są rodzaje posadzek przemysłowych?",
    a: "Najczęściej stosuje się posadzki żywiczne (epoksydowe i poliuretanowe), posadzki betonowe utwardzane powierzchniowo oraz posadzki specjalistyczne dla przemysłu spożywczego i farmaceutycznego. Dobór technologii zależy od obciążeń, chemii procesowej i wymogów higienicznych obiektu.",
  },
  {
    q: "Ile trwa wykonanie posadzki żywicznej?",
    a: "Czas realizacji zależy od metrażu i liczby warstw, zwykle od kilku dni do kilku tygodni. Uwzględniamy czas na przygotowanie podłoża, gruntowanie, aplikację warstwy żywicznej oraz jej utwardzanie.",
  },
  {
    q: "Czy FLOWTEX Polska realizuje projekty w całej Polsce?",
    a: "Tak, realizujemy projekty na terenie całej Polski, a nasze doświadczenie obejmuje również realizacje międzynarodowe.",
  },
  {
    q: "Jakie autoryzacje i dokumenty macie do posadzek?",
    a: "FLOWTEX Polska jest autoryzowanym wykonawcą systemów Flowcrete i Sika. Przed wejściem na budowę przygotowujemy opis technologii: system, przygotowanie podłoża, warstwy, zużycie materiałów i detale. W posadzkach ESD i ATEX po wykonaniu kontrolujemy parametry elektryczne. System dobieramy pod wymagania higieniczne obiektu (HACCP, GMP), a o szczegóły dokumentacji dla Twojego obiektu zapytaj w wycenie.",
  },
  {
    q: "Jak wygląda proces wyceny posadzki przemysłowej?",
    a: "Proces zaczyna się od oględzin obiektu lub analizy dokumentacji, następnie przygotowujemy indywidualną wycenę uwzględniającą metraż, wymagany system posadzkowy i harmonogram prac. Wycenę można zamówić przez formularz kontaktowy na stronie.",
  },
  {
    q: "Kto odpowiada za stronę techniczną realizacji w FLOWTEX Polska?",
    a: "Za stroną techniczną każdej realizacji osobiście odpowiada Paweł Najduk, właściciel FLOWTEX Polska z ponad 20-letnim doświadczeniem w branży posadzek przemysłowych i żywicznych, zdobytym wcześniej jako właściciel ACME Group.",
  },
  {
    q: "Jakie doświadczenie ma zespół FLOWTEX Polska?",
    a: "Zespół FLOWTEX Polska dysponuje ponad 20-letnim doświadczeniem w branży. Na jego koncie jest ponad 2,4 mln m² wykonanych posadzek w 7 krajach, dla ponad 180 zakładów przemysłowych, produkcyjnych, spożywczych i farmaceutycznych. Ten dorobek powstał w ACME Group, której właścicielem był Paweł Najduk; FLOWTEX Polska to nowa marka tego samego zespołu.",
  },
];

const CERT_ICONS = [
  { src: certIcon1, alt: "Autoryzowany wykonawca systemów Flowcrete" },
  { src: certIcon2, alt: "Autoryzowany wykonawca systemów Sika" },
];

// Kafelki wejścia według branży/obiektu — linki do stron branżowych i usług.
const INDUSTRIES = [
  { icon: Utensils, title: "Przemysł spożywczy", text: "Higiena, mycie, chemia procesowa, spadki i odwodnienia.", href: "/posadzki-dla-przemyslu-spozywczego", cta: "Zobacz ofertę" },
  { icon: FlaskConical, title: "Farmacja i clean room", text: "Bezspoinowe posadzki z fasetą do stref czystych i obiektów medycznych.", href: "/posadzki-dla-przemyslu-farmaceutycznego", cta: "Zobacz ofertę" },
  { icon: Cpu, title: "Elektronika i strefy ESD", text: "Kontrolowane odprowadzanie ładunków, uziemienie i pomiary parametrów.", href: "/posadzki-esd", cta: "Zobacz ofertę" },
  { icon: Flame, title: "Strefy zagrożenia wybuchem (ATEX)", text: "Systemy przewodzące z uziemieniem i kontrolą parametrów po wykonaniu.", href: "/posadzki-antywybuchowe-atex", cta: "Zobacz ofertę" },
  { icon: Warehouse, title: "Hale produkcyjne i magazyny", text: "Posadzki betonowe i żywiczne dobrane do obciążeń wózków i maszyn.", href: "/posadzki-do-hal-produkcyjnych-i-magazynow", cta: "Zobacz ofertę" },
  { icon: Wrench, title: "Renowacja i naprawy", text: "Pylenie, pęknięcia, odspojenia, uszkodzone dylatacje i cokoły.", href: "/renowacja-posadzek-przemyslowych", cta: "Zobacz ofertę" },
];

// Trzy najnowsze realizacje (najnowsze są na górze tablicy w realizacje.js).
const FEATURED_CASES = REALIZACJE.slice(0, 3);
const caseImageModules = import.meta.glob("../assets/case-studies/*.{jpg,jpeg,png,webp}", { eager: true, import: "default" });
const CASE_IMAGES = Object.fromEntries(
  Object.entries(caseImageModules).map(([path, src]) => [path.split("/").pop().replace(/\.[^.]+$/, ""), src])
);

// Poradniki widoczne na stronie głównej (tylko opublikowane).
const FEATURED_GUIDES = [
  { href: "/poradniki/jaka-posadzka-do-zakladu-spozywczego", title: "Jaka posadzka do zakładu spożywczego?" },
  { href: "/poradniki/posadzka-esd-a-antywybuchowa", title: "Posadzka ESD a antywybuchowa — czym się różnią" },
  { href: "/poradniki/posadzka-epoksydowa-czy-poliuretanowa", title: "Posadzka epoksydowa czy poliuretanowa?" },
];

const STATS = [
  { value: "2,4 mln m²", label: "wykonanych posadzek" },
  { value: "20 lat", label: "doświadczenia" },
  { value: "180+", label: "obsłużonych zakładów" },
  { value: "7 krajów", label: "zasięgu realizacji" },
];

// Diagram warstw posadzki w sekcji hero (animowana kolumna po prawej).
// Ustaw na false, żeby całkowicie go ukryć — układ hero automatycznie
// przechodzi wtedy na jedną, wyśrodkowaną kolumnę.
const SHOW_LAYER_DIAGRAM = false;

export default function Home() {
  const [searchParams] = useSearchParams();
  const contactContext = searchParams.get("kontakt") || "";
  const [activeLayer, setActiveLayer] = useState(null);
  const [certIconIndex, setCertIconIndex] = useState(0);
  const [industriesRef, industriesVisible] = useReveal();
  const [casesRef, casesVisible] = useReveal();
  const [aboutRef, aboutVisible] = useReveal();
  const [statsRef, statsVisible] = useReveal();
  const [offerRef, offerVisible] = useReveal();
  const offerRemainder = SERVICES.length % 3;
  const offerCtaSpan = offerRemainder === 0 ? 0 : 3 - offerRemainder;
  const [toolsRef, toolsVisible] = useReveal();
  const [certRef, certVisible] = useReveal();
  const [faqRef, faqVisible] = useReveal();
  const [contactRef, contactVisible] = useReveal();

  useEffect(() => {
    if (!SHOW_LAYER_DIAGRAM) return;
    const id = setInterval(() => {
      setActiveLayer((prev) => (prev === null ? 0 : (prev + 1) % LAYERS.length));
    }, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <Helmet>
        <title>Posadzki przemysłowe i żywiczne — wykonawca | FLOWTEX Polska</title>
        <meta
          name="description"
          content="Posadzki żywiczne i przemysłowe dla zakładów spożywczych, farmacji, elektroniki, stref ESD i ATEX. Dobór systemu, wykonanie, pomiary. Wycena w całej Polsce."
        />
        <link rel="canonical" href="https://www.flowtex.pl/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          })}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="relative overflow-hidden" style={{ backgroundColor: COLORS.darkBg }}>
        <HeroCarousel />
        <div
          className={`max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 items-center relative z-10 ${
            SHOW_LAYER_DIAGRAM
              ? "grid md:grid-cols-2 gap-10 md:gap-6"
              : "text-center max-w-5xl"
          }`}
        >
          <div>
            <div
              className="text-sm font-semibold uppercase mb-7"
              style={{ color: "rgba(243, 243, 243, 0.8)", letterSpacing: "0.25em" }}
            >
              Wykonawca posadzek przemysłowych • cała Polska
            </div>
            <h1
              className="ft-display tracking-tight max-w-4xl mx-auto"
              style={{
                color: COLORS.white,
                fontSize: "clamp(2.1rem, 5vw, 3.6rem)",
                fontWeight: 800,
                lineHeight: 1.08,
                textShadow: `0 2px 16px ${COLORS.darkBg}99`,
              }}
            >
              Posadzki żywiczne i przemysłowe dla zakładów, w których posadzka musi przejść audyt
            </h1>
            <p
              className="mt-7 max-w-[760px] mx-auto"
              style={{
                color: "rgba(255, 255, 255, 0.88)",
                fontSize: "clamp(1.02rem, 2vw, 1.3rem)",
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              Przemysł spożywczy, farmacja, elektronika, strefy ESD i ATEX, clean room. Dobieramy system
              do obciążeń, chemii i wymagań higienicznych, a w strefach ESD i ATEX potwierdzamy
              parametry pomiarami.
            </p>
            <div className={`mt-10 flex flex-wrap gap-4 ${SHOW_LAYER_DIAGRAM ? "" : "justify-center"}`}>
              <a
                href="#kontakt"
                className="h-14 inline-flex items-center gap-2 px-8 rounded-sm ft-mono text-xs tracking-wider uppercase hover:opacity-90 transition"
                style={{ backgroundColor: COLORS.accent, color: ACCENT_TEXT, fontWeight: 600 }}
              >
                Zamów wizję lokalną i wycenę <ArrowRight size={15} />
              </a>
              <Link
                to="/realizacje"
                className="h-14 inline-flex items-center gap-2 px-8 rounded-sm ft-mono text-xs tracking-wider uppercase border ft-outline-btn transition"
                style={{ borderColor: COLORS.ctaBorder, color: COLORS.white }}
              >
                Zobacz realizacje
              </Link>
            </div>
            <p className="mt-6 text-sm" style={{ color: "rgba(243, 243, 243, 0.75)" }}>
              Realizacje w całej Polsce · Wycena po oględzinach obiektu lub analizie dokumentacji
            </p>
            <p className="ft-display mt-8 text-xl" style={{ color: COLORS.accent, fontWeight: 700 }}>
              Pewność pod każdą warstwą.
            </p>
          </div>

          {SHOW_LAYER_DIAGRAM && (
            <div className="ft-hero-visual rounded-sm overflow-hidden border" style={{ borderColor: COLORS.darkBorder }}>
              <LayerStack variant="hero" active={activeLayer} />
            </div>
          )}
        </div>
        <div className="relative z-10">
          <LayerStack variant="divider" />
        </div>
      </section>

      {/* STATS */}
      <section ref={statsRef} className="border-b" style={{ borderColor: COLORS.borderOnLight }}>
        <div
          className={`max-w-7xl mx-auto px-5 md:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 reveal ${
            statsVisible ? "visible" : ""
          }`}
        >
          {STATS.map((s) => (
            <div key={s.label}>
              <div className="ft-display" style={{ fontSize: "2.2rem", fontWeight: 700, color: COLORS.darkBg }}>
                {s.value}
              </div>
              <div className="ft-mono text-xs uppercase tracking-wide mt-1" style={{ color: COLORS.mutedOnLight }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
        <p className="max-w-7xl mx-auto px-5 md:px-8 pb-8 text-sm" style={{ color: COLORS.mutedOnLight }}>
          Dorobek zespołu zdobyty w ACME Group, której właścicielem był Paweł Najduk. FLOWTEX Polska to
          nowa marka tego samego zespołu.
        </p>
      </section>

      {/* BRANŻE — wejście dla klienta według typu obiektu */}
      <section id="branze" ref={industriesRef} className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className={`mb-10 reveal ${industriesVisible ? "visible" : ""}`}>
          <div className="ft-mono text-xs ft-tracking-wide uppercase mb-3" style={{ color: COLORS.accent }}>
            Dla jakich obiektów
          </div>
          <h2 className="ft-display text-3xl md:text-4xl" style={{ fontWeight: 700 }}>
            Posadzki dla branż o najwyższych wymaganiach
          </h2>
        </div>
        <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-5 reveal ${industriesVisible ? "visible" : ""}`}>
          {INDUSTRIES.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.title}
                to={item.href}
                className="ft-tile group block p-6 md:p-7 border transition"
                style={{ borderColor: COLORS.borderOnLight, backgroundColor: COLORS.lightBg }}
              >
                <Icon size={26} style={{ color: COLORS.accent }} />
                <h3 className="ft-display text-xl mt-4 mb-2" style={{ fontWeight: 700, color: COLORS.textOnLight }}>
                  {item.title}
                </h3>
                <p className="text-sm mb-3" style={{ color: COLORS.mutedOnLight }}>{item.text}</p>
                <span
                  className="ft-mono text-xs uppercase tracking-wide inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                  style={{ color: COLORS.textOnLight, fontWeight: 600 }}
                >
                  {item.cta} <ArrowRight size={13} />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* WYBRANE REALIZACJE */}
      <section id="realizacje" ref={casesRef} style={{ backgroundColor: COLORS.lightBg }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className={`mb-10 flex flex-wrap items-end justify-between gap-4 reveal ${casesVisible ? "visible" : ""}`}>
            <div>
              <div className="ft-mono text-xs ft-tracking-wide uppercase mb-3" style={{ color: COLORS.accent }}>
                Referencje
              </div>
              <h2 className="ft-display text-3xl md:text-4xl" style={{ fontWeight: 700 }}>
                Wybrane realizacje
              </h2>
            </div>
            <Link
              to="/realizacje"
              className="ft-mono text-xs uppercase tracking-wide inline-flex items-center gap-2 hover:opacity-80"
              style={{ color: COLORS.textOnLight, fontWeight: 600 }}
            >
              Wszystkie realizacje <ArrowRight size={14} />
            </Link>
          </div>
          <div className={`grid md:grid-cols-3 gap-6 reveal ${casesVisible ? "visible" : ""}`}>
            {FEATURED_CASES.map((item) => (
              <Link
                key={item.slug}
                to={`/realizacje/${item.slug}`}
                className="group block bg-white border overflow-hidden"
                style={{ borderColor: COLORS.borderOnLight }}
              >
                {CASE_IMAGES[item.slug] && (
                  <img
                    src={CASE_IMAGES[item.slug]}
                    alt={item.location ? `${item.title} — ${item.location}` : item.title}
                    width="1200"
                    height="630"
                    loading="lazy"
                    decoding="async"
                    className="w-full object-cover transition group-hover:opacity-90"
                    style={{ aspectRatio: "16 / 9" }}
                  />
                )}
                <div className="p-5 md:p-6">
                  <div className="ft-mono text-xs uppercase tracking-wide mb-3" style={{ color: COLORS.accent, fontWeight: 600 }}>
                    {item.category}
                  </div>
                  <h3 className="ft-display text-xl mb-3" style={{ fontWeight: 700, color: COLORS.textOnLight }}>
                    {item.title}
                  </h3>
                  <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm" style={{ color: COLORS.mutedOnLight }}>
                    {item.areaSqm ? <span>{item.areaSqm.toLocaleString("pl-PL")} m²</span> : null}
                    {item.location ? (
                      <span className="inline-flex items-center gap-1"><MapPin size={13} />{item.location}</span>
                    ) : null}
                    <span>{item.date}</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA — kafelki linkujące do podstron usług */}
      <section id="oferta" ref={offerRef} style={{ backgroundColor: COLORS.darkBg }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
          <div className={`mb-12 reveal ${offerVisible ? "visible" : ""}`}>
            <div className="ft-mono text-xs ft-tracking-wide uppercase mb-3" style={{ color: COLORS.white }}>
              Nasza oferta
            </div>
            <h2 className="ft-display text-3xl md:text-4xl" style={{ color: COLORS.white, fontWeight: 700 }}>
              Od przygotowania podłoża po gotową posadzkę
            </h2>
          </div>
          <div
            className={`grid md:grid-cols-3 gap-px reveal ${offerVisible ? "visible" : ""}`}
            style={{ backgroundColor: COLORS.darkBorder }}
          >
            {SERVICES.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  to={`/${s.slug}`}
                  className="p-7 md:p-8 group ft-tile transition block"
                  style={{ backgroundColor: COLORS.darkBg }}
                >
                  <Icon size={26} style={{ color: COLORS.white }} />
                  <h3 className="ft-display text-xl mt-4 mb-2" style={{ color: COLORS.white, fontWeight: 700 }}>
                    {s.title}
                  </h3>
                  <p className="text-sm mb-3" style={{ color: COLORS.mutedOnDark }}>
                    {s.shortDesc}
                  </p>
                  <span
                    className="ft-mono text-xs uppercase tracking-wide inline-flex items-center gap-1 group-hover:gap-2 transition-all"
                    style={{ color: COLORS.white }}
                  >
                    Dowiedz się więcej <ArrowRight size={13} />
                  </span>
                </Link>
              );
            })}
            {offerCtaSpan > 0 && (
              <a
                href="#kontakt"
                className={`p-7 md:p-8 group ft-tile transition flex ${offerCtaSpan === 3 ? "flex-row items-center gap-5" : "flex-col justify-center"}`}
                style={{ backgroundColor: COLORS.accent, gridColumn: `span ${offerCtaSpan} / span ${offerCtaSpan}` }}
              >
                <ArrowRight size={26} className="shrink-0" style={{ color: ACCENT_TEXT }} />
                <div>
                  <h3 className="ft-display text-xl mb-2" style={{ color: ACCENT_TEXT, fontWeight: 700 }}>
                    Nie wiesz, czego potrzebujesz?
                  </h3>
                  <p className="text-sm" style={{ color: ACCENT_TEXT, opacity: 0.85 }}>
                    Umów bezpłatną wycenę i doradztwo techniczne.
                  </p>
                </div>
              </a>
            )}
          </div>
        </div>
      </section>

      {/* NARZĘDZIA — promocja dwóch interaktywnych narzędzi + wewnętrzne linkowanie */}
      <section id="narzedzia" ref={toolsRef} className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className={`mb-12 reveal ${toolsVisible ? "visible" : ""}`}>
          <div className="ft-mono text-xs ft-tracking-wide uppercase mb-3" style={{ color: COLORS.accent }}>
            Pomoc w wyborze
          </div>
          <h2 className="ft-display text-3xl md:text-4xl" style={{ fontWeight: 700 }}>
            Nie wiesz, od czego zacząć? Sprawdź w 2 minuty.
          </h2>
        </div>
        <div className={`grid md:grid-cols-2 gap-6 reveal ${toolsVisible ? "visible" : ""}`}>
          <Link
            to="/dobor-posadzki"
            className="ft-tile group block p-8 md:p-10 border transition"
            style={{ borderColor: COLORS.borderOnLight, backgroundColor: COLORS.lightBg }}
          >
            <Sparkles size={28} style={{ color: COLORS.accent }} />
            <h3 className="ft-display text-2xl mt-5 mb-3" style={{ fontWeight: 700, color: COLORS.textOnLight }}>
              Dobór systemu posadzkowego
            </h3>
            <p className="text-sm mb-4" style={{ color: COLORS.mutedOnLight }}>
              Odpowiedz na kilka pytań o obciążenia, chemię i wilgoć — poznaj procentowe dopasowanie
              trzech kierunków technologicznych do Twojej strefy.
            </p>
            <span
              className="ft-mono text-xs uppercase tracking-wide inline-flex items-center gap-1 group-hover:gap-2 transition-all"
              style={{ color: COLORS.textOnLight, fontWeight: 600 }}
            >
              Rozpocznij dobór <ArrowRight size={13} />
            </span>
          </Link>
          <Link
            to="/katalog-wad"
            className="ft-tile group block p-8 md:p-10 border transition"
            style={{ borderColor: COLORS.borderOnLight, backgroundColor: COLORS.lightBg }}
          >
            <Search size={28} style={{ color: COLORS.accent }} />
            <h3 className="ft-display text-2xl mt-5 mb-3" style={{ fontWeight: 700, color: COLORS.textOnLight }}>
              Katalog wad posadzek
            </h3>
            <p className="text-sm mb-4" style={{ color: COLORS.mutedOnLight }}>
              Widzisz pęknięcie, ubytek albo przebarwienie? Wybierz objaw i poznaj możliwe przyczyny
              oraz kierunek naprawy.
            </p>
            <span
              className="ft-mono text-xs uppercase tracking-wide inline-flex items-center gap-1 group-hover:gap-2 transition-all"
              style={{ color: COLORS.textOnLight, fontWeight: 600 }}
            >
              Przeglądaj katalog <ArrowRight size={13} />
            </span>
          </Link>
        </div>
        <p className="mt-8 text-base" style={{ color: COLORS.textOnLight }}>
          Wolisz od razu porozmawiać?{" "}
          <a
            href="tel:+48507394552"
            className="inline-flex items-center gap-1.5 font-semibold underline underline-offset-4 hover:opacity-80"
            style={{ color: COLORS.textOnLight }}
          >
            <Phone size={15} /> Zadzwoń: 507 394 552
          </a>
        </p>
        <div className="mt-10 pt-8 border-t" style={{ borderColor: COLORS.borderOnLight }}>
          <div className="ft-mono text-xs ft-tracking-wide uppercase mb-4" style={{ color: COLORS.accent }}>
            Z poradnika
          </div>
          <ul className="grid md:grid-cols-3 gap-4">
            {FEATURED_GUIDES.map((g) => (
              <li key={g.href}>
                <Link
                  to={g.href}
                  className="flex items-center justify-between gap-3 p-4 border hover:opacity-80 transition"
                  style={{ borderColor: COLORS.borderOnLight, fontWeight: 600 }}
                >
                  <span>{g.title}</span>
                  <ArrowRight size={16} className="shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* O NAS */}
      <section id="o-nas" ref={aboutRef} className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className={`grid md:grid-cols-12 gap-10 reveal ${aboutVisible ? "visible" : ""}`}>
          <div className="md:col-span-4">
            <div className="ft-mono text-xs ft-tracking-wide uppercase mb-3" style={{ color: COLORS.accent }}>
              O firmie
            </div>
            <h2 className="ft-display text-3xl md:text-4xl" style={{ fontWeight: 700 }}>
              Ponad 20 lat doświadczenia. Nowy rozdział tej samej historii.
            </h2>
          </div>
          <div className="md:col-span-8 space-y-5 text-base md:text-lg" style={{ color: COLORS.textOnLight }}>
            <p>
              FLOWTEX Polska powstała z przekonania, że najwyższa jakość rodzi się z doświadczenia,
              odpowiedzialności i bliskiej współpracy z klientem. Choć marka jest nowa, stoi za nią
              ponad dwudziestoletnie doświadczenie zespołu: ponad 2,4 mln m² wykonanych posadzek
              przemysłowych w Polsce i za granicą, dla ponad 180 zakładów w 7 krajach. Ten dorobek
              powstał w ACME Group, której właścicielem był Paweł Najduk.
            </p>
            <p>
              Specjalizujemy się w projektowaniu i wykonywaniu posadzek żywicznych dla zakładów
              produkcyjnych, magazynów, centrów logistycznych oraz obiektów przemysłu spożywczego,
              farmaceutycznego i chemicznego. Każdą realizację rozpoczynamy od dokładnej analizy
              potrzeb inwestora i warunków pracy posadzki. Dzięki temu dobieramy rozwiązania, które
              nie tylko spełniają wymagania techniczne, ale przede wszystkim zapewniają wieloletnią
              trwałość.
            </p>
            <p>
              W FLOWTEX Polska wierzymy, że najlepszą reklamą są realizacje, które po wielu latach
              nadal spełniają swoją funkcję. To właśnie dlatego nasi klienci wracają do nas przy
              kolejnych inwestycjach i polecają nas dalej.
            </p>
            <p style={{ fontWeight: 600 }}>
              FLOWTEX Polska. Ponad 20 lat doświadczenia. Rodzinna odpowiedzialność. Nowoczesne
              rozwiązania dla przemysłu.
            </p>
          </div>
        </div>

        <div
          className="mt-12 md:mt-16 flex flex-col sm:flex-row overflow-hidden"
          style={{ backgroundColor: COLORS.lightBg, border: `1px solid ${COLORS.borderOnLight}` }}
        >
          <div className="sm:w-64 md:w-80 flex-shrink-0">
            <img
              src={pawelPhoto}
              alt="Paweł Najduk, właściciel i dyrektor techniczny FLOWTEX Polska"
              width="700"
              height="875"
              loading="lazy"
              decoding="async"
              className="w-full h-72 sm:h-full object-cover"
              style={{ objectPosition: "50% 15%" }}
            />
          </div>
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <div className="ft-display text-xl md:text-2xl" style={{ fontWeight: 700 }}>
              Paweł Najduk
            </div>
            <div className="ft-mono text-xs uppercase ft-tracking-wide mb-3" style={{ color: COLORS.textOnLight }}>
              Właściciel i dyrektor techniczny
            </div>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: COLORS.mutedOnLight }}>
              Osobiście nadzoruje techniczną stronę każdej realizacji FLOWTEX Polska — od doboru
              systemu posadzkowego, przez przygotowanie podłoża, po odbiór końcowy inwestycji.
              Doświadczenie budował jako właściciel ACME Group, odpowiedzialny za
              stronę techniczną realizowanych tam projektów. Rozpoznawalna postać w branży, ceniona
              za rzetelne doradztwo techniczne przy doborze systemów posadzkowych.
            </p>
          </div>
        </div>
      </section>

      {/* CERTYFIKATY / DYSTRYBUCJA */}
      <section id="certyfikaty" ref={certRef} className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className={`grid md:grid-cols-2 gap-12 reveal ${certVisible ? "visible" : ""}`}>
          <div>
            <div className="ft-mono text-xs ft-tracking-wide uppercase mb-3" style={{ color: COLORS.accent }}>
              Dokumentacja
            </div>
            <h2 className="ft-display text-3xl mb-4" style={{ fontWeight: 700 }}>
              Opis technologii przed budową, pomiary po wykonaniu
            </h2>
            <p className="text-base" style={{ color: COLORS.textOnLight }}>
              Przed wejściem na budowę przygotowujemy opis technologii: system, przygotowanie podłoża,
              warstwy, zużycie materiałów i detale. W posadzkach ESD i ATEX po wykonaniu kontrolujemy
              parametry elektryczne.
            </p>
          </div>
          <div className="flex items-center gap-6 md:gap-8">
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-[300px] md:h-[300px] flex-shrink-0">
              {CERT_ICONS.map((icon, i) => (
                <img
                  key={icon.src}
                  src={icon.src}
                  alt={icon.alt}
                  width="300"
                  height="300"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out"
                  style={{ opacity: certIconIndex === i ? 1 : 0 }}
                />
              ))}
            </div>
            <div>
              <div className="ft-mono text-xs ft-tracking-wide uppercase mb-3" style={{ color: COLORS.accent }}>
                Autoryzacje
              </div>
              <h2 className="ft-display text-3xl mb-4" style={{ fontWeight: 700 }}>
                Autoryzowany wykonawca
              </h2>
              <p className="text-base" style={{ color: COLORS.textOnLight }}>
                FLOWTEX Polska jest autoryzowanym wykonawcą systemów posadzkowych
                w technologiach: Flowcrete i Sika.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" ref={faqRef} className="max-w-4xl mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className={`reveal ${faqVisible ? "visible" : ""}`}>
          <div className="ft-mono text-xs ft-tracking-wide uppercase mb-3" style={{ color: COLORS.accent }}>
            FAQ
          </div>
          <h2 className="ft-display text-3xl md:text-4xl mb-8" style={{ fontWeight: 700 }}>
            Najczęściej zadawane pytania
          </h2>
          <div className="divide-y" style={{ borderColor: COLORS.borderOnLight }}>
            {FAQ.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none font-medium text-base md:text-lg">
                  <span>{item.q}</span>
                  <span
                    className="ft-mono text-lg transition-transform group-open:rotate-45"
                    style={{ color: COLORS.accent }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm md:text-base" style={{ color: COLORS.textOnLight }}>
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" ref={contactRef} style={{ backgroundColor: COLORS.darkBg }}>
        <div
          className={`max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-12 reveal ${
            contactVisible ? "visible" : ""
          }`}
        >
          <div>
            <div className="ft-mono text-xs ft-tracking-wide uppercase mb-3" style={{ color: COLORS.white }}>
              Kontakt
            </div>
            <h2 className="ft-display text-3xl md:text-4xl mb-6" style={{ fontWeight: 700, color: COLORS.white }}>
              Opisz obiekt — wrócimy z propozycją systemu i wyceną
            </h2>
            <div className="space-y-4 ft-mono text-sm" style={{ color: COLORS.mutedOnDark }}>
              <div className="flex items-center gap-3">FLOWTEX Polska</div>
              <div className="flex items-center gap-3">Paweł Najduk</div>
              <div className="flex items-center gap-3">NIP: 7621744781</div>
              <div className="flex items-center gap-3">Ciółkowo Małe 32, 07-215 Ciółkowo Małe</div>
              <div className="flex items-center gap-3">tel. +48 507 394 552</div>
              <div className="flex items-center gap-3">kontakt@flowtex.pl</div>
            </div>
          </div>

          <ContactForm prefillContext={contactContext} formId="formularz_strona_glowna" defaultType="Nowa posadzka" />
        </div>
      </section>
    </>
  );
}
