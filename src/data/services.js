import { Droplets, ShieldAlert, Ruler, Layers, Waves, Building2, Zap, Flame, Wind } from "lucide-react";

/*
  Każdy wpis = jedna usługa = jedna podstrona pod adresem /{slug}.
  Nowa usługa automatycznie trafia do menu, strony głównej, sitemap i
  prerenderingu. Zdjęcie na stronie usługi: src/assets/realizacje/{slug}.webp.
*/
export const SERVICES = [
  {
    slug: "posadzki-zywiczne",
    icon: Droplets,
    title: "Posadzki żywiczne",
    shortDesc: "Rozwiązujemy pylenie betonu, ścieranie od wózków widłowych i wymogi HACCP — bezspoinowe posadzki epoksydowe i poliuretanowe dla hal produkcyjnych i magazynów.",
    metaDescription:
      "Posadzki żywiczne FLOWTEX Polska — epoksydowe i poliuretanowe posadzki przemysłowe dla zakładów produkcyjnych, spożywczych i farmaceutycznych.",
    intro:
      "Pyląca i pękająca posadzka betonowa, ścieranie od ciągłego ruchu wózków widłowych, wymogi HACCP i GMP, których stara nawierzchnia nie spełnia — to najczęstsze problemy, z jakimi trafiają do nas zakłady produkcyjne i spożywcze. Odpowiadamy na nie bezspoinowymi posadzkami żywicznymi: systemami epoksydowymi i poliuretanowymi dobranymi indywidualnie do obciążeń i specyfiki procesowej obiektu.",
    sections: [
      {
        heading: "Rodzaje posadzek żywicznych",
        body: "Posadzki epoksydowe sprawdzają się tam, gdzie liczy się odporność na obciążenia mechaniczne i chemikalia — w magazynach, halach produkcyjnych i laboratoriach. Tworzą twardą, szczelną powłokę łatwą w utrzymaniu czystości. Posadzki poliuretanowe są bardziej elastyczne i lepiej znoszą wahania temperatury, dlatego stosuje się je w chłodniach, magazynach spożywczych i pomieszczeniach o zmiennych warunkach cieplnych. Dobieramy system żywiczny indywidualnie, na podstawie obciążeń, chemii procesowej i wymagań higienicznych konkretnego obiektu.",
      },
      {
        heading: "Zastosowanie w różnych branżach",
        body: "Dzięki odporności na wodę, oleje i smary posadzki żywiczne dobrze sprawdzają się w halach produkcyjnych, warsztatach i magazynach — a krótki czas instalacji ogranicza przestoje zakładu. W wersjach antystatycznych (ESD) stosujemy je w halach elektroniki i pomieszczeniach czystych. Osobną grupę stanowią realizacje dla przemysłu spożywczego i farmaceutycznego, gdzie kluczowa jest odporność na tłuszcze, kwasy, wysoką temperaturę mycia parowego oraz zgodność z wymogami GMP i HACCP.",
      },
      {
        heading: "Korzyści i utrzymanie",
        body: "Bezspoinowa, gładka powierzchnia ogranicza gromadzenie się brudu i ułatwia utrzymanie higieny — to istotne w miejscach takich jak zakłady spożywcze czy pomieszczenia produkcyjne o podwyższonych wymaganiach czystości. Ewentualne uszkodzenia posadzki żywicznej można naprawiać punktowo, bez konieczności wymiany całej nawierzchni, co obniża koszty eksploatacji w dłuższej perspektywie.",
      },
    ],
    highlights: [
      "Systemy epoksydowe o grubości od 0,5 mm do kilku milimetrów, w zależności od obciążeń",
      "Warianty antystatyczne (ESD) dla hal elektroniki i pomieszczeń czystych",
      "Posadzki odporne na tłuszcze, kwasy i wysokie temperatury mycia parowego — dla przemysłu spożywczego",
      "Wykończenia matowe, półpołysk i połysk, w szerokiej palecie kolorów RAL",
      "Możliwość realizacji w ruchu ciągłym zakładu (etapowanie prac)",
    ],
    closing:
      "Każdy projekt zaczynamy od analizy podłoża i obciążeń, a kończymy na warstwie ochronnej dobranej do warunków eksploatacji.",
    faq: [
      { q: "Czym różni się posadzka epoksydowa od poliuretanowej?", a: "Posadzki epoksydowe tworzą twardą, szczelną powłokę odporną na obciążenia mechaniczne i chemikalia — sprawdzają się w magazynach, halach produkcyjnych i laboratoriach. Posadzki poliuretanowe są bardziej elastyczne i lepiej znoszą wahania temperatury, dlatego stosuje się je m.in. w chłodniach i magazynach spożywczych. System dobieramy indywidualnie do obciążeń, chemii procesowej i wymagań higienicznych obiektu." },
      { q: "Czy posadzkę żywiczną można wykonać w działającym zakładzie?", a: "Tak, w wielu przypadkach prace można prowadzić etapami, w ruchu ciągłym zakładu. Krótki czas instalacji ogranicza przestoje, a kolejność prac planujemy po wizji lokalnej, tak aby jak najmniej zakłócać produkcję." },
      { q: "Czy uszkodzoną posadzkę żywiczną trzeba wymieniać w całości?", a: "Nie zawsze. Ewentualne uszkodzenia posadzki żywicznej można naprawiać punktowo, bez wymiany całej nawierzchni, co obniża koszty eksploatacji w dłuższej perspektywie." },
      { q: "Od czego zaczyna się realizacja posadzki żywicznej?", a: "Każdy projekt zaczynamy od analizy podłoża i obciążeń, a kończymy na warstwie ochronnej dobranej do warunków eksploatacji. Od stanu podłoża zależy zakres jego przygotowania, a od obciążeń i chemii procesowej — dobór systemu." },
    ],
  },
  {
    slug: "posadzki-esd",
    icon: Zap,
    title: "Posadzki ESD (antyelektrostatyczne)",
    shortDesc: "Rozwiązujemy problem wyładowań elektrostatycznych w produkcji elektroniki — posadzki ESD z kontrolowanym odprowadzaniem ładunków, uziemieniem i pomiarem parametrów po wykonaniu.",
    metaDescription:
      "Posadzki ESD FLOWTEX Polska — antyelektrostatyczne posadzki żywiczne dla przemysłu elektronicznego: warstwy przewodzące lub rozpraszające, uziemienie i pomiary.",
    intro:
      "Wyładowania elektrostatyczne potrafią uszkodzić wrażliwe komponenty elektroniczne, a posadzka jest jednym z elementów, który decyduje o tym, czy ładunki są bezpiecznie odprowadzane, czy gromadzą się na ludziach i wyposażeniu. Wykonujemy posadzki ESD jako kompletny system — od przygotowania podłoża, przez warstwy przewodzące lub rozpraszające i uziemienie, po pomiar parametrów gotowej powierzchni.",
    sections: [
      {
        heading: "Posadzka ESD to system, nie sama żywica",
        body: "O działaniu posadzki ESD decyduje cała konstrukcja: przygotowanie podłoża betonowego, warstwy przewodzące lub rozpraszające, sposób wykonania połączeń oraz uziemienie. Dwie posadzki mogą wyglądać niemal identycznie, a zachowywać się zupełnie inaczej — dlatego patrzymy na cały układ, a nie wyłącznie na końcową warstwę żywiczną. Istotne jest też to, jak posadzka współpracuje z obuwiem ESD: podłoga i obuwie ocenione osobno nie gwarantują jeszcze prawidłowego działania całego układu osoba–obuwie–podłoga.",
      },
      {
        heading: "Zastosowania",
        body: "Posadzki ESD stosujemy w halach produkcji i montażu elektroniki, strefach EPA, laboratoriach oraz magazynach komponentów wrażliwych na wyładowania. Przykładem jest nasza realizacja 700 m² posadzki ESD dla strefy produkcji elektroniki. Posadzki ESD są też spokrewnione z systemami do stref zagrożenia wybuchem, ale cel zastosowania jest inny — dlatego w strefach Ex wymagania określamy osobno (zobacz: posadzki antywybuchowe ATEX).",
      },
      {
        heading: "Pomiary i dokumentacja",
        body: "Po zakończeniu prac sprawdzamy parametry elektryczne wykonanej posadzki, ponieważ nieprawidłowo wykonany detal — np. połączenie warstwy przewodzącej z uziemieniem — może wpłynąć na działanie całego systemu, nawet jeśli powierzchnia wygląda poprawnie. Pomiary i dokumentacja pozwalają zweryfikować, czy system osiągnął wymagane parametry, a późniejsza kontrola w trakcie eksploatacji pozwala utrzymać je na właściwym poziomie.",
      },
    ],
    highlights: [
      "Posadzki żywiczne ESD w wariantach przewodzących i rozpraszających, dobieranych do wymagań strefy",
      "Przygotowanie podłoża betonowego pod system antyelektrostatyczny",
      "Wykonanie warstw przewodzących i połączeń z uziemieniem obiektu",
      "Pomiar parametrów elektrycznych gotowej posadzki",
      "Wskazówki dotyczące użytkowania i czyszczenia powierzchni oraz kontroli parametrów w eksploatacji",
      "Możliwość realizacji etapami, bez zatrzymywania całego zakładu",
    ],
    closing:
      "Zanim dobierzemy system, pytamy o proces, wymagania strefy i sposób użytkowania — dopiero na tej podstawie określamy zakres prac.",
    faq: [
      { q: "Do czego służy posadzka ESD?", a: "Posadzka ESD tworzy kontrolowaną drogę odprowadzania ładunków elektrostatycznych, dzięki czemu ogranicza ryzyko wyładowań, które mogą uszkodzić wrażliwe komponenty elektroniczne. Stosuje się ją w halach produkcji i montażu elektroniki oraz w strefach EPA." },
      { q: "Czy posadzka ESD to to samo co posadzka do strefy zagrożenia wybuchem?", a: "Nie. Oba rozwiązania łączy kontrolowane odprowadzanie ładunków, ale cel jest inny: w ESD chodzi o ochronę elektroniki, a w strefie Ex o ograniczanie potencjalnych źródeł zapłonu. Wymagania dla strefy Ex określa się na podstawie jej klasyfikacji w konkretnym obiekcie." },
      { q: "Czy po wykonaniu sprawdzacie parametry posadzki?", a: "Tak. Po zakończeniu prac sprawdzamy parametry elektryczne gotowej posadzki, bo nieprawidłowo wykonany detal, np. połączenie warstwy przewodzącej z uziemieniem, może wpłynąć na działanie całego systemu, nawet jeśli powierzchnia wygląda poprawnie." },
      { q: "Czy obuwie ma znaczenie dla działania posadzki ESD?", a: "Tak. Podłoga i obuwie ocenione osobno nie gwarantują jeszcze prawidłowego działania całego układu osoba–obuwie–podłoga, dlatego przy realizacjach ESD nie patrzymy wyłącznie na sam materiał posadzkowy." },
    ],
  },
  {
    slug: "posadzki-antywybuchowe-atex",
    icon: Flame,
    title: "Posadzki antywybuchowe ATEX",
    shortDesc: "Rozwiązujemy problem posadzek w strefach zagrożenia wybuchem — systemy przewodzące z uziemieniem i taśmami miedzianymi, z kontrolą parametrów elektrycznych po wykonaniu.",
    metaDescription:
      "Posadzki antywybuchowe ATEX FLOWTEX Polska — systemy przewodzące do stref zagrożenia wybuchem (Ex) z uziemieniem, taśmami miedzianymi i pomiarami po wykonaniu.",
    intro:
      "Nie każda posadzka antyelektrostatyczna jest posadzką przeznaczoną do pracy w strefie zagrożenia wybuchem. W obiektach, w których może powstać atmosfera wybuchowa — np. w halach magazynujących materiały sypkie — kontrola elektryczności statycznej jest jednym z elementów całego systemu bezpieczeństwa. Wykonujemy posadzki do stref Ex jako kompletny system, a wymagania określamy na podstawie klasyfikacji strefy w konkretnym obiekcie.",
    sections: [
      {
        heading: "Posadzka do strefy Ex jako system",
        body: "Informacja, że posadzka jest „przewodząca” albo „antystatyczna”, nie wystarcza. Znaczenie ma cały układ: mechaniczne przygotowanie podłoża, system dobrany do klasyfikacji strefy, prawidłowo wykonana warstwa odprowadzająca ładunki, połączenie z instalacją uziemiającą obiektu oraz taśmy miedziane stanowiące element drogi odprowadzania ładunków. Dlatego posadzkę w strefie Ex traktujemy jako system, a nie warstwę żywicy na betonie.",
      },
      {
        heading: "Posadzka antywybuchowa a posadzka ESD",
        body: "W środowisku ESD głównym celem jest ochrona wrażliwej elektroniki przed wyładowaniami. W strefie zagrożenia wybuchem kontrola elektryczności statycznej jest natomiast jednym ze sposobów ograniczania potencjalnych źródeł zapłonu. Oba rodzaje posadzek łączy kontrolowane odprowadzanie ładunków, ale określenie „posadzka antyelektrostatyczna” nie powinno być automatycznie traktowane jako synonim posadzki do strefy Ex — wymagania trzeba określić na podstawie warunków i klasyfikacji konkretnego obiektu.",
      },
      {
        heading: "Pomiary i odbiór",
        body: "Przy dużych powierzchniach ważne jest zachowanie powtarzalnych parametrów na całym wykonanym obszarze. Po zakończeniu prac kontrolujemy parametry elektryczne gotowej posadzki, a pomiary i dokumentacja pozwalają zweryfikować, czy system osiągnął wymagane parametry. Przykładem jest nasza realizacja 1420 m² posadzki antywybuchowej w hali magazynującej materiały sypkie pod Grójcem.",
      },
    ],
    highlights: [
      "Posadzki przewodzące do stref zagrożenia wybuchem, dobierane do klasyfikacji strefy Ex obiektu",
      "Mechaniczne przygotowanie podłoża betonowego pod system przewodzący",
      "Warstwa odprowadzająca ładunki elektrostatyczne i połączenia z instalacją uziemiającą",
      "Taśmy miedziane jako element drogi odprowadzania ładunków",
      "Kontrola parametrów elektrycznych po zakończeniu prac",
      "Realizacje na dużych powierzchniach magazynowych i produkcyjnych",
    ],
    closing:
      "Masz halę ze strefą Ex? Opisz nam proces i klasyfikację strefy — przeanalizujemy warunki pracy i zaproponujemy rozwiązanie.",
    faq: [
      { q: "Czy każda posadzka antystatyczna nadaje się do strefy zagrożenia wybuchem?", a: "Nie. Określenie „posadzka antyelektrostatyczna” nie powinno być automatycznie traktowane jako synonim posadzki do strefy Ex. Wymagania trzeba określić na podstawie warunków i klasyfikacji strefy w konkretnym obiekcie." },
      { q: "Z czego składa się system posadzkowy do strefy Ex?", a: "Znaczenie ma cały układ: mechaniczne przygotowanie podłoża, system dobrany do klasyfikacji strefy, warstwa odprowadzająca ładunki elektrostatyczne, połączenie z instalacją uziemiającą obiektu oraz taśmy miedziane stanowiące element drogi odprowadzania ładunków." },
      { q: "Jak kontrolujecie jakość wykonanej posadzki?", a: "Po zakończeniu prac kontrolujemy parametry elektryczne gotowej posadzki. Pomiary i dokumentacja pozwalają zweryfikować, czy system osiągnął wymagane parametry na całej powierzchni." },
      { q: "Co przygotować, aby uzyskać wycenę posadzki do strefy Ex?", a: "Warto opisać proces i rodzaj składowanych lub przetwarzanych materiałów, klasyfikację strefy zagrożenia wybuchem, powierzchnię oraz stan istniejącego podłoża. Na tej podstawie przeanalizujemy warunki pracy i zaproponujemy rozwiązanie." },
    ],
  },
  {
    slug: "posadzki-clean-room",
    icon: Wind,
    title: "Posadzki do clean roomów i pomieszczeń czystych",
    shortDesc: "Rozwiązujemy problem zanieczyszczeń gromadzących się w spoinach i porach — bezspoinowe posadzki żywiczne z fasetą dla farmacji, szpitali i produkcji o podwyższonym reżimie czystości.",
    metaDescription:
      "Posadzki do clean roomów FLOWTEX Polska — bezspoinowe posadzki żywiczne z fasetą dla przemysłu farmaceutycznego i szpitali, odporne na częstą dezynfekcję.",
    intro:
      "W pomieszczeniach czystych posadzka nie jest wyłącznie wykończeniem — jest częścią środowiska produkcyjnego lub medycznego, w którym liczy się ograniczenie powstawania i gromadzenia zanieczyszczeń oraz łatwość utrzymania higieny. Wykonujemy bezspoinowe posadzki żywiczne z wywinięciem na ściany dla zakładów farmaceutycznych, obiektów medycznych i innych stref o podwyższonym reżimie czystości.",
    sections: [
      {
        heading: "Wymagania stawiane posadzce",
        body: "Wymagania dotyczące kontroli czystości środowiska określają m.in. normy serii ISO 14644, a w procesach wymagających warunków aseptycznych — wytyczne EU GMP Aneks 1. Przekładają się one na cechy posadzki: musi być bezpyłowa, nie może generować ani zatrzymywać cząstek, powinna być pozbawiona porów i odporna na częstą, intensywną dezynfekcję środkami chemicznymi. Dlatego system dobieramy na podstawie analizy warunków pracy konkretnego pomieszczenia, a nie wyłącznie wyglądu czy odporności mechanicznej.",
      },
      {
        heading: "Bezspoinowość i faseta",
        body: "Posadzka jest wykonywana bez spoin, z wywinięciem na ściany (fasetą), co eliminuje ostre kąty i połączenia ściana–podłoga — miejsca, w których najłatwiej o zaleganie zanieczyszczeń trudnych do usunięcia podczas czyszczenia i dezynfekcji. Gładka, jednolita powierzchnia z dekoracyjnymi płatkami kwarcowymi jest łatwa w codziennym utrzymaniu czystości.",
      },
      {
        heading: "Przemysł i obiekty medyczne",
        body: "Techniczne zasady są wspólne dla hal produkcyjnych i placówek medycznych, różni się natomiast kontekst: inwestor, przepisy i procedury odbioru, a w czynnych obiektach szpitalnych także organizacja prac — często etapowa, z uwzględnieniem sąsiedztwa stref sterylnych. Mamy za sobą realizację clean roomu 340 m² dla zakładu farmaceutycznego na Mazowszu oraz posadzkę dla warszawskiego szpitala.",
      },
    ],
    highlights: [
      "Posadzki żywiczne bezspoinowe z fasetą wywiniętą na ściany",
      "Przygotowanie zdegradowanych, porowatych podłoży betonowych",
      "Powierzchnie bezpyłowe, odporne na częstą dezynfekcję chemiczną",
      "Realizacje dla przemysłu farmaceutycznego i obiektów medycznych",
      "Prace etapowe w czynnych obiektach, z uwzględnieniem stref o podwyższonej czystości",
    ],
    closing:
      "Zakres systemu określamy po analizie przeznaczenia pomieszczenia, klasy czystości i sposobu odbioru obiektu.",
    faq: [
      { q: "Dlaczego posadzka w clean roomie powinna być bezspoinowa i z fasetą?", a: "Każda szczelina czy fuga to potencjalne miejsce gromadzenia się zanieczyszczeń i drobnoustrojów, trudne do skutecznej dezynfekcji. Faseta, czyli wywinięcie posadzki na ściany, eliminuje ostre kąty i połączenia ściana–podłoga, w których najłatwiej o zaleganie zanieczyszczeń." },
      { q: "Jakie normy dotyczą pomieszczeń czystych?", a: "Wymagania dotyczące kontroli czystości środowiska określają m.in. normy serii ISO 14644, a w procesach wymagających warunków aseptycznych — wytyczne EU GMP Aneks 1. Przekładają się one na cechy posadzki, m.in. bezpyłowość i brak porów." },
      { q: "Czy wykonujecie posadzki w czynnych obiektach szpitalnych?", a: "Tak, mamy za sobą realizację dla warszawskiego szpitala. W czynnych obiektach medycznych prace często prowadzi się etapami, z uwzględnieniem ograniczeń czasowych i sąsiedztwa stref sterylnych." },
      { q: "Co ze zniszczonym, porowatym podłożem betonowym?", a: "Podłoże przygotowujemy przed wykonaniem systemu żywicznego. W naszej realizacji dla zakładu farmaceutycznego podłożem była mocno zdegradowana, porowata wylewka betonowa, na której wykonaliśmy bezspoinowy system żywiczny." },
    ],
  },
  {
    slug: "systemy-odbojowe",
    icon: ShieldAlert,
    title: "Systemy odbojowe i ochrona ścian",
    shortDesc: "Rozwiązujemy problem uszkodzonych ścian, słupów i naroży od uderzeń wózków widłowych — odboje, okładziny ścienne i cokoły ograniczające koszty ciągłych napraw.",
    metaDescription:
      "Systemy odbojowe i ochrona ścian FLOWTEX Polska — odboje, okładziny ścienne i cokoły Polysto® dla hal produkcyjnych i magazynów, dobór, dostawa i montaż.",
    intro:
      "Wgniecione płyty warstwowe, pęknięte narożniki słupów, odpryskujący tynk w strefach manewrowych — skutki codziennego kontaktu ścian z wózkami widłowymi i transportem wewnętrznym generują powtarzalne koszty napraw. Rozwiązujemy to, montując odboje, okładziny ścienne i cokoły Polysto®, które przejmują uderzenia zamiast konstrukcji hali.",
    sections: [
      {
        heading: "Rodzaje zabezpieczeń",
        body: "W ofercie mamy odboje ścienne Polysto® montowane wzdłuż tras transportu wewnętrznego, elementy narożnikowe chroniące słupy i naroża w strefach manewrowych, poliestrowe panele ścienne odporne na uderzenia — pozwalające odnowić uszkodzone powierzchnie bez ich wymiany — oraz cokoły zapewniające bezszwowe, higieniczne połączenie ściany z podłogą.",
      },
      {
        heading: "Dobór do obciążenia",
        body: "Rodzaj i grubość odboju dobieramy indywidualnie, na podstawie wywiadu dotyczącego rodzaju i natężenia ruchu wózków oraz urządzeń poruszających się po hali. Dla elementów wystających ponad standardową wysokość odboju proponujemy dodatkowe osłony ścienne, ograniczające ryzyko uszkodzeń w miejscach o podwyższonym ryzyku kolizji.",
      },
      {
        heading: "Higiena i wykończenie",
        body: "Cokoły Polysto® z gładką powłoką Sanicoat, bezpieczną dla żywności, stosujemy tam, gdzie liczy się zgodność z wymogami higienicznymi, np. w przemyśle spożywczym. Wszystkie połączenia elementów wykonujemy na bazie systemowego kleju Hygiseal®, co zapewnia szczelność i trwałość, a montaż prowadzimy tak, by umożliwić ewentualną wymianę pojedynczych elementów bez ingerencji w konstrukcję ściany.",
      },
    ],
    highlights: [
      "Odboje ścienne Polysto® dobierane indywidualnie do obciążenia i ruchu wózków widłowych",
      "Ochrona narożników i słupów w strefach manewrowych",
      "Poliestrowe panele ścienne odnawiające uszkodzone powierzchnie bez konieczności wymiany",
      "Cokoły z powłoką Sanicoat, bezpieczną dla żywności, dla przemysłu spożywczego",
      "Montaż na systemowym kleju Hygiseal® — umożliwia wymianę pojedynczych elementów bez ingerencji w konstrukcję",
    ],
    closing:
      "Rozmieszczenie i dobór zabezpieczeń projektujemy na podstawie realnych tras transportu wewnętrznego oraz wymagań higienicznych obiektu.",
    faq: [
      { q: "Co chronią systemy odbojowe w hali?", a: "Odboje, okładziny ścienne i elementy narożnikowe przejmują uderzenia wózków widłowych i transportu wewnętrznego zamiast ścian, słupów i naroży konstrukcji hali, ograniczając powtarzalne koszty napraw." },
      { q: "Jak dobieracie rodzaj i grubość odboju?", a: "Indywidualnie, na podstawie wywiadu dotyczącego rodzaju i natężenia ruchu wózków oraz urządzeń poruszających się po hali. Rozmieszczenie projektujemy na podstawie realnych tras transportu wewnętrznego." },
      { q: "Czy systemy odbojowe nadają się do zakładów spożywczych?", a: "Tak. Stosujemy cokoły Polysto z gładką powłoką Sanicoat, bezpieczną dla żywności, oraz montaż na systemowym kleju Hygiseal®. Zrealizowaliśmy m.in. odboje, cokoły higieniczne i okładziny ścienne w zakładzie produkcji przekąsek i chipsów we Wrocławiu." },
      { q: "Czy można wymienić pojedynczy uszkodzony element?", a: "Tak. Montaż prowadzimy tak, by umożliwić wymianę pojedynczych elementów bez ingerencji w konstrukcję ściany." },
    ],
  },
  {
    slug: "technika-diamentowa",
    icon: Ruler,
    title: "Technika diamentowa",
    shortDesc: "Rozwiązujemy potrzebę precyzyjnych dylatacji, przewiertów instalacyjnych i punktowych napraw betonu — bez wstrzymywania pracy hali.",
    metaDescription:
      "Technika diamentowa FLOWTEX Polska — cięcie i wiercenie w betonie, wycinanie dylatacji, naprawy posadzek przemysłowych.",
    intro:
      "Brak dylatacji tam, gdzie płyta betonowa pęka niekontrolowanie, przewiert pod nową instalację bez uszkodzenia zbrojenia, punktowe usunięcie zniszczonego fragmentu posadzki bez zamykania całej hali — to zadania wymagające precyzji, nie młota. Rozwiązujemy je techniką diamentową: cięciem i wierceniem metodą mokrą, ograniczającą pylenie i drgania, bezpieczną w czynnych zakładach produkcyjnych.",
    sections: [
      {
        heading: "Zakres usług",
        body: "Wykonujemy cięcie dylatacji konstrukcyjnych i pozornych zarówno w świeżym, jak i istniejącym betonie, wiercenie otworów instalacyjnych o różnych średnicach oraz punktowe wycinanie i wymianę uszkodzonych fragmentów posadzki bez remontu całej powierzchni.",
      },
      {
        heading: "Zastosowania",
        body: "Technika diamentowa towarzyszy nam przy wykonywaniu nowych dylatacji w świeżo wylanym betonie, przy przewiertach pod instalacje elektryczne i sanitarne, a także przy naprawach — gdy trzeba precyzyjnie usunąć uszkodzony fragment posadzki, nie naruszając otaczającej nawierzchni.",
      },
      {
        heading: "Dlaczego metoda diamentowa",
        body: "Cięcie i wiercenie diamentowe daje dużą precyzję cięcia przy minimalnych drganiach i pękaniu krawędzi. Prace prowadzimy metodą mokrą, ograniczającą pylenie, dzięki czemu można je bezpiecznie wykonywać w czynnych halach produkcyjnych, bez konieczności wstrzymywania pracy całego zakładu.",
      },
    ],
    highlights: [
      "Cięcie dylatacji konstrukcyjnych i pozornych w świeżym oraz istniejącym betonie",
      "Wiercenie otworów instalacyjnych o różnych średnicach",
      "Wycinanie i wymiana lokalnych uszkodzeń posadzki bez konieczności remontu całej powierzchni",
      "Prace realizowane z ograniczeniem pyłu (metoda mokra) — bezpieczne w czynnych halach",
    ],
    closing:
      "Technikę diamentową łączymy najczęściej z naprawą punktową posadzek żywicznych i betonowych.",
    faq: [
      { q: "Czy cięcie i wiercenie diamentowe można prowadzić w czynnej hali?", a: "Tak. Prace prowadzimy metodą mokrą, która ogranicza pylenie, a samo cięcie daje minimalne drgania, dzięki czemu można je bezpiecznie wykonywać bez wstrzymywania pracy całego zakładu." },
      { q: "Co obejmuje technika diamentowa?", a: "Cięcie dylatacji konstrukcyjnych i pozornych w świeżym oraz istniejącym betonie, wiercenie otworów instalacyjnych o różnych średnicach oraz punktowe wycinanie i wymianę uszkodzonych fragmentów posadzki." },
      { q: "Po co wykonuje się dylatacje w posadzce?", a: "Dylatacje ograniczają ryzyko niekontrolowanego pękania płyty betonowej. Brak dylatacji tam, gdzie są potrzebne, często kończy się spękaniami w przypadkowych miejscach." },
    ],
  },
  {
    slug: "betonowe-posadzki-przemyslowe",
    icon: Layers,
    title: "Betonowe posadzki przemysłowe",
    shortDesc: "Rozwiązujemy problem niewystarczającej nośności podłoża pod regały wysokiego składowania i intensywny ruch wózków widłowych — betonowe posadzki utwardzane powierzchniowo i zbrojone pod realne obciążenia.",
    metaDescription:
      "Betonowe posadzki przemysłowe FLOWTEX Polska — posadzki utwardzane powierzchniowo, zbrojone włóknami, dla magazynów i hal produkcyjnych.",
    intro:
      "Płyta betonowa, która nie udźwignie regałów wysokiego składowania, ściera się pod kołami wózków widłowych albo pęka bez zaplanowanych dylatacji — to typowe problemy inwestycji magazynowych na etapie budowy lub rozbudowy. Rozwiązujemy je posadzkami betonowymi utwardzanymi powierzchniowo (posypka lub zacierka), zbrojonymi tradycyjnie lub włóknami — dobranymi do realnych obciążeń obiektu.",
    sections: [
      {
        heading: "Warianty wykonania",
        body: "Powierzchnię betonu utwardzamy posypką mineralną lub kwarcową, co zwiększa odporność na ścieranie w strefach ruchu wózków widłowych. Zbrojenie dobieramy do obciążeń — rozproszone włóknami stalowymi lub polipropylenowymi albo tradycyjne, prętowe, przy większych rozpiętościach i obciążeniach punktowych.",
      },
      {
        heading: "Zastosowania",
        body: "Betonowe posadzki przemysłowe sprawdzają się przede wszystkim w halach magazynowych wysokiego składowania, na placach manewrowych i w strefach produkcyjnych, gdzie kluczowa jest nośność i odporność na obciążenia od regałów oraz wózków widłowych.",
      },
      {
        heading: "Dylatacje i wykończenie",
        body: "Dylatacje konstrukcyjne i pozorne wykonujemy zgodnie z projektem technologicznym obiektu, co ogranicza ryzyko niekontrolowanego pękania płyty. Taka posadzka może funkcjonować samodzielnie albo posłużyć jako podłoże pod docelową warstwę żywiczną, jeśli w przyszłości zajdzie taka potrzeba.",
      },
    ],
    highlights: [
      "Utwardzanie powierzchniowe posypką mineralną lub kwarcową",
      "Zbrojenie rozproszone włóknami stalowymi lub polipropylenowymi",
      "Dylatacje konstrukcyjne i pozorne wykonywane zgodnie z projektem technologicznym",
      "Możliwość późniejszego wykończenia warstwą żywiczną",
    ],
    closing:
      "To rozwiązanie sprawdza się jako samodzielna nawierzchnia magazynowa lub jako podłoże pod docelową posadzkę żywiczną.",
    faq: [
      { q: "Po co utwardza się powierzchnię posadzki betonowej?", a: "Utwardzanie posypką mineralną lub kwarcową zwiększa odporność na ścieranie, co jest istotne w strefach ruchu wózków widłowych." },
      { q: "Jakie zbrojenie stosuje się w posadzkach betonowych?", a: "Zbrojenie dobieramy do obciążeń: rozproszone włóknami stalowymi lub polipropylenowymi albo tradycyjne, prętowe, przy większych rozpiętościach i obciążeniach punktowych." },
      { q: "Czy na posadzce betonowej można później wykonać warstwę żywiczną?", a: "Tak. Posadzka betonowa może funkcjonować samodzielnie albo posłużyć jako podłoże pod docelową warstwę żywiczną, jeśli w przyszłości zajdzie taka potrzeba." },
    ],
  },
  {
    slug: "serwis-posadzek-i-kanalizacji",
    icon: Waves,
    title: "Serwis posadzek i kanalizacji",
    shortDesc: "Rozwiązujemy odspojenia żywicy, spękany beton i niedrożną kanalizację zakładową — zanim staną się powodem nieplanowanego przestoju lub uwagi podczas audytu.",
    metaDescription:
      "Serwis posadzek i kanalizacji FLOWTEX Polska — naprawa uszkodzeń betonu i żywicy, kamerowanie oraz udrażnianie ciągów kanalizacyjnych.",
    intro:
      "Odspojona żywica pod wózkiem widłowym, spękany beton w strefie mokrej, powtarzające się zatory w kanalizacji zakładowej — takie usterki rzadko czekają na dogodny termin remontu. Serwisujemy istniejące posadzki i instalacje kanalizacyjne: od napraw punktowych i renowacji uszkodzonego betonu, po kamerowanie i udrażnianie rur, zanim usterka przerodzi się w nieplanowany przestój lub uwagę podczas audytu.",
    sections: [
      {
        heading: "Naprawy posadzek i renowacja betonu",
        body: "Usuwamy odpryski, ubytki mechaniczne oraz uszkodzenia dylatacji, a przy poważniejszych zniszczeniach przeprowadzamy renowację podłoża — w tym naprawę odspojonej lub spękanej warstwy żywicznej i betonowej. Zamiast wymiany całej powierzchni, punktowo wzmacniamy i uzupełniamy uszkodzone miejsca, co pozwala ograniczyć koszty i czas przestoju.",
      },
      {
        heading: "Serwis kanalizacji",
        body: "Wykonujemy kamerowanie ciągów kanalizacyjnych, dzięki czemu można precyzyjnie zdiagnozować przyczynę niedrożności lub nieszczelności przed podjęciem prac naprawczych. Udrażnianie rur prowadzimy metodą mechaniczną lub chemiczną, dobraną do charakteru osadu, tak aby efekt był trwały, a nie tylko doraźny.",
      },
      {
        heading: "Dylatacje i cokoły",
        body: "Uzupełniamy i naprawiamy dylatacje ograniczające niekontrolowane pękanie posadzki, a także naprawiamy lub wymieniamy uszkodzone cokoły w strefach narażonych na uderzenia i wilgoć. Prace prowadzimy tak, aby jak najmniej zakłócać bieżącą pracę zakładu.",
      },
    ],
    highlights: [
      "Naprawa ubytków, odprysków i uszkodzeń mechanicznych posadzki",
      "Renowacja odspojonej żywicy i spękanego betonu",
      "Kamerowanie i udrażnianie ciągów kanalizacyjnych",
      "Naprawa i uzupełnianie dylatacji, naprawa lub wymiana cokołów",
    ],
    closing:
      "Serwis planujemy tak, by przygotować strefy produkcyjne do audytów i ograniczyć ryzyko nieplanowanych przestojów.",
    faq: [
      { q: "Czy uszkodzoną posadzkę trzeba wymieniać w całości?", a: "Nie zawsze. Zamiast wymiany całej powierzchni punktowo wzmacniamy i uzupełniamy uszkodzone miejsca, co pozwala ograniczyć koszty i czas przestoju." },
      { q: "Jak diagnozujecie problemy z kanalizacją zakładową?", a: "Wykonujemy kamerowanie ciągów kanalizacyjnych, dzięki czemu można precyzyjnie zdiagnozować przyczynę niedrożności lub nieszczelności przed podjęciem prac naprawczych." },
      { q: "Jak udrażniacie rury?", a: "Metodą mechaniczną lub chemiczną, dobraną do charakteru osadu, tak aby efekt był trwały, a nie tylko doraźny." },
    ],
  },
  {
    slug: "fitout",
    icon: Building2,
    title: "Fitout obiektów przemysłowych",
    shortDesc: "Rozwiązujemy problem koordynacji kilku niezależnych ekip przy remoncie — jeden wykonawca odpowiedzialny za cały zakres prac wykończeniowych, od ścianek po instalacje.",
    metaDescription:
      "Fitout FLOWTEX Polska — remonty i wykończenia obiektów komercyjnych i produkcyjnych: ścianki działowe, podłogi, instalacje elektryczne i sanitarne.",
    intro:
      "Remont obiektu komercyjnego lub produkcyjnego przy jednoczesnym zaangażowaniu kilku niezależnych ekip zwykle oznacza rozjeżdżające się harmonogramy i brak jednego adresu odpowiedzialności za efekt. Rozwiązujemy to jako jeden wykonawca prowadzący cały zakres wykończeniowy — ścianki działowe i przeszklenia, podłogi i wyposażenie, instalacje elektryczne i sanitarne — dla sektora prywatnego i publicznego.",
    sections: [
      {
        heading: "Zakres prac",
        body: "Projekty fitoutowe mogą obejmować montaż ścianek działowych i przeszkleń, wykonanie posadzek, dobór i montaż wyposażenia oraz elementów dekoracyjnych, a także prace elektryczne i hydrauliczne. Zakres każdorazowo dopasowujemy do funkcji docelowej pomieszczeń.",
      },
      {
        heading: "Indywidualne podejście",
        body: "Każdy projekt zaczynamy od wizji lokalnej — rozpoznajemy specyfikę obiektu, wymagania techniczne i harmonogram funkcjonowania firmy. Dzięki temu możemy precyzyjnie zaplanować kolejność prac i zminimalizować zakłócenia w bieżącej działalności klienta.",
      },
      {
        heading: "Realizacja pod klucz",
        body: "Koordynujemy wszystkie etapy prac — od demontażu i przygotowania powierzchni, przez roboty budowlane i instalacyjne, po wykończenie i sprzątanie obiektu — tak, aby klient otrzymał gotową do użytku przestrzeń bez konieczności angażowania kilku niezależnych wykonawców.",
      },
    ],
    highlights: [
      "Ścianki działowe, przeszklenia i zabudowy wewnętrzne",
      "Posadzki, wyposażenie i wykończenia dekoracyjne",
      "Instalacje elektryczne i sanitarne",
      "Jeden wykonawca koordynujący cały zakres prac",
    ],
    closing:
      "Realizację planujemy tak, aby ograniczyć przestoje i dostarczyć gotową przestrzeń zgodnie z ustalonym harmonogramem.",
    faq: [
      { q: "Co obejmuje fitout obiektu przemysłowego lub komercyjnego?", a: "Zakres może obejmować montaż ścianek działowych i przeszkleń, wykonanie posadzek, dobór i montaż wyposażenia oraz elementów dekoracyjnych, a także prace elektryczne i hydrauliczne. Zakres dopasowujemy do funkcji docelowej pomieszczeń." },
      { q: "Kto koordynuje prace różnych branż?", a: "Jeden wykonawca — FLOWTEX Polska. Koordynujemy wszystkie etapy, od demontażu i przygotowania powierzchni, przez roboty budowlane i instalacyjne, po wykończenie i sprzątanie obiektu." },
      { q: "Od czego zaczyna się projekt fitoutowy?", a: "Od wizji lokalnej, podczas której rozpoznajemy specyfikę obiektu, wymagania techniczne i harmonogram funkcjonowania firmy. Dzięki temu planujemy kolejność prac i minimalizujemy zakłócenia w bieżącej działalności klienta." },
    ],
  },
];

export function getServiceBySlug(slug) {
  return SERVICES.find((s) => s.slug === slug);
}
