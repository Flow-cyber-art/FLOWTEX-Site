// Dane i logika narzędzia /dobor-posadzki (pytania i ranking systemów).
// Wspólne dla strony FloorSelector.jsx i narzędzia WebMCP dla agentów AI
// (src/utils/webmcp.js) — jedno źródło prawdy.

export const QUICK_KEYS = ["environment", "moisture", "traffic", "chemistry", "thermal", "substrate", "downtime"];
export const STEPS = [
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
export const MATCH_SYSTEMS = {
  "pu-cement": { name: "PU-cement — system przemysłowy", note: "Najlepszy kierunek przy wymagającym użytkowaniu, naprawach podłoża i większej liczbie detali." },
  epoxy: { name: "Epoksyd posypkowy / kwarcowy", note: "Dobra alternatywa dla dobrze przygotowanego, stabilnego podłoża." },
  polyaspartic: { name: "System poliasparaginowy", note: "Wariant warunkowy — sprawdza się, gdy liczy się czas realizacji lub etapowanie prac." },
};

export function matchScores(answers) {
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
