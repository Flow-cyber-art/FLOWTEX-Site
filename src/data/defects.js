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
    updated: "2026-11-26",
    nextStep: "Do wstępnej oceny prześlij zdjęcie całej strefy po myciu, zbliżenie wpustu i zdjęcie miejsca, w którym zostaje woda. Podaj, czy wpust odbiera wodę, jak duża jest kałuża i kiedy można udostępnić strefę do oględzin.",
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
        question: "Kiedy da się poprawić spadek przy odpływie miejscowo?",
        answer: "Miejscową korektę można rozważyć, gdy wpust jest drożny, podłoże stabilne, a niecka lub niewłaściwy spadek występują na ograniczonej powierzchni. Pomiar rzędnych posadzki i wpustu pozwala ustalić, jak duży fragment trzeba naprawić.",
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
    updated: "2026-11-23",
    nextStep: "Jeśli rysy są powierzchniowe, mają stałą szerokość i wokół nich nie ma ubytków, zacznij od obserwacji. Zamów oględziny, jeśli rysy się poszerzają, ich krawędzie się wykruszają albo pojawia się różnica poziomów. Zrób zdjęcie całej strefy i zbliżenie z miarką. Podaj, od kiedy rysy są widoczne i czy w tym miejscu jeżdżą wózki.",
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
    updated: "2026-11-22",
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
  {
    id: "lepka-powierzchnia",
    no: "15",
    tag: "utwardzanie",
    title: "Lepka lub niedoutwardzona powierzchnia",
    intro: "Powierzchnia żywicy pozostaje tłusta, lepka lub miękka mimo upływu czasu przewidzianego na utwardzenie.",
    image: "flowtex-defect-lepka.webp",
    updated: "2026-11-22",
    explanation: "Lepka powierzchnia ma kilka różnych przyczyn i trzeba je odróżnić. Cienki, tłusty nalot na powierzchni (amine blush) tworzy się na niektórych żywicach epoksydowych w wilgoci i chłodzie i zwykle da się go usunąć, a sama warstwa pod spodem jest utwardzona. Prawdziwe niedoutwardzenie, czyli miękki lub gumowaty materiał na całej grubości, wynika z błędu w proporcjach, mieszaniu lub warunkach i wymaga innej naprawy. Przed decyzją ocenia się, czy problem dotyczy samej powierzchni, czy całej warstwy.",
    causes: [
      "Zbyt niska temperatura podłoża lub materiału w trakcie utwardzania",
      "Wilgoć i skraplanie pary na powierzchni (zbyt mała odległość od punktu rosy)",
      "Nieprawidłowe proporcje składników lub niedokładne wymieszanie",
      "Samodzielne dodawanie rozcieńczalnika lub zmiana receptury poza kartą techniczną",
      "Wyłączenie ogrzewania przed zakończeniem utwardzania"
    ],
    solutions: [
      "Ustalenie, czy nieprawidłowość dotyczy samej powierzchni (nalot), czy całej grubości warstwy",
      "Usunięcie nalotu sposobem zalecanym dla danego systemu przed kolejną warstwą",
      "Przy niedoutwardzeniu na całej grubości: usunięcie warstwy i ponowna aplikacja po wyeliminowaniu przyczyny",
      "Kontrola temperatury, wilgotności i punktu rosy oraz dokumentowanie warunków do końca utwardzania"
    ],
    faq: [
      {
        question: "Co to jest amine blush?",
        answer: "Cienki, tłusty lub lepki nalot na powierzchni niektórych żywic epoksydowych, powstający w wilgoci i chłodzie podczas utwardzania. Osłabia przyczepność kolejnej warstwy, więc trzeba go usunąć."
      },
      {
        question: "Czy lepka żywica sama się utwardzi z czasem?",
        answer: "Niekoniecznie. Jeśli przyczyną są nieprawidłowe proporcje lub zbyt niska temperatura, utwardzenie może nigdy nie dojść do końca. Trzeba ocenić stan warstwy, zanim zapadnie decyzja o naprawie."
      }
    ]
  },
  {
    id: "roznica-odcieni",
    no: "16",
    tag: "kolor",
    title: "Różnica odcieni na posadzce",
    intro: "Poszczególne pola lub pasy posadzki mają zauważalnie inny odcień, mimo że wykonano je z tego samego koloru.",
    image: "flowtex-defect-odcien.webp",
    updated: "2026-11-22",
    explanation: "Różnica odcienia nie zawsze jest wadą wykonawczą. Częstą przyczyną są różne partie produkcyjne materiału lub pigmentu, zmienna grubość warstwy, warunki aplikacji oraz oświetlenie, w którym ocenia się powierzchnię. To samo zestawienie kolorów może wyglądać inaczej przy dwóch źródłach światła (metameryzm). Dlatego ocena wymaga uzgodnionego wzorca i powtarzalnych warunków oględzin.",
    causes: [
      "Różne partie produkcyjne materiału lub pigmentu",
      "Zmienna grubość i krycie warstwy",
      "Różnice w sposobie aplikacji i łączeniu pól",
      "Odmienne warunki temperatury i wilgotności w trakcie utwardzania",
      "Zróżnicowana chłonność podłoża"
    ],
    solutions: [
      "Porównanie z uzgodnionym wzorcem w ustalonych warunkach oświetlenia",
      "Ustalenie numerów partii materiału i dokumentacji aplikacji",
      "Przy potrzebie korekty: wykonanie warstwy wyrównującej kolor w całej strefie, a nie punktowo",
      "Na przyszłość: materiał z jednej partii, próbka wzorcowa i zapis dopuszczalnych odchyleń w umowie"
    ],
    faq: [
      {
        question: "Czy różnica odcienia jest wadą?",
        answer: "Niekoniecznie. Zależy to od rodzaju systemu, uzgodnionego standardu wizualnego i umowy. Dlatego dopuszczalne odchylenia warto ustalić przed pracami."
      },
      {
        question: "Czy można ujednolicić kolor bez wymiany posadzki?",
        answer: "Często tak, przez wykonanie nowej warstwy nawierzchniowej w całej strefie po ocenie podłoża i przyczepności. Punktowe poprawki zwykle pozostawiają widoczne różnice."
      }
    ]
  },
  {
    id: "zoltnienie",
    no: "17",
    tag: "UV",
    title: "Żółknięcie i zmiana koloru powierzchni",
    intro: "Jasne lub bezbarwne warstwy z czasem zmieniają kolor na bardziej żółty, szczególnie w miejscach nasłonecznionych.",
    image: "flowtex-defect-zoltnienie.webp",
    updated: "2026-11-22",
    explanation: "Zmiana koloru wynika głównie z podatności spoiwa na promieniowanie UV. Poliuretany aromatyczne i wiele epoksydów jest podatnych na żółknięcie, a poliuretany alifatyczne mają znacznie lepszą stabilność koloru. Bezbarwny lakier może ograniczyć wpływ UV, ale nie zmienia chemii warstw pod spodem. Zmiana barwy nie zawsze jest wadą, jeśli system nie był przeznaczony do długiej ekspozycji na światło.",
    causes: [
      "Ekspozycja na światło słoneczne (przeszklenia, bramy, rampy)",
      "Użycie spoiwa niestabilnego na UV w miejscu o dużym nasłonecznieniu",
      "Brak warstwy zamykającej o odpowiedniej odporności na UV",
      "Wpływ ciepła i długiego czasu ekspozycji"
    ],
    solutions: [
      "Ocena, czy zmiana jest cechą materiału, czy skutkiem błędnego doboru systemu do ekspozycji",
      "Wykonanie nowej warstwy nawierzchniowej stabilnej na UV po przygotowaniu powierzchni",
      "Dobór systemu całościowo do rzeczywistej ekspozycji, a nie tylko lakieru wierzchniego",
      "W strefach silnie nasłonecznionych: rozważenie osłon lub innego materiału"
    ],
    faq: [
      {
        question: "Czy posadzka epoksydowa żółknie?",
        answer: "Może, zwłaszcza przy ekspozycji na światło słoneczne. Skala zależy od formulacji i konstrukcji systemu."
      },
      {
        question: "Czy lakier UV zapobiegnie żółknięciu?",
        answer: "Może je ograniczyć, ale nie zmienia chemii warstw pod spodem i nie gwarantuje stabilności koloru."
      }
    ]
  },
  {
    id: "kratery-pinhole",
    no: "18",
    tag: "pory",
    title: "Kratery, pinhole i mikropustki",
    intro: "Na powierzchni żywicy widoczne są drobne otwory, kratery lub punkty, często w całym polu aplikacji.",
    image: "flowtex-defect-kratery.webp",
    updated: "2026-11-22",
    explanation: "Najczęstszym mechanizmem jest uwalnianie powietrza i pary z porów betonu po aplikacji, gdy temperatura podłoża rośnie. Powietrze unosi się przez jeszcze płynną żywicę i zostawia mikropustki. Dlatego problemowi zapobiega się przez właściwe zamknięcie porów (grunt, masa podkładowa) i kontrolę temperatury, a nie przez zmianę samej żywicy. Wady tej nie należy mylić z pęcherzami osmotycznymi, które mają inny mechanizm.",
    causes: [
      "Powietrze i para z porów betonu (outgassing) przy rosnącej temperaturze podłoża",
      "Niedostatecznie zagruntowane lub niedomknięte pory",
      "Zbyt szybka aplikacja kolejnej warstwy na niewystarczająco przygotowane podłoże",
      "Wilgoć w podłożu lub zanieczyszczenia powierzchni",
      "Nieprawidłowe napowietrzenie materiału przy mieszaniu"
    ],
    solutions: [
      "Ocena, czy wada ma charakter aplikacyjny, czy związany z wilgocią podłoża",
      "Przeszlifowanie powierzchni i wykonanie warstwy zamykającej pory (scratchcoat) przed kolejną warstwą",
      "Kontrola temperatury podłoża, materiału i otoczenia oraz punktu rosy w trakcie aplikacji",
      "Pomiar wilgotności podłoża przed ponowną aplikacją"
    ],
    faq: [
      {
        question: "Skąd biorą się pinhole w posadzce żywicznej?",
        answer: "Najczęściej z powietrza i pary uwalnianych z porów betonu po aplikacji. Zapobiega im odpowiednie zamknięcie porów gruntem lub masą podkładową i stabilne warunki temperatury."
      },
      {
        question: "Czy pinhole to to samo co pęcherze osmotyczne?",
        answer: "Nie. Pinhole to drobne otwory po uciekającym powietrzu, a pęcherze osmotyczne wynikają z wilgoci i ciśnienia pod powłoką, więc wymagają innej naprawy."
      }
    ]
  },
];

// Powiązania kart wad z resztą serwisu (linkowanie wewnętrzne):
//  - services: slugi usług z services.js, które realnie rozwiązują problem
//  - related: id pokrewnych wad (te same przyczyny lub często występują razem)
//  - guide: slug poradnika z poradniki.js rozwijającego temat (link pojawia
//    się dopiero po dacie publikacji poradnika)
export const DEFECT_LINKS = {
  "peknieca": { services: ["renowacja-posadzek-przemyslowych", "serwis-posadzek-i-kanalizacji", "technika-diamentowa"], related: ["rysy-wloskowate", "dylatacje", "odspojenie-stykow"], guide: "pekajaca-posadzka-przemyslowa-jak-naprawic" },
  "ubytki": { services: ["renowacja-posadzek-przemyslowych", "serwis-posadzek-i-kanalizacji"], related: ["dylatacje", "odspojenie-stykow", "matowienie"] },
  "odspojenie-zywicy": { services: ["renowacja-posadzek-przemyslowych", "serwis-posadzek-i-kanalizacji", "posadzki-zywiczne"], related: ["pecherze", "ubytki", "cokoly"], guide: "odspojenie-zywicy-od-podloza-przyczyny-i-naprawa" },
  "pylenie": { services: ["renowacja-posadzek-przemyslowych", "posadzki-zywiczne", "betonowe-posadzki-przemyslowe"], related: ["matowienie", "rysy-wloskowate", "ubytki"], guide: "dlaczego-posadzka-betonowa-pyli" },
  "pecherze": { services: ["renowacja-posadzek-przemyslowych", "serwis-posadzek-i-kanalizacji", "posadzki-zywiczne"], related: ["odspojenie-zywicy", "przebarwienia", "pofaldowania"], guide: "pecherze-w-zywicy-aplikacyjne-czy-osmotyczne" },
  "przebarwienia": { services: ["renowacja-posadzek-przemyslowych", "posadzki-zywiczne"], related: ["matowienie", "pecherze", "sliska-powierzchnia"], guide: "roznice-odcieni-posadzki-zywicznej-partie" },
  "pofaldowania": { services: ["renowacja-posadzek-przemyslowych", "serwis-posadzek-i-kanalizacji"], related: ["zastoiny-wody", "odspojenie-stykow", "pecherze"] },
  "dylatacje": { services: ["renowacja-posadzek-przemyslowych", "serwis-posadzek-i-kanalizacji", "technika-diamentowa"], related: ["odspojenie-stykow", "peknieca", "ubytki"], guide: "ciecie-dylatacji-w-posadzce" },
  "cokoly": { services: ["renowacja-posadzek-przemyslowych", "serwis-posadzek-i-kanalizacji", "systemy-odbojowe"], related: ["odspojenie-zywicy", "zastoiny-wody", "dylatacje"], guide: "uszkodzone-cokoly-higieniczne-naprawa" },
  "zastoiny-wody": { services: ["renowacja-posadzek-przemyslowych", "serwis-posadzek-i-kanalizacji"], related: ["sliska-powierzchnia", "pofaldowania", "cokoly"], guide: "zastoiny-wody-na-posadzce-spadki-i-odwodnienie" },
  "sliska-powierzchnia": { services: ["renowacja-posadzek-przemyslowych", "posadzki-zywiczne"], related: ["zastoiny-wody", "matowienie", "przebarwienia"], guide: "sliska-posadzka-jak-poprawic-antyposlizgowosc" },
  "rysy-wloskowate": { services: ["renowacja-posadzek-przemyslowych", "serwis-posadzek-i-kanalizacji"], related: ["peknieca", "pylenie", "matowienie"] },
  "odspojenie-stykow": { services: ["renowacja-posadzek-przemyslowych", "serwis-posadzek-i-kanalizacji", "technika-diamentowa"], related: ["dylatacje", "peknieca", "pofaldowania"] },
  "matowienie": { services: ["renowacja-posadzek-przemyslowych", "posadzki-zywiczne"], related: ["pylenie", "sliska-powierzchnia", "przebarwienia"] },
  "lepka-powierzchnia": {"services": ["renowacja-posadzek-przemyslowych", "posadzki-zywiczne"], "related": ["pecherze", "przebarwienia", "odspojenie-zywicy"], "guide": "przyczepnosc-miedzywarstwowa-okno-przemalowania"},
  "roznica-odcieni": {"services": ["renowacja-posadzek-przemyslowych", "posadzki-zywiczne"], "related": ["przebarwienia", "zoltnienie", "matowienie"], "guide": "roznice-odcieni-posadzki-zywicznej-partie"},
  "zoltnienie": {"services": ["renowacja-posadzek-przemyslowych", "posadzki-zywiczne"], "related": ["przebarwienia", "roznica-odcieni", "matowienie"], "guide": "zoltnienie-posadzki-zywicznej-uv"},
  "kratery-pinhole": {"services": ["renowacja-posadzek-przemyslowych", "posadzki-zywiczne"], "related": ["pecherze", "odspojenie-zywicy", "lepka-powierzchnia"], "guide": "przygotowanie-podloza-pod-zywice-pull-off"},
};
