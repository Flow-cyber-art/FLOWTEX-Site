import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FileText, CheckCircle2, ArrowRight } from "lucide-react";
import "../styles/contact-form.css";
import { COLORS } from "../theme.js";
import { sendMaterialLead } from "../utils/lead.js";
import { track } from "../utils/analytics.js";
import { checkSendAllowed, markSent } from "../utils/antispam.js";

const PAGE_URL = "https://www.flowtex.pl/protokol-odbioru-posadzki";
const FILE_URL = "/pliki/protokol-odbioru-posadzki-zywicznej.pdf";
const RESOURCE = "Protokół odbioru posadzki żywicznej: wzór i lista kontrolna (PDF)";
const TITLE = "Protokół odbioru posadzki żywicznej: wzór PDF | FLOWTEX Polska";
const DESCRIPTION =
  "Pobierz wzór protokołu odbioru posadzki żywicznej z listą kontrolną: dokumenty, kontrola podłoża i warunków, parametry gotowej posadzki, niezgodności i podpisy.";

const CONTENTS = [
  "dane odbioru i dokumenty odniesienia (umowa, STWiOR, karta techniczna),",
  "kontrola podłoża i przebiegu prac: wilgotność, temperatura, punkt rosy, proporcje, odstępy między warstwami,",
  "kontrola gotowej posadzki: powierzchnia, spadki, dylatacje, grubość, przyczepność, antypoślizgowość, ESD,",
  "tabela niezgodności z lokalizacją, zdjęciem i terminem usunięcia,",
  "wynik odbioru i miejsca na podpisy stron.",
];

export default function ProtokolOdbioru() {
  const [f, setF] = useState({ name: "", company: "", email: "", consent: false, website: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | done
  const [error, setError] = useState("");
  const [emailed, setEmailed] = useState(false);
  const openedAt = useRef(Date.now()); // do kontroli czasu wypełnienia (antyspam)
  const set = (k) => (e) => setF({ ...f, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (f.website) {
      setStatus("done");
      return;
    }
    if (!f.consent) {
      setError("Zaznacz zgodę na przetwarzanie danych osobowych, aby pobrać materiał.");
      return;
    }
    const guard = checkSendAllowed(openedAt.current);
    if (!guard.ok) {
      if (guard.reason === "too_fast") setStatus("done"); // bot: udajemy sukces
      else setError(guard.message);
      return;
    }
    setStatus("sending");
    setError("");
    try {
      const res = await sendMaterialLead(
        { name: f.name.trim(), company: f.company.trim(), email: f.email.trim() },
        { formId: "protokol-odbioru", resourceName: RESOURCE, resourceUrl: FILE_URL }
      );
      markSent();
      setEmailed(res.emailed);
      setStatus("done");
    } catch (err) {
      console.error("Błąd wysyłki formularza materiału:", err);
      track("form_error", { form_id: "protokol-odbioru", error_type: "wysylka" });
      setError("Nie udało się wysłać formularza. Spróbuj ponownie lub napisz na kontakt@flowtex.pl.");
      setStatus("idle");
    }
  };

  const ld = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    url: PAGE_URL,
    description: DESCRIPTION,
    inLanguage: "pl",
    publisher: { "@type": "Organization", name: "FLOWTEX Polska", url: "https://www.flowtex.pl" },
  };

  return (
    <>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <script type="application/ld+json">{JSON.stringify(ld)}</script>
      </Helmet>

      <div style={{ backgroundColor: COLORS.darkBg }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-4 ft-mono text-xs" style={{ color: COLORS.mutedOnDarkSecondary }}>
          <Link to="/" className="hover:opacity-80" style={{ color: COLORS.mutedOnDarkSecondary }}>
            Strona główna
          </Link>{" "}
          <span className="mx-2">/</span>
          <span style={{ color: COLORS.white }}>Protokół odbioru posadzki</span>
        </div>
      </div>

      <section style={{ backgroundColor: COLORS.darkBg }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 pb-14 md:pb-16">
          <h1 className="ft-display mt-4" style={{ color: COLORS.white, fontSize: "clamp(2.1rem, 5vw, 3.2rem)", fontWeight: 800 }}>
            Protokół odbioru posadzki żywicznej
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg" style={{ color: COLORS.mutedOnDark }}>
            Wzór protokołu z listą kontrolną do odbioru posadzki przemysłowej. Trzy strony A4, gotowe do wydruku lub wypełnienia.
          </p>
        </div>
      </section>

      <section style={{ backgroundColor: COLORS.lightBg }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FileText size={26} style={{ color: COLORS.accent }} />
              <h2 className="ft-display text-xl" style={{ fontWeight: 700, color: COLORS.textOnLight }}>
                Co zawiera dokument
              </h2>
            </div>
            <ul className="list-disc pl-5 space-y-2" style={{ color: COLORS.textOnLight }}>
              {CONTENTS.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <p className="mt-5 text-sm" style={{ color: COLORS.mutedOnLight }}>
              Wzór ma charakter ogólny i informacyjny. Zakres kontroli i kryteria dostosuj do umowy, specyfikacji i dokumentacji systemu. Więcej o odbiorze w naszych <Link to="/poradniki" className="underline">poradnikach</Link>.
            </p>
          </div>

          <div>
            {status === "done" ? (
              <div className="cf-form cf-done" role="status">
                <CheckCircle2 size={36} style={{ color: COLORS.accent, margin: "0 auto 10px" }} />
                <strong>Dziękujemy</strong>
                <p>
                  {emailed
                    ? "Wysłaliśmy link do dokumentu na podany adres e-mail. Jeśli wiadomość nie dotrze, sprawdź folder ze spamem."
                    : "Dokument jest gotowy do pobrania."}
                </p>
                <p style={{ marginTop: 14 }}>
                  <a href={FILE_URL} download onClick={() => track("file_download", { file_name: "protokol-odbioru-posadzki-zywicznej.pdf" })}>
                    Pobierz protokół odbioru (PDF)
                  </a>
                </p>
              </div>
            ) : (
              <form className="cf-form" onSubmit={submit}>
                <label className="cf-field">
                  <span>Imię i nazwisko</span>
                  <input name="name" required autoComplete="name" value={f.name} onChange={set("name")} />
                </label>
                <label className="cf-field">
                  <span>Firma</span>
                  <input name="company" autoComplete="organization" value={f.company} onChange={set("company")} />
                </label>
                <label className="cf-field">
                  <span>Adres e-mail</span>
                  <input name="email" type="email" required autoComplete="email" value={f.email} onChange={set("email")} />
                </label>
                <input
                  type="text"
                  name="website"
                  value={f.website}
                  onChange={set("website")}
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
                  aria-hidden="true"
                />
                <label className="cf-consent">
                  <input type="checkbox" name="consent" required checked={f.consent} onChange={set("consent")} />
                  <span>
                    Wyrażam zgodę na przetwarzanie moich danych osobowych podanych w formularzu przez FLOWTEX Polska Paweł
                    Najduk z siedzibą w Ciółkowie Małym w celu przesłania wskazanego materiału oraz kontaktu w sprawie
                    mojego zainteresowania ofertą. Podanie danych jest dobrowolne. Więcej informacji, w tym o przysługujących
                    mi prawach, znajduje się w{" "}
                    <a href="https://www.flowtex.pl/polityka-prywatnosci" target="_blank" rel="noopener noreferrer">
                      Polityce Prywatności.
                    </a>{" "}
                    (wymagane)
                  </span>
                </label>
                {error && <p className="cf-error">{error}</p>}
                <button type="submit" className="cf-submit" disabled={status === "sending"}>
                  {status === "sending" ? "Wysyłanie…" : "Wyślij mi protokół"} <ArrowRight size={14} style={{ display: "inline", verticalAlign: "-2px" }} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
