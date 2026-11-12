import React, { useState } from "react";
import "../styles/contact-form.css";
import { sendLead } from "../utils/lead.js";
import { track } from "../utils/analytics.js";

/**
 * Wspólny formularz kontaktowy używany w narzędziach (dobór posadzki,
 * katalog wad). Wysyłka przez EmailJS — ten sam mechanizm co formularz
 * na stronie głównej (Home.jsx): dwa maile (admin + klient), honeypot
 * antybotowy i wymagana zgoda RODO.
 *
 * Props:
 *  - prefillContext: tekst wpisywany automatycznie do pola wiadomości
 *    (np. odpowiedzi z narzędzia doboru albo nazwa wybranej wady).
 *  - submitLabel: treść przycisku wysyłki.
 */
export function ContactForm({ prefillContext = "", submitLabel = "Wyślij wiadomość", formId = "formularz_kontekstowy" }) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: prefillContext ? `Kontekst zapytania: ${prefillContext}\n\n` : "",
    consent: false,
    website: "", // honeypot — pole niewidoczne dla ludzi, wypełniane tylko przez boty
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const [started, setStarted] = useState(false);
  const handleStart = () => {
    if (started) return;
    setStarted(true);
    track("form_start", { form_id: formId });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.website) {
      // Bot — udajemy sukces, nic nie wysyłamy.
      setSent(true);
      return;
    }

    if (!form.consent) {
      setSendError("Zaznacz zgodę na przetwarzanie danych osobowych, aby wysłać wiadomość.");
      return;
    }

    setSending(true);
    setSendError("");

    try {
      await sendLead(form, { formId, context: prefillContext });
      setSent(true);
    } catch (err) {
      console.error("Błąd wysyłki formularza kontaktowego:", err);
      track("form_error", { form_id: formId, error_type: "wysylka" });
      setSendError("Nie udało się wysłać wiadomości. Spróbuj ponownie lub napisz na kontakt@flowtex.pl.");
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="cf-form cf-done">
        <strong>Dziękujemy!</strong>
        <p>Wiadomość została wysłana. Odezwiemy się wkrótce.</p>
      </div>
    );
  }

  return (
    <form className="cf-form" onSubmit={handleSubmit} onFocus={handleStart}>
      <div className="cf-row">
        <input
          required
          name="name"
          autoComplete="name"
          aria-label="Imię i nazwisko"
          placeholder="Imię i nazwisko"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          name="company"
          autoComplete="organization"
          aria-label="Nazwa firmy"
          placeholder="Nazwa firmy"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
        />
      </div>
      <div className="cf-row">
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          aria-label="E-mail"
          placeholder="E-mail"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="tel"
          name="phone"
          autoComplete="tel"
          aria-label="Telefon"
          placeholder="Telefon"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
      </div>
      <textarea
        required
        name="message"
        aria-label="Wiadomość"
        placeholder="Wiadomość"
        rows={4}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      {/* Honeypot — pole ukryte przed ludźmi, boty często je wypełniają */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={(e) => setForm({ ...form, website: e.target.value })}
        tabIndex={-1}
        autoComplete="off"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
        aria-hidden="true"
      />

      <label className="cf-consent">
        <input
          type="checkbox"
          required
          checked={form.consent}
          onChange={(e) => setForm({ ...form, consent: e.target.checked })}
        />
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

      {sendError && <p className="cf-error">{sendError}</p>}

      <button type="submit" className="cf-submit" disabled={sending}>
        {sending ? "Wysyłanie..." : submitLabel}
      </button>
    </form>
  );
}
