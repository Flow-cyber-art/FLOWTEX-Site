import React from "react";
import { COLORS, ACCENT_TEXT } from "../theme.js";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, ArrowLeft, CalendarDays } from "lucide-react";
import { PORADNIKI, getPoradnikBySlug } from "../data/poradniki.js";
import { getServiceBySlug } from "../data/services.js";
import { getRealizacjaBySlug } from "../data/realizacje.js";
import NotFound from "./NotFound.jsx";
import { renderInline, stripInline } from "../utils/inline.jsx";

// Zdjęcia poradników z src/assets/poradniki/. Nazwa pliku (bez rozszerzenia)
// = slug poradnika z poradniki.js. Poradnik bez pliku po prostu nie pokaże zdjęcia.
const imageModules = import.meta.glob("../assets/poradniki/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}", {
  eager: true,
  import: "default",
});
const IMAGES = Object.fromEntries(
  Object.entries(imageModules).map(([path, src]) => [path.split("/").pop().replace(/\.[^.]+$/, ""), src])
);

const SITE_ORIGIN = "https://www.flowtex.pl";
// og:image i pole "image" w JSON-LD muszą być pełnym URL-em.
function toAbsoluteUrl(src) {
  if (!src) return undefined;
  return src.startsWith("http") ? src : `${SITE_ORIGIN}${src}`;
}

const LIST_URL = "https://www.flowtex.pl/poradniki";
const listMetaDescription =
  "Poradniki FLOWTEX Polska — praktyczna wiedza o posadzkach przemysłowych i żywicznych: dobór systemu, różnice między rozwiązaniami i najczęstsze błędy przy wyborze.";

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

function Block({ block }) {
  if (block.type === "list") {
    const Tag = block.ordered ? "ol" : "ul";
    return (
      <Tag className={`space-y-3 py-1 ${block.ordered ? "list-decimal pl-6" : ""}`}>
        {block.items.map((li, i) => (
          <li key={i} className={block.ordered ? "pl-1" : "flex items-start gap-3"}>
            {!block.ordered && (
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: COLORS.accent }} />
            )}
            <span className="text-base md:text-lg" style={{ color: COLORS.textOnLight }}>
              {renderInline(li)}
            </span>
          </li>
        ))}
      </Tag>
    );
  }
  if (block.type === "table") {
    return (
      <div className="overflow-x-auto" style={{ border: `1px solid ${COLORS.borderOnLight}` }}>
        <table className="w-full text-left text-sm md:text-base">
          <thead style={{ backgroundColor: COLORS.lightBg }}>
            <tr>
              {block.head.map((h, i) => (
                <th key={i} className="px-4 py-3 ft-mono text-xs uppercase tracking-wide" style={{ fontWeight: 700 }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, r) => (
              <tr key={r} className="border-t" style={{ borderColor: COLORS.borderOnLight }}>
                {row.map((cell, c) => (
                  <td key={c} className="px-4 py-3 align-top" style={{ color: COLORS.textOnLight, fontWeight: c === 0 ? 600 : 400 }}>
                    {renderInline(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <p className="text-base md:text-lg" style={{ color: COLORS.textOnLight }}>
      {renderInline(block.text)}
    </p>
  );
}

function PoradnikiList() {
  return (
    <>
      <Helmet>
        <title>Poradniki | FLOWTEX Polska</title>
        <meta name="description" content={listMetaDescription} />
        <link rel="canonical" href={LIST_URL} />
        <meta property="og:title" content="Poradniki | FLOWTEX Polska" />
        <meta property="og:description" content={listMetaDescription} />
        <meta property="og:url" content={LIST_URL} />
      </Helmet>

      <div style={{ backgroundColor: COLORS.darkBg }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 ft-mono text-xs" style={{ color: COLORS.mutedOnDarkSecondary }}>
          <Link to="/" className="hover:opacity-80" style={{ color: COLORS.mutedOnDarkSecondary }}>
            Strona główna
          </Link>{" "}
          <span className="mx-2">/</span>
          <span style={{ color: COLORS.white }}>Poradniki</span>
        </div>
      </div>

      <section style={{ backgroundColor: COLORS.darkBg }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 pb-16 md:pb-20">
          <h1
            className="ft-display mt-4"
            style={{ color: COLORS.white, fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 800 }}
          >
            Poradniki
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg" style={{ color: COLORS.mutedOnDark }}>
            Praktyczna wiedza o posadzkach przemysłowych i żywicznych — jak wybrać system, czym różnią się rozwiązania i czego unikać.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="flex flex-col gap-10">
          {PORADNIKI.map((item, i) => (
            <article
              key={item.slug}
              className={i > 0 ? "pt-10 border-t" : ""}
              style={i > 0 ? { borderColor: COLORS.borderOnLight } : undefined}
            >
              <div className="flex items-center gap-4 mb-3 ft-mono text-xs tracking-wider uppercase" style={{ color: COLORS.mutedOnLight }}>
                <span className="px-2.5 py-1 rounded-sm" style={{ backgroundColor: COLORS.lightBg, border: `1px solid ${COLORS.borderOnLight}`, color: COLORS.accent, fontWeight: 600 }}>
                  {item.category}
                </span>
                <span className="flex items-center gap-1.5">
                  <CalendarDays size={13} />
                  {item.date}
                </span>
              </div>
              <h2 className="ft-display text-2xl md:text-3xl mb-3" style={{ fontWeight: 700 }}>
                <Link to={`/poradniki/${item.slug}`} className="hover:opacity-80">
                  {item.title}
                </Link>
              </h2>
              <p className="text-base md:text-lg" style={{ color: COLORS.textOnLight }}>
                {item.metaDescription}
              </p>
              <Link
                to={`/poradniki/${item.slug}`}
                className="mt-4 inline-flex items-center gap-2 ft-mono text-xs uppercase tracking-wide hover:opacity-80"
                style={{ color: COLORS.accent, fontWeight: 600 }}
              >
                Czytaj poradnik <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function PoradnikDetail({ item }) {
  const canonicalUrl = `${LIST_URL}/${item.slug}`;
  const pageTitle = item.metaTitle || `${item.title} | FLOWTEX Polska`;
  const services = (item.relatedServiceSlugs || []).map(getServiceBySlug).filter(Boolean);
  const realizacje = (item.relatedRealizacjeSlugs || []).map(getRealizacjaBySlug).filter(Boolean);
  const datePublished = item.publishAt || toISODate(item.date);
  const image = toAbsoluteUrl(IMAGES[item.slug]);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={item.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={item.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        {image && <meta property="og:image" content={image} />}
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={item.metaDescription} />
        {image && <meta name="twitter:image" content={image} />}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Article",
                headline: item.title,
                description: item.metaDescription,
                articleSection: item.category,
                ...(datePublished ? { datePublished } : {}),
                url: canonicalUrl,
                mainEntityOfPage: canonicalUrl,
                inLanguage: "pl",
                ...(image ? { image } : {}),
                author: {
                  "@type": "Person",
                  name: "Paweł Najduk",
                  jobTitle: "Właściciel i dyrektor techniczny",
                  worksFor: { "@type": "Organization", name: "FLOWTEX Polska", url: "https://www.flowtex.pl/" },
                },
                publisher: { "@type": "Organization", name: "FLOWTEX Polska", url: "https://www.flowtex.pl/" },
                ...(services.length
                  ? { about: services.map((s) => ({ "@type": "Service", name: s.title, url: `https://www.flowtex.pl/${s.slug}` })) }
                  : {}),
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://www.flowtex.pl/" },
                  { "@type": "ListItem", position: 2, name: "Poradniki", item: LIST_URL },
                  { "@type": "ListItem", position: 3, name: item.title, item: canonicalUrl },
                ],
              },
              ...(item.faq?.length
                ? [
                    {
                      "@type": "FAQPage",
                      mainEntity: item.faq.map((f) => ({
                        "@type": "Question",
                        name: f.q,
                        acceptedAnswer: { "@type": "Answer", text: stripInline(f.a) },
                      })),
                    },
                  ]
                : []),
            ],
          })}
        </script>
      </Helmet>

      <div style={{ backgroundColor: COLORS.darkBg }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 ft-mono text-xs" style={{ color: COLORS.mutedOnDarkSecondary }}>
          <Link to="/" className="hover:opacity-80" style={{ color: COLORS.mutedOnDarkSecondary }}>
            Strona główna
          </Link>{" "}
          <span className="mx-2">/</span>
          <Link to="/poradniki" className="hover:opacity-80" style={{ color: COLORS.mutedOnDarkSecondary }}>
            Poradniki
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
              alt={item.imageAlt || item.title}
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
          <span>Autor: Paweł Najduk, dyrektor techniczny</span>
        </div>

        <h1 className="ft-display text-3xl md:text-4xl mb-6" style={{ fontWeight: 800 }}>
          {item.title}
        </h1>

        <div className="space-y-4">
          {item.intro.map((p, i) => (
            <p key={i} className="text-base md:text-lg" style={{ color: COLORS.textOnLight }}>
              {renderInline(p)}
            </p>
          ))}
        </div>

        {item.sections.map((sec) => (
          <div key={sec.heading} className="mt-10">
            <h2 className="ft-display text-xl md:text-2xl mb-4" style={{ fontWeight: 700 }}>
              {sec.heading}
            </h2>
            <div className="space-y-4">
              {sec.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>
          </div>
        ))}

        {item.faq?.length > 0 && (
          <div className="mt-12">
            <h2 className="ft-display text-xl md:text-2xl mb-4" style={{ fontWeight: 700 }}>
              Najczęściej zadawane pytania
            </h2>
            <div className="divide-y" style={{ borderColor: COLORS.borderOnLight }}>
              {item.faq.map((f) => (
                <details key={f.q} className="group py-5 first:pt-0">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-medium text-base md:text-lg">
                    <span>{f.q}</span>
                    <span
                      className="ft-mono text-lg transition-transform group-open:rotate-45"
                      style={{ color: COLORS.accent }}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm md:text-base" style={{ color: COLORS.textOnLight }}>
                    {renderInline(f.a)}
                  </p>
                </details>
              ))}
            </div>
          </div>
        )}

        {(services.length > 0 || realizacje.length > 0) && (
          <div className="mt-12 p-6 rounded-sm" style={{ backgroundColor: COLORS.lightBg, border: `1px solid ${COLORS.borderOnLight}` }}>
            <h2 className="ft-display text-lg mb-3" style={{ fontWeight: 700 }}>
              Zobacz też
            </h2>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/${s.slug}`} className="inline-flex items-center gap-2 hover:opacity-80" style={{ color: COLORS.accent, fontWeight: 600 }}>
                    Usługa: {s.title} <ArrowRight size={14} />
                  </Link>
                </li>
              ))}
              {realizacje.map((r) => (
                <li key={r.slug}>
                  <Link to={`/realizacje/${r.slug}`} className="inline-flex items-center gap-2 hover:opacity-80" style={{ color: COLORS.accent, fontWeight: 600 }}>
                    Realizacja: {r.title} <ArrowRight size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>

      {item.cta && (
        <section style={{ backgroundColor: COLORS.darkBg }}>
          <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="ft-display text-2xl md:text-3xl mb-2" style={{ color: COLORS.white, fontWeight: 700 }}>
                {item.cta.heading}
              </h2>
              <p className="text-sm md:text-base" style={{ color: COLORS.mutedOnDark }}>
                {item.cta.text}
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
      )}

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-8">
        <Link
          to="/poradniki"
          className="inline-flex items-center gap-2 ft-mono text-xs uppercase tracking-wide hover:opacity-80"
          style={{ color: COLORS.mutedOnLight }}
        >
          <ArrowLeft size={14} /> Wróć do wszystkich poradników
        </Link>
      </div>
    </>
  );
}

export default function Poradniki() {
  const { slug } = useParams();
  if (slug) {
    const item = getPoradnikBySlug(slug);
    if (item) return <PoradnikDetail item={item} />;
    return <NotFound />;
  }
  return <PoradnikiList />;
}
