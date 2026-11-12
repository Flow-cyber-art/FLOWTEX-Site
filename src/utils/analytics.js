// Analityka: Google Tag Manager albo GA4 (gtag.js), zgoda na cookies
// i oznaczanie źródeł zapytań.
//
// Włączanie (zmienne środowiskowe, patrz .env.example i README):
//   VITE_GTM_ID = GTM-XXXXXXX   -> ładuje kontener GTM; zdarzenia trafiają do
//                                  dataLayer jako { event: "nazwa", ...parametry }
//   VITE_GA4_ID = G-XXXXXXXXXX  -> bez GTM: ładuje gtag.js i wysyła zdarzenia
//                                  wprost do GA4 (nic nie trzeba konfigurować w GTM)
// Jeśli ustawione są obie, używany jest GTM (żeby nie liczyć zdarzeń podwójnie).
// Domyślnie działa kontener GTM-N44NN9NF (patrz DEFAULT_GTM_ID niżej).
// VITE_GTM_ID=off wyłącza analitykę: nic się nie ładuje, a baner cookies
// jest zwykłym komunikatem informacyjnym.
//
// Zgoda: skrypty Google ładują się DOPIERO po kliknięciu "Akceptuję" w banerze.
// Przed zgodą (i po odmowie) nie ma żadnych żądań do Google ani cookies
// analitycznych. Zgody reklamowe (ad_*) są zawsze odrzucone — strona nie
// prowadzi remarketingu.

// Identyfikator kontenera GTM jest publiczny (widać go w kodzie każdej strony),
// więc kontener FLOWTEX jest wartością domyślną. VITE_GTM_ID pozwala go
// podmienić, a VITE_GTM_ID=off wyłącza analitykę (np. na środowisku testowym).
const DEFAULT_GTM_ID = "GTM-N44NN9NF";
const GTM_ENV = import.meta.env.VITE_GTM_ID;
const GTM_ID = GTM_ENV === "off" ? "" : GTM_ENV || DEFAULT_GTM_ID;
const GA4_ID = import.meta.env.VITE_GA4_ID || "";
export const ANALYTICS_ENABLED = Boolean(GTM_ID || GA4_ID);

const CONSENT_KEY = "flowtex_cookie_consent"; // "granted" | "denied"
const ATTRIBUTION_KEY = "flowtex_attribution"; // pierwsza wizyta (tylko po zgodzie)
const isBrowser = typeof window !== "undefined";

/* ------------------------------------------------------------------ */
/* Zgoda                                                               */
/* ------------------------------------------------------------------ */

function readStorage(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key, value) {
  try {
    if (value === null) window.localStorage.removeItem(key);
    else window.localStorage.setItem(key, value);
  } catch {
    // brak localStorage (np. tryb prywatny) — wybór obowiązuje do końca wizyty
  }
}

let consentInMemory = null;

export function getConsent() {
  if (!isBrowser) return null;
  return consentInMemory || readStorage(CONSENT_KEY);
}

export function setConsent(value) {
  if (!isBrowser) return;
  consentInMemory = value;
  writeStorage(CONSENT_KEY, value);
  if (value === "granted") {
    loadAnalytics();
    persistFirstTouch();
  } else {
    writeStorage(ATTRIBUTION_KEY, null);
    if (loaded) {
      gtag("consent", "update", { analytics_storage: "denied" });
      // Usuwamy cookies GA zapisane wcześniej (po wycofaniu zgody).
      document.cookie.split(";").forEach((c) => {
        const name = c.split("=")[0].trim();
        if (name === "_ga" || name.startsWith("_ga_")) {
          const host = window.location.hostname.replace(/^www\./, "");
          document.cookie = `${name}=; Max-Age=0; path=/; domain=.${host}`;
          document.cookie = `${name}=; Max-Age=0; path=/`;
        }
      });
    }
  }
}

/** Otwiera ponownie baner (link "Ustawienia cookies" w stopce). */
export function openConsentSettings() {
  if (isBrowser) window.dispatchEvent(new Event("flowtex:open-consent"));
}

/* ------------------------------------------------------------------ */
/* Ładowanie GTM / GA4                                                 */
/* ------------------------------------------------------------------ */

let loaded = false;

function gtag() {
  // gtag wymaga obiektu `arguments`, nie tablicy.
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}

function injectScript(src) {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

function loadAnalytics() {
  if (!isBrowser || loaded || !ANALYTICS_ENABLED) return;
  loaded = true;
  window.dataLayer = window.dataLayer || [];
  // Consent Mode v2: analityka dozwolona (użytkownik właśnie ją zaakceptował),
  // sygnały reklamowe zawsze odrzucone.
  gtag("consent", "default", {
    analytics_storage: "granted",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  if (GTM_ID) {
    window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
    injectScript(`https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(GTM_ID)}`);
  } else {
    gtag("js", new Date());
    gtag("config", GA4_ID);
    injectScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA4_ID)}`);
  }
}

/* ------------------------------------------------------------------ */
/* Zdarzenia                                                           */
/* ------------------------------------------------------------------ */

/**
 * Wysyła zdarzenie. Bez danych osobowych — nigdy nie przekazuj tu e-maila,
 * telefonu, nazwiska ani nazwy firmy.
 * Zdarzenia sprzed zgody czekają w dataLayer i zostaną przetworzone, jeśli
 * użytkownik zaakceptuje analitykę w trakcie tej samej wizyty.
 */
export function track(name, params = {}) {
  if (!isBrowser || !ANALYTICS_ENABLED) return;
  window.dataLayer = window.dataLayer || [];
  const payload = { page_path: window.location.pathname, ...params };
  if (GTM_ID) window.dataLayer.push({ event: name, ...payload });
  else gtag("event", name, payload);
}

function linkLocation(el) {
  if (el.closest("header")) return "naglowek";
  if (el.closest("footer")) return "stopka";
  if (el.closest(".md\\:hidden.fixed")) return "przycisk_mobilny";
  const section = el.closest("section[id]");
  return section ? section.id : "tresc";
}

/* ------------------------------------------------------------------ */
/* Źródło wizyty                                                       */
/* ------------------------------------------------------------------ */

const AI_HOSTS = ["chatgpt.com", "chat.openai.com", "perplexity.ai", "gemini.google.com", "copilot.microsoft.com", "claude.ai"];
const SEARCH_HOSTS = ["google.", "bing.com", "duckduckgo.com", "yahoo.", "ecosia.org", "seznam.cz", "yandex."];

function detectTouch() {
  const params = new URLSearchParams(window.location.search);
  const clickId = params.get("gclid") || params.get("gbraid") || params.get("wbraid") || "";
  let referrerHost = "";
  try {
    referrerHost = document.referrer ? new URL(document.referrer).hostname.replace(/^www\./, "") : "";
  } catch {
    referrerHost = "";
  }
  const ownHost = window.location.hostname.replace(/^www\./, "");
  const internal = referrerHost === ownHost;

  let source = params.get("utm_source") || "";
  let medium = params.get("utm_medium") || "";
  if (!source) {
    if (clickId) [source, medium] = ["google", "cpc"];
    else if (internal) [source, medium] = ["(nieznane)", "(nawigacja wewnętrzna)"];
    else if (!referrerHost) [source, medium] = ["(direct)", "(none)"];
    else if (AI_HOSTS.some((h) => referrerHost.endsWith(h))) [source, medium] = [referrerHost, "ai"];
    else if (SEARCH_HOSTS.some((h) => referrerHost.includes(h))) [source, medium] = [referrerHost, "organic"];
    else [source, medium] = [referrerHost, "referral"];
  }
  return {
    source,
    medium,
    campaign: params.get("utm_campaign") || "",
    term: params.get("utm_term") || "",
    clickId,
    referrer: internal ? "" : document.referrer || "",
    landing: window.location.pathname,
    date: new Date().toISOString().slice(0, 10),
  };
}

let sessionTouch = null;

function readFirstTouch() {
  try {
    return JSON.parse(readStorage(ATTRIBUTION_KEY) || "null");
  } catch {
    return null;
  }
}

function persistFirstTouch() {
  if (!sessionTouch || readFirstTouch()) return;
  writeStorage(ATTRIBUTION_KEY, JSON.stringify(sessionTouch));
}

/**
 * Źródło bieżącej wizyty (`session`) i pierwszej zapamiętanej (`first`).
 * Pierwsza wizyta jest zapamiętywana w przeglądarce tylko po zgodzie na
 * analitykę; bez zgody źródło żyje wyłącznie w pamięci tej karty.
 */
export function getAttribution() {
  if (!isBrowser) return { session: null, first: null };
  return { session: sessionTouch, first: readFirstTouch() || sessionTouch };
}

/* ------------------------------------------------------------------ */
/* Start (wywoływany raz z main.jsx)                                   */
/* ------------------------------------------------------------------ */

export function initAnalytics() {
  if (!isBrowser) return;
  sessionTouch = detectTouch();
  if (getConsent() === "granted") {
    loadAnalytics();
    persistFirstTouch();
  }
  document.addEventListener("click", (e) => {
    const link = e.target.closest?.('a[href^="tel:"], a[href^="mailto:"]');
    if (!link) return;
    track(link.getAttribute("href").startsWith("tel:") ? "click_phone" : "click_email", {
      link_location: linkLocation(link),
    });
  });
}
