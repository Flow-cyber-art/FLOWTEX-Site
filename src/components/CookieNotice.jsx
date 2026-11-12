import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { COLORS } from "../theme.js";
import { ANALYTICS_ENABLED, getConsent, setConsent } from "../utils/analytics.js";

// Dwa tryby:
//  1) Analityka wyłączona (brak GTM_ID / GA4_ID): zwykły komunikat
//     informacyjny — strona używa tylko plików niezbędnych, więc zgoda nie
//     jest wymagana. Zapamiętujemy wyłącznie fakt zamknięcia komunikatu.
//  2) Analityka włączona: baner zgody z równorzędnymi przyciskami "Odrzuć"
//     i "Akceptuję". Skrypty Google ładują się dopiero po akceptacji
//     (patrz src/utils/analytics.js). Baner można ponownie otworzyć linkiem
//     "Ustawienia cookies" w stopce.
const NOTICE_KEY = "flowtex_cookie_notice_dismissed";

export default function CookieNotice({ onVisibilityChange }) {
  const [visible, setVisible] = useState(false);

  const show = (value) => {
    setVisible(value);
    onVisibilityChange?.(value);
  };

  useEffect(() => {
    let shouldShow = true;
    if (ANALYTICS_ENABLED) {
      shouldShow = !getConsent();
    } else {
      try {
        if (window.localStorage.getItem(NOTICE_KEY)) shouldShow = false;
      } catch {
        // localStorage niedostępny (np. tryb prywatny) — pokaż komunikat
      }
    }
    show(shouldShow);

    const reopen = () => show(true);
    window.addEventListener("flowtex:open-consent", reopen);
    return () => window.removeEventListener("flowtex:open-consent", reopen);
  }, []);

  const dismiss = () => {
    try {
      window.localStorage.setItem(NOTICE_KEY, "1");
    } catch {
      // ignorujemy — brak localStorage nie powinien blokować zamknięcia
    }
    show(false);
  };

  const decide = (value) => {
    setConsent(value);
    show(false);
  };

  if (!visible) return null;

  const buttonClass = "ft-mono text-xs uppercase tracking-wide px-5 py-2.5 flex-shrink-0 transition-opacity hover:opacity-90";

  return (
    <div
      role="dialog"
      aria-label={ANALYTICS_ENABLED ? "Zgoda na pliki cookies" : "Informacja o plikach cookies"}
      className="fixed bottom-0 left-0 right-0 z-50 px-4 py-4 md:px-6"
      style={{ backgroundColor: COLORS.darkBg, borderTop: `1px solid ${COLORS.darkBorder}` }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-4 md:gap-6">
        {ANALYTICS_ENABLED ? (
          <p className="text-xs md:text-sm flex-1" style={{ color: COLORS.mutedOnDark }}>
            Używamy plików niezbędnych do działania strony. Za Twoją zgodą włączymy też analityczne
            pliki cookies Google Analytics, żeby wiedzieć, które treści są przydatne i skąd trafiają
            do nas zapytania. Nie stosujemy cookies reklamowych. Szczegóły w{" "}
            <Link to="/polityka-cookies" className="underline hover:opacity-80" style={{ color: COLORS.accent }}>
              Polityce Cookies
            </Link>
            .
          </p>
        ) : (
          <p className="text-xs md:text-sm flex-1" style={{ color: COLORS.mutedOnDark }}>
            Ta strona wykorzystuje wyłącznie pliki cookies niezbędne do jej prawidłowego działania.
            Nie stosujemy cookies analitycznych ani marketingowych. Szczegóły w{" "}
            <Link to="/polityka-cookies" className="underline hover:opacity-80" style={{ color: COLORS.accent }}>
              Polityce Cookies
            </Link>
            .
          </p>
        )}
        {ANALYTICS_ENABLED ? (
          <div className="flex gap-3 flex-shrink-0">
            <button
              type="button"
              onClick={() => decide("denied")}
              className={buttonClass}
              style={{ border: `1px solid ${COLORS.accent}`, color: COLORS.accent, backgroundColor: "transparent" }}
            >
              Odrzuć
            </button>
            <button
              type="button"
              onClick={() => decide("granted")}
              className={buttonClass}
              style={{ border: `1px solid ${COLORS.accent}`, backgroundColor: COLORS.accent, color: COLORS.accentText }}
            >
              Akceptuję
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={dismiss}
            className={buttonClass}
            style={{ backgroundColor: COLORS.accent, color: COLORS.accentText }}
          >
            Rozumiem
          </button>
        )}
      </div>
    </div>
  );
}
