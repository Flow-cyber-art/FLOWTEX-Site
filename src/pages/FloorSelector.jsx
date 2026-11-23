import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, CircleAlert, RotateCcw, Sparkles, Phone, Mail } from "lucide-react";
import { ContactForm } from "../components/ContactForm.jsx";
import { track } from "../utils/analytics.js";
import "../styles/floor-selector.css";
import { QUICK_KEYS, STEPS, matchScores } from "../data/floor-selector.js";

function ModePicker({ onStart }) { return <section className="mode-picker"><div className="mode-copy"><p className="eyebrow"><Sparkles size={14} /> DOBÓR SYSTEMU POSADZKOWEGO</p><h2>Wybierz sposób,<br /><em>w jaki chcesz zacząć.</em></h2><p>Obie ścieżki prowadzą do koncepcyjnego kierunku. Precyzyjny dobór zawsze wymaga potwierdzenia kartą techniczną i oceną podłoża.</p></div><div className="mode-options"><button type="button" className="mode-option" onClick={() => onStart("quick")}><span className="mode-number">01</span><span className="mode-option-copy"><strong>Szybki dobór</strong><small>7 pytań · około 2 minuty</small><em>Dobry kierunek na start i szybką rozmowę z doradcą.</em></span><ArrowRight size={20} /></button><button type="button" className="mode-option mode-option-featured" onClick={() => onStart("precision")}><span className="mode-number">02</span><span className="mode-option-copy"><strong>Dobór precyzyjny</strong><small>19 pytań · pełniejsza analiza</small><em>Chemia, temperatura, podłoże, dylatacje, ESD i odwodnienia.</em></span><ArrowRight size={20} /></button><p className="mode-footnote"><CircleAlert size={15} /> Wynik ma charakter koncepcyjny i wymaga potwierdzenia aktualną kartą techniczną.</p></div></section>; }

export default function FloorSelector() {
  const [mode, setMode] = useState(null); const [step, setStep] = useState(0); const [answers, setAnswers] = useState({}); const [result, setResult] = useState(false);
  const visible = mode === "quick" ? STEPS.filter((item) => QUICK_KEYS.includes(item.key)) : mode === "precision" ? STEPS : [];
  const current = visible[step]; const ranking = useMemo(() => matchScores(answers), [answers]);
  const start = (nextMode) => { setMode(nextMode); setStep(0); setAnswers({}); setResult(false); track("selector_start", { mode: nextMode }); };
  const choose = (value) => setAnswers((prev) => ({ ...prev, [current.key]: value }));
  const next = () => {
    if (step === visible.length - 1) {
      setResult(true);
      track("selector_complete", { mode, top_result: ranking[0] ? ranking[0].name : "" });
    } else setStep((value) => value + 1);
  };
  const topMatch = ranking[0];
  const context = `Dobór ${mode === "quick" ? "szybki" : "precyzyjny"} — najlepsze dopasowanie: ${topMatch ? `${topMatch.name} (${topMatch.score}%)` : "brak"} — ${Object.entries(answers).map(([key, value]) => `${key}: ${value}`).join(", ")}`;
  const canonicalUrl = "https://www.flowtex.pl/dobor-posadzki";
  return <>
    <Helmet>
      <title>Dobór posadzki przemysłowej — narzędzie online | FLOWTEX</title>
      <meta
        name="description"
        content="Odpowiedz na 7 pytań o obciążenia, chemię i wilgoć. Otrzymasz dopasowanie trzech technologii posadzki przemysłowej do Twojej strefy."
      />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content="Dobór systemu posadzkowego | FLOWTEX Polska" />
      <meta
        property="og:description"
        content="Odpowiedz na kilka pytań o warunki pracy posadzki i poznaj rekomendowany kierunek technologii."
      />
      <meta property="og:url" content={canonicalUrl} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: "Dobór systemu posadzkowego",
              description: "Interaktywne narzędzie doboru technologii posadzki przemysłowej na podstawie obciążeń, chemii, wilgoci i wymagań higienicznych.",
              provider: { "@id": "https://www.flowtex.pl/#organization" },
              areaServed: "PL",
              url: canonicalUrl,
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Strona główna", item: "https://www.flowtex.pl/" },
                { "@type": "ListItem", position: 2, name: "Dobór posadzki", item: canonicalUrl },
              ],
            },
          ],
        })}
      </script>
    </Helmet>
    <nav className="tool-breadcrumbs" aria-label="Ścieżka nawigacji">
      <Link to="/">Strona główna</Link>
      <span>/</span>
      <span aria-current="page">Dobór posadzki</span>
    </nav>
    <main className="selector-page selector-v2"><section className="tool-hero"><div className="hero-grid"><div className="hero-copy"><p className="eyebrow light"><Sparkles size={14} /> {mode === "quick" ? "SZYBKI DOBÓR — 7 KROKÓW" : "DOBÓR W 2 TRYBACH"}</p><h1 className="hero-keyword">Dobór systemu posadzki przemysłowej</h1><p className="hero-claim">Dobierz system{" "}<br /><em>do realnej pracy.</em></p><p>Nie zaczynaj od nazwy żywicy. Zacznij od warunków, obciążeń i tego, co naprawdę dzieje się na posadzce.</p></div><div className="hero-technical-card"><img src="/images/flowtex/system-section.webp" alt="Przekrój warstw systemu posadzkowego" /><div className="hero-card-caption"><span>FLOWTEX / FIELD NOTE</span><strong>System to więcej<br />niż żywica.</strong></div></div></div></section>{!mode ? <ModePicker onStart={start} /> : !result ? <section className="tool-workspace"><aside className="step-rail"><button className="mode-back" type="button" onClick={() => setMode(null)}><ArrowLeft size={14} /> Zmień tryb</button><nav>{visible.map((item, index) => <div className={`rail-step ${index === step ? "active" : ""} ${answers[item.key] ? "done" : ""}`} key={item.key}><span>{String(index + 1).padStart(2, "0")}</span><small>{item.eyebrow.split("/")[1]}</small></div>)}</nav></aside><section className="question-panel"><div className="question-heading"><p className="eyebrow"><span>{current.eyebrow.split("/")[0]}</span> {current.eyebrow.split("/").slice(1).join("/")}</p><h2>{current.title}</h2><p>{current.description}</p></div><div className="option-grid">{current.options.map(([value, label, description]) => <button className={`option-card ${answers[current.key] === value ? "selected" : ""}`} type="button" key={value} onClick={() => choose(value)}><span className="option-check">{answers[current.key] === value ? "✓" : ""}</span><strong>{label}</strong><small>{description}</small></button>)}</div><div className="panel-actions"><button className="ghost-button" type="button" onClick={() => step === 0 ? setMode(null) : setStep((value) => value - 1)}><ArrowLeft size={15} /> Wstecz</button><button className="primary-button" type="button" disabled={!answers[current.key]} onClick={next}>{step === visible.length - 1 ? "Pokaż wynik" : "Następne pytanie"} <ArrowRight size={15} /></button></div></section></section> : <section className="results-shell"><div className="results-hero"><div><p className="eyebrow"><span>WYNIK</span> {mode === "quick" ? "SZYBKI DOBÓR" : "DOBÓR PRECYZYJNY"}</p><h2>Kierunek technologii<br /><em>do dalszej weryfikacji.</em></h2><p>Ranking pokazuje dopasowanie do deklarowanych warunków. Nie zastępuje projektu, karty technicznej ani oceny podłoża.</p></div><button className="reset-button" type="button" onClick={() => start(null)}><RotateCcw size={15} /> Zacznij od nowa</button></div><div className="match-panel"><div className="match-heading"><span>DOPASOWANIE SYSTEMÓW</span><small>ranking koncepcyjny</small></div><p className="match-intro">Trzy kierunki technologiczne, ale nie każdy z taką samą trafnością do wskazanych warunków.</p>{topMatch && topMatch.label === "Warunkowo" && <p className="match-hook"><CircleAlert size={14} /> Warunki na granicy dwóch technologii — to najczęstszy przypadek, w którym rozmowa z doradcą realnie zmienia wybór.</p>}<div className="match-list">{ranking.map((item, index) => <div className={`match-item ${index === 0 ? "top" : ""}`} key={item.id}><div className="match-meta"><span className="match-rank">0{index + 1}</span><strong>{item.name}</strong><b>{item.label}</b></div><div className="match-track"><i style={{ width: `${item.score}%` }} /></div><div className="match-foot"><small>{item.note}</small></div></div>)}</div><small className="match-disclaimer">Dopasowanie koncepcyjne — wymaga potwierdzenia podłoża, dokumentacji systemowej i warunków panujących na miejscu.</small><Link className="cross-tool-link" to="/katalog-wad">Masz już posadzkę i widzisz na niej problem? Sprawdź katalog wad <ArrowRight size={14} /></Link></div><div className="result-funnel result-funnel-form"><div><p className="eyebrow light">NASTĘPNY KROK</p><h3>Szukasz wykonawcy?<br />Zadzwoń albo napisz.</h3><p>Wynik ma charakter koncepcyjny. Opisz swoją strefę poniżej — przekażemy go naszemu doradcy i przygotujemy bezpłatną wycenę. Możesz też zadzwonić od razu.</p><div className="result-funnel-quick-contact"><a href="tel:+48507394552"><Phone size={16} /> +48 507 394 552</a><a href="mailto:kontakt@flowtex.pl"><Mail size={16} /> kontakt@flowtex.pl</a></div></div><ContactForm prefillContext={context} submitLabel="Poproś o bezpłatną wycenę" formId="formularz_dobor_posadzki" defaultType="Nowa posadzka" /></div></section>}</main>
  </>;
}
