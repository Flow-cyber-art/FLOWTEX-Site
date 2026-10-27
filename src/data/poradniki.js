/*
  Każdy wpis = jeden poradnik pod adresem /poradniki/{slug}. Najnowsze wpisy
  dopisuj na GÓRZE tablicy.

  Pola:
  - zdjęcie: plik src/assets/poradniki/{slug}.webp (opcjonalnie imageAlt)
  - publishAt: (opcjonalnie) "RRRR-MM-DD" — dzień publikacji; do tego dnia
    poradnik jest ukryty. llmsSummary: opis do public/llms.txt.
  - slug, title, metaTitle (opcjonalnie), metaDescription, category, date
    ("Miesiąc RRRR")
  - intro: lista akapitów wstępu (tekst może zawierać linki [tekst](/ścieżka))
  - sections: [{ heading, blocks }], gdzie blocks to lista bloków:
      { type: "paragraph", text }
      { type: "list", ordered?: true, items: [string] }
      { type: "table", head: [string], rows: [[string]] }
  - faq: [{ q, a }] — pokazywane na końcu + dane strukturalne FAQPage
  - cta: { heading, text, links: [{ label, href }] }
  - relatedServiceSlugs: slugi usług z services.js (linki "Zobacz usługę")
  - relatedRealizacjeSlugs: slugi wpisów z realizacje.js
  Tekst w polach text/items/a może zawierać linki w formacie [tekst](/ścieżka).
*/
const ALL_PORADNIKI = [
  {
    slug: "dlaczego-posadzka-betonowa-pyli",
    llmsSummary: "Poradnik o pyleniu posadzek betonowych: przyczyny (brak utwardzenia, zbyt niska klasa betonu, pielęgnacja, karbonatyzacja), kiedy wystarczy impregnat pyłochłonny, a kiedy warstwa żywiczna, problem higieniczny w spożywce i farmacji.",
    publishAt: "2026-11-26",
    title: "Dlaczego posadzka betonowa pyli? Przyczyny i sposoby naprawy",
    metaTitle: "Pylenie posadzki betonowej — przyczyny i naprawa | FLOWTEX Polska",
    metaDescription:
      "Pyląca posadzka betonowa to sygnał słabej wierzchniej warstwy. Poznaj przyczyny pylenia, kiedy wystarczy impregnat, a kiedy potrzebna jest warstwa żywiczna.",
    category: "Naprawy posadzek",
    imageAlt: "Przykład: pylenie powierzchni betonu",
    date: "Listopad 2026",
    intro: [
      "Szary nalot na oponach wózków i obuwiu, pył unoszący się przy ruchu — to klasyczne objawy pylącej posadzki betonowej. W obiektach z rygorami czystości, takich jak zakłady spożywcze i farmaceutyczne, pylący beton bywa powodem uwag podczas audytów, nawet jeśli sama płyta ma wystarczającą nośność.",
      "Wyjaśniamy, skąd bierze się pylenie, jak je rozpoznać i jak dobrać naprawę: od impregnatu po warstwę żywiczną.",
    ],
    sections: [
      {
        heading: "Co oznacza pylenie posadzki",
        blocks: [
          { type: "paragraph", text: "Pylenie to sygnał, że wierzchnia warstwa betonu jest słabsza niż reszta płyty. Może wynikać z niedostatecznej pielęgnacji podczas wiązania albo z naturalnej karbonatyzacji zachodzącej przez lata. Samo pylenie nie musi oznaczać problemu z nośnością całej płyty." },
        ],
      },
      {
        heading: "Najczęstsze przyczyny",
        blocks: [
          { type: "list", items: ["brak lub niewystarczające utwardzenie powierzchniowe betonu,", "zbyt niska klasa wytrzymałości betonu w stosunku do obciążeń,", "nieprawidłowa pielęgnacja betonu podczas wiązania,", "karbonatyzacja i degradacja wierzchniej warstwy pod wpływem czasu."] },
        ],
      },
      {
        heading: "Jak naprawić pylącą posadzkę",
        blocks: [
          { type: "paragraph", text: "Metodę dobiera się po ocenie chłonności i wytrzymałości podłoża. Najczęściej rozważa się trzy kierunki:" },
          { type: "table", head: ["Rozwiązanie", "Kiedy się sprawdza"], rows: [["Impregnat utwardzająco-pyłochłonny (np. na bazie krzemianów)", "Umiarkowany ruch, podłoże o odpowiedniej chłonności i wytrzymałości"], ["Posadzka utwardzona powierzchniowo", "Gdy trzeba trwale wzmocnić powierzchnię betonu pod obciążenia"], ["Warstwa żywiczna", "Intensywna eksploatacja lub wymagania higieniczne; zobacz [posadzki żywiczne](/posadzki-zywiczne)"]] },
          { type: "paragraph", text: "Jeśli osłabiona warstwa jest zdegradowana, usuwa się ją po potwierdzeniu jej stanu badaniami — sama karbonatyzacja nie przesądza jeszcze o metodzie naprawy. Technologię dobiera się do faktycznych obciążeń strefy. Więcej w katalogu wad: [pylenie powierzchni betonu](/katalog-wad/pylenie)." },
        ],
      },
      {
        heading: "Pylenie a higiena",
        blocks: [
          { type: "paragraph", text: "W halach spożywczych i farmaceutycznych pył z posadzki jest problemem higienicznym niezależnie od kwestii BHP. Sam pył betonowy przy długotrwałej ekspozycji nie jest obojętny dla dróg oddechowych. Dlatego w takich obiektach pylący beton zwykle zastępuje się bezspoinową warstwą żywiczną." },
        ],
      },
      {
        heading: "Najczęstsze błędy",
        blocks: [
          { type: "list", ordered: true, items: ["Zakładanie, że wystarczy zamiatanie i odkurzanie — pył wraca, bo problem leży w warstwie wierzchniej.", "Wybór impregnatu bez oceny chłonności i wytrzymałości podłoża.", "Impregnat tam, gdzie przy intensywnej eksploatacji potrzebna jest pełna warstwa żywiczna.", "Pominięcie przyczyny (pielęgnacja, klasa betonu) przy planowaniu naprawy."] },
        ],
      },
      {
        heading: "Pytania do wykonawcy",
        blocks: [
          { type: "list", ordered: true, items: ["Jaka jest chłonność i wytrzymałość podłoża?", "Jakie obciążenia i jaki ruch występują w strefie?", "Czy obiekt ma wymogi higieniczne (spożywka, farmacja)?", "Czy wystarczy impregnat, czy potrzebna jest warstwa żywiczna?", "Jak zostaną przeprowadzone prace i jak długo potrwa przestój?"] },
        ],
      },
    ],
    faq: [
      { q: "Czy pyląca posadzka jest niebezpieczna dla zdrowia?", a: "Sam pył betonowy przy długotrwałej ekspozycji nie jest obojętny dla dróg oddechowych, a w halach spożywczych czy farmaceutycznych bywa też problemem higienicznym niezależnie od BHP." },
      { q: "Czy impregnat wystarczy, czy trzeba nakładać powłokę żywiczną?", a: "Zależy od obciążeń i chłonności podłoża — impregnat utwardzający sprawdza się przy umiarkowanym ruchu, przy intensywnej eksploatacji zwykle potrzebna jest pełna warstwa żywiczna." },
      { q: "Dlaczego beton pyli, mimo że płyta jest nośna?", a: "Pylenie dotyczy wierzchniej warstwy, która może być słabsza niż reszta płyty z powodu braku utwardzenia powierzchniowego, złej pielęgnacji lub karbonatyzacji." },
    ],
    cta: { heading: "Pyli Ci posadzka w hali?", text: "Opisz nam obiekt, obciążenia i wymagania higieniczne — ocenimy stan podłoża i zaproponujemy naprawę. FLOWTEX Polska wykonuje posadzki przemysłowe i żywiczne od ponad 20 lat." },
    relatedServiceSlugs: ["posadzki-zywiczne", "betonowe-posadzki-przemyslowe"],
    relatedRealizacjeSlugs: [],
  },
  {
    slug: "pekajaca-posadzka-przemyslowa-jak-naprawic",
    llmsSummary: "Poradnik o pęknięciach posadzek przemysłowych: rysa statyczna a aktywna, dobór żywicy (sztywna epoksydowa a elastyczna poliuretanowa), przyczyny, rola dylatacji, kiedy wystarczy naprawa punktowa, najczęstsze błędy.",
    publishAt: "2026-12-03",
    title: "Pękająca posadzka przemysłowa: rysa statyczna czy aktywna i jak ją naprawić",
    metaTitle: "Pękająca posadzka przemysłowa — przyczyny i naprawa | FLOWTEX Polska",
    metaDescription:
      "Pęknięcie posadzki to nie zawsze powód do wymiany. Sprawdź, czym różni się rysa statyczna od aktywnej, dlaczego pęknięcia wracają i jak dobrać naprawę.",
    category: "Naprawy posadzek",
    imageAlt: "Przykład: pęknięcia posadzki",
    date: "Grudzień 2026",
    intro: [
      "Widoczne rysy przebiegające przez warstwę wykończeniową, czasem sięgające do podłoża betonowego — to jeden z najczęstszych problemów posadzek przemysłowych. Wiele zakładów od razu myśli o wymianie całej posadzki, choć w większości przypadków wystarcza naprawa punktowa.",
      "Kluczowe jest rozpoznanie, z jaką rysą mamy do czynienia. Od tego zależy, czym ją naprawić — i czy pęknięcie nie wróci po kilku miesiącach.",
    ],
    sections: [
      {
        heading: "Rysa statyczna czy aktywna",
        blocks: [
          { type: "paragraph", text: "Kluczowe rozróżnienie to charakter pracy rysy. Rysy statyczne — ustabilizowane, niezmieniające szerokości — można trwale wypełnić sztywną żywicą epoksydową, która przenosi obciążenia jak jednolity element konstrukcji. Rysy aktywne, wciąż pracujące pod wpływem temperatury lub obciążeń, wymagają elastycznego wypełnienia poliuretanowego, które podąża za ruchem krawędzi bez pękania wtórnego." },
          { type: "table", head: ["", "Rysa statyczna", "Rysa aktywna"], rows: [["Charakter", "Ustabilizowana, nie zmienia szerokości", "Pracuje pod wpływem temperatury lub obciążeń"], ["Wypełnienie", "Sztywna żywica epoksydowa (iniekcja)", "Elastyczne wypełnienie poliuretanowe"], ["Typowy błąd", "—", "Sztywna żywica w rysie aktywnej — pęknięcie wraca w tym samym miejscu w ciągu kilku miesięcy"]] },
        ],
      },
      {
        heading: "Skąd biorą się pęknięcia",
        blocks: [
          { type: "list", items: ["skurcz betonu podczas wiązania lub brak prawidłowo rozmieszczonych szczelin dylatacyjnych,", "ruchy konstrukcji budynku lub osiadanie podłoża,", "przeciążenie punktowe przekraczające nośność płyty,", "zbyt cienka warstwa posadzki w stosunku do obciążeń eksploatacyjnych."] },
          { type: "paragraph", text: "Dylatacje ograniczają ryzyko niekontrolowanego pękania płyty — opisujemy je przy okazji [betonowych posadzek przemysłowych](/betonowe-posadzki-przemyslowe). Gdy dylatacje są uszkodzone, zobacz też katalog wad: [uszkodzone dylatacje](/katalog-wad/dylatacje)." },
        ],
      },
      {
        heading: "Jak wygląda naprawa",
        blocks: [
          { type: "list", ordered: true, items: ["Rozpoznanie charakteru rysy (statyczna czy aktywna) przed wyborem metody naprawy.", "Dla rys aktywnych — elastyczne wypełnienie poliuretanowe; dla rys statycznych — sztywna iniekcja epoksydowa. Dobór wyłącznie po ocenie rodzaju i przyczyny rysy.", "Rozpoznanie rodzaju szczeliny, jej ruchu, stanu krawędzi i podparcia przed odtworzeniem lub zmianą układu dylatacji.", "Dobór konstrukcji naprawczej do obciążeń po ocenie nośności podłoża i przyczyny pęknięcia."] },
          { type: "paragraph", text: "W wielu przypadkach prace wykonuje się technikami [serwisu posadzek](/serwis-posadzek-i-kanalizacji) i [cięcia diamentowego](/technika-diamentowa), bez wymiany całej nawierzchni. Więcej w katalogu: [pęknięcia posadzki](/katalog-wad/peknieca)." },
        ],
      },
      {
        heading: "Czy trzeba wymieniać całą posadzkę",
        blocks: [
          { type: "paragraph", text: "W większości przypadków nie — naprawa punktowa (iniekcja, wypełnienie, wzmocnienie krawędzi) wystarcza, o ile przyczyna nie jest konstrukcyjna, np. osiadanie budynku." },
        ],
      },
      {
        heading: "Najczęstsze błędy",
        blocks: [
          { type: "list", ordered: true, items: ["Zalewanie każdej rysy tą samą żywicą bez oceny, czy jest aktywna.", "Doraźne zalepienie rysy bez diagnozy przyczyny.", "Pominięcie dylatacji lub ich uszkodzonego wypełnienia.", "Brak oceny nośności podłoża przy przeciążeniach punktowych."] },
        ],
      },
      {
        heading: "Pytania do wykonawcy",
        blocks: [
          { type: "list", ordered: true, items: ["Czy rysa jest statyczna czy aktywna i jak to sprawdzono?", "Jaka jest przyczyna pęknięcia?", "Jaki materiał wypełnienia zostanie użyty i dlaczego?", "Czy dylatacje wymagają naprawy lub zmiany układu?", "Jak długo potrwa naprawa i czy trzeba wstrzymać ruch?"] },
        ],
      },
    ],
    faq: [
      { q: "Czy każdą rysę można po prostu zalać żywicą?", a: "Nie — dopiero ocena, czy rysa jest aktywna czy statyczna, decyduje o rodzaju żywicy (elastyczna poliuretanowa vs sztywna epoksydowa). Zalanie rysy aktywnej sztywną żywicą zwykle kończy się nawrotem pęknięcia." },
      { q: "Czy pęknięcie oznacza, że trzeba wymienić całą posadzkę?", a: "W większości przypadków nie — naprawa punktowa (iniekcja, wypełnienie, wzmocnienie krawędzi) wystarcza, o ile przyczyna nie jest konstrukcyjna, np. osiadanie budynku." },
      { q: "Dlaczego pęknięcie wraca po naprawie?", a: "Najczęściej zastosowano sztywną żywicę w rysie aktywnej albo nie zdiagnozowano przyczyny pęknięcia." },
    ],
    cta: { heading: "Pęka Ci posadzka w hali?", text: "Opisz nam rysy, obciążenia i układ dylatacji — ocenimy ich charakter i zaproponujemy naprawę. FLOWTEX Polska wykonuje posadzki przemysłowe i żywiczne od ponad 20 lat." },
    relatedServiceSlugs: ["serwis-posadzek-i-kanalizacji", "technika-diamentowa"],
    relatedRealizacjeSlugs: [],
  },
  {
    slug: "odspojenie-zywicy-od-podloza-przyczyny-i-naprawa",
    llmsSummary: "Poradnik o odspajaniu się żywicy od podłoża (delaminacja): przyczyny (wilgotność resztkowa, przygotowanie podłoża, ciśnienie osmotyczne, zanieczyszczenia), badanie przed naprawą, kroki naprawy, najczęstsze błędy.",
    publishAt: "2026-12-10",
    title: "Odspojenie żywicy od podłoża: przyczyny, diagnoza i naprawa",
    metaTitle: "Odspojenie żywicy od podłoża — przyczyny i naprawa | FLOWTEX Polska",
    metaDescription:
      "Żywica odspaja się od betonu? To objaw, nie przyczyna. Sprawdź, skąd bierze się delaminacja posadzki żywicznej i jak ją trwale naprawić.",
    category: "Naprawy posadzek",
    imageAlt: "Przykład: odspojenie żywicy od podłoża",
    date: "Grudzień 2026",
    intro: [
      "Warstwa żywiczna traci przyczepność do betonu: pojawiają się pęcherze, łuszczenie się lub całkowite oderwanie fragmentów. Naturalny odruch to wymiana odspojonego kawałka — ale bez diagnozy przyczyny problem zwykle wraca w sąsiednim miejscu.",
      "Wyjaśniamy, skąd bierze się delaminacja posadzki żywicznej i jak ją naprawić tak, żeby naprawa była trwała.",
    ],
    sections: [
      {
        heading: "Delaminacja to objaw, nie przyczyna",
        blocks: [
          { type: "paragraph", text: "Wymiana odspojonego fragmentu bez zdiagnozowania źródła wilgoci lub zanieczyszczenia kończy się zwykle identycznym problemem w sąsiadującej strefie. Dlatego badanie wilgotności resztkowej betonu i ewentualnego parcia osmotycznego poprzedza każdą naprawę, a nie jest opcjonalnym krokiem." },
        ],
      },
      {
        heading: "Najczęstsze przyczyny",
        blocks: [
          { type: "list", items: ["podwyższona wilgotność resztkowa betonu w trakcie aplikacji,", "niewystarczające przygotowanie mechaniczne podłoża (frezowanie, śrutowanie),", "ciśnienie osmotyczne pary wodnej z podłoża,", "zanieczyszczenia (olej, pył) pozostawione przed gruntowaniem."] },
        ],
      },
      {
        heading: "Jak wygląda trwała naprawa",
        blocks: [
          { type: "list", ordered: true, items: ["Badanie wilgotności i nośności podłoża przed każdą naprawą.", "Mechaniczne usunięcie odspojonej warstwy do zdrowego betonu.", "Zastosowanie kompatybilnej bariery przeciwwilgociowej wyłącznie po badaniu wilgotności, parcia wilgoci i potwierdzeniu w karcie technicznej systemu.", "Ponowna aplikacja systemu żywicznego zgodnie z kartą techniczną."] },
          { type: "paragraph", text: "Takie prace wykonujemy w ramach [serwisu posadzek](/serwis-posadzek-i-kanalizacji). Więcej w katalogu wad: [odspojenie żywicy od podłoża](/katalog-wad/odspojenie-zywicy)." },
        ],
      },
      {
        heading: "Odspojenie w jednym miejscu czy na całej posadzce",
        blocks: [
          { type: "paragraph", text: "Odspojenie tylko w jednym miejscu zwykle wskazuje na lokalne źródło problemu — punktowe zawilgocenie podłoża, niedoczyszczony fragment przed aplikacją albo miejscowe uszkodzenie warstwy gruntującej. Nie zawsze oznacza to problem z całą płytą betonową: często to kwestia przygotowania powierzchni lub wilgoci, a nie stanu konstrukcyjnego płyty. To właśnie ustala diagnostyka przed naprawą." },
        ],
      },
      {
        heading: "Jak uniknąć odspojenia przy nowej posadzce",
        blocks: [
          { type: "list", items: ["zbadać wilgotność podłoża przed aplikacją,", "przygotować podłoże mechanicznie (frezowanie, śrutowanie),", "usunąć olej i pył przed gruntowaniem,", "stosować system zgodnie z kartą techniczną; więcej o [posadzkach żywicznych](/posadzki-zywiczne)."] },
        ],
      },
      {
        heading: "Najczęstsze błędy",
        blocks: [
          { type: "list", ordered: true, items: ["Wymiana odspojonego fragmentu bez badania wilgotności podłoża.", "Pominięcie mechanicznego przygotowania podłoża.", "Stosowanie bariery przeciwwilgociowej bez badania i potwierdzenia w karcie technicznej.", "Naprawa „na gotowo” bez ustalenia, czy problem jest lokalny, czy dotyczy całej strefy."] },
        ],
      },
    ],
    faq: [
      { q: "Dlaczego żywica odspaja się tylko w jednym miejscu, a nie na całej posadzce?", a: "Zwykle wskazuje to na lokalne źródło problemu — punktowe zawilgocenie podłoża, niedoczyszczony fragment przed aplikacją albo miejscowe uszkodzenie warstwy gruntującej." },
      { q: "Czy odspojenie żywicy oznacza problem z całą płytą betonową?", a: "Nie zawsze — często to kwestia przygotowania powierzchni lub wilgoci, a nie stanu konstrukcyjnego płyty. To właśnie ustala diagnostyka przed naprawą." },
      { q: "Czy wystarczy wymienić odspojony fragment?", a: "Nie, jeśli nie zdiagnozowano źródła wilgoci lub zanieczyszczenia — problem zwykle wraca w sąsiadującej strefie." },
    ],
    cta: { heading: "Odspaja Ci się żywica?", text: "Opisz nam miejsce, stan posadzki i warunki w hali — zaczniemy od diagnostyki i dopiero wtedy zaproponujemy naprawę. FLOWTEX Polska wykonuje posadzki przemysłowe i żywiczne od ponad 20 lat." },
    relatedServiceSlugs: ["posadzki-zywiczne", "serwis-posadzek-i-kanalizacji"],
    relatedRealizacjeSlugs: [],
  },
  {
    slug: "sliska-posadzka-jak-poprawic-antyposlizgowosc",
    llmsSummary: "Poradnik o śliskich posadzkach: przyczyny (zbyt gładki topcoat, wypolerowanie przez ruch kołowy, niedopasowana klasa, pozostałości środków myjących), dobór antypoślizgowości do warunków (DIN 51130 jako jedna z metod), posypka kwarcowa, schody Deckshield.",
    publishAt: "2026-12-17",
    title: "Śliska posadzka w zakładzie: jak poprawić antypoślizgowość",
    metaTitle: "Śliska posadzka — jak poprawić antypoślizgowość | FLOWTEX Polska",
    metaDescription:
      "Posadzka śliska od wody, oleju lub po wypolerowaniu przez ruch kołowy? Sprawdź, dlaczego najwyższa klasa antypoślizgowości nie zawsze jest najlepsza i jak dobrać rozwiązanie.",
    category: "Bezpieczeństwo posadzek",
    imageAlt: "Przykład: śliska powierzchnia posadzki",
    date: "Grudzień 2026",
    intro: [
      "Posadzka potrafi stać się niebezpiecznie śliska w kontakcie z wodą, olejem lub po tym, jak ruch kołowy wypoleruje jej fakturę. Naturalny odruch to wybór „najwyższej klasy antypoślizgowości” — ale to nie zawsze najlepsze rozwiązanie.",
      "Wyjaśniamy, skąd bierze się śliskość, jak dobrać antypoślizgowość do warunków w zakładzie i o czym warto pamiętać przy naprawie.",
    ],
    sections: [
      {
        heading: "Antypoślizgowość nie jest jedną wartością",
        blocks: [
          { type: "paragraph", text: "Antypoślizgowość zależy od tego, czym jest zabrudzona powierzchnia (woda, olej, tłuszcz), w jakim obuwiu poruszają się ludzie i jak intensywny jest ruch kołowy. Dlatego dobór zaczyna się od analizy konkretnych warunków eksploatacji, a nie od wyboru najwyższej dostępnej klasy z karty technicznej. DIN 51130 jest jedną z metod weryfikacji, a nie uniwersalną klasą dla każdej sytuacji." },
        ],
      },
      {
        heading: "Dlaczego posadzka staje się śliska",
        blocks: [
          { type: "list", items: ["zbyt gładka struktura topcoatu w strefie mokrej lub tłustej,", "wypolerowanie faktury przez wieloletni ruch kołowy,", "niedopasowana klasa antypoślizgowości do warunków eksploatacji,", "pozostałości środków myjących obniżające tarcie powierzchni."] },
        ],
      },
      {
        heading: "Jak poprawić antypoślizgowość",
        blocks: [
          { type: "list", ordered: true, items: ["Dobrać badanie i kryterium antypoślizgowości do medium, obuwia, ruchu i sposobu użytkowania.", "Odtworzyć fakturę posypką kwarcową lub strukturalną warstwą zamykającą — po sprawdzeniu wpływu na czyszczenie i odporność chemiczną.", "Punktowo wzmocnić antypoślizgowość w strefach krytycznych, np. na rampach i przejściach.", "Dostosować procedury mycia do zastosowanego systemu."] },
          { type: "paragraph", text: "Przykładem są schody prefabrykowane, na których wykonaliśmy poliuretanowy system Deckshield z zasypem piaskiem kwarcowym — zapewnia on certyfikowaną antypoślizgowość przy intensywnym ruchu pieszym. [Zobacz realizację](/realizacje/zywica-schody-prefabrykowane-deckshield). Więcej o [posadzkach żywicznych](/posadzki-zywiczne) i w katalogu wad: [śliska powierzchnia](/katalog-wad/sliska-powierzchnia)." },
        ],
      },
      {
        heading: "Czy wyższa klasa to zawsze lepiej",
        blocks: [
          { type: "paragraph", text: "Nie zawsze. Bardziej chropowata faktura utrudnia czyszczenie i może zwiększać zużycie kół wózków, dlatego dobiera się ją do realnych warunków, a nie maksymalizuje na wyrost." },
        ],
      },
      {
        heading: "Czy śliskość wraca po naprawie",
        blocks: [
          { type: "paragraph", text: "Może, jeśli faktura antypoślizgowa zostanie stopniowo wypolerowana przez ruch kołowy. W strefach intensywnej eksploatacji warto zaplanować cykliczny przegląd." },
        ],
      },
      {
        heading: "Najczęstsze błędy",
        blocks: [
          { type: "list", ordered: true, items: ["Wybór najwyższej klasy bez analizy warunków pracy.", "Pominięcie wpływu faktury na czyszczenie i odporność chemiczną.", "Ignorowanie pozostałości środków myjących na powierzchni.", "Brak przeglądów w strefach intensywnego ruchu kołowego."] },
        ],
      },
    ],
    faq: [
      { q: "Czy wyższa klasa antypoślizgowości to zawsze lepszy wybór?", a: "Nie zawsze — bardziej chropowata faktura utrudnia czyszczenie i może zwiększać zużycie kół wózków, dlatego dobiera się ją do realnych warunków, a nie maksymalizuje na wyrost." },
      { q: "Czy śliskość powraca po pewnym czasie mimo naprawy?", a: "Może, jeśli faktura antypoślizgowa zostanie stopniowo wypolerowana przez ruch kołowy — w strefach intensywnej eksploatacji warto zaplanować cykliczny przegląd." },
      { q: "Czy DIN 51130 to uniwersalna klasa antypoślizgowości?", a: "Nie. To jedna z metod weryfikacji antypoślizgowości, którą dobiera się do medium, obuwia, ruchu i sposobu użytkowania." },
    ],
    cta: { heading: "Masz śliską posadzkę w hali?", text: "Opisz nam strefę, medium (woda, olej, tłuszcz) i rodzaj ruchu — dobierzemy rozwiązanie do warunków. FLOWTEX Polska wykonuje posadzki przemysłowe i żywiczne od ponad 20 lat." },
    relatedServiceSlugs: ["posadzki-zywiczne"],
    relatedRealizacjeSlugs: ["zywica-schody-prefabrykowane-deckshield"],
  },
  {
    slug: "posadzka-zywiczna-czy-betonowa-do-magazynu",
    llmsSummary: "Poradnik o różnicy między posadzką betonową (nośność, utwardzanie, zbrojenie, dylatacje) a żywiczną (powłoka bezspoinowa, higiena, ścieranie), kiedy wystarczy beton, kiedy dokłada się żywicę, błędy i pytania do wykonawcy.",
    publishAt: "2026-11-19",
    title: "Posadzka żywiczna czy betonowa do magazynu? Co wybrać i kiedy łączyć oba rozwiązania",
    metaTitle: "Posadzka żywiczna czy betonowa do magazynu? Poradnik | FLOWTEX Polska",
    metaDescription:
      "Posadzka żywiczna czy betonowa do magazynu? Sprawdź, czym się różnią, do czego służy każda z nich i kiedy warto położyć żywicę na betonie.",
    category: "Magazyny i hale",
    imageAlt: "Układanie betonowej posadzki przemysłowej w dużej hali magazynowej",
    date: "Listopad 2026",
    intro: [
      "Płyta betonowa, która nie udźwignie regałów wysokiego składowania, ściera się pod kołami wózków widłowych albo pęka bez zaplanowanych dylatacji — to typowe problemy inwestycji magazynowych na etapie budowy lub rozbudowy. Z drugiej strony pyląca, pękająca posadzka betonowa i wymogi higieniczne to częsty powód, dla którego zakłady sięgają po posadzki żywiczne.",
      "Pytanie „żywiczna czy betonowa?” sugeruje wybór jednego z dwóch. W praktyce to dwa różne elementy posadzki, które często się uzupełniają. Wyjaśniamy, do czego służy każdy z nich i jak podjąć decyzję.",
    ],
    sections: [
      {
        heading: "Posadzka betonowa — nośność i podstawa",
        blocks: [
          {
            type: "paragraph",
            text: "[Betonowe posadzki przemysłowe](/betonowe-posadzki-przemyslowe) odpowiadają przede wszystkim za nośność. Sprawdzają się w halach magazynowych wysokiego składowania, na placach manewrowych i w strefach produkcyjnych, gdzie kluczowa jest odporność na obciążenia od regałów oraz wózków widłowych. Dobór wykonania zależy od obciążeń:",
          },
          {
            type: "list",
            items: [
              "utwardzanie powierzchniowe posypką mineralną lub kwarcową, które zwiększa odporność na ścieranie w strefach ruchu wózków,",
              "zbrojenie rozproszone włóknami stalowymi lub polipropylenowymi albo tradycyjne, prętowe — przy większych rozpiętościach i obciążeniach punktowych,",
              "dylatacje konstrukcyjne i pozorne wykonywane zgodnie z projektem technologicznym, które ograniczają ryzyko niekontrolowanego pękania płyty.",
            ],
          },
        ],
      },
      {
        heading: "Posadzka żywiczna — powłoka dla wymagającej eksploatacji",
        blocks: [
          {
            type: "paragraph",
            text: "[Posadzki żywiczne](/posadzki-zywiczne) to bezspoinowe systemy epoksydowe i poliuretanowe, które rozwiązują problemy powierzchni: pylenie betonu, ścieranie od wózków widłowych, wymogi higieniczne takie jak HACCP. Są odporne na wodę, oleje i smary, a gładka, bezspoinowa powierzchnia ogranicza gromadzenie się brudu i ułatwia utrzymanie czystości. Krótki czas instalacji ogranicza przestoje zakładu, a ewentualne uszkodzenia można naprawiać punktowo, bez wymiany całej nawierzchni.",
          },
        ],
      },
      {
        heading: "Porównanie w skrócie",
        blocks: [
          {
            type: "table",
            head: ["", "Posadzka betonowa", "Posadzka żywiczna"],
            rows: [
              ["Główna rola", "Nośność płyty, odporność na obciążenia od regałów i wózków", "Bezspoinowa, szczelna powierzchnia użytkowa"],
              ["Rozwiązuje", "Niewystarczającą nośność podłoża, ścieranie (utwardzanie powierzchniowe)", "Pylenie betonu, ścieranie, wymogi higieniczne (np. HACCP)"],
              ["Typowe zastosowanie", "Magazyny wysokiego składowania, place manewrowe, strefy produkcyjne", "Hale produkcyjne, magazyny, zakłady spożywcze i farmaceutyczne"],
              ["Dylatacje", "Wykonywane zgodnie z projektem technologicznym", "Wymagają uwzględnienia dylatacji istniejącego podłoża"],
              ["Naprawa", "Naprawy punktowe i renowacja betonu", "Punktowe naprawy bez wymiany całej nawierzchni"],
            ],
          },
          {
            type: "paragraph",
            text: "Warto zauważyć, że posadzka betonowa może funkcjonować samodzielnie albo posłużyć jako podłoże pod docelową warstwę żywiczną, jeśli w przyszłości zajdzie taka potrzeba.",
          },
        ],
      },
      {
        heading: "Kiedy wystarczy beton, a kiedy dokłada się żywicę",
        blocks: [
          {
            type: "list",
            items: [
              "Zwykły magazyn z ruchem wózków, bez szczególnych wymagań higienicznych — często wystarcza odpowiednio zaprojektowana i utwardzona posadzka betonowa.",
              "Pylenie lub nadmierne ścieranie betonu — to sygnał, że warto rozważyć warstwę żywiczną. Zobacz też katalog wad: [pylenie posadzki](/katalog-wad/pylenie).",
              "Wymogi higieniczne, kontakt z wodą, tłuszczami lub chemikaliami — wtedy standardem jest posadzka żywiczna.",
              "Etap budowy z perspektywą późniejszej zmiany — beton można wykonać tak, by w przyszłości przyjął warstwę żywiczną.",
            ],
          },
          {
            type: "paragraph",
            text: "Nośność zapewnia płyta betonowa. Żywica tej nośności nie zastępuje — dlatego w obiektach o dużych obciążeniach pytanie brzmi zwykle nie „żywiczna czy betonowa”, lecz „jaka płyta i czy dodać powłokę”.",
          },
        ],
      },
      {
        heading: "Najczęstsze błędy przy wyborze",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "Traktowanie żywicy jako zamiennika nośności — płytę betonową trzeba zaprojektować pod obciążenia od regałów i wózków.",
              "Pominięcie dylatacji lub wykonanie ich niezgodnie z projektem technologicznym, co grozi niekontrolowanym pękaniem płyty.",
              "Układanie żywicy na zdegradowanym, pylącym lub pękającym podłożu bez jego przygotowania.",
              "Wybór wyłącznie po cenie za metr kwadratowy, bez analizy obciążeń, chemii procesowej i wymagań higienicznych.",
              "Brak planu na przyszłość — beton wykonany bez myśli o późniejszej warstwie żywicznej.",
            ],
          },
        ],
      },
      {
        heading: "Pytania do wykonawcy przed decyzją",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "Jakie obciążenia przewidujemy — regały wysokiego składowania, wózki, obciążenia punktowe?",
              "Jak zaprojektowano zbrojenie i dylatacje?",
              "Czy magazyn ma wymogi higieniczne albo kontakt z wodą, tłuszczami lub chemikaliami?",
              "Czy beton ma pozostać samodzielną nawierzchnią, czy w przyszłości przyjmie warstwę żywiczną?",
              "Czy prace można prowadzić etapami, bez zatrzymywania pracy obiektu?",
            ],
          },
          {
            type: "paragraph",
            text: "Wstępny kierunek możesz sprawdzić w naszym narzędziu [dobór systemu posadzkowego](/dobor-posadzki).",
          },
        ],
      },
    ],
    faq: [
      {
        q: "Czy żywica zwiększa nośność posadzki?",
        a: "Nie. Nośność zapewnia płyta betonowa, którą dobiera się do obciążeń od regałów i wózków. Żywica jest bezspoinową powłoką, która rozwiązuje m.in. pylenie, ścieranie i wymagania higieniczne.",
      },
      {
        q: "Czy na posadzce betonowej można później wykonać warstwę żywiczną?",
        a: "Tak. Posadzka betonowa może funkcjonować samodzielnie albo posłużyć jako podłoże pod docelową warstwę żywiczną, jeśli w przyszłości zajdzie taka potrzeba.",
      },
      {
        q: "Czym utwardza się powierzchnię posadzki betonowej?",
        a: "Posypką mineralną lub kwarcową. Zwiększa ona odporność na ścieranie w strefach ruchu wózków widłowych.",
      },
      {
        q: "Jakie zbrojenie stosuje się w posadzkach betonowych?",
        a: "Rozproszone włóknami stalowymi lub polipropylenowymi albo tradycyjne, prętowe — przy większych rozpiętościach i obciążeniach punktowych. Wybór zależy od obciążeń.",
      },
    ],
    cta: {
      heading: "Planujesz posadzkę do magazynu?",
      text: "Opisz nam obciążenia, rodzaj ruchu i wymagania obiektu — pomożemy dobrać rozwiązanie. FLOWTEX Polska wykonuje posadzki przemysłowe i żywiczne od ponad 20 lat.",
    },
    relatedServiceSlugs: ["betonowe-posadzki-przemyslowe", "posadzki-zywiczne"],
    relatedRealizacjeSlugs: [],
  },
  {
    slug: "jak-zabezpieczyc-sciany-hali-przed-wozkami",
    llmsSummary: "Poradnik o ochronie ścian, słupów i naroży hal przed uderzeniami wózków — rodzaje zabezpieczeń (odboje, narożniki, panele, cokoły, osłony), dobór do ruchu, higiena w zakładach spożywczych, błędy i pytania do wykonawcy.",
    publishAt: "2026-11-12",
    title: "Jak zabezpieczyć ściany hali przed wózkami widłowymi? Odboje, narożniki i cokoły",
    metaTitle: "Ochrona ścian hali przed wózkami widłowymi — odboje | FLOWTEX Polska",
    metaDescription:
      "Jak chronić ściany, słupy i naroża hali przed wózkami widłowymi? Rodzaje odbojów, dobór do ruchu, cokoły higieniczne i najczęstsze błędy przy wyborze.",
    category: "Systemy odbojowe",
    imageAlt: "Żółte odboje ścienne, stalowa osłona narożnika i higieniczny cokół w hali produkcyjnej — realizacja FLOWTEX Polska",
    date: "Listopad 2026",
    intro: [
      "Wgniecione płyty warstwowe, pęknięte narożniki słupów, odpryskujący tynk w strefach manewrowych — to skutki codziennego kontaktu ścian z wózkami widłowymi i transportem wewnętrznym. Każde takie uszkodzenie to powtarzalny koszt naprawy, a w zakładzie spożywczym także problem z utrzymaniem higieny.",
      "Rozwiązaniem jest zabezpieczenie, które przejmuje uderzenia zamiast konstrukcji hali. Poniżej wyjaśniamy, jakie są rodzaje zabezpieczeń, jak dobrać je do ruchu w hali i na co zwrócić uwagę przy wyborze.",
    ],
    sections: [
      {
        heading: "Które miejsca w hali są najbardziej narażone",
        blocks: [
          {
            type: "list",
            items: [
              "ściany wzdłuż tras transportu wewnętrznego,",
              "słupy i naroża w strefach manewrowych,",
              "elementy wystające ponad standardową wysokość odboju,",
              "dolne partie ścian i połączenie ściany z podłogą, zwłaszcza w strefach mycia.",
            ],
          },
          {
            type: "paragraph",
            text: "Rozmieszczenie zabezpieczeń najlepiej projektować na podstawie realnych tras transportu, a nie wyłącznie rzutu hali.",
          },
        ],
      },
      {
        heading: "Rodzaje zabezpieczeń ścian",
        blocks: [
          {
            type: "paragraph",
            text: "W ramach [systemów odbojowych i ochrony ścian](/systemy-odbojowe) stosuje się kilka rodzajów rozwiązań, które pełnią różne funkcje:",
          },
          {
            type: "table",
            head: ["Zabezpieczenie", "Co chroni", "Gdzie się sprawdza"],
            rows: [
              ["Odboje ścienne", "Ściany przed uderzeniami wózków i transportowanych ładunków", "Wzdłuż tras transportu wewnętrznego"],
              ["Elementy narożnikowe", "Słupy i naroża", "Strefy manewrowe"],
              ["Panele ścienne poliestrowe", "Powierzchnie ścian; pozwalają odnowić uszkodzone miejsca bez ich wymiany", "Ściany narażone na uderzenia"],
              ["Cokoły", "Połączenie ściany z podłogą — bezszwowe, higieniczne", "Strefy o wymaganiach higienicznych, m.in. przemysł spożywczy"],
              ["Osłony ścienne", "Elementy wystające ponad standardową wysokość odboju", "Miejsca o podwyższonym ryzyku kolizji"],
            ],
          },
        ],
      },
      {
        heading: "Jak dobrać zabezpieczenie do ruchu w hali",
        blocks: [
          {
            type: "paragraph",
            text: "Rodzaj i grubość odboju dobiera się indywidualnie, na podstawie wywiadu dotyczącego rodzaju i natężenia ruchu wózków oraz urządzeń poruszających się po hali. Inaczej wygląda strefa o rzadkim ruchu, a inaczej korytarz, którym wózki jeżdżą przez cały dzień. Dla elementów wystających ponad standardową wysokość odboju proponuje się dodatkowe osłony ścienne, ograniczające ryzyko uszkodzeń w miejscach o podwyższonym ryzyku kolizji.",
          },
        ],
      },
      {
        heading: "Higiena w zakładach spożywczych",
        blocks: [
          {
            type: "paragraph",
            text: "W przemyśle spożywczym uszkodzona, wgnieciona lub osypująca się powierzchnia ściany to nie tylko koszt naprawy, ale też miejsce, w którym trudniej utrzymać czystość. Dlatego stosuje się cokoły z gładką powłoką Sanicoat, bezpieczną dla żywności, a połączenia elementów wykonuje się na systemowym kleju Hygiseal®, co zapewnia szczelność i trwałość.",
          },
          {
            type: "paragraph",
            text: "Przykładem jest nasza realizacja w zakładzie produkcji przekąsek i chipsów we Wrocławiu — odboje, cokoły higieniczne i okładziny ścienne Polysto w hali o powierzchni 3400 m². [Zobacz realizację](/realizacje/systemy-odbojowe-zaklad-przekasek-wroclaw-3400-m2).",
          },
        ],
      },
      {
        heading: "Montaż i późniejsza wymiana",
        blocks: [
          {
            type: "paragraph",
            text: "Warto zadbać o to, by zabezpieczenia dało się naprawiać bez ingerencji w ścianę. Montaż prowadzi się tak, by umożliwić ewentualną wymianę pojedynczych elementów bez naruszania konstrukcji ściany, a poliestrowe panele ścienne pozwalają odnowić uszkodzone powierzchnie bez wymiany całego pola.",
          },
        ],
      },
      {
        heading: "Najczęstsze błędy przy wyborze",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "Dobór zabezpieczeń bez wywiadu o rodzaju i natężeniu ruchu wózków.",
              "Ochrona tylko ścian, z pominięciem słupów i naroży w strefach manewrowych.",
              "Pominięcie elementów wystających ponad standardową wysokość odboju.",
              "Brak uwzględnienia wymagań higienicznych — niewłaściwe cokoły i połączenia w zakładzie spożywczym.",
              "Montaż, który wymaga ingerencji w ścianę przy każdej wymianie uszkodzonego elementu.",
            ],
          },
        ],
      },
      {
        heading: "Pytania do wykonawcy przed decyzją",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "Jakie wózki i urządzenia poruszają się po hali i jak intensywny jest ruch?",
              "Które ściany, słupy i naroża są najbardziej narażone?",
              "Czy w hali są elementy wystające ponad standardową wysokość odboju?",
              "Jakie są wymagania higieniczne i jak będą czyszczone powierzchnie?",
              "Czy pojedyncze elementy będzie można wymienić bez ingerencji w ścianę?",
            ],
          },
        ],
      },
    ],
    faq: [
      {
        q: "Czym różni się odbój od okładziny ściennej?",
        a: "Odboje montuje się wzdłuż tras transportu, by przejmowały uderzenia wózków. Okładziny i panele ścienne tworzą warstwę ochronną powierzchni ściany, a poliestrowe panele pozwalają odnowić uszkodzone miejsca bez ich wymiany.",
      },
      {
        q: "Jak dobrać grubość odboju?",
        a: "Indywidualnie, na podstawie wywiadu dotyczącego rodzaju i natężenia ruchu wózków oraz urządzeń w hali. Nie ma jednej grubości dla każdej hali.",
      },
      {
        q: "Czy odboje nadają się do zakładów spożywczych?",
        a: "Tak, o ile uwzględnia się wymagania higieniczne — stosuje się m.in. cokoły z powłoką Sanicoat, bezpieczną dla żywności, oraz połączenia na systemowym kleju Hygiseal®.",
      },
      {
        q: "Czy można wymienić pojedynczy uszkodzony element odbojowy?",
        a: "Tak. Montaż prowadzi się tak, by umożliwić wymianę pojedynczych elementów bez ingerencji w konstrukcję ściany.",
      },
    ],
    cta: {
      heading: "Chcesz zabezpieczyć ściany w swojej hali?",
      text: "Opisz nam rodzaj ruchu, trasy transportu i wymagania higieniczne — dobierzemy odboje, narożniki i cokoły do Twojej hali. FLOWTEX Polska wykonuje posadzki przemysłowe i systemy ochrony ścian od ponad 20 lat.",
    },
    relatedServiceSlugs: ["systemy-odbojowe", "posadzki-zywiczne"],
    relatedRealizacjeSlugs: ["systemy-odbojowe-zaklad-przekasek-wroclaw-3400-m2"],
  },
  {
    slug: "jaka-posadzka-do-clean-roomu",
    llmsSummary: "Poradnik doboru posadzki do pomieszczeń czystych — wymagania (bezpyłowość, bezspoinowość, faseta, odporność na dezynfekcję), ISO 14644 i EU GMP Aneks 1, różnice między farmacją a szpitalem, błędy i pytania do wykonawcy.",
    publishAt: "2026-11-04",
    title: "Jaka posadzka do clean roomu? Pomieszczenia czyste w farmacji i szpitalu",
    metaTitle: "Jaka posadzka do clean roomu? Farmacja i szpital | FLOWTEX Polska",
    metaDescription:
      "Jak dobrać posadzkę do clean roomu? Bezspoinowość, faseta, bezpyłowość i odporność na dezynfekcję — wymagania dla farmacji i szpitali oraz najczęstsze błędy.",
    category: "Clean room",
    imageAlt: "Bezspoinowa posadzka żywiczna w clean roomie zakładu farmaceutycznego — realizacja FLOWTEX Polska",
    date: "Listopad 2026",
    intro: [
      "W pomieszczeniach czystych posadzka nie jest wyłącznie wykończeniem — jest częścią środowiska produkcyjnego lub medycznego. Liczy się to, czy ogranicza powstawanie i gromadzenie zanieczyszczeń oraz czy da się ją skutecznie czyścić i dezynfekować. Dlatego wybór posadzki do clean roomu zaczyna się od wymagań pomieszczenia, a nie od wyglądu czy ceny za metr kwadratowy.",
      "W tym poradniku wyjaśniamy, jakie cechy musi mieć posadzka w pomieszczeniach czystych, czym różni się realizacja w zakładzie farmaceutycznym od realizacji w szpitalu i jakich błędów unikać.",
    ],
    sections: [
      {
        heading: "Jakie wymagania stawia pomieszczenie czyste",
        blocks: [
          {
            type: "paragraph",
            text: "Wymagania dotyczące kontroli czystości środowiska określają m.in. normy serii ISO 14644, a w procesach wymagających warunków aseptycznych — wytyczne EU GMP Aneks 1. Klasy czystości określają dopuszczalną liczbę cząstek w powietrzu, a to bezpośrednio przekłada się na wymagania wobec posadzki.",
          },
          {
            type: "paragraph",
            text: "W praktyce posadzka w pomieszczeniu czystym powinna być:",
          },
          {
            type: "list",
            items: [
              "bezpyłowa — nie może generować ani zatrzymywać cząstek,",
              "bezspoinowa — każda szczelina czy fuga to potencjalne miejsce gromadzenia się zanieczyszczeń i drobnoustrojów, trudne do skutecznej dezynfekcji,",
              "pozbawiona porów — bez miejsc, w których mogłyby namnażać się bakterie czy grzyby,",
              "odporna na częstą, intensywną dezynfekcję środkami chemicznymi,",
              "łatwa w codziennym utrzymaniu czystości.",
            ],
          },
          {
            type: "paragraph",
            text: "Takie wymagania spełniają bezspoinowe [posadzki do clean roomów](/posadzki-clean-room) wykonywane jako systemy żywiczne.",
          },
        ],
      },
      {
        heading: "Faseta — dlaczego połączenie ściany z podłogą ma znaczenie",
        blocks: [
          {
            type: "paragraph",
            text: "Najtrudniejszym do utrzymania w czystości miejscem jest zwykle połączenie ściany z podłogą. Dlatego system żywiczny wykonuje się z wywinięciem na ściany, czyli fasetą. Eliminuje ona ostre kąty i połączenia ściana–podłoga — miejsca, w których najłatwiej o zaleganie zanieczyszczeń trudnych do usunięcia podczas czyszczenia i dezynfekcji.",
          },
        ],
      },
      {
        heading: "Od zniszczonego podłoża do gładkiej powierzchni",
        blocks: [
          {
            type: "paragraph",
            text: "Często zaczynamy od podłoża, które nie spełnia wymagań higienicznych. W naszej realizacji dla zakładu farmaceutycznego na Mazowszu (340 m²) było to mocno zdegradowane, porowate podłoże betonowe. Po jego przygotowaniu wykonaliśmy system żywiczny z dekoracyjnymi płatkami kwarcowymi, dający jednolitą, bezpyłową i wysoko połyskliwą powierzchnię, odporną na częstą dezynfekcję chemiczną. [Zobacz realizację](/realizacje/posadzka-zywiczna-clean-room-farmacja-mazowieckie).",
          },
        ],
      },
      {
        heading: "Farmacja a szpital — co jest wspólne, a co inne",
        blocks: [
          {
            type: "paragraph",
            text: "Pomieszczenia szpitalne o podwyższonym reżimie czystości — bloki operacyjne, sale zabiegowe, sterylizatornie, strefy przygotowania leków — muszą spełniać normy porównywalne do tych obowiązujących w przemysłowych clean roomach. Technicznie oba rozwiązania opierają się na tych samych zasadach: bezspoinowości, fasetach, odporności chemicznej i braku porowatości. Różni je kontekst realizacji:",
          },
          {
            type: "table",
            head: ["", "Zakład farmaceutyczny / hala produkcyjna", "Placówka medyczna"],
            rows: [
              ["Inwestor i regulacje", "Normy branżowe danego sektora (np. farmaceutycznego)", "Przepisy sanitarne i wymagania odbiorowe właściwe dla ochrony zdrowia"],
              ["Harmonogram prac", "Zwykle bardziej ciągły tok robót", "Często większa elastyczność: praca etapowa, ograniczenia czasowe, sąsiedztwo stref sterylnych"],
              ["Zakres wykończenia", "Wynika z procesu produkcyjnego", "Częściej dodatkowe wymagania związane z instalacjami medycznymi i sprzętem diagnostycznym"],
            ],
          },
          {
            type: "paragraph",
            text: "Mamy za sobą realizację posadzki dla jednego z warszawskich szpitali. [Zobacz realizację](/realizacje/posadzka-clean-room-szpital-warszawa).",
          },
        ],
      },
      {
        heading: "Najczęstsze błędy przy wyborze",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "Wybór systemu po wyglądzie lub odporności mechanicznej, bez analizy warunków pracy konkretnego pomieszczenia.",
              "Pozostawienie spoin i ostrych kątów przy ścianach zamiast bezspoinowego systemu z fasetą.",
              "Układanie nowej warstwy na niewystarczająco przygotowanym, porowatym podłożu.",
              "Pominięcie odporności na środki dezynfekcyjne stosowane w obiekcie.",
              "Brak planu prac etapowych w czynnym obiekcie, zwłaszcza w placówkach medycznych.",
            ],
          },
        ],
      },
      {
        heading: "Pytania do wykonawcy przed decyzją",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "Jaka jest klasa czystości pomieszczenia i jakich wymagań (np. ISO 14644, EU GMP Aneks 1) dotyczy?",
              "W jakim stanie jest podłoże i jak zostanie przygotowane?",
              "Jak rozwiązano połączenie ściany z podłogą i czy przewidziano fasetę?",
              "Jakimi środkami dezynfekcyjnymi i jak często będzie czyszczona posadzka?",
              "Czy prace odbywają się w czynnym obiekcie i czy trzeba je prowadzić etapami?",
            ],
          },
        ],
      },
    ],
    faq: [
      {
        q: "Dlaczego posadzka w clean roomie ma być bezspoinowa?",
        a: "Każda szczelina czy fuga to potencjalne miejsce gromadzenia się zanieczyszczeń i drobnoustrojów, trudne do skutecznej dezynfekcji. Bezspoinowa powierzchnia jest łatwiejsza do utrzymania w czystości.",
      },
      {
        q: "Co to jest faseta w posadzce żywicznej?",
        a: "To wywinięcie posadzki na ściany, które eliminuje ostre kąty i połączenia ściana–podłoga — miejsca, w których najłatwiej o zaleganie zanieczyszczeń.",
      },
      {
        q: "Czy posadzkę do clean roomu można wykonać w czynnym szpitalu?",
        a: "Tak, ale zwykle wymaga to prac etapowych i uwzględnienia ograniczeń czasowych oraz sąsiedztwa stref sterylnych. Mamy za sobą taką realizację dla warszawskiego szpitala.",
      },
      {
        q: "Czy można położyć posadzkę na zniszczonym, porowatym betonie?",
        a: "Podłoże trzeba najpierw przygotować. W naszej realizacji dla zakładu farmaceutycznego podłożem była mocno zdegradowana, porowata wylewka betonowa, na której po przygotowaniu wykonaliśmy bezspoinowy system żywiczny.",
      },
    ],
    cta: {
      heading: "Planujesz posadzkę do pomieszczenia czystego?",
      text: "Opisz nam przeznaczenie pomieszczenia, klasę czystości i stan podłoża — przeanalizujemy warunki i zaproponujemy rozwiązanie. FLOWTEX Polska wykonuje posadzki przemysłowe i żywiczne od ponad 20 lat.",
    },
    relatedServiceSlugs: ["posadzki-clean-room", "posadzki-zywiczne"],
    relatedRealizacjeSlugs: [
      "posadzka-zywiczna-clean-room-farmacja-mazowieckie",
      "posadzka-clean-room-szpital-warszawa",
    ],
  },
  {
    slug: "jaka-posadzka-do-zakladu-spozywczego",
    publishAt: "2026-10-27",
    llmsSummary: "Poradnik doboru posadzki do zakładu spożywczego — wymagania (mycie, chemia, temperatura, HACCP/GMP), epoksyd a poliuretan, spadki i odwodnienie, cokoły i ochrona ścian, najczęstsze błędy i pytania do wykonawcy.",
    title: "Jaka posadzka do zakładu spożywczego? Jak dobrać system do produkcji żywności",
    metaTitle: "Jaka posadzka do zakładu spożywczego? Poradnik doboru | FLOWTEX Polska",
    metaDescription:
      "Jak wybrać posadzkę do zakładu spożywczego? Epoksyd czy poliuretan, spadki i odwodnienie, cokoły i ochrona ścian — na co zwrócić uwagę przed decyzją.",
    category: "Przemysł spożywczy",
    imageAlt: "Posadzka żywiczna w zakładzie przetwórstwa spożywczego — realizacja FLOWTEX Polska",
    date: "Październik 2026",
    intro: [
      "Zakład spożywczy to dla posadzki jedno z najtrudniejszych środowisk: woda i regularne mycie, tłuszcze i kwasy, wysoka temperatura mycia parowego, ruch wózków widłowych oraz wymogi HACCP i GMP, których stara nawierzchnia często nie spełnia. Pyląca, pękająca lub porowata posadzka betonowa to najczęstszy powód, dla którego zakłady zaczynają szukać nowej.",
      "W tym poradniku wyjaśniamy, czego wymaga posadzka w produkcji żywności, jak wybrać między systemem epoksydowym a poliuretanowym i o czym łatwo zapomnieć: spadkach, połączeniu ściany z podłogą oraz ochronie ścian przed wózkami.",
    ],
    sections: [
      {
        heading: "Czego wymaga posadzka w zakładzie spożywczym",
        blocks: [
          {
            type: "list",
            items: [
              "Odporność na wodę i mycie — intensywny, regularny kontakt z wodą oraz środkami myjącymi.",
              "Odporność chemiczna — tłuszcze, kwasy i inne substancje występujące w procesie produkcji.",
              "Odporność na temperaturę — w tym wysoką temperaturę mycia parowego.",
              "Odporność mechaniczna — ścieranie i obciążenia od wózków widłowych oraz transportu wewnętrznego.",
              "Higiena — bezspoinowa, gładka powierzchnia, która ogranicza gromadzenie się brudu i ułatwia utrzymanie czystości.",
              "Zgodność z wymogami HACCP i GMP, właściwymi dla przemysłu spożywczego i farmaceutycznego.",
            ],
          },
          {
            type: "paragraph",
            text: "Żaden z tych punktów nie jest ważniejszy z góry. To warunki konkretnego zakładu — a nawet konkretnej strefy — decydują, które z nich są kluczowe.",
          },
        ],
      },
      {
        heading: "Epoksyd czy poliuretan",
        blocks: [
          {
            type: "paragraph",
            text: "Najczęściej wybiera się między [posadzką żywiczną](/posadzki-zywiczne) epoksydową a poliuretanową. Różnią się właściwościami, więc sprawdzają się w innych miejscach:",
          },
          {
            type: "table",
            head: ["", "System epoksydowy", "System poliuretanowy"],
            rows: [
              ["Charakter powłoki", "Twarda, szczelna powłoka, łatwa w utrzymaniu czystości", "Bardziej elastyczna powłoka"],
              ["Mocna strona", "Odporność na obciążenia mechaniczne i chemikalia", "Lepsze znoszenie wahań temperatury"],
              ["Typowe zastosowanie", "Magazyny, hale produkcyjne, laboratoria", "Chłodnie, magazyny spożywcze, pomieszczenia o zmiennych warunkach cieplnych"],
              ["O wyborze decyduje", "Obciążenia, chemia procesowa i wymagania higieniczne konkretnej strefy", "Obciążenia, chemia procesowa i wymagania higieniczne konkretnej strefy"],
            ],
          },
          {
            type: "paragraph",
            text: "Dobór wstępny ułatwia nasze narzędzie [dobór systemu posadzkowego](/dobor-posadzki), które na podstawie obciążeń, chemii procesowej, wilgoci, temperatury i wymagań higienicznych pokazuje kierunki technologiczne do dalszej weryfikacji. Nie zastępuje ono projektu ani oceny podłoża.",
          },
        ],
      },
      {
        heading: "Spadki i odwodnienie — o czym łatwo zapomnieć",
        blocks: [
          {
            type: "paragraph",
            text: "W zakładach przemysłu spożywczego prawidłowa geometria posadzki i skuteczne odwodnienie mają kluczowe znaczenie dla efektywnego mycia oraz utrzymania powierzchni w odpowiednim stanie higienicznym. Woda, która stoi na posadzce, utrudnia utrzymanie czystości — dlatego spadki powinny być częścią projektu, a nie poprawką po fakcie.",
          },
          {
            type: "paragraph",
            text: "Z takim wyzwaniem mierzyliśmy się przy realizacji 840 m² posadzki w zakładzie przetwórstwa rybnego na północy Hiszpanii, gdzie kluczowe były intensywny kontakt z wodą, regularne mycie i wymagania higieniczne. [Zobacz realizację](/realizacje/posadzka-zywiczna-przemysl-spozywczy-840-m2-hiszpania).",
          },
        ],
      },
      {
        heading: "Różne strefy — różne warunki",
        blocks: [
          {
            type: "paragraph",
            text: "W jednym zakładzie warunki potrafią się mocno różnić: inaczej wygląda strefa mokra z częstym myciem, inaczej magazyn, a jeszcze inaczej chłodnia. Dobór rozwiązań powinien uwzględniać nie tylko odporność mechaniczną, lecz także sposób czyszczenia, stosowane środki myjące i warunki panujące w poszczególnych strefach. Jeden system dla całego obiektu bywa więc kompromisem, który nie sprawdza się nigdzie.",
          },
        ],
      },
      {
        heading: "Cokoły i ochrona ścian",
        blocks: [
          {
            type: "paragraph",
            text: "Połączenie ściany z podłogą to jedno z miejsc, w których najłatwiej o zaleganie zanieczyszczeń. Dlatego w zakładach spożywczych stosuje się cokoły zapewniające bezszwowe, higieniczne połączenie — u nas są to m.in. cokoły Polysto® z gładką powłoką Sanicoat, bezpieczną dla żywności, montowane na systemowym kleju Hygiseal®.",
          },
          {
            type: "paragraph",
            text: "Drugi problem to ściany i narożniki narażone na uderzenia wózków. Uszkodzona, wgnieciona lub osypująca się powierzchnia to nie tylko koszt naprawy, ale też miejsce, w którym trudniej utrzymać higienę. Rozwiązaniem są [systemy odbojowe i ochrona ścian](/systemy-odbojowe). Przykładem jest nasza realizacja w zakładzie produkcji przekąsek i chipsów we Wrocławiu: odboje, cokoły higieniczne i okładziny ścienne Polysto w hali o powierzchni 3400 m². [Zobacz realizację](/realizacje/systemy-odbojowe-zaklad-przekasek-wroclaw-3400-m2).",
          },
        ],
      },
      {
        heading: "Najczęstsze błędy przy wyborze",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "Wybór systemu wyłącznie po cenie lub wyglądzie, bez analizy obciążeń, chemii procesowej i temperatur.",
              "Pominięcie spadków i odwodnienia na etapie projektu.",
              "Zaniedbanie połączenia ściany z posadzką — cokoły i faseta są częścią systemu higienicznego.",
              "Jeden system dla wszystkich stref zakładu, mimo różnych warunków w każdej z nich.",
              "Brak ochrony ścian i narożników przed wózkami, co po czasie niszczy także wykończenie.",
            ],
          },
        ],
      },
      {
        heading: "Pytania do wykonawcy przed decyzją",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "Jakie substancje (tłuszcze, kwasy, środki myjące) i jakie temperatury występują w poszczególnych strefach?",
              "Jak będzie myta posadzka — wodą, parą, jakimi środkami i jak często?",
              "Jakie obciążenia i jaki ruch wózków przewidujemy?",
              "Jakie są spadki i jak rozwiązano odwodnienie?",
              "Czy prace można prowadzić etapami, bez zatrzymywania całego zakładu?",
            ],
          },
        ],
      },
    ],
    faq: [
      {
        q: "Czy lepszy jest epoksyd czy poliuretan w zakładzie spożywczym?",
        a: "To zależy od strefy. Systemy epoksydowe sprawdzają się tam, gdzie liczą się obciążenia mechaniczne i chemikalia, a poliuretanowe — gdzie występują wahania temperatury, np. w chłodniach i magazynach spożywczych. Wybór zależy od obciążeń, chemii procesowej i wymagań higienicznych.",
      },
      {
        q: "Czy posadzkę żywiczną można wykonać bez zatrzymywania produkcji?",
        a: "W wielu przypadkach tak — prace można prowadzić etapami, w ruchu ciągłym zakładu. Krótki czas instalacji ogranicza przestoje, a kolejność prac planujemy po wizji lokalnej.",
      },
      {
        q: "Czy uszkodzoną posadzkę żywiczną trzeba wymieniać w całości?",
        a: "Nie zawsze. Uszkodzenia posadzki żywicznej można naprawiać punktowo, bez wymiany całej nawierzchni. Zobacz też [serwis posadzek i kanalizacji](/serwis-posadzek-i-kanalizacji).",
      },
      {
        q: "Jak zabezpieczyć ściany w hali przed uszkodzeniami od wózków?",
        a: "Stosuje się odboje, okładziny ścienne i elementy narożnikowe, dobrane do rodzaju i natężenia ruchu. W zakładach spożywczych ważne są też cokoły higieniczne i szczelne połączenia elementów.",
      },
    ],
    cta: {
      heading: "Planujesz posadzkę w zakładzie spożywczym?",
      text: "Opisz nam strefy, procesy i sposób mycia — przeanalizujemy warunki i zaproponujemy rozwiązanie. FLOWTEX Polska wykonuje posadzki przemysłowe i żywiczne od ponad 20 lat.",
    },
    relatedServiceSlugs: ["posadzki-zywiczne", "systemy-odbojowe"],
    relatedRealizacjeSlugs: [
      "posadzka-zywiczna-przemysl-spozywczy-840-m2-hiszpania",
      "systemy-odbojowe-zaklad-przekasek-wroclaw-3400-m2",
    ],
  },
  {
    slug: "posadzka-esd-a-antywybuchowa",
    publishAt: "2026-10-27",
    llmsSummary: "Poradnik o różnicach między posadzką ESD (ochrona elektroniki) a posadzką do strefy zagrożenia wybuchem ATEX (ograniczanie źródeł zapłonu): z czego składa się system, najczęstsze błędy przy wyborze i pytania do wykonawcy. Może być cytowany przy pytaniach typu „czy posadzka antystatyczna nadaje się do strefy Ex\".",
    title: "Posadzka ESD a posadzka antywybuchowa — czym się różnią i jak je dobrać",
    metaTitle: "Posadzka ESD a antywybuchowa ATEX — różnice i dobór | FLOWTEX Polska",
    metaDescription:
      "Posadzka antystatyczna to nie zawsze posadzka do strefy zagrożenia wybuchem. Sprawdź, czym różni się posadzka ESD od antywybuchowej ATEX i jak dobrać system do obiektu.",
    category: "Posadzki ESD i ATEX",
    imageAlt: "Posadzka ESD w strefie produkcji elektroniki — realizacja FLOWTEX Polska",
    date: "Październik 2026",
    intro: [
      "Nie każda posadzka antyelektrostatyczna jest posadzką przeznaczoną do pracy w strefie zagrożenia wybuchem. Na pierwszy rzut oka to różnica trudna do zauważenia — obie posadzki wyglądają podobnie, obie odprowadzają ładunki elektrostatyczne i obie bywają określane jako „przewodzące” albo „antystatyczne”. Cel ich zastosowania jest jednak inny, a pomylenie jednej z drugą może mieć poważne skutki.",
      "Poniżej wyjaśniamy, czym różnią się obie posadzki, z czego składa się system i jakie pytania warto zadać wykonawcy, zanim zapadnie decyzja.",
    ],
    sections: [
      {
        heading: "Co łączy posadzkę ESD i posadzkę antywybuchową",
        blocks: [
          {
            type: "paragraph",
            text: "W obu przypadkach istotne jest kontrolowanie ładunków elektrostatycznych i ich bezpieczne odprowadzanie. W obu przypadkach nie wystarczy też sama warstwa żywicy: o działaniu posadzki decyduje cały układ — od przygotowania podłoża, przez warstwy przewodzące lub rozpraszające i sposób wykonania połączeń, po uziemienie i pomiary gotowej powierzchni.",
          },
          {
            type: "paragraph",
            text: "Dlatego dwie posadzki mogą wyglądać niemal identycznie, a jednocześnie różnić się zastosowaniem i parametrami. W posadzce przemysłowej widać przede wszystkim jej powierzchnię — nie widać natomiast tego, co znajduje się pod nią.",
          },
        ],
      },
      {
        heading: "Posadzka ESD — ochrona elektroniki",
        blocks: [
          {
            type: "paragraph",
            text: "Posadzka ESD (ang. electrostatic discharge) służy przede wszystkim do ochrony wrażliwych komponentów elektronicznych przed wyładowaniami elektrostatycznymi. Stosuje się ją w halach produkcji i montażu elektroniki, w strefach EPA i w magazynach komponentów wrażliwych na wyładowania.",
          },
          {
            type: "paragraph",
            text: "System ESD powinien tworzyć kontrolowaną drogę odprowadzania ładunków. W praktyce oznacza to konieczność uwzględnienia całej konstrukcji posadzki, przygotowania podłoża, warstw przewodzących lub rozpraszających, uziemienia oraz sposobu użytkowania powierzchni.",
          },
          {
            type: "paragraph",
            text: "Znaczenie ma również to, jak posadzka współpracuje z obuwiem ESD. Podłoga i obuwie ocenione osobno nie gwarantują jeszcze prawidłowego działania całego układu osoba–obuwie–podłoga. Dlatego przy realizacjach ESD nie patrzymy wyłącznie na sam materiał posadzkowy.",
          },
          {
            type: "paragraph",
            text: "Przykładem jest nasza realizacja 700 m² posadzki ESD dla strefy produkcji elektroniki — projekt, w którym posadzka została potraktowana jako część środowiska produkcyjnego, a nie tylko wykończenie podłogi. [Zobacz realizację](/realizacje/posadzka-esd-przemysl-elektroniczny-700-m2).",
          },
        ],
      },
      {
        heading: "Posadzka antywybuchowa ATEX — kontrola źródeł zapłonu",
        blocks: [
          {
            type: "paragraph",
            text: "W obiektach, w których może powstać atmosfera wybuchowa — na przykład w halach magazynujących materiały sypkie, gdzie obecność pyłów wpływa na klasyfikację strefy — kontrola elektryczności statycznej jest jednym z elementów całego systemu bezpieczeństwa. W strefie zagrożenia wybuchem służy ona ograniczaniu potencjalnych źródeł zapłonu.",
          },
          {
            type: "paragraph",
            text: "Sama informacja, że posadzka jest „przewodząca” albo „antystatyczna”, nie mówi jeszcze wystarczająco dużo. Znaczenie ma cały układ:",
          },
          {
            type: "list",
            items: [
              "mechaniczne przygotowanie podłoża betonowego pod system przewodzący,",
              "system dobrany do klasyfikacji strefy Ex w obiekcie,",
              "prawidłowo wykonana warstwa odprowadzająca ładunki elektrostatyczne,",
              "połączenie warstwy przewodzącej z instalacją uziemiającą obiektu,",
              "taśmy miedziane jako element drogi odprowadzania ładunków,",
              "kontrola parametrów elektrycznych gotowej posadzki po zakończeniu prac,",
              "sposób późniejszego użytkowania i utrzymania właściwości systemu.",
            ],
          },
          {
            type: "paragraph",
            text: "Dlatego posadzkę w strefie Ex należy traktować jako system, a nie tylko warstwę żywicy na betonie. Przy dużych powierzchniach dochodzi jeszcze wymóg zachowania powtarzalnych parametrów na całym wykonanym obszarze. Tak było w naszej realizacji 1420 m² posadzki antywybuchowej w hali magazynującej materiały sypkie pod Grójcem. [Zobacz realizację](/realizacje/posadzka-antywybuchowa-atex-grojec-1420-m2).",
          },
        ],
      },
      {
        heading: "Porównanie w skrócie",
        blocks: [
          {
            type: "table",
            head: ["", "Posadzka ESD", "Posadzka do strefy Ex (ATEX)"],
            rows: [
              ["Główny cel", "Ochrona wrażliwej elektroniki przed wyładowaniami", "Ograniczanie potencjalnych źródeł zapłonu"],
              ["Typowe miejsce", "Produkcja i montaż elektroniki, strefy EPA", "Hale z pyłami lub materiałami sypkimi, strefy zagrożenia wybuchem"],
              ["Punkt odniesienia", "Wymagania strefy ochrony elektroniki", "Klasyfikacja strefy Ex konkretnego obiektu"],
              ["Układ", "Podłoże, warstwy przewodzące lub rozpraszające, uziemienie", "Podłoże, warstwa odprowadzająca, uziemienie, taśmy miedziane"],
              ["Kontrola", "Pomiar parametrów po wykonaniu i w eksploatacji", "Pomiar parametrów po wykonaniu, dokumentacja"],
              ["Czy jedno zastępuje drugie?", "Nie automatycznie", "Nie automatycznie"],
            ],
          },
        ],
      },
      {
        heading: "Najczęstsze błędy przy wyborze",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "Traktowanie „antystatycznej” jako równoważnej „do strefy Ex”. Określenie „posadzka antyelektrostatyczna” nie powinno być automatycznie traktowane jako synonim posadzki do strefy Ex. Wymagania trzeba określić na podstawie warunków występujących w konkretnym obiekcie i jego klasyfikacji.",
              "Ocena samej warstwy wierzchniej. O działaniu systemu decydują także warstwy pod powierzchnią, sposób wykonania połączeń i uziemienie. Nieprawidłowo wykonany detal — na przykład połączenie warstwy przewodzącej z uziemieniem — może wpłynąć na działanie całego systemu, nawet jeśli powierzchnia wygląda poprawnie.",
              "Brak pomiarów po wykonaniu. To pomiary i dokumentacja pozwalają zweryfikować, czy wykonany system osiągnął wymagane parametry.",
              "Brak planu utrzymania właściwości w eksploatacji. Sposób użytkowania i czyszczenia powierzchni oraz kontrola parametrów w trakcie eksploatacji mają wpływ na to, czy system będzie działał tak, jak w dniu odbioru.",
            ],
          },
        ],
      },
      {
        heading: "Jak dobrać posadzkę — pięć pytań do wykonawcy",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "Jaka jest klasyfikacja strefy zagrożenia wybuchem w obiekcie (jeśli występuje)?",
              "Czy w obiekcie występują pyły, opary lub materiały sypkie?",
              "Czy w strefie pracują wrażliwe komponenty elektroniczne?",
              "Jak wygląda układ uziemienia obiektu i jak zostanie połączony z posadzką?",
              "Kiedy i jak zostaną wykonane pomiary oraz jaką dokumentację otrzyma inwestor?",
            ],
          },
          {
            type: "paragraph",
            text: "Wymagania najlepiej określić już na etapie planowania prac, a nie po wyborze samego materiału. Pomocne może być też nasze narzędzie [dobór systemu posadzkowego](/dobor-posadzki).",
          },
        ],
      },
    ],
    faq: [
      {
        q: "Czy posadzka ESD może być użyta w strefie zagrożenia wybuchem?",
        a: "Nie automatycznie. Oba rodzaje posadzek łączy kontrolowane odprowadzanie ładunków, ale cel zastosowania jest inny. Wymagania dla strefy Ex określa się na podstawie jej klasyfikacji w konkretnym obiekcie.",
      },
      {
        q: "Czy posadzka do strefy Ex jest też posadzką ESD?",
        a: "To zależy od wymagań obiektu i zastosowanego systemu — nie należy zakładać tego z góry. Parametry trzeba potwierdzić pomiarem i dokumentacją gotowej posadzki.",
      },
      {
        q: "Jak sprawdza się posadzkę po wykonaniu?",
        a: "Kontroluje się parametry elektryczne gotowej posadzki. Pomiary i dokumentacja pozwalają zweryfikować, czy system osiągnął wymagane parametry na całej powierzchni.",
      },
      {
        q: "Co przygotować, aby uzyskać wycenę?",
        a: "Opis procesu i rodzaju składowanych lub przetwarzanych materiałów, klasyfikację strefy (jeśli występuje), powierzchnię oraz stan istniejącego podłoża.",
      },
    ],
    cta: {
      heading: "Potrzebujesz posadzki ESD lub do strefy Ex?",
      text: "Masz halę ze strefą Ex albo strefę produkcji elektroniki? Opisz nam proces i warunki pracy — przeanalizujemy je i zaproponujemy rozwiązanie. FLOWTEX Polska wykonuje posadzki przemysłowe i żywiczne od ponad 20 lat.",
    },
    relatedServiceSlugs: ["posadzki-esd", "posadzki-antywybuchowe-atex"],
    relatedRealizacjeSlugs: [
      "posadzka-esd-przemysl-elektroniczny-700-m2",
      "posadzka-antywybuchowa-atex-grojec-1420-m2",
    ],
  },
];

// Poradniki z publishAt późniejszym niż dzień buildu są niewidoczne (ani na
// liście, ani pod adresem, ani w sitemap/llms.txt), dopóki nie nadejdzie ta
// data. Strona jest statyczna, więc w dniu publikacji potrzebny jest nowy
// deploy — robi go .github/workflows/publish-scheduled.yml (patrz README).
// Dzień buildu: __BUILD_DATE__ (vite.config.js) lub, przy uruchomieniu
// skryptów w Node, zmienna BUILD_DATE albo bieżąca data (UTC).
const TODAY =
  typeof __BUILD_DATE__ !== "undefined"
    ? __BUILD_DATE__
    : (typeof process !== "undefined" && process.env?.BUILD_DATE) || new Date().toISOString().slice(0, 10);

export const PORADNIKI = ALL_PORADNIKI.filter((p) => !p.publishAt || p.publishAt <= TODAY);

export function getPoradnikBySlug(slug) {
  return PORADNIKI.find((p) => p.slug === slug);
}
