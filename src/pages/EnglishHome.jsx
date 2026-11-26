import React from "react";
import { Helmet } from "react-helmet-async";
import { ENGLISH_PAGES } from "../data/english-pages.js";
import CookieNotice from "../components/CookieNotice.jsx";
import { COLORS } from "../theme.js";
import { ANALYTICS_ENABLED, openConsentSettings } from "../utils/analytics.js";
import esdPhoto from "../assets/case-studies/posadzka-esd-przemysl-elektroniczny-700-m2.webp";
import drainagePhoto from "../assets/case-studies/serwis-posadzki-przy-odplywach-zaklad-spozywczy-mazowieckie.webp";

const homeTitle = "Industrial flooring contractor in Poland | FLOWTEX Polska";
const homeDescription = "Industrial resin flooring, ESD systems and floor repairs for factories and warehouses across Poland. Discuss your project and request a quote.";

const site = "https://www.flowtex.pl";
const photos = {
  esd: { src: esdPhoto, alt: "ESD floor in an electronics production area", width: 1200, height: 630 },
  drainage: { src: drainagePhoto, alt: "Resin floor around an industrial drain in a food processing plant", width: 1122, height: 714 },
};

export default function EnglishHome({ page }) {
  const title = page ? `${page.title} | FLOWTEX Polska` : homeTitle;
  const description = page?.description ?? homeDescription;
  const url = site + (page?.path ?? "/en");
  const polishPath = page?.polishPath ?? "/";
  const photo = photos[page?.photo];
  const related = page ? ENGLISH_PAGES.filter((item) => page.related.includes(item.path)) : [];

  return (
    <div style={{ backgroundColor: COLORS.lightBg, color: COLORS.darkBg, fontFamily: "'IBM Plex Sans', sans-serif" }}>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        {photo && <meta property="og:image" content={site + photo.src} />}
        {photo && <meta name="twitter:image" content={site + photo.src} />}
        {page && <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": photo ? "Article" : "Service",
          name: page.title,
          description,
          url,
          ...(photo ? {
            headline: page.title,
            inLanguage: "en",
            image: site + photo.src,
            author: { "@id": `${site}/#organization` },
            publisher: { "@id": `${site}/#organization` },
          } : {
            serviceType: page.title,
            areaServed: { "@type": "Country", name: "Poland" },
            provider: { "@id": `${site}/#organization` },
          }),
        })}</script>}
        <meta property="og:locale" content="en_GB" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="canonical" href={url} />
        <link rel="alternate" hrefLang="pl" href={site + polishPath} />
        <link rel="alternate" hrefLang="en" href={url} />
      </Helmet>
      <header style={{ backgroundColor: COLORS.darkBg, color: COLORS.white }}>
        <nav aria-label="Main navigation" className="max-w-6xl mx-auto px-5 py-4 sm:px-8 flex items-center justify-between gap-4">
          <a href="/en" className="font-bold text-lg">FLOWTEX Polska</a>
          <div className="flex items-center gap-5 text-sm font-semibold">
            <a href="#en-contact" className="underline underline-offset-4">Contact</a>
            <a href={polishPath} hrefLang="pl" lang="pl" aria-label="Wersja polska" className="underline underline-offset-4">PL</a>
          </div>
        </nav>
      </header>
      <main>
        <section style={{ backgroundColor: COLORS.darkBg, color: COLORS.white }}>
          <div className="max-w-6xl mx-auto px-5 pt-12 pb-16 sm:px-8 sm:pt-20 sm:pb-24">
            <h1 className="max-w-3xl text-4xl sm:text-6xl leading-tight font-bold">{page?.title ?? "Industrial flooring contractor in Poland"}</h1>
            <p className="mt-5 max-w-2xl text-lg" style={{ color: COLORS.mutedOnDark }}>
              {page?.description ?? "We install and refurbish floors for factories, warehouses and food processing plants across Poland. We help you choose a system based on traffic, cleaning, chemical exposure and the time available for installation."}
            </p>
            <a href="#en-contact" className="mt-7 inline-block rounded-sm px-5 py-3 font-semibold" style={{ backgroundColor: COLORS.white, color: COLORS.darkBg }}>Request a quote</a>
          </div>
        </section>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          {page ? (
            <article className="py-12 sm:py-16 max-w-3xl">
              {photo && <img {...photo} className="w-full h-auto rounded-sm mb-8" />}
              {page.sections.map(([heading, text]) => (
                <section key={heading} className="mb-7">
                  <h2 className="text-2xl font-bold">{heading}</h2>
                  <p className="mt-2">{text}</p>
                </section>
              ))}
              <h2 className="text-2xl font-bold">Related pages</h2>
              <ul className="mt-3 space-y-2">
                {related.map((item) => <li key={item.path}><a href={item.path} className="underline underline-offset-4">{item.title}</a></li>)}
              </ul>
            </article>
          ) : (
            <>
              <section className="py-12 sm:py-16">
                <h2 className="text-3xl font-bold">Flooring services</h2>
                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  <article className="border-t pt-4" style={{ borderColor: COLORS.borderOnLight }}>
                    <h3 className="text-xl font-semibold"><a href="/en/industrial-resin-flooring" className="underline underline-offset-4">Resin flooring</a></h3>
                    <p className="mt-2">Epoxy, polyurethane and polyurethane cement systems for production, storage and wet processing areas.</p>
                  </article>
                  <article className="border-t pt-4" style={{ borderColor: COLORS.borderOnLight }}>
                    <h3 className="text-xl font-semibold"><a href="/en/esd-flooring" className="underline underline-offset-4">ESD flooring</a></h3>
                    <p className="mt-2">Electrostatic discharge control flooring for electronics manufacturing, with earthing connections and electrical testing after installation.</p>
                  </article>
                  <article className="border-t pt-4" style={{ borderColor: COLORS.borderOnLight }}>
                    <h3 className="text-xl font-semibold"><a href="/en/industrial-floor-repairs" className="underline underline-offset-4">Floor repairs and refurbishment</a></h3>
                    <p className="mt-2">Local repairs to damaged coatings, joints and floors around drains. We plan the work around the site's operating schedule where the area can be isolated.</p>
                  </article>
                </div>
              </section>
              <section className="border-t py-12 sm:py-16" style={{ borderColor: COLORS.borderOnLight }}>
                <h2 className="text-3xl font-bold">Selected projects</h2>
                <div className="mt-6 grid gap-8 md:grid-cols-2">
                  <article>
                    <img src={esdPhoto} alt="ESD floor in an electronics production area" width="1200" height="630" loading="lazy" decoding="async" className="aspect-video w-full rounded-sm object-cover" />
                    <h3 className="mt-4 text-xl font-semibold">700 m² of ESD flooring for electronics manufacturing</h3>
                    <p className="mt-2">We installed an ESD flooring system for an electronics production area and checked the electrical properties of the finished floor.</p>
                    <a href="/en/esd-flooring-case-study" className="mt-3 inline-block underline underline-offset-4">Read the ESD case study</a>
                  </article>
                  <article>
                    <img src={drainagePhoto} alt="Resin floor around an industrial drain in a food processing plant" width="1122" height="714" loading="lazy" decoding="async" className="aspect-video w-full rounded-sm object-cover" />
                    <h3 className="mt-4 text-xl font-semibold">Drain-area floor repair before a food safety audit</h3>
                    <p className="mt-2">At a food plant in the Mazowieckie region, we rebuilt the edge around the drain, corrected the slope and reinstated the polyurethane cement floor. The work took two days, and the area reopened before the audit.</p>
                    <a href="/en/drainage-floor-repair-case-study" className="mt-3 inline-block underline underline-offset-4">Read the drainage case study</a>
                  </article>
                </div>
              </section>
            </>
          )}
          <section id="en-contact" className="border-t py-12 sm:py-16" style={{ borderColor: COLORS.borderOnLight }}>
            <h2 className="text-3xl font-bold">Request a flooring quote</h2>
            <p className="mt-3 max-w-2xl">Send us the site location, approximate floor area and how the space is used. For repairs, include photos of the affected area and any dates when it can be taken out of service.</p>
            <div className="mt-5 flex flex-wrap gap-5 font-semibold">
              <a href="mailto:kontakt@flowtex.pl" className="underline underline-offset-4">kontakt@flowtex.pl</a>
              <a href="tel:+48507394552" className="underline underline-offset-4">+48 507 394 552</a>
            </div>
          </section>
        </div>
      </main>
      <footer className="border-t" style={{ borderColor: COLORS.borderOnLight }}>
        <div className="max-w-6xl mx-auto px-5 py-5 sm:px-8 flex flex-wrap gap-4 text-sm">
          <span>FLOWTEX Polska · Ciółkowo Małe 32, 07-215 Ciółkowo Małe, Poland</span>
          <a href="/polityka-prywatnosci" hrefLang="pl" className="underline">Privacy policy (Polish)</a>
          {ANALYTICS_ENABLED && <button type="button" onClick={openConsentSettings} className="underline">Cookie settings</button>}
        </div>
      </footer>
      <CookieNotice language="en" />
    </div>
  );
}
