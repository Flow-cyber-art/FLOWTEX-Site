import React from "react";
import { Phone, Mail } from "lucide-react";
import { COLORS } from "../theme.js";
import { ContactForm } from "./ContactForm.jsx";

/**
 * Sekcja kontaktowa z formularzem, osadzana bezpośrednio na stronach usług,
 * realizacji i poradników — żeby zapytanie dało się wysłać bez przechodzenia
 * na stronę główną. `context` trafia do treści wiadomości (i do maila), więc
 * od razu wiadomo, której usługi / realizacji / poradnika dotyczy zapytanie.
 */
export default function ContactSection({
  id = "kontakt",
  heading = "Zapytaj o wycenę",
  text = "Odpowiedz na kilka pytań o obiekt, a wrócimy z propozycją systemu i wyceną. Wolisz porozmawiać? Zadzwoń lub napisz.",
  context = "",
  submitLabel = "Wyślij zapytanie",
  formId = "formularz_podstrona",
  defaultType = "",
  defaultIndustry = "",
}) {
  return (
    <section id={id} style={{ backgroundColor: COLORS.darkBg, scrollMarginTop: 88 }}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20 grid md:grid-cols-2 gap-10 md:gap-12 items-start">
        <div>
          <div className="ft-mono text-xs ft-tracking-wide uppercase mb-3" style={{ color: COLORS.accent }}>
            Wycena
          </div>
          <h2 className="ft-display text-2xl md:text-3xl mb-4" style={{ color: COLORS.white, fontWeight: 700 }}>
            {heading}
          </h2>
          <p className="text-sm md:text-base mb-6" style={{ color: COLORS.mutedOnDark }}>
            {text}
          </p>
          <div className="flex flex-col gap-3 ft-mono text-sm">
            <a href="tel:+48507394552" className="inline-flex items-center gap-2 hover:opacity-80" style={{ color: COLORS.white }}>
              <Phone size={16} style={{ color: COLORS.accent }} /> +48 507 394 552
            </a>
            <a href="mailto:kontakt@flowtex.pl" className="inline-flex items-center gap-2 hover:opacity-80" style={{ color: COLORS.white }}>
              <Mail size={16} style={{ color: COLORS.accent }} /> kontakt@flowtex.pl
            </a>
          </div>
        </div>
        <ContactForm prefillContext={context} submitLabel={submitLabel} formId={formId} defaultType={defaultType} defaultIndustry={defaultIndustry} />
      </div>
    </section>
  );
}
