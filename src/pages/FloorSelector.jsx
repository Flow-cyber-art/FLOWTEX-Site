import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, CircleAlert, RotateCcw, Sparkles, Phone, Mail } from "lucide-react";
import { ContactForm } from "../components/ContactForm.jsx";
import "../styles/floor-selector.css";

const QUICK_KEYS = ["environment", "moisture", "traffic", "chemistry", "thermal", "substrate", "downtime"];
const STEPS = [
  { key: "environment", eyebrow: "01 / ŚRODOWISKO", title: "Gdzie będzie pracować posadzka?", description: "Wybierz główną funkcję strefy.", options: [["production", "Hala produkcyjna", "Proces, maszyny i regularny ruch."], ["warehouse", "Magazyn / logistyka", "Transport, palety i powtarzalne trasy."], ["food", "Branża spożywcza", "Higiena, mycie i detale posadzka–ściana."], ["pharma", "Branża farmaceutyczna", "Wymagania higieniczne i kontrolowane warunki."]] },
  { key: "moisture", eyebrow: "02 / WODA I MYCIE", title: "Jak wygląda kontakt z wodą?", description: "Uwzględnij także mycie i czas schnięcia.", options: [["dry", "Strefa sucha", "Woda pojawia się sporadycznie."], ["wash", "Regularne mycie", "Powierzchnia jest cyklicznie myta."], ["wet", "Strefa mokra", "Woda jest obecna często, potrzebne są spadki i odpływy."], ["constant", "Stała wilgoć", "Podłoże lub proces stale pracuje w wilgoci."]] },
  { key: "traffic", eyebrow: "03 / OBCIĄŻENIA", title: "Jaki ruch występuje najczęściej?", description: "Wybierz najwyższe regularne obciążenie.", options: [["light", "Ruch pieszy", "Lekkie wyposażenie mobilne."], ["medium", "Średni transport", "Paleciaki, lekkie wózki, regularne ścieranie."], ["heavy", "Ciężki ruch kołowy", "Wózki widłowe, AGV i obciążenia punktowe."], ["impact", "Udary / intensywna produkcja", "Maszyny, upadki elementów i obciążenia dynamiczne."]] },
  { key: "chemistry", eyebrow: "04 / CHEMIA I CZYSZCZENIE", title: "Z czym będzie mieć kontakt powierzchnia?", description: "Konkretną substancję, stężenie i temperaturę trzeba potwierdzić z kartą systemu.", options: [["none", "Brak istotnej chemii", "Standardowe środki czystości."], ["oils", "Oleje / paliwa / smary", "Okresowe rozlania i kontakt serwisowy."], ["cleaners", "Regularne detergenty", "Mycie i dezynfekcja."], ["aggressive", "Kwasy / zasady / rozpuszczalniki", "Chemia o wysokiej agresywności lub nieznanym profilu."]] },
  { key: "thermal", eyebrow: "05 / TEMPERATURA", title: "Czy występuje obciążenie termiczne?", description: "Szok termiczny to szybka zmiana temperatury, np. podczas gorącego mycia.", options: [["stable", "Stabilne warunki", "Typowa temperatura wewnętrzna."], ["cool", "Chłodnia / niska temperatura", "Długotrwała praca w chłodzie."], ["warm", "Podwyższona temperatura", "Ciepłe procesy i umiarkowane zmiany."], ["shock", "Gorące mycie / para / szok", "Gwałtowne cykle nagrzewania i chłodzenia."]] },
  { key: "substrate", eyebrow: "06 / PODŁOŻE", title: "Co wiadomo o podłożu?", description: "Bez oceny podłoża rekomendacja nie może być ostateczna.", options: [["verified", "Beton zbadany i przygotowany", "Znana wilgotność, nośność i stan powierzchni."], ["old", "Stary beton / istniejąca powłoka", "Możliwe naprawy i przygotowanie mechaniczne."], ["cracks", "Rysy / dylatacje / nierówności", "Widoczne wady i detale do rozwiązania."], ["unknown", "Stan niezweryfikowany", "Brak aktualnych danych o wilgotności lub nośności."]] },
  { key: "downtime", eyebrow: "07 / REALIZACJA", title: "Ile czasu można wyłączyć strefę?", description: "Termin wpływa na wybór technologii, ale nie może obniżyć trwałości.", options: [["flexible", "Kilka dni lub dłużej", "Harmonogram pozwala na standardową aplikację."], ["short", "1–2 dni", "Ograniczony przestój i możliwe etapowanie."], ["urgent", "Najkrótszy możliwy", "Priorytetem jest szybki powrót do użytkowania."], ["staged", "Praca etapowa", "Możliwe zamykanie kolejnych fragmentów."]] },
  { key: "special", eyebrow: "08 / WYMAGANIE SPECJALNE", title: "Czy strefa ma dodatkową funkcję?", description: "Wybierz najwyższy priorytet.", options: [["standard", "Brak funkcji specjalnej", "Najważniejsze pozostają warunki pracy."], ["uv", "Ekspozycja UV", "Światło słoneczne lub strefa częściowo zewnętrzna."], ["esd", "ESD / przewodność", "Kontrola ładunków i wymagania pomiarowe."], ["hygiene", "Higiena procesowa", "Cokoły, detale i łatwe utrzymanie czystości."]] },
  { key: "movement", eyebrow: "09 / RUCHY PODŁOŻA", title: "Czy występują rysy lub dylatacje?", description: "Ruch konstrukcji wymaga rozwiązania detalowego.", options: [["stable", "Brak widocznych problemów", "Podłoże nie wykazuje aktywnych rys."], ["joints", "Dylatacje do odtworzenia", "Szczeliny konstrukcyjne lub robocze."], ["cracks", "Aktywne rysy", "Rysy wymagają rozpoznania i obserwacji."], ["unknown", "Nieustalone", "Brak aktualnej oceny."]] },
  { key: "constructionTraffic", eyebrow: "10 / RUCH BUDOWLANY", title: "Czy posadzka będzie pracować przed zakończeniem budowy?", description: "Określ ryzyko uszkodzeń przed odbiorem.", options: [["no", "Nie", "Strefa zostanie zabezpieczona do odbioru."], ["light", "Lekki ruch", "Sporadyczny transport i montaż."], ["heavy", "Ciężki ruch", "Maszyny i dostawy przed zakończeniem prac."], ["unknown", "Nieustalone", "Harmonogram wymaga doprecyzowania."]] },
  { key: "visibility", eyebrow: "11 / EKSPOZYCJA", title: "Czy posadzka będzie narażona na UV lub warunki zewnętrzne?", description: "Wybierz wariant dla stref otwartych i wejściowych.", options: [["indoor", "Wewnątrz", "Bez bezpośredniego UV."], ["partial", "Częściowa ekspozycja", "Bramy, wejścia lub światło dzienne."], ["outdoor", "Strefa zewnętrzna", "Pełna ekspozycja na warunki atmosferyczne."], ["unknown", "Nieustalone", "Warunki wymagają oceny."]] },
  { key: "drainage", eyebrow: "12 / ODWODNIENIE", title: "Jak rozwiązano odpływ wody?", description: "Odwodnienie wpływa na higienę, trwałość i dobór detali.", options: [["point", "Odpływy punktowe", "Woda kierowana do wpustów."], ["linear", "Odwodnienie liniowe / cokoły", "Strefa mokra wymaga ciągłych spadków."], ["none", "Brak istotnej wody", "Posadzka pracuje w strefie suchej."], ["unknown", "Nieustalone", "Brak danych o spadkach lub wpustach."]] },
  { key: "chemicalProfile", eyebrow: "13 / PROFIL CHEMICZNY", title: "Jak dokładnie znany jest kontakt z chemią?", description: "Dla wiążącej oceny potrzebne są substancja, stężenie, temperatura i czas kontaktu.", options: [["none", "Brak chemii procesowej", "Tylko standardowe środki czystości."], ["known", "Profil znany", "Dane ekspozycji są udokumentowane."], ["unknown", "Profil nieznany", "Wiadomo, że chemia występuje, ale brakuje danych."], ["mixed", "Mieszanina / agresywne środowisko", "Wiele substancji lub zmienne warunki."]] },
  { key: "chemSubstance", eyebrow: "14 / CHEMIA — SUBSTANCJA", title: "Jaki typ substancji będzie mieć kontakt z posadzką?", description: "Wybierz kategorię najbliższą codziennym warunkom.", options: [["none", "Brak chemii procesowej", "Tylko utrzymanie czystości."], ["oils", "Oleje / paliwa / smary", "Typowe rozlania serwisowe."], ["acids", "Kwasy lub zasady", "Substancje kwaśne, alkaliczne lub procesowe."], ["solvents", "Rozpuszczalniki / mieszane", "Profil agresywny lub trudny do sklasyfikowania."]] },
  { key: "chemConcentration", eyebrow: "15 / CHEMIA — STĘŻENIE", title: "Jakie będzie stężenie lub nasilenie ekspozycji?", description: "Wybierz przedział, który później można potwierdzić z technologiem.", options: [["trace", "Śladowe / rozcieńczone", "Sporadyczne i szybko spłukiwane."], ["moderate", "Umiarkowane", "Regularny kontakt ze znanym stężeniem."], ["high", "Wysokie / nierozcieńczone", "Silna ekspozycja lub koncentrat."], ["unknown", "Nieustalone", "Brak danych."]] },
  { key: "chemTemperature", eyebrow: "16 / CHEMIA — TEMPERATURA", title: "W jakiej temperaturze nastąpi kontakt?", description: "Uwzględnij temperaturę mycia lub rozlania.", options: [["ambient", "Temperatura otoczenia", "Typowe warunki wewnętrzne."], ["warm", "Podwyższona, do ok. 60°C", "Ciepłe media lub mycie."], ["hot", "Gorąca, powyżej ok. 60°C", "Gorąca woda, para lub rozgrzane media."], ["unknown", "Nieustalona", "Brak danych."]] },
  { key: "chemContact", eyebrow: "17 / CHEMIA — CZAS KONTAKTU", title: "Jak długo może trwać kontakt z substancją?", description: "Wybierz najdłuższy realistyczny czas.", options: [["minutes", "Do 15 minut", "Szybkie rozlania i spłukanie."], ["hours", "Od 15 minut do kilku godzin", "Kontakt okresowy."], ["constant", "Kontakt stały / wielogodzinny", "Ciągła ekspozycja."], ["unknown", "Nieustalony", "Brak danych."]] },
  { key: "thermalProfile", eyebrow: "18 / SZOK TERMICZNY", title: "Jak intensywny jest cykl termiczny?", description: "Wybierz wariant najbliższy rzeczywistemu myciu.", options: [["none", "Brak szoku termicznego", "Temperatura stabilna."], ["moderate", "Umiarkowane zmiany", "Ciepłe mycie bez gwałtownych skoków."], ["severe", "Gorące mycie / para", "Gwałtowne cykle."], ["unknown", "Nieustalony", "Brak parametrów."]] },
  { key: "esdProfile", eyebrow: "19 / ESD", title: "Czy wymagana jest kontrola ładunków elektrostatycznych?", description: "ESD wymaga określenia funkcji strefy i późniejszych pomiarów.", options: [["none", "Nie", "Brak wymagań ESD."], ["possible", "Możliwe wymaganie", "Potrzebna konsultacja przed doborem."], ["required", "Tak, ESD jest wymagane", "Strefa ma wymagania przewodności i pomiarów."], ["unknown", "Nieustalone", "Brak danych projektowych."]] },
];

// Mechanizm trafności doboru — patrz "Mechanizm trafności doboru systemu posadzki.md".
// Zamiast trzech równorzędnych produktów tworzymy ranking maksymalnie trzech kierunków
// technologicznych z procentowym dopasowaniem do zadeklarowanych warunków. Wynik jest
// koncepcyjny i wymaga potwierdzenia kartą techniczną oraz oceną podłoża na miejscu.
const MATCH_SYSTEMS = {
  "pu-cement": { name: "PU-cement — system przemysłowy", note: "Najlepszy kierunek przy wymagającym użytkowaniu, naprawach podłoża i większej liczbie detali." },
  epoxy: { name: "Epoksyd posypkowy / kwarcowy", note: "Dobra alternatywa dla dobrze przygotowanego, stabilnego podłoża." },
  polyaspartic: { name: "System poliasparaginowy", note: "Wariant warunkowy — sprawdza się, gdy liczy się czas realizacji lub etapowanie prac." },
};

function matchScores(answers) {
  let puCement = 66, epoxy = 70, polyaspartic = 60;

  // Środowisko / wymagania higieniczne
  if (["food", "pharma"].includes(answers.environment)) { puCement += 6; epoxy -= 2; }

  // Chemia procesowa
  if (answers.chemistry === "aggressive" || ["acids", "solvents"].includes(answers.chemSubstance) || answers.chemicalProfile === "mixed") { puCement += 10; epoxy -= 6; }
  if (answers.chemConcentration === "high") puCement += 4;

  // Obciążenia i ruch
  if (["heavy", "impact"].includes(answers.traffic)) { puCement += 6; epoxy -= 4; polyaspartic += 2; }
  if (["light", "medium"].includes(answers.traffic)) epoxy += 6;

  // Stan podłoża — naprawy zwiększają znaczenie systemów do wymagających warunków
  if (answers.substrate === "verified") epoxy += 8;
  if (["old", "cracks", "unknown"].includes(answers.substrate)) { puCement += 5; polyaspartic += 3; epoxy -= 2; }
  if (["cracks", "joints"].includes(answers.movement)) puCement += 4;

  // Organizacja prac / czas realizacji — sprzyja systemom szybkim (poliasparaginowy)
  if (answers.downtime === "urgent") { polyaspartic += 12; epoxy -= 2; }
  if (answers.downtime === "staged") polyaspartic += 6;
  if (answers.downtime === "flexible") epoxy += 4;

  // Detale specjalne (higiena, ESD, UV)
  if (answers.special === "hygiene") puCement += 6;
  if (answers.special === "esd" || answers.esdProfile === "required") puCement += 5;
  if (answers.special === "uv" || answers.visibility === "outdoor") polyaspartic += 4;

  // Szok termiczny
  if (answers.thermal === "shock" || answers.thermalProfile === "severe") { puCement += 8; epoxy -= 3; }

  // Wilgoć / strefa mokra
  if (["wet", "constant"].includes(answers.moisture)) { puCement += 6; epoxy -= 3; }

  const raw = { "pu-cement": puCement, epoxy, polyaspartic };
  return Object.entries(raw)
    .map(([id, value]) => {
      const score = Math.max(30, Math.min(96, Math.round(value)));
      const label = score >= 85 ? "Najlepsze dopasowanie" : score >= 70 ? "Dobra alternatywa" : score >= 55 ? "Warunkowo" : "Nie rekomendować";
      return { id, score, label, ...MATCH_SYSTEMS[id] };
    })
    .sort((a, b) => b.score - a.score);
}

function ModePicker({ onStart }) { return <section className="mode-picker"><div className="mode-copy"><p className="eyebrow"><Sparkles size={14} /> DOBÓR SYSTEMU POSADZKOWEGO</p><h2>Wybierz sposób,<br /><em>w jaki chcesz zacząć.</em></h2><p>Obie ścieżki prowadzą do koncepcyjnego kierunku. Precyzyjny dobór zawsze wymaga potwierdzenia kartą techniczną i oceną podłoża.</p></div><div className="mode-options"><button type="button" className="mode-option" onClick={() => onStart("quick")}><span className="mode-number">01</span><span className="mode-option-copy"><strong>Szybki dobór</strong><small>7 pytań · około 2 minuty</small><em>Dobry kierunek na start i szybką rozmowę z doradcą.</em></span><ArrowRight size={20} /></button><button type="button" className="mode-option mode-option-featured" onClick={() => onStart("precision")}><span className="mode-number">02</span><span className="mode-option-copy"><strong>Dobór precyzyjny</strong><small>19 pytań · pełniejsza analiza</small><em>Chemia, temperatura, podłoże, dylatacje, ESD i odwodnienia.</em></span><ArrowRight size={20} /></button><p className="mode-footnote"><CircleAlert size={15} /> Wynik ma charakter koncepcyjny i wymaga potwierdzenia aktualną kartą techniczną.</p></div></section>; }

export default function FloorSelector() {
  const [mode, setMode] = useState(null); const [step, setStep] = useState(0); const [answers, setAnswers] = useState({}); const [result, setResult] = useState(false);
  const visible = mode === "quick" ? STEPS.filter((item) => QUICK_KEYS.includes(item.key)) : mode === "precision" ? STEPS : [];
  const current = visible[step]; const ranking = useMemo(() => matchScores(answers), [answers]);
  const start = (nextMode) => { setMode(nextMode); setStep(0); setAnswers({}); setResult(false); };
  const choose = (value) => setAnswers((prev) => ({ ...prev, [current.key]: value }));
  const next = () => step === visible.length - 1 ? setResult(true) : setStep((value) => value + 1);
  const topMatch = ranking[0];
  const context = `Dobór ${mode === "quick" ? "szybki" : "precyzyjny"} — najlepsze dopasowanie: ${topMatch ? `${topMatch.name} (${topMatch.score}%)` : "brak"} — ${Object.entries(answers).map(([key, value]) => `${key}: ${value}`).join(", ")}`;
  const canonicalUrl = "https://www.flowtex.pl/dobor-posadzki";
  return <>
    <Helmet>
      <title>Dobór systemu posadzkowego — narzędzie doboru | FLOWTEX Polska</title>
      <meta
        name="description"
        content="Interaktywne narzędzie doboru technologii posadzki przemysłowej. Odpowiedz na pytania o obciążenia, chemię i wilgoć — poznaj rekomendowany kierunek systemu i zapytaj o bezpłatną wycenę."
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
              provider: { "@type": "LocalBusiness", name: "FLOWTEX Polska" },
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
    <main className="selector-page selector-v2"><section className="tool-hero"><div className="hero-grid"><div className="hero-copy"><p className="eyebrow light"><Sparkles size={14} /> {mode === "quick" ? "SZYBKI DOBÓR — 7 KROKÓW" : "DOBÓR W 2 TRYBACH"}</p><h1>Dobierz system<br /><em>do realnej pracy.</em></h1><p>Nie zaczynaj od nazwy żywicy. Zacznij od warunków, obciążeń i tego, co naprawdę dzieje się na posadzce.</p></div><div className="hero-technical-card"><img src="/images/flowtex/system-section.webp" alt="Przekrój warstw systemu posadzkowego" /><div className="hero-card-caption"><span>FLOWTEX / FIELD NOTE</span><strong>System to więcej<br />niż żywica.</strong></div></div></div></section>{!mode ? <ModePicker onStart={start} /> : !result ? <section className="tool-workspace"><aside className="step-rail"><button className="mode-back" type="button" onClick={() => setMode(null)}><ArrowLeft size={14} /> Zmień tryb</button><nav>{visible.map((item, index) => <div className={`rail-step ${index === step ? "active" : ""} ${answers[item.key] ? "done" : ""}`} key={item.key}><span>{String(index + 1).padStart(2, "0")}</span><small>{item.eyebrow.split("/")[1]}</small></div>)}</nav></aside><section className="question-panel"><div className="question-heading"><p className="eyebrow"><span>{current.eyebrow.split("/")[0]}</span> {current.eyebrow.split("/").slice(1).join("/")}</p><h2>{current.title}</h2><p>{current.description}</p></div><div className="option-grid">{current.options.map(([value, label, description]) => <button className={`option-card ${answers[current.key] === value ? "selected" : ""}`} type="button" key={value} onClick={() => choose(value)}><span className="option-check">{answers[current.key] === value ? "✓" : ""}</span><strong>{label}</strong><small>{description}</small></button>)}</div><div className="panel-actions"><button className="ghost-button" type="button" onClick={() => step === 0 ? setMode(null) : setStep((value) => value - 1)}><ArrowLeft size={15} /> Wstecz</button><button className="primary-button" type="button" disabled={!answers[current.key]} onClick={next}>{step === visible.length - 1 ? "Pokaż wynik" : "Następne pytanie"} <ArrowRight size={15} /></button></div></section></section> : <section className="results-shell"><div className="results-hero"><div><p className="eyebrow"><span>WYNIK</span> {mode === "quick" ? "SZYBKI DOBÓR" : "DOBÓR PRECYZYJNY"}</p><h2>Kierunek technologii<br /><em>do dalszej weryfikacji.</em></h2><p>Ranking pokazuje dopasowanie do deklarowanych warunków. Nie zastępuje projektu, karty technicznej ani oceny podłoża.</p></div><button className="reset-button" type="button" onClick={() => start(null)}><RotateCcw size={15} /> Zacznij od nowa</button></div><div className="match-panel"><div className="match-heading"><span>DOPASOWANIE SYSTEMÓW</span><small>ranking koncepcyjny</small></div><p className="match-intro">Trzy kierunki technologiczne, ale nie każdy z taką samą trafnością do wskazanych warunków.</p>{topMatch && topMatch.label === "Warunkowo" && <p className="match-hook"><CircleAlert size={14} /> Warunki na granicy dwóch technologii — to najczęstszy przypadek, w którym rozmowa z doradcą realnie zmienia wybór.</p>}<div className="match-list">{ranking.map((item, index) => <div className={`match-item ${index === 0 ? "top" : ""}`} key={item.id}><div className="match-meta"><span className="match-rank">0{index + 1}</span><strong>{item.name}</strong><b>{item.label}</b></div><div className="match-track"><i style={{ width: `${item.score}%` }} /></div><div className="match-foot"><small>{item.note}</small></div></div>)}</div><small className="match-disclaimer">Dopasowanie koncepcyjne — wymaga potwierdzenia podłoża, dokumentacji systemowej i warunków panujących na miejscu.</small><Link className="cross-tool-link" to="/katalog-wad">Masz już posadzkę i widzisz na niej problem? Sprawdź katalog wad <ArrowRight size={14} /></Link></div><div className="result-funnel result-funnel-form"><div><p className="eyebrow light">NASTĘPNY KROK</p><h3>Szukasz wykonawcy?<br />Zadzwoń albo napisz.</h3><p>Wynik ma charakter koncepcyjny. Opisz swoją strefę poniżej — przekażemy go naszemu doradcy i przygotujemy bezpłatną wycenę. Możesz też zadzwonić od razu.</p><div className="result-funnel-quick-contact"><a href="tel:+48507394552"><Phone size={16} /> +48 507 394 552</a><a href="mailto:kontakt@flowtex.pl"><Mail size={16} /> kontakt@flowtex.pl</a></div></div><ContactForm prefillContext={context} submitLabel="Poproś o bezpłatną wycenę" /></div></section>}</main>
  </>;
}
