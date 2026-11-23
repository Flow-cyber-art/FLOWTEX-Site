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

// Zapis leada do arkusza Google przez /api/lead (api/lead.js). Nie czekamy na
// wynik i nie przerywamy formularza przy błędzie — mail EmailJS idzie niezależnie.
// keepalive: żądanie dokończy się nawet po przejściu na stronę /dziekujemy.
function saveLead(lead) {
  try {
    fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(lead),
      keepalive: true,
    }).catch(() => {});
  } catch {
    // brak fetch/keepalive — pomijamy, lead i tak idzie mailem
  }
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

  saveLead({
    lead_id: id,
    form_id: formId,
    name: form.name,
    company: form.company,
    email: form.email,
    phone: form.phone,
    message: form.message, // zawiera już kontekst i dane o obiekcie (ContactForm)
    page_url: pageUrl,
    source: describeTouch(session),
    first_source: sameTouch ? "" : describeTouch(first),
  });

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
    lead_landing_page: session?.landing || "",
    ...trackParams,
  });
  return id;
}

/**
 * Wysyłka materiału do pobrania (lead magnet): mail do firmy z danymi osoby
 * i, jeśli skonfigurowano szablon VITE_EMAILJS_TEMPLATE_MATERIAL_ID, mail do
 * osoby z linkiem do pliku. Zwraca { id, emailed } — emailed=false oznacza, że
 * nie udało się wysłać maila z linkiem (np. brak szablonu w EmailJS).
 *
 * @param form    { name, company, email }
 * @param options { formId, resourceName, resourceUrl }
 */
export async function sendMaterialLead(form, { formId, resourceName, resourceUrl }) {
  const id = leadId();
  const { session, first } = getAttribution();
  const pageUrl = window.location.href.split("#")[0];
  const sameTouch = !first || !session || (first.date === session.date && first.landing === session.landing && first.source === session.source);
  const sourceBlock = [
    "",
    "--- Źródło zgłoszenia (dodane automatycznie) ---",
    `Numer zgłoszenia: ${id}`,
    `Wysłano ze strony: ${pageUrl}`,
    `Źródło wizyty: ${describeTouch(session)}`,
    ...(sameTouch ? [] : [`Pierwsza wizyta: ${describeTouch(first)}`]),
  ].join("\n");

  const downloadUrl = new URL(resourceUrl, window.location.origin).href;
  const base = {
    name: form.name,
    company: form.company,
    email: form.email,
    phone: "",
    lead_id: id,
    lead_source: session?.source || "",
    lead_medium: session?.medium || "",
    lead_campaign: session?.campaign || "",
    lead_landing_page: session?.landing || "",
    lead_page_url: pageUrl,
    lead_first_source: first ? `${first.source} / ${first.medium}` : "",
    resource_name: resourceName,
    download_url: downloadUrl,
  };

  saveLead({
    lead_id: id,
    form_id: formId,
    resource: resourceName,
    name: form.name,
    company: form.company,
    email: form.email,
    page_url: pageUrl,
    source: describeTouch(session),
    first_source: sameTouch ? "" : describeTouch(first),
  });

  const { default: emailjs } = await import("@emailjs/browser");
  const opts = { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY };
  const service = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  // Osobny szablon na materiały jest opcjonalny (darmowy plan EmailJS ma limit
// 2 szablonów); bez niego link idzie szablonem potwierdzenia dla klienta,
// a link do pliku trafia do zmiennej {{message}}.
const materialTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_MATERIAL_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_CLIENT_ID;

  // Powiadomienie dla firmy jest najważniejsze: dzięki niemu lead nie przepada.
  await emailjs.send(
    service,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ADMIN_ID,
    { ...base, message: `Pobranie materiału: ${resourceName}\n${sourceBlock}` },
    opts
  );

  let emailed = false;
  if (materialTemplate) {
    try {
      await emailjs.send(service, materialTemplate, { ...base, message: `Materiał do pobrania: ${resourceName}\nLink do pliku: ${downloadUrl}` }, opts);
      emailed = true;
    } catch (err) {
      console.error("Nie udało się wysłać maila z materiałem:", err);
    }
  }

  track("request_material", {
    form_id: formId,
    form_location: window.location.pathname,
    lead_context: resourceName.slice(0, 100),
    lead_id: id,
    lead_source: session?.source || "",
    lead_medium: session?.medium || "",
    lead_landing_page: session?.landing || "",
  });
  return { id, emailed };
}
