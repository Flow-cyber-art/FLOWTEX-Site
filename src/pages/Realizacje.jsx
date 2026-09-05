import React from "react";
import { COLORS, ACCENT_TEXT } from "../theme.js";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, ArrowLeft, CalendarDays } from "lucide-react";
import { REALIZACJE, getRealizacjaBySlug } from "../data/realizacje.js";
import { getServiceBySlug } from "../data/services.js";
import NotFound from "./NotFound.jsx";

// Automatyczne wczytanie zdjęć wpisów z src/assets/case-studies/.
// Nazwa pliku (bez rozszerzenia) = slug wpisu z realizacje.js,
// np. wtryskarki-engel.webp dla wpisu o slug: "wtryskarki-engel".
// Wpis bez pliku o pasującej nazwie po prostu pokaże się bez zdjęcia.
const caseStudyModules = import.meta.glob("../assets/case-studies/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  import: "default",
});
const CASE_STUDY_IMAGES = Object.fromEntries(
  Object.entries(caseStudyModules).map(([path, src]) => {
    const slug = path.split("/").pop().replace(/\.[^.]+$/, "");
    return [slug, src];
  })
);

const LIST_URL = "https://www.flowtex.pl/realizacje";
const SITE_ORIGIN = "https://www.flowtex.pl";
// Zdjęcia z import.meta.glob mają ścieżkę względną (/assets/plik-hash.webp).
// og:image, twitter:image i pole "image" w JSON-LD Article powinny być
// pełnym URL-em — inaczej część czytników (w tym niektóre boty AI/GEO)
// może zignorować obrazek albo nie rozwiązać go poprawnie.
function toAbsoluteUrl(src) {
  if (!src) return undefined;
  return src.startsWith("http") ? src : `${SITE_ORIGIN}${src}`;
}
const listMetaDescription =
  "Realizacje FLOWTEX Polska — przegląd zrealizowanych inwestycji: posadzki przemysłowe, żywiczne i betonowe dla hal produkcyjnych i magazynowych. Sekcję uzupełniamy o kolejne wdrożenia.";

// "Sierpień 2026" -> "2026-08-01" (do pola datePublished w JSON-LD).
const MONTHS_PL = {
  styczeń: "01", luty: "02", marzec: "03", kwiecień: "04", maj: "05", czerwiec: "06",
  lipiec: "07", sierpień: "08", wrzesień: "09", październik: "10", listopad: "11", grudzień: "12",
};
function toISODate(dateStr) {
  const [monthName, year] = dateStr.toLowerCase().split(" ");
  const month = MONTHS_PL[monthName];
  return month ? `${year}-${month}-01` : undefined;
}

function RealizacjeList() {
  // Zdjęcie najnowszej realizacji jako reprezentatywny obrazek dla podglądów
  // (og:image/twitter:image) strony zbiorczej /realizacje.
  const listImage = toAbsoluteUrl(CASE_STUDY_IMAGES[REALIZACJE[0]?.slug]);

  return (
    <>
      <Helmet>
        <title>Realizacje | FLOWTEX Polska</title>
        <meta name="description" content={listMetaDescription} />
        <link rel="canonical" href={LIST_URL} />
        <meta property="og:title" content="Realizacje | FLOWTEX Polska" />
        <meta property="og:description" content={listMetaDescription} />
        <meta property="og:url" content={LIST_URL} />
        {listImage && <meta property="og:image" content={listImage} />}
        <meta name="twitter:title" content="Realizacje | FLOWTEX Polska" />
        <meta name="twitter:description" content={listMetaDescription} />
        {listImage && <meta name="twitter:image" content={listImage} />}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://www.flowtex.pl/" },
              { "@type": "ListItem", position: 2, name: "Realizacje", item: LIST_URL },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Realizacje | FLOWTEX Polska",
            description: listMetaDescription,
            url: LIST_URL,
            mainEntity: {
              "@type": "ItemList",
              itemListElement: REALIZACJE.map((r, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: r.title,
                url: `${LIST_URL}/${r.slug}`,
              })),
            },
          })}
        </script>
      </Helmet>

      {/* Breadcrumb */}
      <div style={{ backgroundColor: COLORS.darkBg }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 ft-mono text-xs" style={{ color: COLORS.mutedOnDarkSecondary }}>
          <Link to="/" className="hover:opacity-80" style={{ color: COLORS.mutedOnDarkSecondary }}>
            Strona główna
          </Link>{" "}
          <span className="mx-2">/</span>
          <span style={{ color: COLORS.white }}>Realizacje</span>
        </div>
      </div>

      {/* Hero */}
      <section style={{ backgroundColor: COLORS.darkBg }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 pb-16 md:pb-20">
          <h1
            className="ft-display mt-4"
            style={{ color: COLORS.white, fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 800 }}
          >
            Realizacje
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg" style={{ color: COLORS.mutedOnDark }}>
            Wybrane inwestycje zrealizowane przez FLOWTEX Polska. Tę sekcję uzupełniamy sukcesywnie,
            w miarę dostępnego czasu, o kolejne wdrożenia — zaglądaj tu od czasu do czasu.
          </p>
        </div>
      </section>

      {/* Feed kart — każda prowadzi do osobnej podstrony realizacji */}
      <section className="max-w-5xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="flex flex-col gap-16 md:gap-24">
          {REALIZACJE.map((item, i) => {
            const image = CASE_STUDY_IMAGES[item.slug];
            const excerpt = item.paragraphs?.[0];

            return (
              <article
                key={item.slug}
                className={i > 0 ? "pt-16 md:pt-24 border-t" : ""}
                style={i > 0 ? { borderColor: COLORS.borderOnLight } : undefined}
              >
                <Link to={`/realizacje/${item.slug}`} className="block group">
                  {image && (
                    <div className="relative rounded-sm overflow-hidden mb-8" style={{ border: `1px solid ${COLORS.borderOnLight}` }}>
                      <img
                        src={image}
                        alt={item.title}
                        className="w-full object-cover transition group-hover:opacity-90"
                        style={{ height: "clamp(220px, 38vw, 460px)" }}
                        loading={i === 0 ? "eager" : "lazy"}
                        width="1200"
                        height="630"
                      />
                    </div>
                  )}

                  <div className="flex items-center gap-4 mb-4 ft-mono text-xs tracking-wider uppercase" style={{ color: COLORS.mutedOnLight }}>
                    <span className="px-2.5 py-1 rounded-sm" style={{ backgroundColor: COLORS.lightBg, border: `1px solid ${COLORS.borderOnLight}`, color: COLORS.accent, fontWeight: 600 }}>
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CalendarDays size={13} />
                      {item.date}
                    </span>
                  </div>

                  <h2 className="ft-display text-2xl md:text-3xl mb-4 group-hover:opacity-80" style={{ fontWeight: 700 }}>
                    {item.title}
                  </h2>

                  {excerpt && (
                    <p className="text-base md:text-lg mb-5" style={{ color: COLORS.textOnLight }}>
                      {excerpt}
                    </p>
                  )}

                  <span
                    className="inline-flex items-center gap-2 ft-mono text-xs uppercase tracking-wide group-hover:opacity-80"
                    style={{ color: COLORS.accent, fontWeight: 600 }}
                  >
                    Czytaj całą realizację <ArrowRight size={14} />
                  </span>
                </Link>
              </article>
            );
          })}
        </div>

        {REALIZACJE.length === 0 && (
          <p className="text-base" style={{ color: COLORS.mutedOnLight }}>
            Pierwsze realizacje pojawią się tutaj wkrótce.
          </p>
        )}
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: COLORS.darkBg }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="ft-display text-2xl md:text-3xl mb-2" style={{ color: COLORS.white, fontWeight: 700 }}>
              Planujesz podobną inwestycję?
            </h2>
            <p className="text-sm md:text-base" style={{ color: COLORS.mutedOnDark }}>
              Porozmawiajmy o posadzce dopasowanej do Twojej hali.
            </p>
          </div>
          <Link
            to="/#kontakt"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm ft-mono text-xs tracking-wider uppercase hover:opacity-90 transition shrink-0"
            style={{ backgroundColor: COLORS.accent, color: ACCENT_TEXT, fontWeight: 600 }}
          >
            Zapytaj o wycenę <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* Powrót */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 ft-mono text-xs uppercase tracking-wide hover:opacity-80"
          style={{ color: COLORS.mutedOnLight }}
        >
          <ArrowLeft size={14} /> Wróć do strony głównej
        </Link>
      </div>
    </>
  );
}

function RealizacjaDetail({ item }) {
  const canonicalUrl = `${LIST_URL}/${item.slug}`;
  const image = toAbsoluteUrl(CASE_STUDY_IMAGES[item.slug]);
  const relatedService = item.relatedServiceSlug ? getServiceBySlug(item.relatedServiceSlug) : null;
  const metaDescription = item.paragraphs?.[0]?.slice(0, 300);
  const pageTitle = `${item.title} | Realizacje FLOWTEX Polska`;

  // Ustrukturyzowane fakty (powierzchnia/branża/lokalizacja) jako
  // schema.org PropertyValue — czytelne wprost dla wyszukiwarek i modeli AI,
  // niezależnie od opisu w prozie. Wypełniane tylko gdy dane pole jest
  // podane przy wpisie w realizacje.js (patrz komentarz w tym pliku).
  const additionalProperty = [
    item.areaSqm != null && {
      "@type": "PropertyValue",
      name: "Powierzchnia realizacji",
      value: item.areaSqm,
      unitCode: "MTK", // m² (UN/CEFACT)
    },
    item.industry && { "@type": "PropertyValue", name: "Branża", value: item.industry },
  ].filter(Boolean);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        {image && <meta property="og:image" content={image} />}
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        {image && <meta name="twitter:image" content={image} />}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline: item.title,
                description: metaDescription,
                articleSection: item.category,
                datePublished: toISODate(item.date),
                url: canonicalUrl,
                mainEntityOfPage: canonicalUrl,
                ...(image ? { image } : {}),
                author: { "@type": "Organization", name: "FLOWTEX Polska" },
                publisher: { "@type": "Organization", name: "FLOWTEX Polska" },
                ...(relatedService
                  ? { about: { "@type": "Service", name: relatedService.title, url: `https://www.flowtex.pl/${relatedService.slug}` } }
                  : {}),
                ...(item.location
                  ? { contentLocation: { "@type": "Place", name: item.location } }
                  : {}),
                ...(additionalProperty.length ? { additionalProperty } : {}),
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://www.flowtex.pl/" },
                  { "@type": "ListItem", position: 2, name: "Realizacje", item: LIST_URL },
                  { "@type": "ListItem", position: 3, name: item.title, item: canonicalUrl },
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      {/* Breadcrumb */}
      <div style={{ backgroundColor: COLORS.darkBg }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 ft-mono text-xs" style={{ color: COLORS.mutedOnDarkSecondary }}>
          <Link to="/" className="hover:opacity-80" style={{ color: COLORS.mutedOnDarkSecondary }}>
            Strona główna
          </Link>{" "}
          <span className="mx-2">/</span>
          <Link to="/realizacje" className="hover:opacity-80" style={{ color: COLORS.mutedOnDarkSecondary }}>
            Realizacje
          </Link>{" "}
          <span className="mx-2">/</span>
          <span style={{ color: COLORS.white }}>{item.title}</span>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-5 md:px-8 py-14 md:py-20">
        {image && (
          <div className="relative rounded-sm overflow-hidden mb-8" style={{ border: `1px solid ${COLORS.borderOnLight}` }}>
            <img
              src={image}
              alt={item.title}
              className="w-full object-cover"
              style={{ height: "clamp(220px, 38vw, 460px)" }}
              loading="eager"
              fetchpriority="high"
              width="1200"
              height="630"
            />
          </div>
        )}

        <div className="flex items-center gap-4 mb-4 ft-mono text-xs tracking-wider uppercase" style={{ color: COLORS.mutedOnLight }}>
          <span className="px-2.5 py-1 rounded-sm" style={{ backgroundColor: COLORS.lightBg, border: `1px solid ${COLORS.borderOnLight}`, color: COLORS.accent, fontWeight: 600 }}>
            {item.category}
          </span>
          <span className="flex items-center gap-1.5">
            <CalendarDays size={13} />
            {item.date}
          </span>
        </div>

        <h1 className="ft-display text-3xl md:text-4xl mb-6" style={{ fontWeight: 800 }}>
          {item.title}
        </h1>

        <div className="space-y-4">
          {item.paragraphs.map((p, idx) => (
            <p key={idx} className="text-base md:text-lg" style={{ color: COLORS.textOnLight }}>
              {p}
            </p>
          ))}
        </div>

        {item.sections?.map((sec, sIdx) => (
          <div key={sIdx} className="mt-10">
            <h2 className="ft-display text-xl md:text-2xl mb-4" style={{ fontWeight: 700 }}>
              {sec.heading}
            </h2>
            <div className="space-y-4">
              {sec.blocks.map((block, bIdx) => {
                if (block.type === "list") {
                  return (
                    <ul key={bIdx} className="space-y-3 py-1">
                      {block.items.map((li, liIdx) => (
                        <li key={liIdx} className="flex items-start gap-3">
                          <span className="mt-2.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: COLORS.accent }} />
                          <span className="text-base md:text-lg" style={{ color: COLORS.textOnLight }}>
                            <strong style={{ fontWeight: 700 }}>{li.label}.</strong> {li.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={bIdx} className="text-base md:text-lg" style={{ color: COLORS.textOnLight }}>
                    {block.text}
                  </p>
                );
              })}
            </div>
          </div>
        ))}

        {item.closing && (
          <p className="mt-6 text-base md:text-lg italic" style={{ color: COLORS.mutedOnLight }}>
            {item.closing}
          </p>
        )}

        {relatedService && (
          <Link
            to={`/${relatedService.slug}`}
            className="mt-8 inline-flex items-center gap-2 ft-mono text-xs uppercase tracking-wide hover:opacity-80"
            style={{ color: COLORS.accent, fontWeight: 600 }}
          >
            Zobacz usługę: {relatedService.title} <ArrowRight size={14} />
          </Link>
        )}
      </article>

      {/* CTA */}
      <section style={{ backgroundColor: COLORS.darkBg }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="ft-display text-2xl md:text-3xl mb-2" style={{ color: COLORS.white, fontWeight: 700 }}>
              Planujesz podobną inwestycję?
            </h2>
            <p className="text-sm md:text-base" style={{ color: COLORS.mutedOnDark }}>
              Porozmawiajmy o posadzce dopasowanej do Twojej hali.
            </p>
          </div>
          <Link
            to="/#kontakt"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm ft-mono text-xs tracking-wider uppercase hover:opacity-90 transition shrink-0"
            style={{ backgroundColor: COLORS.accent, color: ACCENT_TEXT, fontWeight: 600 }}
          >
            Zapytaj o wycenę <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      {/* Powrót */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-8">
        <Link
          to="/realizacje"
          className="inline-flex items-center gap-2 ft-mono text-xs uppercase tracking-wide hover:opacity-80"
          style={{ color: COLORS.mutedOnLight }}
        >
          <ArrowLeft size={14} /> Wróć do wszystkich realizacji
        </Link>
      </div>
    </>
  );
}

export default function Realizacje() {
  const { slug } = useParams();
  if (slug) {
    const item = getRealizacjaBySlug(slug);
    if (item) return <RealizacjaDetail item={item} />;
    return <NotFound />;
  }
  return <RealizacjeList />;
}
