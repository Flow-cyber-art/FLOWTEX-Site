import React, { useState } from "react";
import { COLORS, ACCENT_TEXT } from "../theme.js";
import { Link } from "react-router-dom";
import { Layers, Phone, Mail, Menu, X, ChevronDown, Wrench, Search, ListChecks, Linkedin, Facebook, MapPin } from "lucide-react";
import { OFFER_GROUPS } from "../data/services.js";
import CookieNotice from "./CookieNotice.jsx";
import ContactFab from "./ContactFab.jsx";
import { ANALYTICS_ENABLED, openConsentSettings } from "../utils/analytics.js";

const NAV_LINKS = [
  { href: "/realizacje", label: "Realizacje" },
  { href: "/poradniki", label: "Poradniki" },
  { href: "/o-firmie", label: "O firmie" },
  { href: "/kontakt", label: "Kontakt" },
];

// Narzędzia interaktywne wydzielone z płaskiej listy do osobnego, wyróżnionego
// menu — to nasz najmocniejszy element konwersji, więc nie może ginąć
// pomiędzy zwykłymi linkami ("Certyfikaty" połączone z sekcją #certyfikaty
// na stronie głównej, zamiast osobnej pozycji w menu).
const TOOL_LINKS = [
  { href: "/dobor-posadzki", label: "Dobór posadzki", desc: "Odpowiedz na pytania, poznaj dopasowanie %", icon: ListChecks },
  { href: "/katalog-wad", label: "Katalog wad", desc: "Rozpoznaj objaw, poznaj przyczynę i naprawę", icon: Search },
];

// Linki w NAV_LINKS mieszają dwa typy: kotwice na stronie głównej ("/#sekcja")
// i prawdziwe podstrony ("/realizacje"). Kotwice muszą zostać zwykłym <a>
// (żeby zadziałało przewijanie do sekcji również z innej podstrony), a
// prawdziwe trasy powinny iść przez <Link> z react-router, żeby nawigacja
// była płynna (SPA), bez przeładowania całej strony.
function NavLink({ href, label, className, style, onClick }) {
  if (href.startsWith("/#")) {
    return (
      <a href={href} className={className} style={style} onClick={onClick}>
        {label}
      </a>
    );
  }
  return (
    <Link to={href} className={className} style={style} onClick={onClick}>
      {label}
    </Link>
  );
}

// Rozwijane menu (hover na desktopie, klik na dotyku/klawiaturze).
function NavDropdown({ label, icon: Icon, items, width = "w-72" }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        className="ft-mono text-xs tracking-wider uppercase flex items-center gap-1.5 px-3 py-1.5 rounded-sm transition-colors"
        style={{ color: COLORS.accent, backgroundColor: open ? "rgba(226,167,59,0.12)" : "transparent" }}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {Icon && <Icon size={13} />} {label}{" "}
        <ChevronDown size={13} style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .15s" }} />
      </button>
      {open && (
        <div className={`absolute left-0 top-full pt-3 ${width}`} role="menu">
          <div className="rounded-sm overflow-hidden border shadow-xl" style={{ backgroundColor: COLORS.darkBg, borderColor: COLORS.darkBorder }}>
            {items.map((t) => {
              const ItemIcon = t.icon;
              if (t.heading) {
                return (
                  <div key={t.heading} className="px-4 pt-3 pb-1.5 ft-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: COLORS.mutedOnDarkSecondary, borderBottom: `1px solid ${COLORS.darkBorder}` }}>
                    {t.heading}
                  </div>
                );
              }
              return (
                <Link
                  key={t.href}
                  to={t.href}
                  className="flex items-start gap-3 px-4 py-3 hover:opacity-80 transition-opacity"
                  style={{ borderBottom: `1px solid ${COLORS.darkBorder}` }}
                  onClick={() => setOpen(false)}
                >
                  {ItemIcon && <ItemIcon size={18} style={{ color: COLORS.accent, flexShrink: 0, marginTop: 2 }} />}
                  <span>
                    <span className="block ft-mono text-xs uppercase tracking-wide" style={{ color: COLORS.white, fontWeight: 600 }}>
                      {t.label}
                    </span>
                    {t.desc && (
                      <span className="block text-xs mt-1" style={{ color: COLORS.mutedOnDark }}>{t.desc}</span>
                    )}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// Szerokie menu oferty: trzy grupy obok siebie, zamiast jednej długiej kolumny
// (15 pozycji nie mieści się w pionie). Panel jest zakotwiczony do nagłówka
// (sticky = punkt odniesienia), więc zajmuje szerokość strony, a nie przycisku.
function OfferMegaMenu() {
  const [open, setOpen] = useState(false);
  const [branze, technologie, uslugi] = OFFER_GROUPS;
  const link = (svc) => (
    <li key={svc.slug} className="break-inside-avoid">
      <Link
        to={`/${svc.slug}`}
        onClick={() => setOpen(false)}
        className="block py-1.5 text-[15px] leading-snug hover:underline underline-offset-4"
        style={{ color: COLORS.white }}
      >
        {svc.title}
      </Link>
    </li>
  );
  const heading = (label) => (
    <div className="ft-mono text-[11px] uppercase tracking-[0.2em] mb-3 pb-2 border-b" style={{ color: COLORS.accent, borderColor: COLORS.darkBorder }}>
      {label}
    </div>
  );
  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        className="ft-mono text-xs tracking-wider uppercase flex items-center gap-1.5 px-3 py-1.5 rounded-sm transition-colors"
        style={{ color: COLORS.accent, backgroundColor: open ? "rgba(226,167,59,0.12)" : "transparent" }}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        Oferta{" "}
        <ChevronDown size={13} style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .15s" }} />
      </button>
      {open && (
        <div
          className="absolute left-0 right-0 top-full border-t shadow-2xl"
          style={{ backgroundColor: COLORS.darkBg, borderColor: COLORS.darkBorder }}
          role="menu"
        >
          <div className="max-w-7xl mx-auto px-8 py-7 grid grid-cols-4 gap-x-10">
            <div>
              {heading(branze.label)}
              <ul>{branze.items.map(link)}</ul>
            </div>
            <div>
              {heading(technologie.label)}
              <ul>{technologie.items.map(link)}</ul>
            </div>
            <div className="col-span-2">
              {heading(uslugi.label)}
              <ul className="columns-2 gap-x-10">{uslugi.items.map(link)}</ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Sekcja zwijana w menu mobilnym — krótka lista zamiast 15 pozycji naraz.
function MobileAccordion({ label, icon, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b" style={{ borderColor: COLORS.darkBorder }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between py-4 ft-mono text-sm tracking-wider uppercase"
        style={{ color: COLORS.accent }}
      >
        <span className="flex items-center gap-2">{icon}{label}</span>
        <ChevronDown size={18} style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform .15s" }} />
      </button>
      {open && <div className="pb-2">{children}</div>}
    </div>
  );
}

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cookieBannerVisible, setCookieBannerVisible] = useState(false);

  return (
    <div
      style={{ fontFamily: "'IBM Plex Sans', sans-serif", backgroundColor: COLORS.lightBg, color: COLORS.darkBg }}
      className="min-h-screen w-full flex flex-col"
    >
      <style dangerouslySetInnerHTML={{ __html: `
        .ft-display { font-family: 'Big Shoulders Display', sans-serif; }
        .ft-mono { font-family: 'IBM Plex Mono', monospace; }
        .ft-tracking-wide { letter-spacing: 0.2em; }
        .ft-label-sm { font-size: 10px; }
        @media (min-width: 768px) { .ft-label-sm-responsive { font-size: 11px; } }
        .ft-hero-heading { line-height: 0.95; }
        .ft-hero-visual { height: 360px; }
        @media (min-width: 768px) { .ft-hero-visual { height: 440px; } }
        html { scroll-behavior: smooth; overflow-anchor: none; }
        * { -webkit-tap-highlight-color: transparent; overflow-anchor: none; }
        .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        @media (prefers-reduced-motion: reduce) {
          .reveal { opacity: 1; transform: none; transition: none; }
        }
        /* Kafelki (usługi, karty) — efekt "wciśniętego przycisku": lekkie
           zmniejszenie przy kliknięciu/dotknięciu, które od razu wraca do
           normy — a nie trwałe zaszarzenie tła. Hover (podświetlenie na
           najechanie) działa TYLKO na urządzeniach z myszką, żeby telefony
           nie "przyklejały" tego stanu po dotknięciu. */
        .ft-tile {
          transition: transform 0.15s ease, background-color 0.15s ease;
          -webkit-tap-highlight-color: transparent;
        }
        @media (hover: hover) and (pointer: fine) {
          .ft-tile:hover { background-color: rgba(255, 255, 255, 0.04); }
        }
        .ft-tile:active { transform: scale(0.97); }
        .ft-tile:focus { outline: none; }
        .ft-tile:focus-visible {
          outline: 2px solid ${COLORS.white};
          outline-offset: -2px;
        }
        .ft-outline-btn { transition: background-color 0.2s ease, transform 0.15s ease; }
        @media (hover: hover) and (pointer: fine) {
          .ft-outline-btn:hover { background-color: rgba(255, 255, 255, 0.06); }
        }
        .ft-outline-btn:active { transform: scale(0.97); }

        /* Pulsujący pierścień pod pływającym przyciskiem kontaktu (mobile) */
        @keyframes ftFabPulse {
          0% { transform: scale(1); opacity: 0.55; }
          70% { transform: scale(1.7); opacity: 0; }
          100% { transform: scale(1.7); opacity: 0; }
        }
        .ft-fab-pulse { animation: ftFabPulse 2.2s ease-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .ft-fab-pulse { animation: none; opacity: 0; }
        }
      ` }} />

      {/* TOP BAR — telefon / e-mail */}
      <div className="hidden md:block" style={{ backgroundColor: COLORS.darkBgSecondary }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 h-9 flex items-center justify-end gap-6 ft-mono text-xs">
          <a
            href="tel:+48507394552"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            style={{ color: COLORS.mutedOnDark }}
          >
            <Phone size={13} style={{ color: COLORS.white }} />
            +48 507 394 552
          </a>
          <a
            href="mailto:kontakt@flowtex.pl"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            style={{ color: COLORS.mutedOnDark }}
          >
            <Mail size={13} style={{ color: COLORS.white }} />
            kontakt@flowtex.pl
          </a>
        </div>
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-50" style={{ backgroundColor: COLORS.darkBg }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2 whitespace-nowrap shrink-0" style={{ color: COLORS.white }}>
            {/* Uwaga: w palecie ACME accent == darkBg (celowo, wg oryginalnej
                strony wzorcowej), więc po ewentualnym przełączeniu z powrotem
                na ACME ta ikona/napis "Polska" znów zleją się z tłem — to
                echo tamtej marki, nie błąd. Przy ACME warto wrócić do
                COLORS.white w tych dwóch miejscach (tak jak było wcześniej). */}
            <Layers size={26} style={{ color: COLORS.accent }} />
            <span className="ft-display text-xl md:text-2xl tracking-wide" style={{ fontWeight: 700 }}>
              FLOWTEX <span style={{ color: COLORS.accent }}>Polska</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
            <OfferMegaMenu />
            <NavDropdown label="Narzędzia" icon={Wrench} items={TOOL_LINKS} />
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.href}
                href={l.href}
                label={l.label}
                className="ft-mono text-xs tracking-wider uppercase hover:opacity-70 transition-opacity whitespace-nowrap"
                style={{ color: COLORS.mutedOnDark }}
              />
            ))}
            <Link
              to="/kontakt"
              className="ft-mono text-xs tracking-wider uppercase px-4 py-2 rounded-sm hover:opacity-90 transition"
              style={{ backgroundColor: COLORS.accent, color: ACCENT_TEXT, fontWeight: 600 }}
            >
              Wycena
            </Link>
          </nav>

          <div className="flex items-center gap-4 lg:hidden">
            <button
              style={{ color: COLORS.white }}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden px-5 pb-6 flex flex-col text-left" style={{ backgroundColor: COLORS.darkBg, maxHeight: "calc(100dvh - 4rem)", overflowY: "auto", overscrollBehavior: "contain" }}>
            <MobileAccordion label="Oferta">
              {OFFER_GROUPS.map((g) => (
                <div key={g.label} className="mb-4 last:mb-1">
                  <div className="ft-mono text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: COLORS.mutedOnDarkSecondary }}>
                    {g.label}
                  </div>
                  {g.items.map((svc) => (
                    <Link
                      key={svc.slug}
                      to={`/${svc.slug}`}
                      onClick={() => setMenuOpen(false)}
                      className="block py-2.5 text-[15px] leading-snug"
                      style={{ color: COLORS.white }}
                    >
                      {svc.title}
                    </Link>
                  ))}
                </div>
              ))}
            </MobileAccordion>
            <MobileAccordion label="Narzędzia" icon={<Wrench size={14} />}>
              {TOOL_LINKS.map((t) => (
                <Link
                  key={t.href}
                  to={t.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-2.5 text-[15px] leading-snug"
                  style={{ color: COLORS.white }}
                >
                  {t.label}
                  <span className="block text-xs mt-0.5" style={{ color: COLORS.mutedOnDarkSecondary }}>{t.desc}</span>
                </Link>
              ))}
            </MobileAccordion>
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.href}
                href={l.href}
                label={l.label}
                onClick={() => setMenuOpen(false)}
                className="ft-mono text-sm tracking-wider uppercase py-4 border-b"
                style={{ color: COLORS.white, borderColor: COLORS.darkBorder }}
              />
            ))}
            <Link to="/kontakt" onClick={() => setMenuOpen(false)} className="ft-mono text-sm uppercase tracking-wider px-4 py-3 rounded-sm text-center mt-5" style={{ backgroundColor: COLORS.accent, color: ACCENT_TEXT, fontWeight: 600 }}>
              Wycena
            </Link>
            <div className="flex flex-col gap-1 mt-4">
              <a href="tel:+48507394552" className="ft-mono text-sm py-2" style={{ color: COLORS.mutedOnDark }}>
                +48 507 394 552
              </a>
              <a href="mailto:kontakt@flowtex.pl" className="ft-mono text-sm py-2" style={{ color: COLORS.mutedOnDark }}>
                kontakt@flowtex.pl
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      {/* FOOTER */}
      <footer style={{ backgroundColor: COLORS.darkBg }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Layers size={22} style={{ color: COLORS.accent }} />
              <span className="ft-display text-lg" style={{ color: COLORS.white, fontWeight: 700 }}>
                FLOWTEX <span style={{ color: COLORS.accent }}>Polska</span>
              </span>
            </div>
            <p className="text-sm" style={{ color: COLORS.mutedOnDarkSecondary }}>
              Paweł Najduk, NIP: 7621744781
              <br />
              Ciółkowo Małe 32, 07-215 Ciółkowo Małe
            </p>
          </div>
          <div>
            <div className="ft-mono text-xs uppercase tracking-wide mb-3" style={{ color: COLORS.white }}>
              Nasze usługi
            </div>
            <ul className="space-y-2 text-sm" style={{ color: COLORS.mutedOnDark }}>
              {OFFER_GROUPS.map((g) => (
                <React.Fragment key={g.label}>
                  <li className="ft-mono text-[10px] uppercase tracking-[0.2em] pt-2" style={{ color: COLORS.mutedOnDarkSecondary }}>
                    {g.label}
                  </li>
                  {g.items.map((s) => (
                    <li key={s.slug}>
                      <Link to={`/${s.slug}`} className="hover:opacity-80 transition-opacity">
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </React.Fragment>
              ))}
            </ul>
          </div>
          <div>
            <div className="ft-mono text-xs uppercase tracking-wide mb-3" style={{ color: COLORS.white }}>
              Wiedza i narzędzia
            </div>
            <ul className="space-y-2 text-sm" style={{ color: COLORS.mutedOnDark }}>
              {TOOL_LINKS.map((t) => (
                <li key={t.href}>
                  <Link to={t.href} className="hover:opacity-80 transition-opacity">
                    {t.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/poradniki" className="hover:opacity-80 transition-opacity">
                  Poradniki
                </Link>
              </li>
              <li>
                <Link to="/realizacje" className="hover:opacity-80 transition-opacity">
                  Realizacje
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="ft-mono text-xs uppercase tracking-wide mb-3" style={{ color: COLORS.white }}>
              Kontakt
            </div>
            <ul className="space-y-2 text-sm" style={{ color: COLORS.mutedOnDark }}>
              <li>+48 507 394 552</li>
              <li>kontakt@flowtex.pl</li>
              <li>
                <Link to="/o-firmie" className="hover:opacity-80 transition-opacity">O firmie</Link>
              </li>
              <li className="pt-2 flex items-center gap-4">
                <a href="https://www.linkedin.com/company/flowtex-polska/" target="_blank" rel="noopener noreferrer" aria-label="FLOWTEX Polska na LinkedIn" className="hover:opacity-80 transition-opacity">
                  <Linkedin size={18} style={{ color: COLORS.white }} />
                </a>
                <a href="https://www.facebook.com/FlowtexPolska" target="_blank" rel="noopener noreferrer" aria-label="FLOWTEX Polska na Facebooku" className="hover:opacity-80 transition-opacity">
                  <Facebook size={18} style={{ color: COLORS.white }} />
                </a>
                <a href="https://www.google.com/maps/place/?q=place_id:ChIJNacXGtWMHkcRj4L0IyaJbmc" target="_blank" rel="noopener noreferrer" aria-label="FLOWTEX Polska w Mapach Google i opinie" className="hover:opacity-80 transition-opacity">
                  <MapPin size={18} style={{ color: COLORS.white }} />
                </a>
              </li>
              <li>
                <Link to="/kontakt" className="hover:opacity-80 transition-opacity" style={{ color: COLORS.white }}>
                  Formularz zapytania ofertowego
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="border-t px-5 md:px-8 py-5 text-xs ft-mono flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderColor: COLORS.darkBorder, color: COLORS.mutedOnDarkSecondary }}
        >
          <span suppressHydrationWarning>
            © FLOWTEX Polska {new Date().getFullYear()} — Wszelkie prawa zastrzeżone.
          </span>
          <span className="flex items-center gap-4">
            <Link to="/polityka-prywatnosci" className="hover:opacity-80" style={{ color: COLORS.mutedOnDarkSecondary }}>
              Polityka Prywatności
            </Link>
            <Link to="/polityka-cookies" className="hover:opacity-80" style={{ color: COLORS.mutedOnDarkSecondary }}>
              Polityka Cookies
            </Link>
            {ANALYTICS_ENABLED && (
              <button type="button" onClick={openConsentSettings} className="hover:opacity-80" style={{ color: COLORS.mutedOnDarkSecondary }}>
                Ustawienia cookies
              </button>
            )}
          </span>
        </div>
      </footer>

      <CookieNotice onVisibilityChange={setCookieBannerVisible} />
      <ContactFab liftedOffset={cookieBannerVisible} />
    </div>

  );
}
