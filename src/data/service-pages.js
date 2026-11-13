import { Utensils, FlaskConical, Wrench, Droplets, Layers, Warehouse } from "lucide-react";

/*
  Strony branżowe i technologiczne. Mają ten sam format co wpisy w services.js
  (szablon ServicePage), z dodatkowymi polami:
  - group: "branza" | "technologia" — grupa w menu i stopce; te strony nie
    trafiają do kafelków "Nasza oferta" na stronie głównej (patrz CORE_SERVICES)
  - imageSlug: nazwa zdjęcia z src/assets/realizacje/ użyta w nagłówku strony
  - relatedRealizacjeSlugs: realizacje pokazywane na stronie (oprócz tych,
    które mają w realizacje.js relatedServiceSlug równy slugowi strony)
  - sekcje mogą mieć oprócz body: items (lista punktów), table ({ head, rows })
    i note (akapit pod tabelą); linki w tekście: [tekst](/ścieżka)

  Treści opierają się na poradnikach i stronach usług FLOWTEX. Parametry
  techniczne (grubości, temperatury, klasy) podajemy tylko tam, gdzie są już
  na stronie; resztę zawsze weryfikujemy w karcie technicznej systemu.
*/
export const SERVICE_PAGES = [
  {
    slug: "posadzki-dla-przemyslu-spozywczego",
    group: "branza",
    icon: Utensils,
    imageSlug: "systemy-odbojowe",
    imageAlt: "Hala zakładu spożywczego z posadzką żywiczną i odbojami — realizacja FLOWTEX Polska",
    h1: "Posadzki dla przemysłu spożywczego",
    title: "Posadzki dla przemysłu spożywczego",
    metaTitle: "Posadzki dla przemysłu spożywczego — HACCP | FLOWTEX Polska",
    metaDescription:
      "Higieniczne posadzki żywiczne do zakładów spożywczych: odporne na mycie, tłuszcze i kwasy. Spadki, cokoły i ochrona ścian. Wycena po oględzinach.",
    shortDesc:
      "Rozwiązujemy problem posadzek niszczonych przez mycie gorącą wodą, tłuszcze i kwasy — higieniczne systemy żywiczne ze spadkami, cokołami i ochroną ścian.",
    intro:
      "Woda i codzienne mycie, tłuszcze i kwasy, wysoka temperatura mycia parowego, ruch wózków widłowych oraz wymogi HACCP i GMP — posadzka w zakładzie spożywczym pracuje w jednym z najtrudniejszych środowisk. Pyląca, pękająca lub porowata posadzka betonowa to najczęstszy powód, dla którego zakłady szukają nowej. Projektujemy i wykonujemy bezspoinowe posadzki żywiczne dobrane do warunków poszczególnych stref: od mokrej produkcji, przez chłodnie, po magazyny.",
    sections: [
      {
        heading: "Czego wymaga posadzka w zakładzie spożywczym",
        body: "Żaden z wymogów nie jest ważniejszy z góry. To warunki konkretnego zakładu, a nawet konkretnej strefy, decydują, które z nich są kluczowe:",
        items: [
          "odporność na wodę i mycie: intensywny, regularny kontakt z wodą oraz środkami myjącymi,",
          "odporność chemiczna: tłuszcze, kwasy i inne substancje występujące w procesie produkcji,",
          "odporność na temperaturę, w tym wysoką temperaturę mycia parowego,",
          "odporność mechaniczna: ścieranie i obciążenia od wózków widłowych oraz transportu wewnętrznego,",
          "higiena: bezspoinowa, gładka powierzchnia, która ogranicza gromadzenie się brudu i ułatwia czyszczenie,",
          "zgodność z wymogami HACCP i GMP, właściwymi dla przemysłu spożywczego.",
        ],
      },
      {
        heading: "Jaki system do jakiej strefy",
        body: "W jednym zakładzie warunki potrafią się mocno różnić: inaczej wygląda strefa mokra z częstym myciem, inaczej magazyn, a jeszcze inaczej chłodnia. Jeden system dla całego obiektu bywa kompromisem, który nie sprawdza się nigdzie. Poniżej typowe kierunki, które weryfikujemy na podstawie obciążeń, chemii procesowej i sposobu mycia.",
        table: {
          head: ["Strefa i warunki", "Typowy kierunek systemu", "Na co zwracamy uwagę"],
          rows: [
            ["Mokra produkcja z myciem gorącą wodą lub parą (zakłady mięsne, mleczarnie, przetwórnie)", "Poliuretan-cement o grubości kilku milimetrów", "Szoki termiczne, tłuszcze, kwasy organiczne, spadki do odwodnień"],
            ["Chłodnie i magazyny o zmiennej temperaturze", "Poliuretan lub poliuretan-cement", "Znoszenie niskich temperatur i ich wahań, uderzenia"],
            ["Suche lub umiarkowanie wilgotne hale, magazyny, laboratoria", "Epoksyd: powłoka, system samopoziomujący lub posypkowy z kruszywem kwarcowym", "Obciążenia mechaniczne, chemikalia, antypoślizgowość"],
          ],
        },
        note: "To kierunki wstępne. Dokładne parametry, takie jak dopuszczalna temperatura czy lista odpornych substancji, zależą od konkretnego systemu i grubości warstwy, dlatego zawsze weryfikujemy je w karcie technicznej producenta. Wstępny wybór ułatwia narzędzie [dobór systemu posadzkowego](/dobor-posadzki), a porównanie technologii znajdziesz w poradniku [epoksyd czy poliuretan](/poradniki/posadzka-epoksydowa-czy-poliuretanowa).",
      },
      {
        heading: "Spadki, odwodnienia i cokoły",
        body: "W zakładach spożywczych prawidłowa geometria posadzki i skuteczne odwodnienie mają kluczowe znaczenie dla efektywnego mycia. Woda, która stoi na posadzce, utrudnia utrzymanie czystości, dlatego spadki powinny być częścią projektu, a nie poprawką po fakcie. Równie ważne jest połączenie ściany z podłogą, w którym najłatwiej o zaleganie zanieczyszczeń: stosujemy cokoły zapewniające bezszwowe, higieniczne połączenie. Z takim wyzwaniem mierzyliśmy się m.in. przy [840 m² posadzki w zakładzie przetwórstwa rybnego](/realizacje/posadzka-zywiczna-przemysl-spozywczy-840-m2-hiszpania).",
      },
      {
        heading: "Ochrona ścian i narożników",
        body: "Ściany i narożniki narażone na uderzenia wózków to nie tylko koszt naprawy, ale też miejsce, w którym trudniej utrzymać higienę. Dlatego razem z posadzką wykonujemy [systemy odbojowe i ochronę ścian](/systemy-odbojowe) Polysto®, w tym cokoły higieniczne. Przykład to [odboje, cokoły i okładziny w hali 3400 m² zakładu produkcji przekąsek we Wrocławiu](/realizacje/systemy-odbojowe-zaklad-przekasek-wroclaw-3400-m2).",
      },
      {
        heading: "Praca w działającym zakładzie",
        body: "W wielu przypadkach prace można prowadzić etapami, w ruchu ciągłym zakładu. Krótki czas instalacji ogranicza przestoje, a kolejność prac planujemy po wizji lokalnej, tak aby jak najmniej zakłócać produkcję. Uszkodzenia posadzki żywicznej można później naprawiać punktowo, bez wymiany całej nawierzchni (zobacz [renowacja posadzek przemysłowych](/renowacja-posadzek-przemyslowych)).",
      },
    ],
    highlights: [
      "Bezspoinowe posadzki żywiczne odporne na mycie, tłuszcze i kwasy",
      "Systemy dobierane osobno do stref: mokra produkcja, chłodnie, magazyny",
      "Spadki do odwodnień i higieniczne cokoły",
      "Ochrona ścian i narożników przed wózkami",
      "Prace etapowe w działającym zakładzie",
    ],
    closing:
      "Zakres i system określamy po oględzinach zakładu lub analizie dokumentacji, na podstawie obciążeń, chemii procesowej i sposobu mycia.",
    faq: [
      { q: "Jaka posadzka do zakładu mięsnego lub mleczarni?", a: "Najczęściej poliuretan-cement o grubości kilku milimetrów, odporny na mycie gorącą wodą i parą, szoki termiczne, tłuszcze i kwasy organiczne." },
      { q: "Czy lepszy jest epoksyd czy poliuretan w zakładzie spożywczym?", a: "To zależy od strefy. Systemy epoksydowe sprawdzają się tam, gdzie liczą się obciążenia mechaniczne i chemikalia, a poliuretanowe tam, gdzie występują wahania temperatury, np. w chłodniach i magazynach spożywczych. Wybór zależy od obciążeń, chemii procesowej i wymagań higienicznych." },
      { q: "Czy posadzkę żywiczną można wykonać bez zatrzymywania produkcji?", a: "W wielu przypadkach tak. Prace można prowadzić etapami, w ruchu ciągłym zakładu. Krótki czas instalacji ogranicza przestoje, a kolejność prac planujemy po wizji lokalnej." },
      { q: "Czy uszkodzoną posadzkę żywiczną trzeba wymieniać w całości?", a: "Nie zawsze. Uszkodzenia można naprawiać punktowo, bez wymiany całej nawierzchni." },
    ],
    relatedRealizacjeSlugs: [
      "posadzka-zywiczna-przemysl-spozywczy-840-m2-hiszpania",
      "systemy-odbojowe-zaklad-przekasek-wroclaw-3400-m2",
    ],
  },
  {
    slug: "posadzki-dla-przemyslu-farmaceutycznego",
    group: "branza",
    icon: FlaskConical,
    imageSlug: "posadzki-clean-room",
    imageAlt: "Bezspoinowa posadzka żywiczna w zakładzie farmaceutycznym — realizacja FLOWTEX Polska",
    h1: "Posadzki dla przemysłu farmaceutycznego",
    title: "Posadzki dla przemysłu farmaceutycznego",
    metaTitle: "Posadzki dla farmacji — GMP, clean room | FLOWTEX Polska",
    metaDescription:
      "Bezspoinowe, niepylące posadzki żywiczne dla zakładów farmaceutycznych: strefy czyste, faseta, odporność na dezynfekcję. Także wersje ESD.",
    shortDesc:
      "Rozwiązujemy problem zanieczyszczeń gromadzących się w spoinach i porach — bezspoinowe posadzki żywiczne dla stref czystych, produkcji i obiektów medycznych.",
    intro:
      "W zakładzie farmaceutycznym posadzka jest częścią środowiska produkcyjnego: liczy się to, czy ogranicza powstawanie i gromadzenie zanieczyszczeń oraz czy da się ją skutecznie czyścić i dezynfekować. Wybór zaczyna się więc od wymagań pomieszczenia, a nie od wyglądu czy ceny za metr kwadratowy. Wykonujemy bezspoinowe posadzki żywiczne z fasetą dla stref czystych, produkcji i obiektów medycznych.",
    sections: [
      {
        heading: "Czego wymaga pomieszczenie czyste",
        body: "Wymagania dotyczące kontroli czystości środowiska określają m.in. normy serii ISO 14644, a w procesach wymagających warunków aseptycznych wytyczne EU GMP Aneks 1. Klasy czystości określają dopuszczalną liczbę cząstek w powietrzu, co przekłada się na wymagania wobec posadzki. W praktyce powinna być:",
        items: [
          "bezpyłowa: nie może generować ani zatrzymywać cząstek,",
          "bezspoinowa: każda szczelina czy fuga to potencjalne miejsce gromadzenia się zanieczyszczeń i drobnoustrojów, trudne do skutecznej dezynfekcji,",
          "pozbawiona porów, w których mogłyby namnażać się bakterie czy grzyby,",
          "odporna na częstą, intensywną dezynfekcję środkami chemicznymi,",
          "łatwa w codziennym utrzymaniu czystości.",
        ],
      },
      {
        heading: "Strefy w zakładzie farmaceutycznym",
        body: "Nie każda strefa zakładu ma takie same wymagania, dlatego system dobieramy osobno do pomieszczenia i jego przeznaczenia.",
        table: {
          head: ["Strefa", "Czego oczekujemy od posadzki", "Szczegóły"],
          rows: [
            ["Pomieszczenia czyste (clean room)", "Bezspoinowość, faseta, brak porów, odporność na częstą dezynfekcję", "[Posadzki do clean roomów](/posadzki-clean-room)"],
            ["Produkcja i pakowanie", "Odporność mechaniczna i chemiczna, łatwe mycie, bezspoinowa powierzchnia", "[Posadzki żywiczne](/posadzki-zywiczne)"],
            ["Strefy z wymaganiem ochrony przed ładunkami elektrostatycznymi", "Warstwy przewodzące lub rozpraszające, uziemienie, pomiar parametrów", "[Posadzki ESD](/posadzki-esd)"],
          ],
        },
      },
      {
        heading: "Faseta i detale",
        body: "Najtrudniejszym do utrzymania w czystości miejscem jest zwykle połączenie ściany z podłogą. Dlatego system żywiczny wykonujemy z wywinięciem na ściany, czyli fasetą. Eliminuje ona ostre kąty i połączenia ściana–podłoga, w których najłatwiej o zaleganie zanieczyszczeń trudnych do usunięcia podczas czyszczenia i dezynfekcji.",
      },
      {
        heading: "Od zniszczonego podłoża do gładkiej powierzchni",
        body: "Często zaczynamy od podłoża, które nie spełnia wymagań higienicznych. W realizacji dla zakładu farmaceutycznego na Mazowszu (340 m²) było to mocno zdegradowane, porowate podłoże betonowe. Po jego przygotowaniu wykonaliśmy system żywiczny z dekoracyjnymi płatkami kwarcowymi, dający jednolitą, bezpyłową i wysoko połyskliwą powierzchnię, odporną na częstą dezynfekcję chemiczną. [Zobacz realizację](/realizacje/posadzka-zywiczna-clean-room-farmacja-mazowieckie).",
      },
      {
        heading: "Farmacja i obiekty medyczne",
        body: "Techniczne zasady są wspólne dla hal produkcyjnych i placówek medycznych: bezspoinowość, faseta, odporność chemiczna i brak porowatości. Różni się kontekst: inwestor, przepisy i procedury odbioru, a w czynnych obiektach szpitalnych także organizacja prac, często etapowa, z uwzględnieniem sąsiedztwa stref sterylnych. Mamy za sobą [realizację posadzki dla warszawskiego szpitala](/realizacje/posadzka-clean-room-szpital-warszawa).",
      },
    ],
    highlights: [
      "Bezspoinowe posadzki żywiczne z fasetą wywiniętą na ściany",
      "Przygotowanie zdegradowanych, porowatych podłoży betonowych",
      "Powierzchnie bezpyłowe, odporne na częstą dezynfekcję chemiczną",
      "Warianty antystatyczne (ESD) tam, gdzie wymaga tego proces",
      "Prace etapowe w czynnych obiektach",
    ],
    closing:
      "Zakres systemu określamy po analizie przeznaczenia pomieszczenia, klasy czystości i sposobu odbioru obiektu.",
    faq: [
      { q: "Dlaczego posadzka w strefie czystej ma być bezspoinowa?", a: "Każda szczelina czy fuga to potencjalne miejsce gromadzenia się zanieczyszczeń i drobnoustrojów, trudne do skutecznej dezynfekcji. Bezspoinowa powierzchnia jest łatwiejsza do utrzymania w czystości." },
      { q: "Co to jest faseta w posadzce żywicznej?", a: "To wywinięcie posadzki na ściany, które eliminuje ostre kąty i połączenia ściana–podłoga, czyli miejsca, w których najłatwiej o zaleganie zanieczyszczeń." },
      { q: "Czy można położyć posadzkę na zniszczonym, porowatym betonie?", a: "Podłoże trzeba najpierw przygotować. W naszej realizacji dla zakładu farmaceutycznego podłożem była mocno zdegradowana, porowata wylewka betonowa, na której po przygotowaniu wykonaliśmy bezspoinowy system żywiczny." },
      { q: "Czy wykonujecie posadzki w czynnych obiektach?", a: "Tak, mamy za sobą realizację dla warszawskiego szpitala. W czynnych obiektach medycznych prace zwykle prowadzi się etapami, z uwzględnieniem ograniczeń czasowych i sąsiedztwa stref sterylnych." },
    ],
    relatedRealizacjeSlugs: [
      "posadzka-zywiczna-clean-room-farmacja-mazowieckie",
      "posadzka-clean-room-szpital-warszawa",
    ],
  },
  {
    slug: "renowacja-posadzek-przemyslowych",
    group: "branza",
    icon: Wrench,
    imageSlug: "serwis-posadzek-i-kanalizacji",
    imageAlt: "Naprawa i renowacja posadzki przemysłowej — FLOWTEX Polska",
    h1: "Renowacja i naprawa posadzek przemysłowych",
    title: "Renowacja i naprawa posadzek przemysłowych",
    metaTitle: "Renowacja i naprawa posadzek przemysłowych | FLOWTEX Polska",
    metaDescription:
      "Naprawa pęknięć, ubytków, dylatacji, pylenia i odspojonej żywicy. Renowacja posadzek betonowych i żywicznych, także w działającym zakładzie.",
    shortDesc:
      "Rozwiązujemy pylenie, pęknięcia, ubytki i odspojenia — naprawa punktowa lub renowacja podłoża zamiast wymiany całej posadzki.",
    intro:
      "Pylący beton, pęknięcia, odspojona żywica pod wózkami, wykruszone dylatacje i uszkodzone cokoły to usterki, które rzadko czekają na dogodny termin remontu. Naprawiamy i renowujemy posadzki betonowe i żywiczne: od napraw punktowych po renowację podłoża, w wielu przypadkach bez zatrzymywania całego zakładu.",
    sections: [
      {
        heading: "Najczęstsze objawy i kierunek naprawy",
        body: "Każdy objaw ma w naszym [katalogu wad posadzek](/katalog-wad) osobny opis z przyczynami i sugestiami rozwiązania. Poniżej najczęstsze przypadki w skrócie.",
        table: {
          head: ["Objaw", "Typowe przyczyny", "Kierunek naprawy"],
          rows: [
            ["[Pylenie betonu](/katalog-wad/pylenie)", "Brak lub niewystarczające utwardzenie powierzchni, zbyt niska klasa betonu, nieprawidłowa pielęgnacja", "Po ocenie chłonności i wytrzymałości podłoża: impregnat utwardzająco-pyłochłonny albo system powłokowy"],
            ["[Pęknięcia](/katalog-wad/peknieca)", "Skurcz betonu, brak dylatacji, ruchy konstrukcji, przeciążenia punktowe", "Najpierw ocena, czy rysa jest statyczna czy aktywna: sztywna iniekcja epoksydowa albo elastyczne wypełnienie poliuretanowe"],
            ["[Odspojenie żywicy](/katalog-wad/odspojenie-zywicy)", "Wilgotność resztkowa betonu, słabe przygotowanie podłoża, ciśnienie osmotyczne, zanieczyszczenia", "Badanie wilgotności i nośności, usunięcie odspojonej warstwy do zdrowego betonu, ponowna aplikacja systemu"],
            ["[Pęcherze w żywicy](/katalog-wad/pecherze)", "Powietrze z porowatego podłoża, zbyt gruba warstwa, wilgoć w podłożu (osmoza)", "Usunięcie uszkodzonej warstwy, badanie wilgotności, bariera przeciwwilgociowa przed odtworzeniem systemu"],
            ["[Ubytki i wykruszenia](/katalog-wad/ubytki)", "Uderzenia, słabe podłoże, słabe związanie warstwy, korozja zbrojenia", "Usunięcie osłabionego materiału do zdrowego podłoża, naprawa zaprawą PCC lub systemem żywicznym"],
            ["[Uszkodzone dylatacje](/katalog-wad/dylatacje)", "Wypełnienie o zbyt małej elastyczności, ruch konstrukcji, brak profilu, zabrudzona szczelina", "Rozpoznanie typu szczeliny, oczyszczenie i ponowne wypełnienie masą dobraną do ruchu"],
          ],
        },
        note: "Ten sam objaw może mieć kilka przyczyn, dlatego przed wyborem technologii sprawdzamy podłoże, sposób użytkowania i warunki w obiekcie. Opisy mają charakter poglądowy i nie zastępują oględzin.",
      },
      {
        heading: "Naprawa punktowa czy renowacja podłoża",
        body: "Nie zawsze trzeba wymieniać całą posadzkę. Zamiast tego punktowo wzmacniamy i uzupełniamy uszkodzone miejsca, co pozwala ograniczyć koszty i czas przestoju. Gdy uszkodzenia są rozległe albo przyczyna leży w podłożu, naprawa punktowa nie wystarczy. Wtedy przeprowadzamy renowację podłoża, w tym naprawę odspojonej lub spękanej warstwy żywicznej i betonowej.",
      },
      {
        heading: "Dylatacje i cokoły",
        body: "Uzupełniamy i naprawiamy dylatacje ograniczające niekontrolowane pękanie posadzki, a także naprawiamy lub wymieniamy uszkodzone cokoły w strefach narażonych na uderzenia i wilgoć. Poszerzanie i cięcie szczelin wykonujemy techniką diamentową (zobacz [technika diamentowa](/technika-diamentowa)).",
      },
      {
        heading: "Prace w działającym zakładzie",
        body: "Prace planujemy po wizji lokalnej, tak aby jak najmniej zakłócać bieżącą pracę zakładu, a w wielu przypadkach prowadzimy je etapami. Serwis planujemy tak, by przygotować strefy produkcyjne do audytów i ograniczyć ryzyko nieplanowanych przestojów. Usługi dotyczące kanalizacji zakładowej (kamerowanie i udrażnianie) opisujemy na stronie [serwis posadzek i kanalizacji](/serwis-posadzek-i-kanalizacji).",
      },
    ],
    highlights: [
      "Naprawa ubytków, odprysków i uszkodzeń mechanicznych posadzki",
      "Renowacja odspojonej żywicy i spękanego betonu",
      "Impregnacja i wzmocnienie pylących powierzchni betonowych",
      "Naprawa i uzupełnianie dylatacji, naprawa lub wymiana cokołów",
      "Prace etapowe w działającym zakładzie",
    ],
    closing:
      "Zaczynamy od rozpoznania przyczyny, bo od niej zależy, czy wystarczy naprawa punktowa, czy potrzebna jest renowacja podłoża.",
    faq: [
      { q: "Czy uszkodzoną posadzkę trzeba wymieniać w całości?", a: "Nie zawsze. Zamiast wymiany całej powierzchni punktowo wzmacniamy i uzupełniamy uszkodzone miejsca, co pozwala ograniczyć koszty i czas przestoju." },
      { q: "Jak ustalacie, czym naprawić pęknięcie?", a: "Najpierw rozpoznajemy charakter rysy. Dla rys aktywnych stosuje się elastyczne wypełnienie poliuretanowe, a dla rys statycznych sztywną iniekcję żywicą epoksydową. Dobór następuje wyłącznie po ocenie rodzaju i przyczyny rysy." },
      { q: "Czy odspojoną żywicę wystarczy ponownie zalać?", a: "Nie. Przed naprawą trzeba zbadać wilgotność i nośność podłoża, usunąć odspojoną warstwę do zdrowego betonu i dopiero wtedy ponownie wykonać system zgodnie z kartą techniczną." },
      { q: "Czy naprawy można prowadzić w działającym zakładzie?", a: "W wielu przypadkach tak. Prace planujemy po wizji lokalnej, tak aby jak najmniej zakłócać bieżącą pracę zakładu, i prowadzimy je etapami." },
    ],
  },
  {
    slug: "posadzki-epoksydowe",
    group: "technologia",
    icon: Layers,
    imageSlug: "posadzki-zywiczne",
    imageAlt: "Posadzka epoksydowa w hali produkcyjnej — realizacja FLOWTEX Polska",
    h1: "Posadzki epoksydowe przemysłowe",
    title: "Posadzki epoksydowe",
    metaTitle: "Posadzki epoksydowe przemysłowe | FLOWTEX Polska",
    metaDescription:
      "Posadzki epoksydowe do hal produkcyjnych, magazynów i laboratoriów: powłoki, systemy samopoziomujące i posypkowe z kwarcem. Dobór do obciążeń i chemii.",
    shortDesc:
      "Twarde, szczelne posadzki epoksydowe do hal, magazynów i laboratoriów — odporne na obciążenia mechaniczne i chemikalia w stałej temperaturze.",
    intro:
      "Epoksyd to jedna z dwóch najczęściej stosowanych grup żywic w posadzkach przemysłowych. Tworzy twardą, szczelną i łatwą w utrzymaniu czystości powłokę o wysokiej odporności na nacisk, ścieranie i wiele chemikaliów. Wykonujemy systemy epoksydowe dobrane do obciążeń i warunków pracy: od cienkich powłok po grube systemy posypkowe.",
    sections: [
      {
        heading: "Kiedy wybrać posadzkę epoksydową",
        body: "Epoksyd sprawdza się w suchych lub umiarkowanie wilgotnych halach o stałej temperaturze: w magazynach, halach montażowych i produkcyjnych, laboratoriach i warsztatach. Jego mocną stroną jest odporność na obciążenia mechaniczne i chemikalia, a bezspoinowa powierzchnia ułatwia utrzymanie czystości.",
      },
      {
        heading: "Rodzaje systemów epoksydowych",
        body: "W zależności od obciążeń stosuje się:",
        items: [
          "cienkie powłoki,",
          "systemy samopoziomujące,",
          "posadzki posypkowe z kruszywem kwarcowym o podwyższonej antypoślizgowości.",
        ],
        note: "Systemy epoksydowe wykonujemy w grubościach od 0,5 mm do kilku milimetrów, w zależności od obciążeń, z wykończeniem matowym, półpołyskiem lub połyskiem w palecie kolorów RAL.",
      },
      {
        heading: "Ograniczenia epoksydu",
        body: "Epoksyd jest sztywny: gorzej znosi gwałtowne zmiany temperatury i nie przenosi ruchów pękającego podłoża. Pod wpływem UV może z czasem żółknąć, dlatego w miejscach nasłonecznionych stosuje się zwykle poliuretanową warstwę zamykającą. W strefach mycia gorącą wodą lub parą lepiej sprawdza się poliuretan-cement (zobacz [posadzki poliuretanowe](/posadzki-poliuretanowe)).",
      },
      {
        heading: "Epoksyd a poliuretan w skrócie",
        table: {
          head: ["", "Epoksyd", "Poliuretan"],
          rows: [
            ["Charakter powłoki", "Twarda, sztywna", "Elastyczna, sprężysta"],
            ["Obciążenia mechaniczne", "Bardzo dobra odporność na nacisk i ścieranie", "Dobra odporność na uderzenia i ścieranie"],
            ["Wahania temperatury i chłód", "Słabsza: sztywna powłoka gorzej znosi szoki termiczne", "Dobra: sprawdza się w chłodniach"],
            ["Promienie UV", "Może żółknąć", "Systemy alifatyczne nie żółkną"],
            ["Typowe miejsca", "Magazyny, hale produkcyjne, laboratoria, warsztaty", "Chłodnie, strefy o zmiennej temperaturze, posadzki narażone na uderzenia"],
          ],
        },
        note: "Pełne porównanie wraz z PU-cementem znajdziesz w poradniku [posadzka epoksydowa czy poliuretanowa](/poradniki/posadzka-epoksydowa-czy-poliuretanowa).",
      },
      {
        heading: "Podłoże decyduje o trwałości",
        body: "Od stanu podłoża zależy zakres jego przygotowania, a od obciążeń i chemii procesowej dobór systemu. Przed aplikacją sprawdzamy wilgotność, wytrzymałość i czystość betonu. Pominięcie oceny wilgotności podłoża to jeden z najczęstszych błędów, który po czasie kończy się odspojeniem żywicy (zobacz [odspojenie żywicy od podłoża](/katalog-wad/odspojenie-zywicy)).",
      },
    ],
    highlights: [
      "Cienkie powłoki, systemy samopoziomujące i posypkowe z kruszywem kwarcowym",
      "Grubości od 0,5 mm do kilku milimetrów, w zależności od obciążeń",
      "Wykończenia matowe, półpołysk i połysk, paleta RAL",
      "Warianty antypoślizgowe",
      "Ocena wilgotności i przygotowanie podłoża przed aplikacją",
    ],
    closing:
      "System i grubość dobieramy do obciążeń, chemii procesowej i wymagań higienicznych, a parametry weryfikujemy w karcie technicznej producenta.",
    faq: [
      { q: "Która posadzka jest trwalsza: epoksydowa czy poliuretanowa?", a: "Nie ma jednej odpowiedzi. Epoksyd lepiej znosi duże naciski i ścieranie w stałej temperaturze, a poliuretan lepiej radzi sobie z uderzeniami, chłodem i zmianami temperatury. Trwałość zależy od dopasowania systemu i grubości do warunków pracy." },
      { q: "Czy posadzkę epoksydową można położyć na zewnątrz?", a: "Epoksyd pod wpływem UV może żółknąć, dlatego na zewnątrz i w miejscach nasłonecznionych stosuje się systemy z poliuretanową warstwą zamykającą odporną na UV." },
      { q: "Czy epoksyd nadaje się do zakładu spożywczego?", a: "W suchych lub umiarkowanie wilgotnych strefach o stałej temperaturze tak. W strefach mycia gorącą wodą i parą oraz w chłodniach lepiej sprawdzają się systemy poliuretanowe lub poliuretanowo-cementowe." },
    ],
  },
  {
    slug: "posadzki-poliuretanowe",
    group: "technologia",
    icon: Droplets,
    imageSlug: "posadzki-zywiczne",
    imageAlt: "Posadzka poliuretanowa w obiekcie przemysłowym — realizacja FLOWTEX Polska",
    h1: "Posadzki poliuretanowe i poliuretanowo-cementowe",
    title: "Posadzki poliuretanowe i PU-cement",
    metaTitle: "Posadzki poliuretanowe i PU-cement | FLOWTEX Polska",
    metaDescription:
      "Posadzki poliuretanowe i poliuretanowo-cementowe do chłodni, stref mycia gorącą wodą i szoków termicznych. Dla zakładów spożywczych i hal o zmiennej temperaturze.",
    shortDesc:
      "Elastyczne posadzki poliuretanowe i wytrzymałe systemy PU-cement do chłodni, mycia gorącą wodą i parą oraz stref o zmiennej temperaturze.",
    intro:
      "Poliuretan jest bardziej elastyczny niż epoksyd, dzięki czemu lepiej znosi uderzenia, drgania, chłód i wahania temperatury. W zakładach spożywczych dochodzą do tego systemy poliuretanowo-cementowe, które wytrzymują gorącą wodę, mycie parowe i agresywną chemię spożywczą. Dobieramy je tam, gdzie zwykły epoksyd szybko by się poddał.",
    sections: [
      {
        heading: "Kiedy wybrać poliuretan",
        body: "Poliuretan wybiera się do chłodni, magazynów spożywczych o zmiennych warunkach cieplnych i miejsc, gdzie powłoka ma pracować razem z podłożem. Elastyczne systemy potrafią też mostkować drobne rysy w podłożu, czego sztywny epoksyd nie robi. Poliuretanowe warstwy zamykające (alifatyczne) są odporne na UV, dlatego stosuje się je także na powierzchniach narażonych na światło dzienne, np. na rampach czy schodach. Przykład to [antypoślizgowa nawierzchnia na schodach w systemie Deckshield](/realizacje/zywica-schody-prefabrykowane-deckshield).",
      },
      {
        heading: "Poliuretan-cement: gdy jest gorąco i mokro",
        body: "W zakładach mięsnych, mleczarniach i przetwórniach posadzka codziennie przechodzi mycie gorącą wodą, często parą, a do tego ma kontakt z tłuszczami, kwasami organicznymi i krwią. W takich warunkach stosuje się systemy poliuretanowo-cementowe o grubości kilku milimetrów, które znoszą szoki termiczne, wysoką temperaturę i agresywną chemię spożywczą. Więcej w opisie [posadzek dla przemysłu spożywczego](/posadzki-dla-przemyslu-spozywczego).",
      },
      {
        heading: "Poliuretan a poliuretan-cement",
        table: {
          head: ["", "Poliuretan", "Poliuretan-cement"],
          rows: [
            ["Charakter powłoki", "Elastyczna, sprężysta", "Bardzo wytrzymała, gruba (kilka mm)"],
            ["Wahania temperatury i chłód", "Dobra: sprawdza się w chłodniach", "Bardzo dobra: znosi gorącą wodę i mycie parowe"],
            ["Chemia", "Dobra, zależnie od systemu", "Bardzo dobra, także na kwasy organiczne i tłuszcze w przemyśle spożywczym"],
            ["Promienie UV", "Systemy alifatyczne nie żółkną", "Zwykle stosowany wewnątrz"],
            ["Typowe miejsca", "Chłodnie, strefy o zmiennej temperaturze, posadzki narażone na uderzenia", "Zakłady mięsne, mleczarnie, przetwórnie, kuchnie przemysłowe"],
          ],
        },
        note: "Dokładne parametry, takie jak dopuszczalna temperatura czy lista odpornych substancji, zależą od konkretnego systemu i grubości warstwy, dlatego zawsze weryfikujemy je w karcie technicznej producenta. Porównanie z epoksydem: [posadzka epoksydowa czy poliuretanowa](/poradniki/posadzka-epoksydowa-czy-poliuretanowa).",
      },
    ],
    highlights: [
      "Elastyczne systemy poliuretanowe do chłodni i stref o zmiennej temperaturze",
      "Poliuretan-cement do mycia gorącą wodą i parą",
      "Warstwy zamykające odporne na UV",
      "Możliwość mostkowania drobnych rys w podłożu (zależnie od systemu)",
      "Warianty antypoślizgowe",
    ],
    closing:
      "O wyborze między poliuretanem, PU-cementem i epoksydem decydują obciążenia, temperatura, chemia procesowa i wymagania higieniczne konkretnej strefy.",
    faq: [
      { q: "Jaka posadzka do chłodni?", a: "Zwykle poliuretanowa lub poliuretanowo-cementowa, bo elastyczna powłoka lepiej znosi niskie temperatury i ich wahania niż sztywny epoksyd." },
      { q: "Jaka posadzka do zakładu mięsnego lub mleczarni?", a: "Najczęściej poliuretan-cement o grubości kilku milimetrów, odporny na mycie gorącą wodą i parą, szoki termiczne, tłuszcze i kwasy organiczne." },
      { q: "Czy poliuretan żółknie pod wpływem światła?", a: "Poliuretanowe systemy alifatyczne są odporne na UV i nie żółkną, dlatego stosuje się je także na powierzchniach narażonych na światło dzienne." },
    ],
  },
  {
    slug: "posadzki-do-hal-produkcyjnych-i-magazynow",
    group: "technologia",
    icon: Warehouse,
    imageSlug: "betonowe-posadzki-przemyslowe",
    imageAlt: "Układanie betonowej posadzki przemysłowej w hali magazynowej — FLOWTEX Polska",
    h1: "Posadzki do hal produkcyjnych i magazynów",
    title: "Posadzki do hal produkcyjnych i magazynów",
    metaTitle: "Posadzki do hal produkcyjnych i magazynów | FLOWTEX Polska",
    metaDescription:
      "Posadzki betonowe i żywiczne do hal i magazynów: dobór do obciążeń regałów i wózków, utwardzanie, dylatacje, powłoki żywiczne. Wycena po oględzinach.",
    shortDesc:
      "Rozwiązujemy problem posadzek w halach i magazynach: nośność płyty betonowej, ścieranie i pylenie, dylatacje i powłoki żywiczne tam, gdzie liczy się higiena.",
    intro:
      "Płyta betonowa, która nie udźwignie regałów wysokiego składowania, ściera się pod kołami wózków widłowych albo pęka bez zaplanowanych dylatacji, to typowe problemy inwestycji magazynowych. Z drugiej strony pyląca posadzka betonowa i wymogi higieniczne są częstym powodem, dla którego zakłady sięgają po żywicę. W praktyce beton i żywica to dwa różne elementy posadzki, które często się uzupełniają.",
    sections: [
      {
        heading: "Beton daje nośność, żywica powierzchnię",
        body: "Nośność zapewnia płyta betonowa, którą dobiera się do obciążeń od regałów i wózków. Żywica tej nośności nie zastępuje: jest bezspoinową powłoką, która rozwiązuje pylenie, ścieranie i wymagania higieniczne.",
        table: {
          head: ["", "Posadzka betonowa", "Posadzka żywiczna"],
          rows: [
            ["Główna rola", "Nośność płyty, odporność na obciążenia od regałów i wózków", "Bezspoinowa, szczelna powierzchnia użytkowa"],
            ["Rozwiązuje", "Niewystarczającą nośność podłoża, ścieranie (utwardzanie powierzchniowe)", "Pylenie betonu, ścieranie, wymogi higieniczne (np. HACCP)"],
            ["Typowe zastosowanie", "Magazyny wysokiego składowania, place manewrowe, strefy produkcyjne", "Hale produkcyjne, magazyny, zakłady spożywcze i farmaceutyczne"],
            ["Dylatacje", "Wykonywane zgodnie z projektem technologicznym", "Wymagają uwzględnienia dylatacji istniejącego podłoża"],
            ["Naprawa", "Naprawy punktowe i renowacja betonu", "Punktowe naprawy bez wymiany całej nawierzchni"],
          ],
        },
        note: "Szczegóły: [betonowe posadzki przemysłowe](/betonowe-posadzki-przemyslowe) i [posadzki żywiczne](/posadzki-zywiczne).",
      },
      {
        heading: "Kiedy wystarczy beton, a kiedy dokłada się żywicę",
        items: [
          "Zwykły magazyn z ruchem wózków, bez szczególnych wymagań higienicznych: często wystarcza odpowiednio zaprojektowana i utwardzona posadzka betonowa.",
          "Pylenie lub nadmierne ścieranie betonu: to sygnał, że warto rozważyć warstwę żywiczną (zobacz [pylenie posadzki](/katalog-wad/pylenie)).",
          "Wymogi higieniczne, kontakt z wodą, tłuszczami lub chemikaliami: wtedy standardem jest posadzka żywiczna.",
          "Etap budowy z perspektywą późniejszej zmiany: beton można wykonać tak, by w przyszłości przyjął warstwę żywiczną.",
        ],
      },
      {
        heading: "Zbrojenie, utwardzanie i dylatacje",
        body: "W betonowych posadzkach przemysłowych stosuje się utwardzanie powierzchniowe posypką mineralną lub kwarcową, które zwiększa odporność na ścieranie w strefach ruchu wózków. Przy większych rozpiętościach i obciążeniach punktowych stosuje się zbrojenie rozproszone włóknami stalowymi lub polipropylenowymi albo tradycyjne, prętowe. Dylatacje konstrukcyjne i pozorne wykonuje się zgodnie z projektem technologicznym, co ogranicza ryzyko niekontrolowanego pękania płyty.",
      },
      {
        heading: "Co warto opisać w zapytaniu o wycenę",
        items: [
          "obciążenia: regały wysokiego składowania, wózki, obciążenia punktowe,",
          "rodzaj ruchu i sposób użytkowania hali,",
          "wymagania higieniczne albo kontakt z wodą, tłuszczami lub chemikaliami,",
          "stan istniejącego podłoża lub projekt płyty,",
          "czy prace można prowadzić etapami, bez zatrzymywania pracy obiektu.",
        ],
        note: "Wstępny kierunek możesz sprawdzić w narzędziu [dobór systemu posadzkowego](/dobor-posadzki).",
      },
    ],
    highlights: [
      "Betonowe posadzki przemysłowe utwardzane powierzchniowo, zbrojone włóknami",
      "Dylatacje zgodne z projektem technologicznym",
      "Powłoki żywiczne na pylącym lub ścieranym betonie",
      "Naprawy punktowe i renowacja bez wymiany całej nawierzchni",
      "Prace etapowe w działających obiektach",
    ],
    closing:
      "Zakres i technologię określamy po analizie obciążeń, ruchu i wymagań obiektu.",
    faq: [
      { q: "Czy żywica zwiększa nośność posadzki?", a: "Nie. Nośność zapewnia płyta betonowa, którą dobiera się do obciążeń od regałów i wózków. Żywica jest bezspoinową powłoką, która rozwiązuje m.in. pylenie, ścieranie i wymagania higieniczne." },
      { q: "Czy na posadzce betonowej można później wykonać warstwę żywiczną?", a: "Tak. Posadzka betonowa może funkcjonować samodzielnie albo posłużyć jako podłoże pod docelową warstwę żywiczną, jeśli w przyszłości zajdzie taka potrzeba." },
      { q: "Czym utwardza się powierzchnię posadzki betonowej?", a: "Posypką mineralną lub kwarcową. Zwiększa ona odporność na ścieranie w strefach ruchu wózków widłowych." },
      { q: "Jakie zbrojenie stosuje się w posadzkach betonowych?", a: "Rozproszone włóknami stalowymi lub polipropylenowymi albo tradycyjne, prętowe, przy większych rozpiętościach i obciążeniach punktowych. Wybór zależy od obciążeń." },
    ],
  },
];
