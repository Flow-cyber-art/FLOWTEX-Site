import { COLORS } from "../theme.js";
import { GOOGLE_REVIEWS_URL } from "../data/opinie.js";

// Opinie klientów z Google. Ten sam układ co sekcje FAQ (nagłówek po lewej,
// treść po prawej). Bez danych strukturalnych Review — patrz src/data/opinie.js.
export default function Opinie({ items, heading = "Opinie klientów" }) {
  if (!items?.length) return null;
  return (
    <section
      className="w-full max-w-7xl mx-auto px-5 md:px-8 py-14 md:py-20 border-t"
      style={{ borderColor: COLORS.borderOnLight }}
    >
      <div className="grid md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="ft-mono text-xs ft-tracking-wide uppercase mb-3" style={{ color: COLORS.accent }}>
            Opinie z Google
          </div>
          <h2 className="ft-display text-2xl md:text-3xl" style={{ fontWeight: 700 }}>
            {heading}
          </h2>
          <p className="text-sm mt-4" style={{ color: COLORS.mutedOnLight }}>
            Opinie pochodzą z profilu FLOWTEX Polska w Google. Publikujemy je bez zmian w treści.
          </p>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-sm underline underline-offset-4 hover:opacity-80"
          >
            Zobacz wszystkie opinie w Google
          </a>
        </div>
        <div className="md:col-span-8 space-y-6">
          {items.map((o) => (
            <figure
              key={o.author + o.topic}
              className="p-5 md:p-6 rounded-sm"
              style={{ border: `1px solid ${COLORS.borderOnLight}` }}
            >
              <blockquote className="text-base" style={{ color: COLORS.textOnLight }}>
                „{o.text}”
              </blockquote>
              <figcaption className="ft-mono text-xs mt-4" style={{ color: COLORS.mutedOnLight }}>
                {o.author} · {o.topic} · opinia z Google, {o.date.toLowerCase()}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
