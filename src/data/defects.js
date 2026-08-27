// KATALOG WAD POSADZEK — dane źródłowe dla narzędzia /katalog-wad
// Każdy wpis odpowiada jednej "karcie wady": objaw, mechanizm powstawania,
// możliwe przyczyny, sugerowany kierunek naprawy i najczęstsze pytania.
// Treści mają charakter poglądowy — ostateczna diagnoza wymaga oględzin obiektu.

export const AUTHOR = {
  name: "Paweł Najduk",
  role: "Dyrektor techniczny, specjalista ds. diagnostyki i napraw posadzek przemysłowych",
  organization: "FLOWTEX Polska",
};

export const DEFECTS = [
  {
    id: "peknieca",
    no: "01",
    tag: "pęknięcia",
    title: "Pęknięcia posadzki",
    intro: "Widoczne rysy przebiegające przez warstwę wykończeniową, czasem sięgające do podłoża betonowego.",
    image: "pekniecie.webp",
    updated: "2026-08-27",
    explanation: "Kluczowe rozróżnienie to charakter pracy rysy. Rysy statyczne — ustabilizowane, niezmieniające szerokości — można trwale wypełnić sztywną żywicą epoksydową, która przenosi obciążenia jak jednolity element konstrukcji. Rysy aktywne, wciąż pracujące pod wpływem temperatury lub obciążeń, wymagają elastycznego wypełnienia poliuretanowego, które podąża za ruchem krawędzi bez pękania wtórnego. Zastosowanie sztywnej żywicy w rysie aktywnej to jeden z najczęstszych błędów napraw doraźnych — pęknięcie wraca w tym samym miejscu w ciągu kilku miesięcy.",
    causes: [
      "Skurcz betonu podczas wiązania lub brak prawidłowo rozmieszczonych szczelin dylatacyjnych",
      "Ruchy konstrukcji budynku lub osiadanie podłoża",
      "Przeciążenie punktowe przekraczające nośność płyty",
      "Zbyt cienka warstwa posadzki w stosunku do obciążeń eksploatacyjnych",
    ],
    solutions: [
      "Rozpoznanie charakteru rysy (statyczna czy aktywna) przed wyborem metody naprawy",
      "Dla rys aktywnych: elastyczne wypełnienie poliuretanowe podążające za ruchem krawędzi; dla rys statycznych: sztywna iniekcja żywicą epoksydową przenosząca obciążenia jak jednolity element — dobór wyłącznie po ocenie rodzaju i przyczyny rysy",
      "Rozpoznanie rodzaju szczeliny, jej ruchu, stanu krawędzi i podparcia przed odtworzeniem lub zmianą układu dylatacji",
      "Dobór konstrukcji naprawczej do obciążeń po ocenie nośności podłoża i przyczyny pęknięcia",
    ],
    faq: [
      {
        question: "Czy każdą rysę można po prostu zalać żywicą?",
        answer: "Nie — dopiero ocena, czy rysa jest aktywna czy statyczna, decyduje o rodzaju żywicy (elastyczna poliuretanowa vs sztywna epoksydowa). Zalanie rysy aktywnej sztywną żywicą zwykle kończy się nawrotem pęknięcia.",
      },
      {
        question: "Czy pęknięcie oznacza, że trzeba wymienić całą posadzkę?",
        answer: "W większości przypadków nie — naprawa punktowa (iniekcja, wypełnienie, wzmocnienie krawędzi) wystarcza, o ile przyczyna nie jest konstrukcyjna, np. osiadanie budynku.",
      },
    ],
  },
  {
    id: "ubytki",
    no: "02",
    tag: "ubytki",
    title: "Ubytki i wykruszenia",
    intro: "Lokalne wgłębienia lub wykruszona powierzchnia, najczęściej w strefach intensywnego ruchu kołowego.",
    image: "ubytek.webp",
    updated: "2026-08-27",
    explanation: "Trwałość naprawy ubytku zależy od tego, czy usunięto cały osłabiony materiał, a nie tylko widoczny ubytek. Krawędzie uszkodzenia często mają mikrospękania sięgające głębiej niż widać gołym okiem — naprawa nałożona na osłabiony beton odspoi się ponownie w tym samym miejscu, zwykle szybciej niż za pierwszym razem.",
    causes: [
      "Uderzenia mechaniczne — upadające elementy, kolizje z wózkami widłowymi",
      "Niedostateczna wytrzymałość podłoża betonowego w miejscu ubytku",
      "Słabe związanie warstwy wykończeniowej z podłożem",
      "Korozja zbrojenia powodująca odspojenie fragmentu betonu",
    ],
    solutions: [
      "Usunięcie osłabionego materiału do zdrowego podłoża",
      "Naprawa zaprawą PCC lub systemem żywicznym o wysokiej wytrzymałości",
      "Zabezpieczenie odsłoniętego zbrojenia przed naprawą właściwą",
      "Odtworzenie kompatybilnej warstwy wykończeniowej zgodnie z kartą techniczną systemu",
    ],
    faq: [
      {
        question: "Ile trwa naprawa pojedynczego ubytku?",
        answer: "Zależy od głębokości i systemu, ale typowa naprawa punktowa zamyka się zwykle w jeden dzień roboczy, łącznie z czasem utwardzania.",
      },
      {
        question: "Czy można naprawić ubytek bez przerywania pracy hali?",
        answer: "Przy niewielkich, zlokalizowanych ubytkach zwykle tak — naprawa punktowa nie wymaga wyłączenia całego obiektu, jedynie czasowego wygrodzenia strefy.",
      },
    ],
  },
  {
    id: "odspojenie-zywicy",
    no: "03",
    tag: "delaminacja",
    title: "Odspojenie żywicy od podłoża",
    intro: "Warstwa żywiczna traci przyczepność do betonu — pęcherze, łuszczenie się lub całkowite oderwanie fragmentów.",
    image: "flowtex-defect-delaminacja2.webp",
    updated: "2026-08-27",
    explanation: "Delaminacja to objaw, nie przyczyna — wymiana odspojonego fragmentu bez zdiagnozowania źródła wilgoci lub zanieczyszczenia kończy się zwykle identycznym problemem w sąsiadującej strefie. Dlatego badanie wilgotności resztkowej betonu i ewentualnego parcia osmotycznego poprzedza każdą naprawę, a nie jest opcjonalnym krokiem.",
    causes: [
      "Podwyższona wilgotność resztkowa betonu w trakcie aplikacji",
      "Niewystarczające przygotowanie mechaniczne podłoża (frezowanie, śrutowanie)",
      "Ciśnienie osmotyczne pary wodnej z podłoża",
      "Zanieczyszczenia (olej, pył) pozostawione przed gruntowaniem",
    ],
    solutions: [
      "Badanie wilgotności i nośności podłoża przed każdą naprawą",
      "Mechaniczne usunięcie odspojonej warstwy do zdrowego betonu",
      "Zastosowanie kompatybilnej bariery przeciwwilgociowej wyłącznie po badaniu wilgotności, parcia wilgoci i potwierdzeniu w karcie technicznej systemu",
      "Ponowna aplikacja systemu żywicznego zgodnie z kartą techniczną",
    ],
    faq: [
      {
        question: "Dlaczego żywica odspaja się tylko w jednym miejscu, a nie na całej posadzce?",
        answer: "Zwykle wskazuje to na lokalne źródło problemu — punktowe zawilgocenie podłoża, niedoczyszczony fragment przed aplikacją albo miejscowe uszkodzenie warstwy gruntującej.",
      },
      {
        question: "Czy odspojenie żywicy oznacza problem z całą płytą betonową?",
        answer: "Nie zawsze — często to kwestia przygotowania powierzchni lub wilgoci, a nie stanu konstrukcyjnego płyty. To właśnie ustala diagnostyka przed naprawą.",
      },
    ],
  },
  {
    id: "pylenie",
    no: "04",
    tag: "pylenie",
    title: "Pylenie powierzchni betonu",
    intro: "Powierzchnia posadzki betonowej wydziela pył podczas ruchu — widoczny szary nalot na oponach i obuwiu.",
    image: "flowtex-defect-pylenie.webp",
    updated: "2026-08-27",
    explanation: "Pylenie to sygnał, że wierzchnia warstwa betonu jest słabsza niż reszta płyty — może wynikać z niedostatecznej pielęgnacji podczas wiązania albo z naturalnej karbonatyzacji zachodzącej przez lata. W obiektach z rygorami czystości (spożywka, farmacja) pylący beton bywa powodem uwag podczas audytów, nawet jeśli sama płyta ma wystarczającą nośność.",
    causes: [
      "Brak lub niewystarczające utwardzenie powierzchniowe betonu",
      "Zbyt niska klasa wytrzymałości betonu w stosunku do obciążeń",
      "Nieprawidłowa pielęgnacja betonu podczas wiązania",
      "Karbonatyzacja i degradacja wierzchniej warstwy pod wpływem czasu",
    ],
    solutions: [
      "Po ocenie chłonności i wytrzymałości podłoża: impregnat utwardzająco-pyłochłonny, np. na bazie krzemianów, albo system powłokowy",
      "Ocena, czy konieczna jest posadzka utwardzona powierzchniowo lub warstwa żywiczna",
      "Usunięcie osłabionej lub zdegradowanej warstwy po potwierdzeniu jej stanu badaniami; sama karbonatyzacja nie przesądza jeszcze o metodzie naprawy",
      "Dobór technologii adekwatnej do faktycznych obciążeń strefy",
    ],
    faq: [
      {
        question: "Czy pyląca posadzka jest niebezpieczna dla zdrowia?",
        answer: "Sam pył betonowy przy długotrwałej ekspozycji nie jest obojętny dla dróg oddechowych, a w halach spożywczych czy farmaceutycznych bywa też problemem higienicznym niezależnie od BHP.",
      },
      {
        question: "Czy impregnat wystarczy, czy trzeba nakładać powłokę żywiczną?",
        answer: "Zależy od obciążeń i chłonności podłoża — impregnat utwardzający sprawdza się przy umiarkowanym ruchu, przy intensywnej eksploatacji zwykle potrzebna jest pełna warstwa żywiczna.",
      },
    ],
  },
  {
    id: "pecherze",
    no: "05",
    tag: "pęcherze",
    title: "Pęcherze i bąble w żywicy",
    intro: "Drobne wybrzuszenia pod powłoką żywiczną, pojawiające się w trakcie, tuż po aplikacji lub dopiero po dłuższym czasie eksploatacji.",
    image: "flowtex-defect-pecherze.webp",
    updated: "2026-08-27",
    explanation: "Warto rozróżnić dwa różne zjawiska ukryte pod tą samą nazwą. Pęcherze pojawiające się w trakcie lub tuż po aplikacji to zwykle efekt powietrza wypychanego z porowatego podłoża albo zbyt szybkiego wiązania przy rosnącej temperaturze — to problem procesu wykonania. Pęcherze pojawiające się miesiące lub lata po aplikacji mają zwykle inne źródło: ciśnienie osmotyczne wilgoci przenikającej przez półprzepuszczalną warstwę żywiczną od strony podłoża. Ten drugi przypadek wymaga innej naprawy — samo odtworzenie warstwy bez zamontowania bariery przeciwwilgociowej nie usuwa przyczyny.",
    causes: [
      "Powietrze uwięzione w porowatym podłożu wypychane podczas wiązania żywicy (pęcherze aplikacyjne)",
      "Aplikacja przy rosnącej temperaturze podłoża (efekt outgassingu)",
      "Zbyt gruba warstwa nakładana jednorazowo",
      "Ciśnienie osmotyczne wilgoci resztkowej ujawniające się z opóźnieniem — miesiące lub lata po aplikacji, odrębny mechanizm od pęcherzy aplikacyjnych",
    ],
    solutions: [
      "Zapobieganie podczas aplikacji: odpowietrzenie świeżej warstwy walcem kolczastym wyłącznie wtedy, gdy przewiduje to technologia systemu",
      "Kontrola temperatury podłoża i powietrza przed rozpoczęciem prac",
      "Aplikacja w zalecanej grubości i liczbie warstw",
      "Naprawa pęcherzy osmotycznych: usunięcie uszkodzonej warstwy do zdrowego podłoża, badanie wilgotności i zastosowanie bariery przeciwwilgociowej przed odtworzeniem systemu",
    ],
    faq: [
      {
        question: "Dlaczego pęcherze pojawiły się dopiero po roku, skoro posadzka była robiona prawidłowo?",
        answer: "To typowy przebieg pęcherzy osmotycznych — ich przyczyną jest wilgoć w podłożu, a nie błąd wykonawczy w trakcie aplikacji, dlatego ujawniają się z opóźnieniem.",
      },
      {
        question: "Czy pęcherze trzeba naprawiać od razu, czy mogą poczekać?",
        answer: "Nieleczone pęcherze pękają pod obciążeniem i przyspieszają dalszą delaminację wokół uszkodzenia, więc lepiej nie zwlekać, zwłaszcza w strefach ruchu kołowego.",
      },
    ],
  },
  {
    id: "przebarwienia",
    no: "06",
    tag: "przebarwienia",
    title: "Przebarwienia i plamy",
    intro: "Zmiana koloru powierzchni w miejscach kontaktu z substancjami chemicznymi lub pod wpływem UV.",
    image: "flowtex-defect-wykwity.webp",
    updated: "2026-08-27",
    explanation: "Żółknięcie pod wpływem światła UV to w dużej mierze kwestia chemii żywicy, a nie jakości wykonania. Standardowe żywice epoksydowe utwardzane aminami żółkną z natury pod wpływem promieniowania UV, niezależnie od tego, jak starannie zostały nałożone. Systemy poliuretanowe alifatyczne i PMMA są od tego mechanizmu odporne z definicji. Dlatego w halach z dużymi przeszkleniami czy strefach zewnętrznych dobór rodziny chemicznej systemu na etapie projektu ma większe znaczenie niż jakikolwiek topcoat nałożony na niewłaściwą bazę.",
    causes: [
      "Kontakt z olejami, paliwami lub agresywną chemią procesową",
      "Zastosowanie żywicy epoksydowej — żółknącej pod UV z natury chemii — w strefie z ekspozycją światła słonecznego zamiast systemu poliuretanowego alifatycznego lub PMMA",
      "Nierówne wysycenie pigmentu podczas aplikacji",
      "Rozlania niesprzątnięte przez dłuższy czas",
    ],
    solutions: [
      "Dla stref z ekspozycją UV: dobór systemu poliuretanowego alifatycznego lub PMMA już na etapie projektu, nie tylko cienkiego topcoatu na bazie epoksydowej",
      "Dobór systemu po identyfikacji substancji, stężenia, temperatury i czasu kontaktu oraz po sprawdzeniu tabeli odporności konkretnego systemu",
      "Procedury szybkiego usuwania rozlań w instrukcji utrzymania obiektu",
      "Ocena głębokości uszkodzenia; odnowienie warstwy wierzchniej tylko wtedy, gdy podłoże i pozostała konstrukcja systemu są stabilne",
    ],
    faq: [
      {
        question: "Czy żółknięcie posadzki epoksydowej to wada wykonania?",
        answer: "Zwykle nie — to naturalna cecha chemii epoksydu pod wpływem UV. Problemem wykonawczym byłoby dopiero nierówne, plamiste żółknięcie.",
      },
      {
        question: "Czy da się cofnąć przebarwienie od UV?",
        answer: "Samo przebarwienie epoksydu pod UV jest zwykle nieodwracalne — rozwiązaniem jest odnowienie warstwy wierzchniej systemem odpornym na UV, np. poliuretanem alifatycznym lub PMMA.",
      },
    ],
  },
  {
    id: "pofaldowania",
    no: "07",
    tag: "nierówności",
    title: "Nierówności i pofałdowania",
    intro: "Powierzchnia odbiega od płaszczyzny — widoczne zagłębienia, garby lub miejscowe zafalowania.",
    image: "flowtex-defect-pofaldowanie.webp",
    updated: "2026-08-27",
    explanation: "Nierówności ujawniają się dopiero pod obciążeniem — wózek widłowy przejeżdżający przez zafalowanie generuje uderzenia dynamiczne, które przyspieszają zużycie kół i samej posadzki w tym miejscu. Pomiar płaskości laserowej pozwala odróżnić lokalny błąd wykonawczy od postępującego osiadania podłoża gruntowego, co ma zasadnicze znaczenie dla doboru naprawy.",
    causes: [
      "Nieprawidłowe zatarcie betonu podczas wykonywania płyty",
      "Osiadanie podłoża gruntowego pod płytą betonową",
      "Zbyt szybkie wiązanie warstwy wyrównującej podczas aplikacji",
      "Błędy w wykonaniu warstw pod posadzkę (podbudowa, izolacja)",
    ],
    solutions: [
      "Pomiar płaskości laserowej w celu określenia skali odchyleń",
      "Warstwa naprawczo-wyrównująca dobrana do obciążeń, wilgotności podłoża i kompatybilności z systemem wykończeniowym",
      "Diagnostyka podłoża gruntowego w przypadku osiadań konstrukcyjnych",
      "Frezowanie lub szlifowanie lokalnych garbów przed aplikacją systemu",
    ],
    faq: [
      {
        question: "Czy małe nierówności trzeba naprawiać, jeśli nie przeszkadzają wizualnie?",
        answer: "Jeśli są w strefie ruchu wózków widłowych — tak, bo przyspieszają zużycie kół i samej nawierzchni nawet przy niewielkiej skali odchylenia.",
      },
      {
        question: "Skąd wiadomo, czy to błąd wykonawczy, czy osiadanie gruntu?",
        answer: "Rozstrzyga to pomiar płaskości w czasie i diagnostyka podłoża gruntowego — postępujące osiadanie różni się charakterem od jednorazowego błędu zatarcia.",
      },
    ],
  },
  {
    id: "dylatacje",
    no: "08",
    tag: "dylatacje",
    title: "Uszkodzone dylatacje",
    intro: "Wypełnienie szczeliny dylatacyjnej pęka, wykrusza się lub odspaja od krawędzi.",
    image: "flowtex-defect-dylatacja-zbrojona.webp",
    updated: "2026-08-27",
    explanation: "Typ szczeliny decyduje o doborze materiału bardziej niż jej wygląd. Szczelina konstrukcyjna, robocza, skurczowa i izolacyjna różnią się zakresem i kierunkiem ruchu, dlatego ta sama masa dylatacyjna, która sprawdza się w jednej, w innej pęka po kilku sezonach termicznych.",
    causes: [
      "Zastosowanie wypełnienia o niewystarczającej elastyczności",
      "Ruch konstrukcji przekraczający zakres pracy zastosowanego materiału",
      "Brak profilu dylatacyjnego chroniącego krawędzie przed obciążeniem kołowym",
      "Zabrudzenie szczeliny uniemożliwiające jej swobodną pracę",
    ],
    solutions: [
      "Rozpoznanie, czy jest to szczelina konstrukcyjna, robocza, skurczowa czy izolacyjna, a następnie dobór masy do jej ruchu i obciążeń",
      "Zastosowanie profilu lub rozwiązania ochrony krawędzi tylko wtedy, gdy odpowiada typowi szczeliny, geometrii i obciążeniom ruchem kołowym",
      "Oczyszczenie i ponowne wypełnienie uszkodzonych odcinków",
      "Weryfikacja pierwotnego układu dylatacji względem obciążeń obiektu",
    ],
    faq: [
      {
        question: "Dlaczego wypełnienie dylatacji pęka, mimo że jest nowe?",
        answer: "Najczęściej dobrano materiał o zbyt małej elastyczności względem rzeczywistego ruchu tej konkretnej szczeliny — stąd znaczenie rozpoznania jej typu przed naprawą.",
      },
      {
        question: "Czy dylatację trzeba zabezpieczać profilem?",
        answer: "W strefach ruchu kołowego zwykle tak, o ile profil pasuje do typu i geometrii szczeliny — chroni krawędzie przed wykruszeniem pod kołami wózków.",
      },
    ],
  },
  {
    id: "cokoly",
    no: "09",
    tag: "cokoły",
    title: "Zniszczone cokoły higieniczne",
    intro: "Odspojenie, pęknięcia lub ubytki w wyobleniu posadzka–ściana, typowym detalu stref mokrych i higienicznych.",
    image: "cokol.webp",
    updated: "2026-08-27",
    explanation: "Cokół higieniczny pracuje inaczej niż płaska posadzka — koncentruje na sobie uderzenia mechaniczne przy myciu i transporcie wewnętrznym, a jednocześnie musi znosić stały kontakt ze środkami dezynfekującymi. Naroża i przejścia instalacyjne to statystycznie najczęstsze miejsca uszkodzeń, dlatego to tam warto wzmacniać detal już na etapie wykonania.",
    causes: [
      "Uderzenia mechaniczne podczas mycia lub transportu wewnętrznego",
      "Niewystarczające przygotowanie naroża posadzka–ściana przed aplikacją",
      "Ruchy termiczne lub konstrukcyjne w strefie styku",
      "Agresywne środki myjące degradujące krawędź cokołu",
    ],
    solutions: [
      "Odtworzenie wyoblenia zgodnie z wymaganiami higienicznymi strefy",
      "Wzmocnienie detalu w newralgicznych punktach (narożniki, przejścia instalacyjne)",
      "Dobór systemu odpornego na stosowane środki myjąco-dezynfekujące",
      "Regularna kontrola stanu cokołów w harmonogramie utrzymania",
    ],
    faq: [
      {
        question: "Dlaczego akurat narożniki cokołów pękają najczęściej?",
        answer: "Koncentrują naprężenia mechaniczne przy myciu i transporcie oraz są trudniejsze do równego wykonania niż proste odcinki — stąd wyższe ryzyko uszkodzeń.",
      },
      {
        question: "Czy uszkodzony cokół to problem tylko estetyczny?",
        answer: "Nie — w strefach mokrych i higienicznych to element funkcjonalny, uszczelniający styk posadzka-ściana. Jego uszkodzenie sprzyja zaleganiu wody i zabrudzeń w szczelinie.",
      },
    ],
  },
  {
    id: "zastoiny-wody",
    no: "10",
    tag: "odwodnienie",
    title: "Zastoiny wody / brak spadków",
    intro: "Woda zbiera się w nieckach na powierzchni zamiast spływać do wpustów, co sprzyja śliskości i rozwojowi mikroorganizmów.",
    image: "flowtex-defect-kaluzowanie.webp",
    updated: "2026-08-27",
    explanation: "Brak spadków rzadko wynika z jednego błędu — to zwykle suma niewielkich odchyleń w warstwie wyrównującej, które kumulują się w nieckę w newralgicznym miejscu. Punktowa korekta spadków jest zwykle szybsza i tańsza niż wymiana całej strefy, o ile problem zostanie precyzyjnie zmapowany pomiarem.",
    causes: [
      "Niewystarczające spadki wykonane podczas układania warstwy wyrównującej",
      "Osiadanie podłoża po pewnym czasie eksploatacji",
      "Błędne rozmieszczenie wpustów względem geometrii pomieszczenia",
      "Zbyt płaska posadzka w strefie intensywnego mycia",
    ],
    solutions: [
      "Pomiar spadków i lokalizacja punktów zalegania wody",
      "Miejscowa korekta spadków warstwą wyrównującą",
      "Weryfikacja rozmieszczenia i drożności odpływów",
      "Uwzględnienie wymaganych spadków już na etapie projektu w nowych realizacjach",
    ],
    faq: [
      {
        question: "Czy zastoiny wody można naprawić bez wymiany całej posadzki?",
        answer: "W większości przypadków tak — punktowa korekta spadków w miejscu zalegania wody rozwiązuje problem bez ingerencji w całą powierzchnię.",
      },
      {
        question: "Dlaczego woda zbiera się tylko w jednym miejscu hali?",
        answer: "Zwykle wskazuje to na lokalne osiadanie podłoża albo błąd wykonawczy przy układaniu warstwy wyrównującej w tej konkretnej strefie.",
      },
    ],
  },
  {
    id: "sliska-powierzchnia",
    no: "11",
    tag: "śliskość",
    title: "Śliska powierzchnia",
    intro: "Posadzka staje się niebezpiecznie śliska w kontakcie z wodą, olejem lub po wypolerowaniu przez ruch kołowy.",
    image: "flowtex-defect-sliskosc.webp",
    updated: "2026-08-27",
    explanation: "Antypoślizgowość nie jest jedną uniwersalną wartością — zależy od tego, czym jest zabrudzona powierzchnia (woda, olej, tłuszcz), w jakim obuwiu poruszają się ludzie i jak intensywny jest ruch kołowy. Dlatego dobór klasy antypoślizgowości zaczyna się od analizy konkretnych warunków eksploatacji, a nie od wyboru najwyższej dostępnej klasy z karty technicznej.",
    causes: [
      "Zbyt gładka struktura topcoatu w strefie mokrej lub tłustej",
      "Wypolerowanie faktury przez wieloletni ruch kołowy",
      "Niedopasowana klasa antypoślizgowości do warunków eksploatacji",
      "Pozostałości środków myjących obniżające tarcie powierzchni",
    ],
    solutions: [
      "Dobór badania i kryterium antypoślizgowości do medium, obuwia, ruchu i sposobu użytkowania; DIN 51130 jest jedną z metod weryfikacji, a nie uniwersalną klasą dla każdej sytuacji",
      "Odtworzenie faktury poprzez posypkę kwarcową lub strukturalną warstwę zamykającą, po sprawdzeniu wpływu na czyszczenie i odporność chemiczną",
      "Punktowe wzmocnienie antypoślizgowości w strefach krytycznych (rampy, przejścia)",
      "Dostosowanie procedur mycia do zastosowanego systemu",
    ],
    faq: [
      {
        question: "Czy wyższa klasa antypoślizgowości to zawsze lepszy wybór?",
        answer: "Nie zawsze — bardziej chropowata faktura utrudnia czyszczenie i może zwiększać zużycie kół wózków, dlatego dobiera się ją do realnych warunków, a nie maksymalizuje na wyrost.",
      },
      {
        question: "Czy śliskość powraca po pewnym czasie mimo naprawy?",
        answer: "Może, jeśli faktura antypoślizgowa zostanie stopniowo wypolerowana przez ruch kołowy — w strefach intensywnej eksploatacji warto zaplanować cykliczny przegląd.",
      },
    ],
  },
  {
    id: "rysy-wloskowate",
    no: "12",
    tag: "rysy",
    title: "Rysy włoskowate",
    intro: "Sieć drobnych, powierzchniowych rys widoczna głównie w skośnym świetle, bez wyraźnej głębokości.",
    image: "flowtex-defect-wloskowate.webp",
    updated: "2026-08-27",
    explanation: "Rysy włoskowate są zwykle powierzchniowe i nieszkodliwe konstrukcyjnie, ale nie należy zakładać tego z góry — dopiero ocena szerokości, głębokości i tego, czy sieć rys pogłębia się w czasie, pozwala bezpiecznie zamknąć je powłoką zamiast szukać głębszej przyczyny.",
    causes: [
      "Zbyt szybkie wysychanie wierzchniej warstwy podczas wiązania",
      "Skurcz plastyczny betonu lub warstwy wyrównującej",
      "Brak lub zbyt późno rozpoczęta pielęgnacja powierzchni po aplikacji",
      "Niekorzystne warunki aplikacji (przeciągi, wysoka temperatura)",
    ],
    solutions: [
      "Ocena szerokości, głębokości i aktywności rys; dopiero po wykluczeniu problemu konstrukcyjnego można rozważyć zamknięcie powierzchniowe",
      "Impregnacja lub powłoka zamykająca wyłącznie stabilne rysy powierzchniowe, po potwierdzeniu kompatybilności i braku aktywnego ruchu",
      "Korekta procedury pielęgnacji przy kolejnych realizacjach",
      "Monitorowanie, czy sieć rys nie pogłębia się w czasie",
    ],
    faq: [
      {
        question: "Czy rysy włoskowate świadczą o wadzie konstrukcyjnej?",
        answer: "Zwykle nie — najczęściej to skurcz plastyczny powierzchni podczas wiązania, ale warto to potwierdzić, zanim zdecyduje się o samym tylko zamknięciu powłoką.",
      },
      {
        question: "Czy trzeba naprawiać rysy włoskowate, jeśli nie przeciekają?",
        answer: "Jeśli są stabilne i nie pogłębiają się, często wystarczy impregnacja lub powłoka zamykająca — kluczowe jest monitorowanie, czy sieć rys nie rośnie.",
      },
    ],
  },
  {
    id: "odspojenie-stykow",
    no: "13",
    tag: "styki płyt",
    title: "Uszkodzenie i różnica poziomów na stykach płyt betonowych",
    intro: "Krawędzie sąsiadujących pól betonowych rozchodzą się, klawiszują lub podnoszą względem siebie.",
    image: "flowtex-defect-przejscie.webp",
    updated: "2026-08-27",
    explanation: "Klawiszowanie na styku płyt to sygnał, że łączniki przenoszące obciążenia między sąsiednimi polami przestały pracować prawidłowo albo nigdy nie zostały prawidłowo wykonane. Ruch kołowy przejeżdżający przez taki styk przyspiesza degradację krawędzi w tempie znacznie szybszym niż na płaskiej powierzchni.",
    causes: [
      "Różnice w osiadaniu sąsiednich pól betonowych",
      "Brak lub uszkodzone łączniki (dyble) przenoszące obciążenia między polami",
      "Ruch termiczny niezrównoważony przez prawidłowe wypełnienie spoiny",
      "Przeciążenie krawędzi płyty przez ruch kołowy",
    ],
    solutions: [
      "Ocena stanu łączników i nośności krawędzi przed naprawą",
      "Naprawa krawędzi i ewentualne wzmocnienie materiałem kompatybilnym z obciążeniem dopiero po ocenie podparcia, klawiszowania i stanu łączników",
      "Odtworzenie prawidłowego wypełnienia spoiny",
      "Ograniczenie ruchu kołowego w newralgicznych strefach do czasu naprawy",
    ],
    faq: [
      {
        question: "Co to znaczy, że płyty betonowe 'klawiszują'?",
        answer: "To potoczne określenie sytuacji, w której jedna płyta ugina się pod obciążeniem niezależnie od sąsiedniej, bo łączniki między nimi nie przenoszą już obciążeń równomiernie.",
      },
      {
        question: "Czy trzeba ograniczyć ruch wózków, zanim naprawa zostanie wykonana?",
        answer: "W newralgicznych strefach warto, bo dalszy ruch kołowy przez uszkodzony styk przyspiesza degradację krawędzi płyt jeszcze przed naprawą.",
      },
    ],
  },
  {
    id: "matowienie",
    no: "14",
    tag: "ścieranie",
    title: "Ścieranie i matowienie warstwy nawierzchniowej",
    intro: "Połysk i grubość warstwy wierzchniej stopniowo maleją w strefach najintensywniej eksploatowanych.",
    image: "flowtex-defect-scieranie.webp",
    updated: "2026-08-27",
    explanation: "Ścieranie topcoatu jest procesem naturalnym, ale jego tempo mocno zależy od doboru systemu do realnych warunków — rodzaju kół wózków, materiału ściernego transportowanego na oponach i intensywności ruchu. Ten sam topcoat w dwóch różnych halach może zużyć się w zupełnie innym czasie.",
    causes: [
      "Naturalne zużycie eksploatacyjne w strefach o dużym natężeniu ruchu",
      "Ścierne działanie pyłu i drobnych zanieczyszczeń transportowanych na kołach",
      "Zbyt cienka warstwa topcoatu w stosunku do intensywności ruchu",
      "Stosowanie niewłaściwych, ściernych metod czyszczenia",
    ],
    solutions: [
      "Odnowienie warstwy wierzchniej (topcoat) w strefach najbardziej wyeksploatowanych",
      "Dobór konstrukcji całego systemu do rodzaju kół, natężenia ruchu, materiału ściernego i wymaganego okresu eksploatacji",
      "Wprowadzenie cyklicznego przeglądu i renowacji punktowej",
      "Dostosowanie procedur czyszczenia do zastosowanego systemu",
    ],
    faq: [
      {
        question: "Jak często trzeba odnawiać topcoat w strefach intensywnego ruchu?",
        answer: "Zależy od natężenia ruchu i rodzaju kół wózków — dlatego warto wprowadzić cykliczny przegląd zamiast czekać na widoczną utratę połysku.",
      },
      {
        question: "Czy matowienie oznacza, że cała posadzka wymaga wymiany?",
        answer: "Nie — zwykle wystarczy odnowienie samej warstwy wierzchniej (topcoat) w najbardziej wyeksploatowanych strefach, bez ingerencji w warstwy niższe.",
      },
    ],
  },
];
