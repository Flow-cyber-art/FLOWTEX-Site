import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/contact-form.css";
import { sendLead } from "../utils/lead.js";
import { track } from "../utils/analytics.js";

// Wartości list wyboru. Etykiety trafiają do maila w czytelnej formie;
// do GA4 idą te same wartości (bez danych osobowych).
export const REQUEST_TYPES = [
  "Nowa posadzka",
  "Renowacja lub naprawa posadzki",
  "Posadzka ESD",
  "Posadzka antywybuchowa ATEX",
  "Posadzka do clean roomu",
  "Ochrona ścian i odboje",
  "Inne",
];
// Wstępny wybór rodzaju zapytania na podstawie strony usługi, z której klient przychodzi.
export const TYPE_BY_SERVICE = {
  "posadzki-zywiczne": "Nowa posadzka",
  "posadzki-esd": "Posadzka ESD",
  "posadzki-antywybuchowe-atex": "Posadzka antywybuchowa ATEX",
  "posadzki-clean-room": "Posadzka do clean roomu",
  "systemy-odbojowe": "Ochrona ścian i odboje",
  "betonowe-posadzki-przemyslowe": "Nowa posadzka",
  "serwis-posadzek-i-kanalizacji": "Renowacja lub naprawa posadzki",
  "technika-diamentowa": "Renowacja lub naprawa posadzki",
  "renowacja-posadzek-przemyslowych": "Renowacja lub naprawa posadzki",
  "posadzki-dla-przemyslu-spozywczego": "Nowa posadzka",
  "posadzki-dla-przemyslu-farmaceutycznego": "Nowa posadzka",
  "posadzki-epoksydowe": "Nowa posadzka",
  "posadzki-poliuretanowe": "Nowa posadzka",
  "posadzki-do-hal-produkcyjnych-i-magazynow": "Nowa posadzka",
};
export const INDUSTRY_BY_SERVICE = {
  "posadzki-dla-przemyslu-spozywczego": "Przemysł spożywczy",
  "posadzki-dla-przemyslu-farmaceutycznego": "Przemysł farmaceutyczny",
  "posadzki-esd": "Przemysł elektroniczny",
  "posadzki-clean-room": "Przemysł farmaceutyczny",
  "posadzki-do-hal-produkcyjnych-i-magazynow": "Magazyn lub logistyka",
};
const INDUSTRIES = [
  "Przemysł spożywczy",
  "Przemysł farmaceutyczny",
  "Przemysł elektroniczny",
  "Przemysł chemiczny",
  "Magazyn lub logistyka",
  "Produkcja ogólna",
  "Obiekt medyczny",
  "Inna",
];
const AREAS = ["do 200 m²", "200–500 m²", "500–2000 m²", "2000–5000 m²", "powyżej 5000 m²", "nie wiem"];
const TIMELINES = ["Pilnie (do miesiąca)", "1–3 miesiące", "3–6 miesięcy", "Planuję budżet"];

/**
 * Wspólny formularz zapytania ofertowego, dwuetapowy: krok 1 to pytania
 * o obiekt (pozwalają od razu ocenić i wycenić zapytanie), krok 2 to dane
 * kontaktowe. Wysyłka przez EmailJS (patrz utils/lead.js): mail do firmy
 * z blokiem o obiekcie i źródle zapytania oraz potwierdzenie do klienta.
 *
 * Props:
 *  - prefillContext: kontekst zapytania (usługa, realizacja, wada, wynik narzędzia)
 *  - defaultType: wstępnie wybrany rodzaj zapytania (jedna z REQUEST_TYPES)
 *  - submitLabel, formId: etykieta przycisku i identyfikator formularza w GA4
 */
export function ContactForm({
  prefillContext = "",
  submitLabel = "Wyślij zapytanie",
  formId = "formularz_kontekstowy",
  defaultType = "",
  defaultIndustry = "",
}) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [mailtoHref, setMailtoHref] = useState("");
  const [form, setForm] = useState({
    type: defaultType,
    industry: defaultIndustry,
    area: "",
    location: "",
    timeline: "",
    running: false,
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
    website: "", // honeypot — pole niewidoczne dla ludzi, wypełniane tylko przez boty
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const [started, setStarted] = useState(false);
  const set = (key) => (e) => setForm({ ...form, [key]: e.target.type === "checkbox" ? e.target.checked : e.target.value });

  const handleStart = () => {
    if (started) return;
    setStarted(true);
    track("form_start", { form_id: formId });
  };

  const buildMessage = () => {
    const lines = [
      form.message.trim(),
      prefillContext ? `Kontekst zapytania: ${prefillContext}` : "",
      "",
      "--- Dane o obiekcie ---",
      `Czego dotyczy: ${form.type}`,
      `Branża: ${form.industry}`,
      `Powierzchnia: ${form.area}`,
      `Lokalizacja: ${form.location}`,
      `Termin: ${form.timeline || "nie podano"}`,
      `Obiekt w ruchu (praca etapami lub w weekendy): ${form.running ? "tak" : "nie podano"}`,
    ];
    return lines.filter((l, i) => l !== "" || i === 2).join("\n");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (step === 1) {
      setStep(2);
      setSendError("");
      track("form_step", { form_id: formId, step: 2 });
      return;
    }

    if (form.website) {
      // Bot — udajemy sukces, nic nie wysyłamy.
      setSent(true);
      return;
    }

    if (!form.consent) {
      setSendError("Zaznacz zgodę na przetwarzanie danych osobowych, aby wysłać zapytanie.");
      return;
    }

    setSending(true);
    setSendError("");

    try {
      const leadId = await sendLead(
        { name: form.name, company: form.company, email: form.email, phone: form.phone, message: buildMessage() },
        {
          formId,
          context: prefillContext,
          trackParams: { request_type: form.type, industry: form.industry, area_range: form.area },
        }
      );
      navigate("/dziekujemy", { state: { leadId } });
    } catch (err) {
      console.error("Błąd wysyłki formularza kontaktowego:", err);
      track("form_error", { form_id: formId, error_type: "wysylka" });
      // Zapasowa droga: gotowy e-mail z treścią zapytania, żeby zgłoszenie nie przepadło.
      const body = `${buildMessage()}\n\nImię i nazwisko: ${form.name}\nFirma: ${form.company}\nTelefon: ${form.phone}\nE-mail: ${form.email}`;
      setMailtoHref(`mailto:kontakt@flowtex.pl?subject=${encodeURIComponent("Zapytanie ze strony flowtex.pl")}&body=${encodeURIComponent(body.slice(0, 1500))}`);
      setSendError("Nie udało się wysłać zapytania.");
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="cf-form cf-done" role="status">
        <strong>Dziękujemy za zapytanie!</strong>
        <p>
          Przeanalizujemy opis obiektu i odezwiemy się z propozycją systemu i wyceną. Jeśli sprawa jest
          pilna, zadzwoń: <a href="tel:+48507394552">+48 507 394 552</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="cf-form" onSubmit={handleSubmit} onFocus={handleStart}>
      <div className="cf-steps" aria-hidden="true">
        <span className={step === 1 ? "is-active" : "is-done"}>1. Obiekt</span>
        <span className={step === 2 ? "is-active" : ""}>2. Kontakt</span>
      </div>

      {step === 1 ? (
        <>
          <label className="cf-field">
            <span>Czego dotyczy zapytanie</span>
            <select required name="request_type" value={form.type} onChange={set("type")}>
              <option value="" disabled>Wybierz…</option>
              {REQUEST_TYPES.map((o) => <option key={o}>{o}</option>)}
            </select>
          </label>
          <div className="cf-row">
            <label className="cf-field">
              <span>Branża lub typ obiektu</span>
              <select required name="industry" value={form.industry} onChange={set("industry")}>
                <option value="" disabled>Wybierz…</option>
                {INDUSTRIES.map((o) => <option key={o}>{o}</option>)}
              </select>
            </label>
            <label className="cf-field">
              <span>Powierzchnia</span>
              <select required name="area" value={form.area} onChange={set("area")}>
                <option value="" disabled>Wybierz…</option>
                {AREAS.map((o) => <option key={o}>{o}</option>)}
              </select>
            </label>
          </div>
          <div className="cf-row">
            <label className="cf-field">
              <span>Lokalizacja (miejscowość lub województwo)</span>
              <input required name="location" autoComplete="address-level2" value={form.location} onChange={set("location")} />
            </label>
            <label className="cf-field">
              <span>Planowany termin (opcjonalnie)</span>
              <select name="timeline" value={form.timeline} onChange={set("timeline")}>
                <option value="">Nie podaję</option>
                {TIMELINES.map((o) => <option key={o}>{o}</option>)}
              </select>
            </label>
          </div>
          <label className="cf-consent">
            <input type="checkbox" checked={form.running} onChange={set("running")} />
            <span>Obiekt jest w ruchu — prace muszą iść etapami lub w weekendy</span>
          </label>
          <button type="submit" className="cf-submit">Dalej</button>
        </>
      ) : (
        <>
          <div className="cf-row">
            <label className="cf-field">
              <span>Imię i nazwisko</span>
              <input required name="name" autoComplete="name" value={form.name} onChange={set("name")} />
            </label>
            <label className="cf-field">
              <span>Firma</span>
              <input required name="company" autoComplete="organization" value={form.company} onChange={set("company")} />
            </label>
          </div>
          <div className="cf-row">
            <label className="cf-field">
              <span>E-mail</span>
              <input required type="email" name="email" autoComplete="email" value={form.email} onChange={set("email")} />
            </label>
            <label className="cf-field">
              <span>Telefon</span>
              <input required type="tel" name="phone" autoComplete="tel" value={form.phone} onChange={set("phone")} />
            </label>
          </div>
          <label className="cf-field">
            <span>Opis (opcjonalnie): obciążenia, chemia, problemy z obecną posadzką</span>
            <textarea name="message" rows={4} value={form.message} onChange={set("message")} />
          </label>

          {/* Honeypot — pole ukryte przed ludźmi, boty często je wypełniają */}
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={set("website")}
            tabIndex={-1}
            autoComplete="off"
            style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
            aria-hidden="true"
          />

          <label className="cf-consent">
            <input type="checkbox" required checked={form.consent} onChange={set("consent")} />
            <span>
              Wyrażam zgodę na przetwarzanie moich danych osobowych podanych w formularzu
              kontaktowym przez FLOWTEX Polska Paweł Najduk z siedzibą w Ciółkowie Małym, w celu
              udzielenia odpowiedzi na moje zapytanie drogą telefoniczną lub mailową. Mam świadomość,
              że podanie danych jest dobrowolne, ale niezbędne do realizacji powyższego celu. Więcej
              informacji na temat przetwarzania danych osobowych, w tym przysługujących mi praw,
              znajduje się w{" "}
              <a href="https://www.flowtex.pl/polityka-prywatnosci" target="_blank" rel="noopener noreferrer">
                Polityce Prywatności.
              </a>{" "}
              (wymagane)
            </span>
          </label>

          {sendError && (
            <p className="cf-error">
              {sendError}{" "}
              {mailtoHref ? (
                <>
                  Spróbuj ponownie albo <a href={mailtoHref}>wyślij to samo e-mailem</a> (treść jest już wpisana).
                </>
              ) : null}
            </p>
          )}

          <div className="cf-actions">
            <button type="button" className="cf-back" onClick={() => setStep(1)}>← Wróć</button>
            <button type="submit" className="cf-submit" disabled={sending}>
              {sending ? "Wysyłanie..." : submitLabel}
            </button>
          </div>
        </>
      )}
    </form>
  );
}
