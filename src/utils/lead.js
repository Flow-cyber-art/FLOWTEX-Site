// Wspólna wysyłka formularza kontaktowego (EmailJS) dla wszystkich formularzy
// na stronie + zdarzenie konwersji i oznaczenie źródła zapytania.
import { track, getAttribution } from "./analytics.js";

function leadId() {
  const d = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  return `FT-${d}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}

function describeTouch(t) {
  if (!t) return "brak danych";
  const parts = [`${t.source} / ${t.medium}`];
  if (t.campaign) parts.push(`kampania: ${t.campaign}`);
  if (t.term) parts.push(`fraza: ${t.term}`);
  if (t.clickId) parts.push("kliknięcie reklamy Google");
  parts.push(`strona wejścia: ${t.landing}`);
  if (t.referrer) parts.push(`odesłanie z: ${t.referrer}`);
  parts.push(t.date);
  return parts.join(" · ");
}

/**
 * Wysyła zapytanie: mail do firmy (z blokiem "Źródło zapytania") i potwierdzenie
 * do klienta (bez tego bloku). Po sukcesie zgłasza zdarzenie `generate_lead`.
 *
 * @param form    { name, company, email, phone, message }
 * @param options { formId, context, trackParams } — formId rozróżnia formularze w
 *                raportach, context to np. nazwa usługi lub wady, trackParams to
 *                dodatkowe parametry zdarzenia (rodzaj, branża, przedział
 *                powierzchni) — wszystko bez danych osobowych
 */
export async function sendLead(form, { formId, context = "", trackParams = {} } = {}) {
  const id = leadId();
  const { session, first } = getAttribution();
  const pageUrl = window.location.href.split("#")[0];
  const sameTouch = !first || !session || (first.date === session.date && first.landing === session.landing && first.source === session.source);

  const sourceBlock = [
    "",
    "--- Źródło zapytania (dodane automatycznie) ---",
    `Numer zapytania: ${id}`,
    `Wysłano ze strony: ${pageUrl}`,
    `Źródło wizyty: ${describeTouch(session)}`,
    ...(sameTouch ? [] : [`Pierwsza wizyta: ${describeTouch(first)}`]),
  ].join("\n");

  const base = {
    name: form.name,
    company: form.company,
    email: form.email,
    phone: form.phone,
    // Pola do opcjonalnego użycia w szablonach EmailJS ({{lead_id}} itd.)
    lead_id: id,
    lead_source: session?.source || "",
    lead_medium: session?.medium || "",
    lead_campaign: session?.campaign || "",
    lead_landing_page: session?.landing || "",
    lead_page_url: pageUrl,
    lead_first_source: first ? `${first.source} / ${first.medium}` : "",
  };

  // @emailjs/browser jest potrzebny wyłącznie w momencie wysyłki — ładujemy
  // go dynamicznie zamiast dołączać do głównego bundla.
  const { default: emailjs } = await import("@emailjs/browser");
  const opts = { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY };
  const service = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  await Promise.all([
    emailjs.send(service, import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN_ID, { ...base, message: `${form.message}\n${sourceBlock}` }, opts),
    emailjs.send(service, import.meta.env.VITE_EMAILJS_TEMPLATE_CLIENT_ID, { ...base, message: form.message }, opts),
  ]);

  track("generate_lead", {
    form_id: formId,
    form_location: window.location.pathname,
    lead_context: context.slice(0, 100),
    lead_id: id,
    lead_source: session?.source || "",
    lead_medium: session?.medium || "",
    ...trackParams,
  });
  return id;
}
