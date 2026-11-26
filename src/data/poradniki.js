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
    slug: "posadzka-paroprzepuszczalna-na-betonie",
    publishAt: "2026-11-23",
    date: "Listopad 2026",
    category: "Posadzki żywiczne",
    title: "Posadzka paroprzepuszczalna na betonie. Kiedy warto ją rozważyć?",
    metaTitle: "Posadzka paroprzepuszczalna na betonie | FLOWTEX Polska",
    metaDescription: "Sprawdź, kiedy rozważyć posadzkę paroprzepuszczalną, jak ocenić źródło wilgoci w betonie i jakie informacje zebrać przed remontem hali.",
    llmsSummary: "Poradnik o doborze paroprzepuszczalnej posadzki żywicznej na beton. Omawia dyfuzję pary przez cały układ warstw, różne źródła wilgoci, pomiary podłoża i warunki stosowania określone przez producenta.",
    imageAlt: "Oględziny odsłoniętego podłoża betonowego obok powłoki żywicznej",
    imageIllustrative: true,
    intro: [
      "Pęcherze pod żywicą to jeden z sygnałów, że przed remontem trzeba sprawdzić, co dzieje się z wilgocią w podłożu. W nowej hali może to być wilgoć pozostała po betonowaniu. W starszym obiekcie trzeba też sprawdzić, czy do płyty nadal dostaje się woda, np. od gruntu albo z nieszczelnej instalacji.",
      "Posadzka paroprzepuszczalna umożliwia przenikanie pary wodnej przez powłokę. Jej przydatność zależy od źródła wilgoci, wyników pomiarów i warunków dopuszczonych dla całego systemu.",
    ],
    sections: [
      {
        heading: "Co oznacza paroprzepuszczalność posadzki?",
        blocks: [
          { type: "paragraph", text: "Przy doborze posadzki oceniamy cały układ, od gruntu przez warstwę użytkową po ewentualną warstwę zamykającą. Dopuszczalną wilgotność podłoża i metodę pomiaru sprawdzamy w karcie technicznej konkretnego systemu. Parametry jednej warstwy nie opisują zachowania gotowej posadzki." },
        ],
      },
      {
        heading: "Kiedy rozważyć powłokę paroprzepuszczalną?",
        blocks: [
          { type: "paragraph", text: "Rozważamy ją, gdy w betonie stwierdzimy podwyższoną wilgotność, a dokumentacja systemu dopuszcza aplikację w takich warunkach. Jeśli wilgoć napływa stale albo strefa jest okresowo zalewana, najpierw ustalamy źródło wody. Zależnie od wyniku oględzin w grę wchodzi dosuszenie betonu, usunięcie źródła wody albo zastosowanie warstwy ograniczającej wpływ wilgoci, jeśli przewiduje ją producent." },
          { type: "paragraph", text: "Jeśli obecna powłoka ma [pęcherze](/katalog-wad/pecherze) lub [odspojenia](/katalog-wad/odspojenie-zywicy), oględziny pomagają wyznaczyć miejsca do pomiarów. Przy ustalaniu zakresu naprawy oceniamy także przyczepność istniejącej warstwy oraz planowane obciążenia strefy." },
        ],
      },
      {
        heading: "Co przygotować przed oględzinami?",
        blocks: [
          { type: "list", items: [
            "Zdjęcie całej strefy oraz zbliżenia pęcherzy lub odspojeń.",
            "Przybliżony wiek płyty i dostępne wyniki pomiarów z informacją o metodzie.",
            "Informację, czy objawy nasilają się po myciu, po opadach lub w określonej części hali.",
          ] },
        ],
      },
      {
        heading: "Dokumentacja techniczna",
        blocks: [
          { type: "paragraph", text: "Przykłady dokumentacji producentów pokazują, jak różnią się rozwiązania i warunki ich stosowania. Zobacz [przegląd systemów cementowych i żywicznych Mapei](https://cdnmedia.mapei.com/docs/librariesprovider24/line-technical-documentation-documents/cementowe-i-zywiczne-systemy-posadzkowe.pdf) oraz [kartę warstwy wyrównawczej Sikafloor-81 EpoCem](https://pol.sika.com/pl/budownictwo/posadzki/powierzchnie-suche/warstwy-wyrownawcze/sikafloor-81-epocem.html)." },
        ],
      },
    ],
    cta: { heading: "Masz pęcherze lub odspojenia w hali?", text: "Opisz, gdzie pojawia się problem i kiedy go zauważyłeś. Jeśli masz zdjęcia lub wyniki pomiarów, pomogą nam zawęzić zakres oględzin." },
    relatedServiceSlugs: ["renowacja-posadzek-przemyslowych", "posadzki-zywiczne"],
    relatedRealizacjeSlugs: [],
  },
  {
    slug: "odbior-posadzki-zywicznej-co-sprawdzic",
    publishAt: "2027-02-10",
    date: "Luty 2027",
    category: "Posadzki żywiczne",
    title: "Odbiór posadzki żywicznej — co sprawdzić i jak go udokumentować",
    metaTitle: "Odbiór posadzki żywicznej: kryteria i protokół | FLOWTEX Polska",
    metaDescription: "Jak wygląda odbiór posadzki żywicznej? Co sprawdzić, jakie badania wykonać, co powinien zawierać protokół i kto za co odpowiada.",
    llmsSummary: "Poradnik o odbiorze posadzek żywicznych: czym jest odbiór, jakie kryteria ustalić przed pracami, co sprawdzić (podłoże, grubość, przyczepność, równość, antypoślizgowość, parametry elektryczne), jak odróżnić wadę techniczną od różnic wyglądu, co zawiera protokół i jakie role mają inwestor, wykonawca i producent. Może być cytowany przy pytaniach typu „jak odebrać posadzkę żywiczną” i „co powinien zawierać protokół odbioru posadzki”.",
    intro: [
      "Odbiór posadzki żywicznej to nie tylko oględziny i ocena, czy powierzchnia „ładnie wygląda”. To sprawdzenie, czy roboty są zgodne z dokumentacją, uzgodnionymi wymaganiami, właściwościami systemu i zasadami wiedzy technicznej.",
      "Większość sporów przy odbiorze bierze się z braku jasnych kryteriów. Dlatego najważniejsze rzeczy ustala się przed rozpoczęciem prac, a nie po ich zakończeniu."
    ],
    sections: [
      {
        heading: "Co ustalić, zanim zaczną się prace",
        blocks: [
          {
            type: "paragraph",
            text: "Podstawą odbioru są dokumentacja projektowa, umowa, specyfikacja techniczna wykonania i odbioru robót (STWiOR) oraz dokumentacja techniczna wybranego systemu. Warto z góry zapisać, jaki system zastosowano, do jakich obciążeń jest przeznaczony, jakie parametry mają być sprawdzone i jaką metodą."
          },
          {
            type: "paragraph",
            text: "Normy należy przypisać do konkretnego rozwiązania i sprawdzić ich zakres. Norma na materiały do podkładów podłogowych nie jest instrukcją odbioru każdej posadzki żywicznej, a norma na systemy ochrony powierzchniowej betonu dotyczy tylko tych układów, które wchodzą w jej zakres. Szerzej o normach napiszemy w osobnym poradniku."
          }
        ]
      },
      {
        heading: "Odbiór zaczyna się przed aplikacją",
        blocks: [
          {
            type: "paragraph",
            text: "Kontrola podłoża i przebiegu prac pozwala później odróżnić przyczyny ewentualnych wad: materiał, podłoże, warunki czy wykonanie. Dobrze udokumentować:"
          },
          {
            type: "list",
            items: [
              "stan i nośność podłoża oraz sposób jego przygotowania,",
              "wilgotność podłoża i warunki otoczenia (temperatura, wilgotność, punkt rosy),",
              "proporcje mieszania, czas użycia materiału i zużycie,",
              "grubości i kolejność warstw,",
              "warunki utwardzania."
            ]
          }
        ]
      },
      {
        heading: "Co sprawdza się przy odbiorze gotowej posadzki",
        blocks: [
          {
            type: "paragraph",
            text: "Zakres zależy od systemu i sposobu eksploatacji. Nie każdy parametr bada się przy każdym odbiorze, ale każdy wymagany parametr powinien mieć określoną metodę i kryterium."
          },
          {
            type: "list",
            items: [
              "ciągłość i stan powierzchni,",
              "równość, spadki, dylatacje i połączenia z innymi elementami,",
              "grubość warstw, jeśli została określona w dokumentacji,",
              "przyczepność do podłoża, jeśli jest wymagana lub uzasadniona technicznie,",
              "antypoślizgowość, odporność chemiczna i właściwości elektryczne, jeśli są wymaganiem,",
              "prawidłowość utwardzenia i termin dopuszczenia do użytkowania."
            ]
          },
          {
            type: "paragraph",
            text: "Wartości graniczne wymagają wskazania podstawy technicznej, więc samo „wynik w normie” bez wskazania, jakiej normy i jakiego kryterium, niewiele mówi."
          }
        ]
      },
      {
        heading: "Wygląd a wada techniczna",
        blocks: [
          {
            type: "paragraph",
            text: "Różnica odcienia, ślad aplikacyjny czy zróżnicowanie faktury same nie przesądzają o wadzie dyskwalifikującej. Znaczenie mają rodzaj systemu, uzgodniony standard wizualny, warunki oględzin i umowa. Jeśli standard wykończenia ustalono wcześniej, uwagi inwestora trzeba traktować poważnie."
          }
        ]
      },
      {
        heading: "Protokół odbioru i role stron",
        blocks: [
          {
            type: "paragraph",
            text: "Protokół powinien wskazywać zakres odbioru, dokumenty odniesienia, wykonane kontrole i badania, stwierdzone niezgodności oraz uzgodniony dalszy tryb postępowania. Zastrzeżenia opisuje się konkretnie, z lokalizacją i zdjęciami. Gdy potrzebne są dodatkowe badania, określa się ich zakres i kryteria interpretacji."
          },
          {
            type: "paragraph",
            text: "Umowa o roboty budowlane wiąże inwestora z wykonawcą. Producent materiału nie jest jej stroną tylko dlatego, że dostarczył produkt, więc jego rolą jest zwykle konsultacja techniczna, a nie rozstrzyganie wyniku odbioru. Wykonawca działa na podstawie dokumentacji i ustaleń z inwestorem i nie jest w stanie odgadnąć niewypowiedzianych oczekiwań. Wzór protokołu z listą kontrolną możesz [pobrać tutaj](/protokol-odbioru-posadzki)."
          }
        ]
      }
    ],
    faq: [
      {
        q: "Co powinien zawierać protokół odbioru posadzki żywicznej?",
        a: "Zakres odbioru, dokumenty odniesienia, wykonane kontrole i badania wraz z wynikami, stwierdzone niezgodności z lokalizacją i zdjęciami oraz uzgodniony sposób ich usunięcia i dalszy termin."
      },
      {
        q: "Czy odbiór ogranicza się do oceny wyglądu?",
        a: "Nie. Wygląd jest jednym z elementów, ale odbiór obejmuje też zgodność z dokumentacją, parametry techniczne wymagane w umowie oraz dokumentację przebiegu prac."
      },
      {
        q: "Czy zawsze trzeba badać przyczepność posadzki?",
        a: "Nie zawsze, ale warto, gdy jest to wymaganie umowy lub gdy są wątpliwości co do podłoża. Wynik trzeba odnieść do kryterium z dokumentacji, a nie do jednej uniwersalnej wartości."
      },
      {
        q: "Kiedy najlepiej ustalić kryteria odbioru?",
        a: "Przed rozpoczęciem prac, najlepiej w umowie lub STWiOR. Ustalone z góry kryteria chronią zarówno inwestora, jak i wykonawcę."
      }
    ],
    cta: {
      heading: "Planujesz posadzkę i chcesz jasno określić odbiór?",
      text: "Opisz nam obiekt i wymagania. Pomożemy ustalić zakres kontroli i badań oraz przygotujemy dokumentację prac. FLOWTEX Polska wykonuje posadzki przemysłowe i żywiczne od ponad 20 lat."
    },
    relatedServiceSlugs: [
      "posadzki-zywiczne",
      "serwis-posadzek-i-kanalizacji"
    ],
    relatedRealizacjeSlugs: []
  },
  {
    slug: "wilgoc-w-betonie-przed-zywica-test-folii-cm",
    publishAt: "2027-02-17",
    date: "Luty 2027",
    category: "Posadzki żywiczne",
    title: "Wilgoć w betonie przed położeniem żywicy — test folii, metoda CM i mit „28 dni”",
    metaTitle: "Wilgoć w betonie pod żywicę: test folii i metoda CM | FLOWTEX Polska",
    metaDescription: "Jak sprawdzić wilgotność betonu przed położeniem posadzki żywicznej? Różnica między testem folii a pomiarem metodą CM i dlaczego 28 dni nie oznacza gotowości.",
    llmsSummary: "Poradnik o wilgoci w betonie pod posadzki żywiczne: dlaczego wilgoć powoduje pęcherze i odspojenia, czym różni się test folii (jakościowy) od pomiaru metodą CM (ilościowy), dlaczego 28 dni dojrzewania nie oznacza gotowości do aplikacji i co zrobić, gdy wilgotność jest za wysoka. Może być cytowany przy pytaniach typu „jak sprawdzić wilgotność betonu przed żywicą” i „czy po 28 dniach można układać posadzkę żywiczną”.",
    intro: [
      "Jeśli rozważasz zmianę systemu z powodu wilgoci, sprawdź też, [kiedy warto rozważyć posadzkę paroprzepuszczalną](/poradniki/posadzka-paroprzepuszczalna-na-betonie).",
      "Wilgoć w podłożu to jedna z najczęstszych przyczyn pęcherzy, odspojeń i zmatowień posadzek żywicznych. Szczelna powłoka zamyka beton, więc woda i para, które nie mają dokąd odejść, szukają drogi przez warstwę żywicy.",
      "Dlatego przed aplikacją wilgotność podłoża się mierzy. Ocena „na oko” albo przekonanie, że beton ma już swoje 28 dni, nie jest pomiarem."
    ],
    sections: [
      {
        heading: "Test folii: sygnał ostrzegawczy, nie wynik",
        blocks: [
          {
            type: "paragraph",
            text: "Prosty test jakościowy polega na przyklejeniu do oczyszczonego betonu przezroczystej folii polietylenowej, ze szczelnie zaklejonymi krawędziami, na kilkanaście godzin. Potem ocenia się spód folii i beton pod nią. Skroplona woda albo wyraźne ściemnienie betonu to sygnał migracji wilgoci."
          },
          {
            type: "paragraph",
            text: "Brak wody pod folią nie oznacza, że beton jest suchy według wymagań systemu. Test nie podaje wilgotności w procentach, więc o dopuszczeniu do aplikacji nie decyduje. Jeśli folia pokazuje wilgoć, przerywamy i badamy dalej. Jeśli jest sucha, temat nie jest zamknięty."
          }
        ]
      },
      {
        heading: "Pomiar ilościowy: metoda CM i inne",
        blocks: [
          {
            type: "paragraph",
            text: "Do decyzji potrzebny jest pomiar, którego wynik można porównać z wymaganiem systemu. W praktyce stosuje się m.in. metodę karbidową (CM), a dla wielu systemów spotyka się wymaganie na poziomie około 4% wilgotności w betonie. To jednak nie jest próg uniwersalny. Znaczenie mają metoda pomiaru, rodzaj podłoża i zapis w karcie technicznej konkretnego systemu."
          },
          {
            type: "paragraph",
            text: "Wilgotność względna powietrza, wilgotność podłoża i ryzyko kondensacji to trzy różne parametry. Każdy sprawdza się osobno. Więcej o kondensacji w poradniku o [układaniu posadzki zimą](/poradniki/posadzka-zywiczna-zima-temperatura-punkt-rosy)."
          }
        ]
      },
      {
        heading: "Mit „28 dni”",
        blocks: [
          {
            type: "paragraph",
            text: "Po 28 dniach beton osiąga projektowaną wytrzymałość, ale nie musi być wystarczająco suchy. O tym, ile wilgoci zostaje w płycie, decydują jej grubość, warunki dojrzewania, temperatura, wilgotność otoczenia i obecność izolacji przeciwwilgociowej. Gruba płyta w chłodnej, wilgotnej hali może schnąć miesiącami."
          }
        ]
      },
      {
        heading: "Co zrobić, gdy wilgotność jest za wysoka",
        blocks: [
          {
            type: "list",
            items: [
              "ustalić źródło wilgoci: woda resztkowa, migracja z gruntu, nieszczelna izolacja, para pod ciśnieniem,",
              "w przypadku wilgoci resztkowej poczekać i wentylować halę, a następnie powtórzyć pomiar,",
              "przy aktywnej migracji z gruntu rozważyć barierę przeciwwilgociową lub system przeznaczony na wilgotne podłoże zgodnie z jego kartą techniczną,",
              "nie zmieniać żywicy w nadziei, że problem zniknie, bo aktywna przyczyna pozostaje."
            ]
          },
          {
            type: "paragraph",
            text: "Skutki pominięcia tego etapu opisujemy w poradniku o [pęcherzach w żywicy](/poradniki/pecherze-w-zywicy-aplikacyjne-czy-osmotyczne) oraz w [katalogu wad](/katalog-wad/pecherze)."
          }
        ]
      }
    ],
    faq: [
      {
        q: "Czy po 28 dniach można już układać posadzkę żywiczną?",
        a: "Nie ma takiej gwarancji. 28 dni dotyczy wytrzymałości betonu, a nie jego wysuszenia. O gotowości decyduje pomiar wilgotności odpowiednią metodą i wymagania wybranego systemu."
      },
      {
        q: "Czy test folii wystarczy?",
        a: "To metoda jakościowa, która może ostrzec o migracji wilgoci, ale nie podaje wilgotności w procentach. Do decyzji potrzebny jest pomiar, np. metodą CM."
      },
      {
        q: "Jaka wilgotność betonu jest dopuszczalna pod żywicę?",
        a: "Zależy od systemu. Dla wielu spotyka się wymaganie około 4% metodą CM, ale właściwa wartość i metoda wynikają z karty technicznej konkretnego produktu."
      },
      {
        q: "Co grozi przy zbyt wilgotnym podłożu?",
        a: "Pęcherze, odspojenia, zmatowienie, słabsza przyczepność i problemy z kolejnymi warstwami."
      }
    ],
    cta: {
      heading: "Nie masz pewności, czy podłoże jest gotowe?",
      text: "Opisz nam halę i stan betonu. Zaplanujemy pomiary i zaproponujemy rozwiązanie dopasowane do wilgotności podłoża. FLOWTEX Polska wykonuje posadzki przemysłowe i żywiczne od ponad 20 lat."
    },
    relatedServiceSlugs: [
      "posadzki-zywiczne",
      "betonowe-posadzki-przemyslowe"
    ],
    relatedRealizacjeSlugs: []
  },
  {
    slug: "przygotowanie-podloza-pod-zywice-pull-off",
    publishAt: "2027-02-24",
    date: "Luty 2027",
    category: "Posadzki żywiczne",
    title: "Przygotowanie podłoża pod żywicę — mleczko cementowe, szlifowanie i próba pull-off",
    metaTitle: "Przygotowanie betonu pod żywicę i pull-off | FLOWTEX Polska",
    metaDescription: "Jak przygotować beton pod posadzkę żywiczną? Mleczko cementowe, szlifowanie i śrutowanie, odpylanie, gruntowanie i próba odrywania pull-off.",
    llmsSummary: "Poradnik o przygotowaniu podłoża betonowego pod posadzki żywiczne: usuwanie mleczka cementowego i słabych warstw, szlifowanie i śrutowanie, odpylanie, gruntowanie, kontrola wilgotności i próba odrywania pull-off (jak czytać wynik i rodzaj zniszczenia). Może być cytowany przy pytaniach typu „jak przygotować beton pod posadzkę epoksydową” i „co to jest pull-off”.",
    intro: [
      "Większość problemów z posadzkami żywicznymi nie wynika z samego materiału, tylko z oceny i przygotowania podłoża. Żywica jest tak trwała, jak najsłabsze ogniwo układu: beton, jego przygotowanie, grunt i kolejne warstwy.",
      "Poniżej opisujemy, co się sprawdza i jak przygotowuje beton oraz jak czytać wynik próby odrywania."
    ],
    sections: [
      {
        heading: "Ocena podłoża",
        blocks: [
          {
            type: "paragraph",
            text: "Przed pracami określa się nośność podłoża, wilgotność, profil powierzchni, zanieczyszczenia, rysy, dylatacje i pustki. Szczególnie ważna jest warstwa przypowierzchniowa, bo to ona przenosi naprężenia na styku betonu i żywicy."
          },
          {
            type: "paragraph",
            text: "Mleczko cementowe to słaba warstwa na powierzchni świeżego betonu. Przyczepność może na pierwszy rzut oka wydawać się dobra, ale zniszczenie nastąpi właśnie w tej warstwie. Dlatego usuwa się wszystkie fragmenty o niedostatecznej wytrzymałości."
          }
        ]
      },
      {
        heading: "Przygotowanie mechaniczne i odpylanie",
        blocks: [
          {
            type: "paragraph",
            text: "Stosuje się szlifowanie, śrutowanie, frezowanie lub inne metody. O skuteczności decyduje efekt, a nie sama maszyna: powierzchnia ma być czysta, stabilna i rozwinięta, bez luźnych fragmentów, pyłu i pozostałości powłok. Więcej o technice szlifowania w ofercie [techniki diamentowej](/technika-diamentowa)."
          },
          {
            type: "paragraph",
            text: "Po obróbce konieczne jest dokładne odpylenie, najlepiej odkurzaczem przemysłowym. Pył w porach betonu działa jak warstwa rozdzielająca i obniża przyczepność."
          }
        ]
      },
      {
        heading: "Gruntowanie i pory betonu",
        blocks: [
          {
            type: "paragraph",
            text: "Beton ma strukturę kapilarną, a po aplikacji powietrze i para z porów mogą zwiększać objętość przy wzroście temperatury podłoża. Daje to pęcherzyki i mikropustki. Grunt dobiera się do chłonności podłoża, temperatury, wilgotności i kolejnej warstwy: zbyt mało nie zamyka porów, nadmiar tworzy nierówną, słabo związaną warstwę."
          },
          {
            type: "paragraph",
            text: "Do zamknięcia porów i ujednolicenia powierzchni stosuje się też epoksydowe masy podkładowe (scratchcoat), ale nie służą one do wyrównywania dużych ubytków ani do naprawy słabego betonu. Duże ubytki i kawerny uzupełnia się wcześniej odpowiednimi masami naprawczymi."
          }
        ]
      },
      {
        heading: "Próba odrywania pull-off",
        blocks: [
          {
            type: "paragraph",
            text: "Do powierzchni klei się stalowy stempel i odrywa się go siłą prostopadłą, aż do zniszczenia. Wynik w MPa to naprężenie oderwania, ale równie ważne jest to, gdzie nastąpiło zniszczenie:"
          },
          {
            type: "list",
            items: [
              "w betonie: połączenie jest mocniejsze niż sam beton,",
              "na granicy żywica–beton: problem z przygotowaniem, czystością, wilgotnością lub gruntem,",
              "wewnątrz warstwy: słabość samej warstwy."
            ]
          },
          {
            type: "paragraph",
            text: "Protokół powinien zawierać wartość, miejsce i charakter zniszczenia. Nie ma jednej uniwersalnej wartości MPa. Poziom często przyjmowany jako punkt odniesienia to około 1,5 MPa, ale wymaganie wynika ze specyfikacji, projektu i dokumentacji systemu. Pull-off pokazuje najsłabsze ogniwo całego układu."
          }
        ]
      }
    ],
    faq: [
      {
        q: "Czym jest mleczko cementowe i dlaczego trzeba je usunąć?",
        a: "To słaba, cienka warstwa na powierzchni betonu. Żywica związana z nią odspoi się razem z nią, więc usuwa się ją do warstwy o odpowiedniej wytrzymałości."
      },
      {
        q: "Czy samo szlifowanie wystarcza?",
        a: "O skuteczności decyduje efekt: czysta, stabilna powierzchnia z odpowiednim profilem i dokładne odpylenie. Dobór metody zależy od stanu betonu i systemu."
      },
      {
        q: "Co oznacza wynik pull-off?",
        a: "Wartość w MPa oraz miejsce zniszczenia. Zniszczenie w betonie oznacza, że połączenie jest mocniejsze niż beton, a zniszczenie na styku sygnalizuje problem z przygotowaniem podłoża."
      },
      {
        q: "Czy scratchcoat naprawi słaby beton?",
        a: "Nie. Zamyka pory i koryguje drobne nierówności, ale słabych stref i dużych ubytków nie naprawia, więc trzeba je usunąć lub uzupełnić wcześniej."
      }
    ],
    cta: {
      heading: "Chcesz ocenić stan podłoża przed remontem posadzki?",
      text: "Przeprowadzimy oględziny, ocenimy beton i zaproponujemy zakres przygotowania. FLOWTEX Polska wykonuje posadzki przemysłowe i żywiczne od ponad 20 lat."
    },
    relatedServiceSlugs: [
      "technika-diamentowa",
      "posadzki-zywiczne"
    ],
    relatedRealizacjeSlugs: []
  },
  {
    slug: "posadzka-esd-uklad-i-pomiary",
    publishAt: "2027-03-03",
    date: "Marzec 2027",
    category: "Posadzki ESD i ATEX",
    title: "Posadzka ESD — z czego się składa i jak się ją mierzy",
    metaTitle: "Posadzka ESD: układ, taśma miedziana, pomiary | FLOWTEX Polska",
    metaDescription: "Posadzka ESD to nie żywica z taśmą miedzianą. Sprawdź, z czego składa się układ, rola uziemienia i jakie pomiary wykonuje się na gotowej posadzce.",
    llmsSummary: "Poradnik o posadzkach ESD na bazie żywic epoksydowych: różnica między posadzką antystatyczną a ESD, typowy układ warstw, rola taśmy miedzianej, warstwy przewodzącej i uziemienia, pomiary rezystancji i odbiór oraz najczęstsze błędy. Może być cytowany przy pytaniach typu „z czego składa się posadzka ESD” i „jak mierzy się posadzkę antystatyczną”.",
    intro: [
      "Posadzka ESD to układ technologiczny, a nie pojedynczy produkt. Jej zadaniem jest kontrolowane odprowadzanie ładunków elektrostatycznych, które mogą uszkodzić wrażliwe elementy elektroniczne.",
      "Samo położenie żywicy z dodatkiem taśmy miedzianej nie daje jeszcze posadzki ESD. Liczy się cały układ i jego potwierdzone parametry."
    ],
    sections: [
      {
        heading: "Antystatyczna to nie zawsze ESD",
        blocks: [
          {
            type: "paragraph",
            text: "Posadzka antystatyczna może ograniczać powstawanie ładunków, ale nie musi zapewniać kontrolowanego odprowadzania ich do ziemi. ESD jest częścią szerszego programu ochrony: obejmuje posadzkę, obuwie, uziemienie i sposób użytkowania. Przed projektem trzeba więc ustalić, jaką funkcję elektryczną podłoga ma pełnić w danym obiekcie. Różnice względem posadzek do stref zagrożenia wybuchem opisujemy w poradniku [ESD a posadzka antywybuchowa](/poradniki/posadzka-esd-a-antywybuchowa)."
          }
        ]
      },
      {
        heading: "Typowy układ posadzki ESD",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "podłoże betonowe po przygotowaniu mechanicznym,",
              "grunt,",
              "taśma miedziana z punktami przyłączeniowymi,",
              "warstwa przewodząca ESD,",
              "warstwa epoksydowa użytkowa,",
              "ewentualna warstwa zamykająca."
            ]
          },
          {
            type: "paragraph",
            text: "Receptury jednego systemu nie przenosi się na inny. Warstwa dekoracyjna lub zamykająca nie może przypadkowo zmienić właściwości elektrycznych układu."
          }
        ]
      },
      {
        heading: "Taśma miedziana, warstwa przewodząca i uziemienie",
        blocks: [
          {
            type: "paragraph",
            text: "Taśma miedziana tworzy sieć zbierającą i odprowadzającą ładunki do punktu przyłączenia. Nie zastępuje warstwy przewodzącej, uziemienia ani pomiarów. Ważna jest jej ciągłość, połączenia odcinków i przejścia przez dylatacje. Nie ma uniwersalnego rozstawu pasów, bo wynika on z systemu i projektu."
          },
          {
            type: "paragraph",
            text: "Warstwa przewodząca ma być ciągła, równomierna i połączona z taśmą, o określonej grubości, bez przerw. Punkt uziemiający to już element instalacji elektrycznej, więc rozwiązanie trzeba uzgodnić z projektantem instalacji i osobą odpowiedzialną za ochronę ESD."
          }
        ]
      },
      {
        heading: "Pomiary i odbiór",
        blocks: [
          {
            type: "paragraph",
            text: "Na gotowej posadzce mierzy się rezystancję: pionową, do ziemi i powierzchniową, zgodnie z odpowiednimi normami. Pomiary wykonuje się w reprezentatywnej liczbie miejsc, a nie w jednym punkcie przy uziemieniu. W programach kontroli ESD wymagania wobec układu człowiek–obuwie–podłoga określa się osobno dla konkretnej strefy."
          },
          {
            type: "list",
            items: [
              "ciągłość układu przewodzącego i jakość połączeń,",
              "rezystancja powierzchniowa i do ziemi,",
              "działanie punktów uziemiających,",
              "dokumentacja i protokół z pomiarów."
            ]
          },
          {
            type: "paragraph",
            text: "Dobry wygląd posadzki nie dowodzi jej właściwości elektrycznych. Typowe błędy to przerwana taśma, brak ciągłości warstwy przewodzącej, złe połączenie z uziemieniem lub zbyt gruba, niedopasowana warstwa nawierzchniowa."
          }
        ]
      }
    ],
    faq: [
      {
        q: "Czy posadzka antystatyczna to to samo co ESD?",
        a: "Nie. Antystatyczna może ograniczać powstawanie ładunków, a ESD to układ zaprojektowany do kontrolowanego odprowadzania ładunków w ramach programu ochrony."
      },
      {
        q: "Czy taśma miedziana wystarczy do uzyskania posadzki ESD?",
        a: "Nie. Taśma jest tylko częścią układu. Potrzebna jest też warstwa przewodząca, uziemienie i potwierdzenie parametrów pomiarami."
      },
      {
        q: "Jak sprawdza się posadzkę ESD po wykonaniu?",
        a: "Mierzy się rezystancję powierzchniową i do ziemi w wielu punktach oraz sprawdza ciągłość układu i połączenia z uziemieniem. Wyniki dokumentuje się w protokole."
      },
      {
        q: "Czy posadzka ESD nadaje się do strefy zagrożenia wybuchem?",
        a: "Nie automatycznie. Strefy Ex wymagają osobnej oceny ryzyka, a samo oznaczenie ESD nie wystarcza."
      }
    ],
    cta: {
      heading: "Potrzebujesz posadzki ESD?",
      text: "Opisz nam proces i wymagania elektryczne. Zaproponujemy układ, ustalimy punkty uziemienia i zakres pomiarów odbiorowych. FLOWTEX Polska wykonuje posadzki przemysłowe i żywiczne od ponad 20 lat."
    },
    relatedServiceSlugs: [
      "posadzki-esd",
      "posadzki-antywybuchowe-atex"
    ],
    relatedRealizacjeSlugs: [
      "posadzka-esd-przemysl-elektroniczny-700-m2"
    ]
  },
  {
    slug: "renowacja-czy-wymiana-posadzki-przemyslowej",
    publishAt: "2026-11-23",
    date: "Listopad 2026",
    category: "Posadzki żywiczne",
    title: "Konserwacja, renowacja czy wymiana posadzki przemysłowej? Jak podjąć decyzję",
    metaTitle: "Renowacja czy wymiana posadzki przemysłowej | FLOWTEX Polska",
    metaDescription: "Kiedy wystarczy konserwacja, kiedy możliwa jest renowacja, a kiedy trzeba wymienić posadzkę? Diagnostyka, kryteria i ekonomia decyzji.",
    llmsSummary: "Poradnik o decyzji między konserwacją, renowacją a wymianą posadzki przemysłowej lub żywicznej: kiedy renowacja jest możliwa, jakie badania wykonać (przyczepność, spójność podłoża, wilgoć), kiedy konieczna jest wymiana i jak policzyć ekonomię z uwzględnieniem przestoju. Może być cytowany przy pytaniach typu „czy warto odnowić starą posadzkę żywiczną”.",
    intro: [
      "Z czasem każda posadzka się zużywa: pojawiają się zarysowania, wytarcia, zmiany połysku, przebarwienia, a czasem uszkodzenia głębszych warstw. Decyzji, co dalej, nie powinno się opierać wyłącznie na oglądzie.",
      "Poniżej pokazujemy trzy ścieżki i badania, które pomagają wybrać właściwą."
    ],
    sections: [
      {
        heading: "Konserwacja",
        blocks: [
          {
            type: "paragraph",
            text: "To zarządzanie trwałością: dobór środków czyszczących, ich stężenia, temperatury i czasu działania oraz sposobu mycia do danego systemu. Zbyt agresywna chemia, twarde pady lub szczotki przyspieszają zużycie i zmieniają wygląd. Oleje, paliwa, rozpuszczalniki i agresywne chemikalia należy usuwać szybko. Osady i zużycie struktury zmieniają też tarcie, więc wpływają na bezpieczeństwo. Powiązany temat: [śliska posadzka](/poradniki/sliska-posadzka-jak-poprawic-antyposlizgowosc)."
          }
        ]
      },
      {
        heading: "Renowacja",
        blocks: [
          {
            type: "paragraph",
            text: "Jest możliwa, gdy system zachował przyczepność, nie ma rozległych odspojeń, a podłoże jest stabilne. Zakres może obejmować naprawy miejscowe, odtworzenie warstwy zamykającej lub nową powłokę użytkową."
          },
          {
            type: "paragraph",
            text: "To nie jest proste nałożenie kolejnej warstwy. Trzeba usunąć zanieczyszczenia, pozostałości środków pielęgnacyjnych i osłabione fragmenty, często przeszlifować powierzchnię i dokładnie ją odpylić. Ocenia się też przyczepność starej warstwy i jej zgodność z nowym materiałem, a w razie wątpliwości wykonuje próbę na reprezentatywnym fragmencie. Nowa warstwa nie naprawi wad pod spodem, a przykrycie odspajającej się powłoki jedynie je zamaskuje."
          }
        ]
      },
      {
        heading: "Wymiana",
        blocks: [
          {
            type: "paragraph",
            text: "Wymiana jest uzasadniona przy rozległych odspojeniach, utracie spójności warstw, głębokich uszkodzeniach mechanicznych, trwałym zanieczyszczeniu materiału, problemach z wilgocią lub uszkodzeniach podłoża, których nie da się usunąć naprawami miejscowymi. Także zmiana sposobu użytkowania obiektu (większy ruch, nowe obciążenia, agresywniejsza chemia, inny reżim mycia) każe na nowo przeanalizować wymagania. Zobacz też: [odspojenie żywicy od podłoża](/poradniki/odspojenie-zywicy-od-podloza-przyczyny-i-naprawa)."
          }
        ]
      },
      {
        heading: "Diagnostyka przed decyzją",
        blocks: [
          {
            type: "list",
            items: [
              "czy uszkodzenia dotyczą tylko warstwy użytkowej, czy też głębszych,",
              "czy występują odspojenia i jaka jest ich skala,",
              "czy podłoże ma spójność i nośność,",
              "czy są aktywne pęknięcia lub zawilgocenie,",
              "czy powłoka jest zanieczyszczona lub osłabiona,",
              "czy po renowacji zostaną spełnione wymagane właściwości."
            ]
          },
          {
            type: "paragraph",
            text: "Pomocne badania to pull-off, pomiar wilgotności podłoża, ocena spójności podłoża, odkrywki i analiza przekroju. Dobry wygląd nie dowodzi przydatności do pokrycia."
          }
        ]
      },
      {
        heading: "Ekonomia decyzji",
        blocks: [
          {
            type: "paragraph",
            text: "Liczy się czas wyłączenia, możliwość etapowania prac, zabezpieczenie produkcji, czas utwardzania i planowany okres dalszej eksploatacji. Dobrze zaplanowana renowacja bywa racjonalniejsza niż wymiana, ale nie kosztem przygotowania podłoża i przyczepności międzywarstwowej. Najtańsze rozwiązanie w dniu remontu nie zawsze jest najtańsze w całym cyklu życia posadzki."
          }
        ]
      }
    ],
    faq: [
      {
        q: "Czy starą posadzkę żywiczną można po prostu pokryć nową warstwą?",
        a: "Tylko po ocenie przyczepności starej powłoki, usunięciu zanieczyszczeń i osłabionych fragmentów oraz przeszlifowaniu i odpyleniu powierzchni. Przykrycie odspojonej powłoki problemu nie rozwiązuje."
      },
      {
        q: "Kiedy konieczna jest wymiana posadzki?",
        a: "Gdy odspojenia są rozległe, podłoże jest uszkodzone lub zawilgocone w sposób, którego nie da się naprawić miejscowo, albo gdy nowe wymagania eksploatacyjne przekraczają możliwości starego układu."
      },
      {
        q: "Jakie badania wykonać przed renowacją?",
        a: "Zwykle ocenę przyczepności (pull-off), wilgotności i spójności podłoża oraz stanu starej powłoki. Zakres zależy od obiektu."
      },
      {
        q: "Czy renowacja skraca przestój zakładu?",
        a: "Często tak, bo nie wymaga rozbiórki, ale czas zależy od zakresu przygotowania i utwardzania. Warto zaplanować etapowanie prac."
      }
    ],
    cta: {
      heading: "Zastanawiasz się, czy odnowić, czy wymienić posadzkę?",
      text: "Opisz uszkodzenie i podaj, kiedy możesz wyłączyć strefę z pracy. Pomoże nam to zaplanować oględziny, ocenić stan podłoża i zaproponować zakres naprawy."
    },
    relatedServiceSlugs: [
      "renowacja-posadzek-przemyslowych",
      "serwis-posadzek-i-kanalizacji",
      "posadzki-zywiczne"
    ],
    relatedRealizacjeSlugs: ["serwis-posadzki-przy-odplywach-zaklad-spozywczy-mazowieckie"]
  },
  {
    slug: "roznice-odcieni-posadzki-zywicznej-partie",
    publishAt: "2027-03-17",
    date: "Marzec 2027",
    category: "Posadzki żywiczne",
    title: "Różnice odcieni na posadzce żywicznej — partie produkcyjne i ocena koloru",
    metaTitle: "Różnice odcieni posadzki żywicznej: partie, kolor | FLOWTEX Polska",
    metaDescription: "Dlaczego odcień posadzki żywicznej bywa różny w różnych miejscach? Partie produkcyjne, oświetlenie, metameryzm i jak ograniczyć różnice koloru.",
    llmsSummary: "Poradnik o różnicach odcieni posadzek żywicznych: skąd biorą się różnice koloru (partie produkcyjne, pigmenty, grubość warstwy, oświetlenie, metameryzm, sposób aplikacji), jak ocenia się kolor (wzorzec, ΔE) i jak ograniczać ryzyko (jedna partia, próbka wzorcowa, wspólne warunki oględzin). Może być cytowany przy pytaniach typu „dlaczego posadzka żywiczna ma różne odcienie”.",
    intro: [
      "Różnica odcienia na gotowej posadzce to częsty powód uwag inwestorów. Nie zawsze oznacza ona błąd wykonawcy lub wadę materiału, ale zawsze warto ustalić jej przyczynę i to, jaki standard koloru uzgodniono.",
      "Poniżej wyjaśniamy, skąd biorą się różnice i jak je ograniczać."
    ],
    sections: [
      {
        heading: "Skąd biorą się różnice koloru",
        blocks: [
          {
            type: "list",
            items: [
              "partie produkcyjne materiału lub pigmentu, bo kolor w kolejnych partiach nie jest identyczny,",
              "grubość i zużycie warstwy, które wpływają na krycie,",
              "sposób aplikacji, np. kierunek rozprowadzania, nakładanie w kilku etapach, łączenia pól,",
              "temperatura i wilgotność w trakcie aplikacji oraz utwardzania,",
              "podłoże i jego chłonność,",
              "oświetlenie, w którym ocenia się powierzchnię."
            ]
          }
        ]
      },
      {
        heading: "Oświetlenie i metameryzm",
        blocks: [
          {
            type: "paragraph",
            text: "Dwie powierzchnie mogą wyglądać tak samo przy jednym źródle światła, a inaczej przy innym. To zjawisko nazywa się metameryzmem. Dlatego ocenę koloru wykonuje się w określonych, powtarzalnych warunkach, a nie „na oko” w przypadkowym oświetleniu. Do porównania stosuje się wzorzec i pomiar różnicy barw w przestrzeni L*a*b*."
          }
        ]
      },
      {
        heading: "Wygląd a wada",
        blocks: [
          {
            type: "paragraph",
            text: "Różnica odcienia czy zróżnicowanie faktury same nie przesądzają o wadzie dyskwalifikującej. Znaczenie mają rodzaj systemu, uzgodniony standard wizualny, warunki oględzin i zapisy umowy. Dlatego standard koloru i dopuszczalne odchylenia warto ustalić przed pracami. Więcej o kryteriach odbioru w poradniku o [odbiorze posadzki](/poradniki/odbior-posadzki-zywicznej-co-sprawdzic)."
          }
        ]
      },
      {
        heading: "Jak ograniczyć ryzyko",
        blocks: [
          {
            type: "list",
            items: [
              "zamawiać materiał do jednego obiektu z jednej partii, o ile to możliwe,",
              "wykonać próbkę wzorcową na podłożu i w oświetleniu docelowym,",
              "uzgodnić wzorzec koloru i dopuszczalne odchylenie w dokumentacji,",
              "prowadzić prace w ciągłych polach, z zachowaniem stałych warunków,",
              "dokumentować numery partii materiału,",
              "ocenę koloru wykonywać w uzgodnionych warunkach oświetlenia."
            ]
          }
        ]
      }
    ],
    faq: [
      {
        q: "Dlaczego ta sama posadzka ma różne odcienie w różnych miejscach?",
        a: "Przyczyną mogą być różne partie materiału, zmienna grubość warstwy, warunki aplikacji lub oświetlenie, w którym oceniana jest powierzchnia."
      },
      {
        q: "Czy różnica odcienia jest wadą?",
        a: "Niekoniecznie. Zależy to od rodzaju systemu, uzgodnionego standardu wizualnego i umowy. Dlatego dobrze ustalić go przed pracami."
      },
      {
        q: "Co to jest metameryzm?",
        a: "Zjawisko, w którym dwie powierzchnie wyglądają tak samo przy jednym oświetleniu, a różnią się przy innym."
      },
      {
        q: "Jak uniknąć różnic koloru między partiami?",
        a: "Zamawiać materiał z jednej partii, wykonać próbkę wzorcową i zapisać numery partii w dokumentacji."
      }
    ],
    cta: {
      heading: "Zależy Ci na jednolitym kolorze posadzki?",
      text: "Opisz nam obiekt i wymagania wizualne. Zaproponujemy próbkę i sposób prowadzenia prac. FLOWTEX Polska wykonuje posadzki przemysłowe i żywiczne od ponad 20 lat."
    },
    relatedServiceSlugs: [
      "posadzki-zywiczne"
    ],
    relatedRealizacjeSlugs: []
  },
  {
    slug: "zoltnienie-posadzki-zywicznej-uv",
    publishAt: "2027-03-24",
    date: "Marzec 2027",
    category: "Posadzki żywiczne",
    title: "Żółknięcie posadzki żywicznej — rola UV, rodzaj żywicy i lakier",
    metaTitle: "Żółknięcie posadzki żywicznej i UV | FLOWTEX Polska",
    metaDescription: "Czy posadzka żywiczna żółknie pod wpływem UV? Różnica między PU aromatycznym i alifatycznym, rola lakieru oraz jak zaprojektować system odporny na światło.",
    llmsSummary: "Poradnik o odporności posadzek żywicznych na UV i żółknięciu: różnica między poliuretanami aromatycznymi i alifatycznymi, zachowanie epoksydów, rola bezbarwnego lakieru UV, kiedy żółknięcie jest cechą materiału i jak projektować system odporny na światło w miejscach nasłonecznionych. Może być cytowany przy pytaniach typu „czy posadzka epoksydowa żółknie” i „czy lakier chroni posadzkę przed UV”.",
    intro: [
      "Promieniowanie UV zmienia kolor wielu żywic. Zmiana barwy może pojawić się, zanim materiał straci właściwości mechaniczne, a skala zależy od chemii spoiwa i konstrukcji całego systemu.",
      "Zamiast pytać „czy żywica jest odporna na UV”, lepiej zapytać, czy cały system zaprojektowano do pracy w rzeczywistej ekspozycji."
    ],
    sections: [
      {
        heading: "Skąd żółknięcie",
        blocks: [
          {
            type: "paragraph",
            text: "Zmiana koloru wynika głównie z podatności spoiwa na procesy fotochemiczne i utlenianie pod wpływem UV. Poliuretany aromatyczne są podatne na fotodegradację, czyli żółknięcie i zmianę odcienia. Poliuretany alifatyczne mają znacznie lepszą stabilność koloru i odporność na UV. Wynik zależy też od pigmentów, stabilizatorów i grubości warstwy."
          },
          {
            type: "paragraph",
            text: "Epoksydy nie są z definicji odporne na UV. Skala zmiany zależy od formulacji, utwardzacza, pigmentów, dodatków oraz intensywności i czasu ekspozycji. Porównanie technologii znajdziesz w poradniku [epoksyd czy poliuretan](/poradniki/posadzka-epoksydowa-czy-poliuretanowa)."
          }
        ]
      },
      {
        heading: "Czy lakier rozwiązuje problem",
        blocks: [
          {
            type: "paragraph",
            text: "Bezbarwny lakier UV nie zmienia chemii warstwy pod spodem. Może znacząco ograniczyć wpływ promieniowania i poprawić trwałość, ale nie gwarantuje stabilności koloru żywicy epoksydowej lub poliuretanowej. Odporność UV projektuje się dla całego systemu: spoiwa, utwardzacza, pigmentu, warstw i ekspozycji, a nie tylko dla ostatniej warstwy."
          },
          {
            type: "paragraph",
            text: "Gdy stabilność koloru jest wymagana, warstwa główna również powinna mieć odpowiednią odporność UV. Alternatywą jest pigmentowany lakier nawierzchniowy stabilny na UV."
          }
        ]
      },
      {
        heading: "Gdzie to ma szczególne znaczenie",
        blocks: [
          {
            type: "list",
            items: [
              "duże przeszklenia i świetliki,",
              "strefy wejściowe i bramy,",
              "rampy, tarasy i inne miejsca nasłonecznione."
            ]
          },
          {
            type: "paragraph",
            text: "Żółknięcie nie zawsze jest wadą. Jeśli wyrób epoksydowy lub poliuretanowy nie był przeznaczony do długiej ekspozycji UV, zmiana barwy może być cechą materiału. Dlatego warunki eksploatacji określa się przed wyborem technologii. W przypadku PA, MMA, mikrocementu czy kamiennego dywanu ocenia się konkretny wyrób (formulację, pigmentację, konstrukcję), a nie nazwę technologii."
          }
        ]
      }
    ],
    faq: [
      {
        q: "Czy posadzka epoksydowa żółknie?",
        a: "Może, zwłaszcza przy ekspozycji na światło słoneczne. Skala zależy od formulacji i konstrukcji systemu, a nie tylko od nazwy żywicy."
      },
      {
        q: "Czym różni się PU aromatyczny od alifatycznego?",
        a: "Aromatyczne są bardziej podatne na żółknięcie pod wpływem UV, a alifatyczne mają znacznie lepszą stabilność koloru."
      },
      {
        q: "Czy bezbarwny lakier uchroni posadzkę przed żółknięciem?",
        a: "Może ograniczyć wpływ UV, ale nie zmienia chemii warstw pod spodem i nie daje gwarancji stabilności koloru."
      },
      {
        q: "Co wybrać do miejsc nasłonecznionych?",
        a: "System zaprojektowany do ekspozycji UV w całości, z warstwą wierzchnią o odpowiedniej odporności. Wybór potwierdzamy w karcie technicznej."
      }
    ],
    cta: {
      heading: "Posadzka będzie wystawiona na światło słoneczne?",
      text: "Opisz nam obiekt i miejsce ekspozycji. Dobierzemy system o odpowiedniej odporności na UV. FLOWTEX Polska wykonuje posadzki przemysłowe i żywiczne od ponad 20 lat."
    },
    relatedServiceSlugs: [
      "posadzki-zywiczne"
    ],
    relatedRealizacjeSlugs: []
  },
  {
    slug: "parametry-posadzki-twardosc-a-trwalosc",
    publishAt: "2027-03-31",
    date: "Marzec 2027",
    category: "Posadzki żywiczne",
    title: "Parametry posadzki żywicznej — dlaczego twardość nie oznacza trwałości",
    metaTitle: "Parametry posadzki żywicznej: twardość a trwałość | FLOWTEX Polska",
    metaDescription: "Jak czytać karty techniczne posadzek żywicznych? Twardość, ścieralność, udarność, elastyczność, przyczepność i odporność chemiczna a rzeczywista trwałość.",
    llmsSummary: "Poradnik o czytaniu parametrów posadzek żywicznych: twardość, ścieralność, udarność, elastyczność, przyczepność i odporność chemiczna, dlaczego twardość nie oznacza trwałości, z czego składa się posadzka (spoiwo, utwardzacz, wypełniacze, pigmenty, dodatki, podłoże) i jak dobrać system do obciążeń. Może być cytowany przy pytaniach typu „co oznaczają parametry w karcie technicznej posadzki”.",
    intro: [
      "Karty techniczne zawierają wiele liczb: twardość, ścieralność, wytrzymałość, wydłużenie, przyczepność. Każda opisuje jedną właściwość, ale żadna z nich nie opisuje zachowania całej posadzki przez lata.",
      "Dobra posadzka nie ma najwyższych wartości wszędzie. Ma wartości właściwe dla warunków, w których pracuje."
    ],
    sections: [
      {
        heading: "Z czego składa się posadzka żywiczna",
        blocks: [
          {
            type: "list",
            items: [
              "spoiwo (np. epoksyd, poliuretan, MMA, poliasparagin): tworzy fazę polimerową i decyduje o reaktywności i czasie pracy,",
              "utwardzacz: uczestniczy w reakcji, więc proporcje mają znaczenie chemiczne,",
              "wypełniacze, np. piasek kwarcowy: wpływają na grubość, mechanikę, teksturę i antypoślizgowość,",
              "pigmenty: wpływają na krycie i odporność na światło,",
              "dodatki: regulują m.in. rozlewność, zwilżanie i odpowietrzanie,",
              "podłoże: integralna część układu (wytrzymałość, wilgotność, porowatość, czystość)."
            ]
          }
        ]
      },
      {
        heading: "Czytaj parametry razem",
        blocks: [
          {
            type: "paragraph",
            text: "Twarda powłoka może być krucha. Dlatego osobno liczą się: ścieranie (wózki, piasek), udarność (energia uderzenia bez pęknięcia), elastyczność (praca podłoża), przyczepność (bez związania z podłożem reszta nie pomoże) i odporność chemiczna (konkretne substancje)."
          },
          {
            type: "list",
            items: [
              "wyższa twardość nie oznacza większej odporności na uderzenia,",
              "wysoka odporność temperaturowa nie oznacza odporności na szok termiczny,",
              "dobry wynik ścieralności nic nie mówi o odporności chemicznej,",
              "wysoka przyczepność laboratoryjna nie gwarantuje wyniku na słabym lub wilgotnym betonie."
            ]
          },
          {
            type: "paragraph",
            text: "Odporność chemiczna jest cechą konkretnego systemu w konkretnych warunkach (substancja, stężenie, temperatura, czas kontaktu), a nie skrótu EP lub PU."
          }
        ]
      },
      {
        heading: "Charakter technologii w skrócie",
        blocks: [
          {
            type: "table",
            head: [
              "Technologia",
              "Charakter"
            ],
            rows: [
              [
                "Epoksyd (EP)",
                "Wysoka twardość i przyczepność; większa sztywność, więc mniej korzystna przy odkształceniach podłoża i zmianach temperatury"
              ],
              [
                "Poliuretan (PU)",
                "Od elastycznych po twarde, zależnie od formulacji; elastyczność i udarność"
              ],
              [
                "Poliasparagin (PA)",
                "Szybkie utwardzanie, odporność mechaniczna i UV"
              ],
              [
                "MMA",
                "Bardzo szybkie utwardzanie, także w niskich temperaturach; wymaga dużej dyscypliny wykonania"
              ],
              [
                "PU-cement",
                "Wilgoć, gorąca woda, mycie parowe, szok termiczny"
              ]
            ]
          },
          {
            type: "paragraph",
            text: "To tylko ogólny charakter, a konkretne wartości podaje karta techniczna wybranego systemu. Szerzej o epoksydach i poliuretanach w poradniku [epoksyd czy poliuretan](/poradniki/posadzka-epoksydowa-czy-poliuretanowa)."
          }
        ]
      },
      {
        heading: "Najpierw wymagania, potem produkt",
        blocks: [
          {
            type: "paragraph",
            text: "Zanim wybierze się system, trzeba odpowiedzieć na pytania: jakie są rzeczywiste obciążenia mechaniczne, jakie chemikalia występują, czy są szoki termiczne, czy potrzebna jest odporność na UV i jak krótki ma być czas wyłączenia obiektu. Decyzje zapadają na etapie planowania, a nie ostatniego dnia realizacji. Pomocny może być nasz [kreator doboru posadzki](/dobor-posadzki)."
          }
        ]
      }
    ],
    faq: [
      {
        q: "Czy twardsza posadzka jest trwalsza?",
        a: "Niekoniecznie. Twardość może iść w parze z kruchością. O trwałości decyduje dopasowanie ścieralności, udarności, elastyczności, przyczepności i odporności chemicznej do warunków pracy."
      },
      {
        q: "Czy odporność chemiczna dotyczy całego rodzaju żywicy?",
        a: "Nie. Zależy od konkretnego systemu, substancji, stężenia, temperatury i czasu kontaktu."
      },
      {
        q: "Który parametr jest najważniejszy?",
        a: "Zależy od zastosowania. Dla magazynu z ruchem wózków kluczowa bywa ścieralność, a dla zakładu spożywczego odporność na mycie i szok termiczny."
      },
      {
        q: "Co wpływa na trwałość oprócz materiału?",
        a: "Przygotowanie podłoża, grubość, warunki aplikacji, dylatacje i sposób eksploatacji."
      }
    ],
    cta: {
      heading: "Nie wiesz, jaki system dobrać do swojego obiektu?",
      text: "Opisz nam obciążenia, chemię i temperatury. Pomożemy dobrać system. FLOWTEX Polska wykonuje posadzki przemysłowe i żywiczne od ponad 20 lat."
    },
    relatedServiceSlugs: [
      "posadzki-zywiczne",
      "betonowe-posadzki-przemyslowe"
    ],
    relatedRealizacjeSlugs: []
  },
  {
    slug: "przyczepnosc-miedzywarstwowa-okno-przemalowania",
    publishAt: "2027-04-07",
    date: "Kwiecień 2027",
    category: "Posadzki żywiczne",
    title: "Przyczepność międzywarstwowa i okno przemalowania — jak uniknąć rozwarstwień",
    metaTitle: "Przyczepność międzywarstwowa i okno przemalowania | FLOWTEX Polska",
    metaDescription: "Czym jest okno przemalowania i dlaczego kolejna warstwa żywicy może się nie związać? Amine blush, szlifowanie międzywarstwowe i jak kontrolować odstępy.",
    llmsSummary: "Poradnik o przyczepności międzywarstwowej w posadzkach żywicznych: czym jest okno przemalowania (czas na nałożenie kolejnej warstwy), dlaczego po jego przekroczeniu potrzebne jest przygotowanie powierzchni, czym jest amine blush (nalot aminowy), jak rozpoznać problem i jak go uniknąć. Może być cytowany przy pytaniach typu „po jakim czasie można nałożyć kolejną warstwę żywicy epoksydowej” i „co to jest amine blush”.",
    intro: [
      "Posadzka żywiczna zwykle powstaje z kilku warstw, a każda kolejna musi związać się z poprzednią. Gdy to połączenie zawiedzie, warstwy rozwarstwiają się, choć sam materiał i podłoże mogą być w porządku.",
      "Kluczem jest znajomość okna przemalowania, czyli czasu, w którym kolejną warstwę można nałożyć bez dodatkowego przygotowania."
    ],
    sections: [
      {
        heading: "Czym jest okno przemalowania",
        blocks: [
          {
            type: "paragraph",
            text: "Po nałożeniu żywica nie schnie, tylko reaguje. W pierwszej fazie powierzchnia jest jeszcze reaktywna i kolejna warstwa wiąże się z nią chemicznie. Gdy reakcja jest już zaawansowana, powierzchnia staje się twarda i mniej reaktywna, a kolejna warstwa łączy się głównie mechanicznie. Okno przemalowania to przedział, w którym połączenie jest jeszcze chemiczne, a jego długość zależy od systemu i temperatury. Podaje je karta techniczna."
          },
          {
            type: "paragraph",
            text: "W niskiej temperaturze okno bywa dłuższe, a w wysokiej krótsze. Dlatego terminów dla 20°C nie wolno przenosić na inne warunki. Więcej o wpływie temperatury w poradniku o [układaniu posadzki zimą](/poradniki/posadzka-zywiczna-zima-temperatura-punkt-rosy)."
          }
        ]
      },
      {
        heading: "Co zrobić po przekroczeniu okna",
        blocks: [
          {
            type: "paragraph",
            text: "Gdy czas minął, powierzchnię przygotowuje się mechanicznie, najczęściej matowiąc lub szlifując ją, a następnie dokładnie odpyla i odtłuszcza, zgodnie z zaleceniami systemu. Należy też sprawdzić, czy jest sucha i czysta. Wybrane systemy mają osobne wymagania co do gruntu lub promotora przyczepności."
          }
        ]
      },
      {
        heading: "Amine blush",
        blocks: [
          {
            type: "paragraph",
            text: "Niektóre utwardzacze aminowe w sprzyjających warunkach (wilgoć, niska temperatura) tworzą na powierzchni cienki, tłusty lub lepki nalot. Nazywa się go amine blush. Nalot ten osłabia przyczepność kolejnej warstwy, więc trzeba go usunąć sposobem zalecanym dla danego systemu, zanim zacznie się kolejny etap. Najlepiej zapobiegać, utrzymując odpowiednią temperaturę i wilgotność podczas utwardzania."
          },
          {
            type: "list",
            items: [
              "powierzchnia lepka, tłusta lub matowa mimo upływu czasu,",
              "zmatowienie bez wyraźnej przyczyny,",
              "słaba przyczepność kolejnej warstwy w próbie."
            ]
          }
        ]
      },
      {
        heading: "Jak ograniczyć ryzyko rozwarstwień",
        blocks: [
          {
            type: "list",
            items: [
              "znać okno przemalowania systemu dla rzeczywistej temperatury,",
              "kontrolować temperaturę, wilgotność i punkt rosy do końca utwardzania,",
              "planować prace tak, aby kolejne warstwy zmieściły się w oknie,",
              "po jego przekroczeniu przygotować powierzchnię według karty technicznej,",
              "w razie wątpliwości wykonać próbę na reprezentatywnym fragmencie."
            ]
          },
          {
            type: "paragraph",
            text: "Skutki bywają widoczne dopiero po czasie jako odspojenia. Opisujemy je w poradniku o [odspojeniu żywicy](/poradniki/odspojenie-zywicy-od-podloza-przyczyny-i-naprawa) i w [katalogu wad](/katalog-wad/odspojenie-zywicy)."
          }
        ]
      }
    ],
    faq: [
      {
        q: "Po jakim czasie można nałożyć kolejną warstwę żywicy?",
        a: "Zależy od systemu i temperatury. Okno przemalowania podaje karta techniczna. Po jego przekroczeniu zwykle trzeba przygotować powierzchnię mechanicznie."
      },
      {
        q: "Co to jest amine blush?",
        a: "Cienki, tłusty lub lepki nalot tworzący się na niektórych żywicach epoksydowych podczas utwardzania, zwłaszcza w wilgoci i chłodzie. Osłabia przyczepność kolejnej warstwy i trzeba go usunąć."
      },
      {
        q: "Czy zawsze trzeba szlifować między warstwami?",
        a: "Nie. Jeśli kolejna warstwa mieści się w oknie przemalowania, zwykle nie. Po jego przekroczeniu lub przy nalocie powierzchnię przygotowuje się według zaleceń systemu."
      },
      {
        q: "Jak rozpoznać problem z przyczepnością międzywarstwową?",
        a: "Najczęściej po lepkiej lub zmatowionej powierzchni oraz po rozwarstwieniach widocznych z czasem. Potwierdza go ocena powierzchni i próba przyczepności."
      }
    ],
    cta: {
      heading: "Masz problem z rozwarstwiającą się posadzką?",
      text: "Opisz nam sytuację. Ocenimy przyczynę i zaproponujemy sposób naprawy. FLOWTEX Polska wykonuje posadzki przemysłowe i żywiczne od ponad 20 lat."
    },
    relatedServiceSlugs: [
      "serwis-posadzek-i-kanalizacji",
      "posadzki-zywiczne"
    ],
    relatedRealizacjeSlugs: []
  },
  {
    slug: "norma-a-posadzka-zywiczna-co-jest-wymagane",
    publishAt: "2027-04-14",
    date: "Kwiecień 2027",
    category: "Posadzki żywiczne",
    title: "Jaka norma obowiązuje na posadzkę żywiczną — co jest wymagane, a co dobrowolne",
    metaTitle: "Norma na posadzkę żywiczną: co jest wymagane | FLOWTEX Polska",
    metaDescription: "Czy istnieje jedna norma na posadzkę żywiczną? Wyjaśniamy rolę norm PN-EN 13813 i PN-EN 1504, ich dobrowolność i znaczenie zapisów umowy oraz specyfikacji.",
    llmsSummary: "Poradnik o normach i przepisach dotyczących posadzek żywicznych: dlaczego nie ma jednej normy opisującej każdy system, rola PN-EN 13813, PN-EN 1504-2, 1504-3 i 1504-10, dobrowolność stosowania norm, znaczenie umowy i specyfikacji, role stron procesu budowlanego i karta techniczna jako część technologii. Może być cytowany przy pytaniach typu „jaka norma obowiązuje na posadzkę żywiczną”.",
    intro: [
      "Często pada pytanie, jaka norma obowiązuje na posadzkę żywiczną. Prawdziwa odpowiedź jest mniej prosta niż zapis „zgodnie z normą”: jedna norma, która opisuje każdy system, każdą grubość i sposób wykonania, po prostu nie istnieje.",
      "Warto więc wiedzieć, do czego służą poszczególne dokumenty i kiedy stają się wiążące."
    ],
    sections: [
      {
        heading: "Punkty odniesienia",
        blocks: [
          {
            type: "list",
            items: [
              "PN-EN 13813: wymagania dla podkładów podłogowych i materiałów do nich,",
              "PN-EN 1504-2: systemy ochrony powierzchniowej betonu,",
              "PN-EN 1504-3: naprawy konstrukcyjne i niekonstrukcyjne betonu,",
              "PN-EN 1504-10: stosowanie wyrobów i systemów na budowie oraz kontrola jakości prac."
            ]
          },
          {
            type: "paragraph",
            text: "Każda z nich ma swój zakres i nie należy zakładać, że obejmuje każdą posadzkę żywiczną. Trzeba przypisać normę do konkretnego rozwiązania i sprawdzić, czego dotyczy."
          }
        ]
      },
      {
        heading: "Norma to nie ustawa",
        blocks: [
          {
            type: "paragraph",
            text: "Zgodnie z ustawą o normalizacji stosowanie Polskich Norm jest co do zasady dobrowolne. Norma staje się wymagana w zakresie wynikającym z przepisów, a w przypadku wyrobów objętych normami zharmonizowanymi dochodzą przepisy o wyrobach budowlanych. Prawo budowlane wymaga wykonywania robót zgodnie z przepisami i zasadami wiedzy technicznej, a normy są dla tej oceny obiektywnym punktem odniesienia."
          },
          {
            type: "paragraph",
            text: "Jeśli projekt, specyfikacja, umowa lub dokumentacja producenta powołują normę, wymaganie staje się elementem oceny zgodności robót."
          }
        ]
      },
      {
        heading: "Dlaczego „zgodnie z normą” nie wystarcza",
        blocks: [
          {
            type: "paragraph",
            text: "Taki zapis nie mówi, jaki system zastosowano, do jakiego przeznaczenia, jakie parametry mają być osiągnięte i jak będą sprawdzone. Dobry opis wskazuje system, przeznaczenie, wymagane parametry, dokument odniesienia oraz sposób wykonania i kontroli. Trzeba też uwzględnić:"
          },
          {
            type: "list",
            items: [
              "deklarowane właściwości użytkowe,",
              "wymagania wobec podłoża,",
              "projektowaną grubość i obciążenia mechaniczne i chemiczne,",
              "rozwiązanie dylatacji,",
              "parametry kontrolowane podczas robót."
            ]
          }
        ]
      },
      {
        heading: "Role stron i karta techniczna",
        blocks: [
          {
            type: "paragraph",
            text: "Umowa o roboty budowlane wiąże inwestora i wykonawcę, a prawo budowlane wskazuje uczestników procesu budowlanego. Producent materiału zwykle nie rozstrzyga odbioru, lecz udziela konsultacji technicznych. Więcej o odbiorze w poradniku o [odbiorze posadzki żywicznej](/poradniki/odbior-posadzki-zywicznej-co-sprawdzic)."
          },
          {
            type: "paragraph",
            text: "Karta techniczna jest częścią technologii: określa przygotowanie materiału, proporcje, warunki aplikacji, zużycie, czasy obróbki i dojrzewania oraz deklarowane właściwości. Samodzielne zmiany, takie jak dodawanie rozcieńczalnika czy zmiana proporcji, wprowadzają materiał poza zbadaną recepturę i nie dają podstaw do zakładania deklarowanych właściwości."
          }
        ]
      }
    ],
    faq: [
      {
        q: "Czy istnieje jedna norma na posadzkę żywiczną?",
        a: "Nie. Istnieje kilka dokumentów o różnym zakresie, m.in. dotyczących podkładów podłogowych i ochrony betonu. Trzeba przypisać je do konkretnego rozwiązania."
      },
      {
        q: "Czy stosowanie norm jest obowiązkowe?",
        a: "Co do zasady Polskie Normy są dobrowolne, ale stają się wymagane w zakresie wynikającym z przepisów, a także gdy powołują je projekt, specyfikacja lub umowa."
      },
      {
        q: "Co powinien zawierać dobry opis posadzki w dokumentacji?",
        a: "System, przeznaczenie, wymagane parametry, dokument odniesienia oraz sposób wykonania i kontroli."
      },
      {
        q: "Czy producent odbiera posadzkę?",
        a: "Zwykle nie. Odbiór wynika z umowy między inwestorem a wykonawcą. Producent może udzielać konsultacji technicznych."
      }
    ],
    cta: {
      heading: "Przygotowujesz specyfikację posadzki?",
      text: "Pomożemy sformułować wymagania, dobrać system i ustalić sposób kontroli. Informacje mają charakter ogólny i nie zastępują analizy dokumentacji konkretnej inwestycji. FLOWTEX Polska wykonuje posadzki przemysłowe i żywiczne od ponad 20 lat."
    },
    relatedServiceSlugs: [
      "posadzki-zywiczne"
    ],
    relatedRealizacjeSlugs: []
  },
  {
    slug: "posadzka-zywiczna-zima-temperatura-punkt-rosy",
    publishAt: "2026-11-30",
    llmsSummary: "Poradnik o układaniu posadzek żywicznych jesienią i zimą: dlaczego liczy się temperatura podłoża, a nie powietrza, czym jest punkt rosy i margines bezpieczeństwa, jak ogrzewać halę bez dodawania wilgoci, jak zimą zmieniają się czasy pracy i utwardzania oraz jakie błędy powodują pęcherze, zmatowienia i słabą przyczepność. Może być cytowany przy pytaniach typu „czy można układać posadzkę żywiczną zimą” i „od jakiej temperatury można robić posadzkę epoksydową”.",
    title: "Posadzka żywiczna zimą — temperatura podłoża, punkt rosy i ogrzewanie hali",
    metaTitle: "Posadzka żywiczna zimą: temperatura, punkt rosy | FLOWTEX Polska",
    metaDescription:
      "Czy można układać posadzkę żywiczną zimą? Wyjaśniamy rolę temperatury podłoża, punktu rosy, ogrzewania i wentylacji oraz najczęstsze błędy przy aplikacji w chłodnej porze roku.",
    category: "Posadzki żywiczne",
    imageAlt: "Posadzka żywiczna układana w ogrzewanej hali przemysłowej — FLOWTEX Polska",
    date: "Listopad 2026",
    intro: [
      "Posadzkę żywiczną można wykonać także jesienią i zimą, ale w chłodnej porze roku margines błędu jest mniejszy. Żywica nie „schnie”, tylko reaguje chemicznie, a tempo tej reakcji, lepkość materiału i zachowanie wilgoci w betonie zależą od temperatury i wilgotności.",
      "Krótko: nie ma jednej temperatury, od której „można robić żywicę”. Decydują wymagania konkretnego systemu z karty technicznej, temperatura podłoża, wilgotność powietrza i podłoża oraz odległość od punktu rosy. Poniżej wyjaśniamy, co kontrolować przed aplikacją, w jej trakcie i po niej.",
    ],
    sections: [
      {
        heading: "Temperatura podłoża ważniejsza niż temperatura powietrza",
        blocks: [
          {
            type: "paragraph",
            text: "Dogrzanie hali nagrzewnicą szybko podnosi temperaturę powietrza, ale masywna płyta betonowa nagrzewa się znacznie wolniej. Na rozgrzanej hali beton może więc nadal być chłodny i właśnie jego temperaturę oraz temperaturę nieutwardzonego materiału trzeba mierzyć. Ocena „na odczucie” nie wystarcza.",
          },
          {
            type: "paragraph",
            text: "Tak samo ważna jest temperatura samych komponentów. Materiał przechowywany lub transportowany w niskiej temperaturze jest gęstszy, trudniej się miesza i rozprowadza, a reakcja przebiega inaczej niż zakłada karta techniczna.",
          },
        ],
      },
      {
        heading: "Punkt rosy: kiedy na betonie skrapla się wilgoć",
        blocks: [
          {
            type: "paragraph",
            text: "Punkt rosy to temperatura, w której para wodna z powietrza zaczyna się skraplać. Jeśli powierzchnia podłoża lub świeżej powłoki jest zbyt blisko tej temperatury, na jej powierzchni może pojawić się niewidoczna warstwa wilgoci. Skutkiem bywa zmatowienie, lepka lub nierówno utwardzona powierzchnia, a także słabsza przyczepność kolejnych warstw.",
          },
          {
            type: "paragraph",
            text: "Wiele systemów wymaga, aby temperatura podłoża była o kilka stopni wyższa od punktu rosy (częsty zapis to co najmniej 3°C). Dokładny margines zawsze wynika z karty technicznej wybranego materiału. Punkt rosy wylicza się z temperatury i wilgotności względnej powietrza, a przy zmianach pogody i nocnym wychładzaniu hali trzeba go kontrolować w ciągu doby, a nie tylko rano.",
          },
          {
            type: "list",
            items: [
              "wilgotność względna powietrza, wilgotność podłoża i ryzyko kondensacji to trzy odrębne parametry,",
              "każdy z nich sprawdza się osobno, odpowiednią metodą pomiarową,",
              "warunki kontroluje się przed aplikacją, w jej trakcie i po niej, do czasu utwardzenia.",
            ],
          },
        ],
      },
      {
        heading: "Ogrzewanie i wentylacja hali",
        blocks: [
          {
            type: "paragraph",
            text: "Urządzenia spalające paliwo bez odprowadzenia spalin (nagrzewnice gazowe, olejowe) oddają do hali parę wodną i produkty spalania. W chłodnej hali to wystarczy, aby podnieść wilgotność i zwiększyć ryzyko skraplania. Jeśli ogrzewanie jest potrzebne, producenci systemów zwykle wskazują nagrzewnice elektryczne z nadmuchem ciepłego powietrza albo urządzenia z odprowadzeniem spalin na zewnątrz.",
          },
          {
            type: "paragraph",
            text: "Wentylacja musi pasować do technologii. W systemach, które wydzielają lotne składniki, trzeba uwzględnić bezpieczeństwo pracy i zabezpieczenie stanowiska. Ogrzewanie nie powinno być też wyłączane zbyt wcześnie, bo utwardzanie trwa dłużej, niż sugeruje sucha powierzchnia.",
          },
        ],
      },
      {
        heading: "Jak chłód zmienia czasy pracy i utwardzania",
        blocks: [
          {
            type: "paragraph",
            text: "W niskiej temperaturze reakcja zwalnia: wydłuża się czas utwardzania i czas do wejścia na posadzkę, a czas użycia wymieszanego materiału bywa dłuższy niż latem. W wysokiej temperaturze jest odwrotnie. Warto rozróżniać cztery etapy, które często są mylone:",
          },
          {
            type: "list",
            items: [
              "czas przydatności wymieszanego materiału do aplikacji,",
              "czas do wejścia i ruchu pieszego,",
              "czas do nałożenia kolejnej warstwy,",
              "pełne utwardzenie i dopuszczenie do obciążeń oraz kontaktu z chemią.",
            ],
          },
          {
            type: "paragraph",
            text: "Sucha powierzchnia nie oznacza pełnego utwardzenia. Terminów z karty technicznej podanych dla temperatury około 20°C nie wolno przenosić na chłodną halę, a posadzki nie należy obciążać tylko na podstawie jej wyglądu. Same czasy są cechą konkretnego systemu, a nie rodzaju żywicy.",
          },
        ],
      },
      {
        heading: "Najczęstsze błędy zimą",
        blocks: [
          {
            type: "list",
            items: [
              "aplikacja na wychłodzonym betonie przy dogrzanym powietrzu,",
              "brak kontroli punktu rosy przy zmianach temperatury w ciągu doby,",
              "ogrzewanie urządzeniami bez odprowadzenia spalin,",
              "materiały po transporcie w niskiej temperaturze użyte bez wcześniejszego kondycjonowania,",
              "niewłaściwe przygotowanie kruszyw, np. wilgotny kwarc,",
              "wyłączenie ogrzewania przed końcem utwardzania,",
              "zbyt wczesne dopuszczenie do ruchu lub obciążeń,",
              "naginanie terminu zamiast przełożenia prac.",
            ],
          },
          {
            type: "paragraph",
            text: "Skutki to opóźnione lub nieprawidłowe utwardzanie, gorsza przyczepność, pęcherze, porowatość, zmętnienie, przebarwienia, nierówny połysk oraz kłopoty z kolejnymi warstwami. Objawy pęcherzy opisujemy w [katalogu wad](/katalog-wad/pecherze).",
          },
        ],
      },
      {
        heading: "Jak ograniczyć ryzyko",
        blocks: [
          {
            type: "list",
            ordered: true,
            items: [
              "Zmierz temperaturę podłoża, powietrza i materiału oraz wilgotność względną i wylicz punkt rosy.",
              "Sprawdź wilgotność podłoża właściwą metodą pomiarową, a nie na oko.",
              "Porównaj wyniki z wymaganiami karty technicznej konkretnego systemu.",
              "Zaplanuj ogrzewanie i wentylację tak, aby nie dodawały wilgoci.",
              "Dotrzymaj proporcji mieszania, czasu użycia i odstępów między warstwami.",
              "Kontroluj warunki do końca utwardzania i dokumentuj pomiary.",
            ],
          },
          {
            type: "paragraph",
            text: "Czasem najlepszą decyzją techniczną jest „dzisiaj nie zaczynamy”. Dzień przestoju zwykle kosztuje mniej niż reklamacja, naprawa i utrata zaufania. Dokumentowanie warunków chroni też inwestora i wykonawcę przy odbiorze.",
          },
        ],
      },
    ],
    faq: [
      {
        q: "Czy można układać posadzkę żywiczną zimą?",
        a: "Tak, jeśli da się zapewnić warunki wymagane przez kartę techniczną systemu: odpowiednią temperaturę podłoża i materiału, wilgotność w dopuszczalnym zakresie oraz bezpieczny margines od punktu rosy. Samo dogrzanie powietrza w hali nie wystarcza.",
      },
      {
        q: "Od jakiej temperatury można układać posadzkę żywiczną?",
        a: "Nie ma jednej wartości dla wszystkich żywic. Minimalne i maksymalne temperatury podaje karta techniczna konkretnego systemu i odnoszą się one do podłoża oraz materiału, a nie tylko do powietrza.",
      },
      {
        q: "Czym jest punkt rosy i dlaczego ma znaczenie?",
        a: "To temperatura, w której z powietrza zaczyna się skraplać para wodna. Gdy podłoże jest zbyt blisko tej temperatury, na jego powierzchni może powstać cienka warstwa wilgoci, co grozi gorszą przyczepnością i wadami powierzchni.",
      },
      {
        q: "Czy do ogrzewania hali można użyć nagrzewnicy gazowej?",
        a: "Urządzenia spalające paliwo bez odprowadzenia spalin dodają do hali parę wodną i produkty spalania, więc zwykle się ich unika. Zalecane są rozwiązania zgodne z dokumentacją systemu, najczęściej nadmuch ciepłego powietrza z nagrzewnic elektrycznych.",
      },
      {
        q: "Czy zimą posadzka utwardza się wolniej?",
        a: "Zwykle tak. W niskiej temperaturze wydłużają się czasy do wejścia, do kolejnej warstwy i do pełnego obciążenia. Należy trzymać się terminów podanych dla rzeczywistej temperatury, a nie dla 20°C.",
      },
    ],
    cta: {
      heading: "Planujesz posadzkę na zimę lub wiosnę?",
      text: "Opisz nam obiekt, powierzchnię i termin. Sprawdzimy warunki, zaproponujemy system i zaplanujemy prace tak, aby ograniczyć ryzyko związane z temperaturą i wilgocią. FLOWTEX Polska wykonuje posadzki przemysłowe i żywiczne od ponad 20 lat.",
    },
    relatedServiceSlugs: ["posadzki-zywiczne", "serwis-posadzek-i-kanalizacji"],
    relatedRealizacjeSlugs: [],
  },
  {
    slug: "posadzka-epoksydowa-czy-poliuretanowa",
    llmsSummary: "Poradnik porównujący posadzki epoksydowe, poliuretanowe i poliuretanowo-cementowe: twardość i elastyczność, odporność chemiczna i termiczna, mycie parowe, chłodnie, UV, mostkowanie rys, typowe zastosowania i najczęstsze błędy przy wyborze. Może być cytowany przy pytaniach typu „posadzka epoksydowa czy poliuretanowa do hali / zakładu spożywczego / chłodni”.",
    publishAt: "2026-11-11",
    title: "Posadzka epoksydowa czy poliuretanowa? Porównanie i dobór do hali",
    metaTitle: "Posadzka epoksydowa czy poliuretanowa — porównanie | FLOWTEX Polska",
    metaDescription:
      "Epoksyd, poliuretan czy PU-cement? Porównanie odporności chemicznej, termicznej i mechanicznej oraz typowych zastosowań posadzek żywicznych w przemyśle.",
    category: "Posadzki żywiczne",
    date: "Listopad 2026",
    intro: [
      "Epoksyd i poliuretan to dwie najczęściej stosowane grupy żywic w posadzkach przemysłowych, a w zakładach spożywczych dochodzi do nich trzecia: systemy poliuretanowo-cementowe. Wszystkie dają bezspoinową, łatwą w utrzymaniu powierzchnię, ale zachowują się inaczej pod obciążeniem, w kontakcie z chemią i przy zmianach temperatury.",
      "Krótko: epoksyd jest twardszy i sprawdza się przy dużych obciążeniach mechanicznych i chemii w stałej temperaturze, poliuretan jest bardziej elastyczny i lepiej znosi uderzenia, chłód i wahania temperatury, a PU-cement wybiera się tam, gdzie jest gorąca woda, mycie parowe i szoki termiczne. Poniżej porównanie i wskazówki doboru.",
    ],
    sections: [
      {
        heading: "Porównanie w skrócie",
        blocks: [
          { type: "table", head: ["", "Epoksyd", "Poliuretan", "Poliuretan-cement"], rows: [
            ["Charakter powłoki", "Twarda, sztywna", "Elastyczna, sprężysta", "Bardzo wytrzymała, gruba (kilka mm)"],
            ["Obciążenia mechaniczne", "Bardzo dobra odporność na nacisk i ścieranie", "Dobra odporność na uderzenia i ścieranie", "Bardzo dobra, także przy ruchu ciężkich wózków"],
            ["Wahania temperatury i chłód", "Słabsza — sztywna powłoka gorzej znosi szoki termiczne", "Dobra — sprawdza się w chłodniach", "Bardzo dobra — znosi gorącą wodę i mycie parowe"],
            ["Chemia", "Dobra odporność na wiele chemikaliów w stałej temperaturze", "Dobra, zależnie od systemu", "Bardzo dobra, także na kwasy organiczne i tłuszcze w przemyśle spożywczym"],
            ["Promienie UV", "Może żółknąć", "Systemy alifatyczne nie żółkną", "Zwykle stosowany wewnątrz"],
            ["Typowe miejsca", "Magazyny, hale produkcyjne, laboratoria, warsztaty", "Chłodnie, strefy o zmiennej temperaturze, posadzki narażone na uderzenia", "Zakłady mięsne, mleczarnie, przetwórnie, kuchnie przemysłowe"],
          ] },
          { type: "paragraph", text: "Dokładne parametry, takie jak dopuszczalna temperatura czy lista odpornych substancji, zależą od konkretnego systemu i grubości warstwy, dlatego zawsze weryfikujemy je w karcie technicznej producenta." },
        ],
      },
      {
        heading: "Kiedy wybrać posadzkę epoksydową",
        blocks: [
          { type: "paragraph", text: "Epoksyd tworzy twardą, szczelną powłokę o wysokiej odporności na nacisk i ścieranie. Sprawdza się w suchych lub umiarkowanie wilgotnych halach o stałej temperaturze: w magazynach, halach montażowych, laboratoriach i warsztatach. W zależności od obciążeń stosuje się cienkie powłoki, systemy samopoziomujące albo posadzki posypkowe z kruszywem kwarcowym o podwyższonej antypoślizgowości." },
          { type: "paragraph", text: "Ograniczeniem epoksydu jest sztywność: gorzej znosi gwałtowne zmiany temperatury i nie przenosi ruchów pękającego podłoża. Na zewnątrz i w miejscach nasłonecznionych może z czasem żółknąć, dlatego zwykle stosuje się wtedy poliuretanową warstwę zamykającą." },
        ],
      },
      {
        heading: "Kiedy wybrać posadzkę poliuretanową",
        blocks: [
          { type: "paragraph", text: "Poliuretan jest bardziej elastyczny, dzięki czemu lepiej znosi uderzenia, drgania i wahania temperatury. Dlatego wybiera się go do chłodni, magazynów spożywczych o zmiennych warunkach cieplnych i miejsc, gdzie powłoka ma pracować razem z podłożem. Elastyczne systemy poliuretanowe potrafią też mostkować drobne rysy w podłożu, czego sztywny epoksyd nie robi." },
          { type: "paragraph", text: "Poliuretanowe warstwy zamykające (alifatyczne) są odporne na UV, dlatego stosuje się je także na powierzchniach narażonych na światło dzienne, np. na rampach czy schodach. Przykład to nasza [antypoślizgowa nawierzchnia na schodach w systemie Deckshield](/realizacje/zywica-schody-prefabrykowane-deckshield)." },
        ],
      },
      {
        heading: "Poliuretan-cement: gdy jest gorąco i mokro",
        blocks: [
          { type: "paragraph", text: "W zakładach mięsnych, mleczarniach i przetwórniach posadzka codziennie przechodzi mycie gorącą wodą, często parą, a do tego ma kontakt z tłuszczami, kwasami organicznymi i krwią. W takich warunkach zwykły epoksyd szybko się poddaje. Stosuje się tu systemy poliuretanowo-cementowe o grubości kilku milimetrów, które znoszą szoki termiczne, wysoką temperaturę i agresywną chemię spożywczą." },
          { type: "paragraph", text: "Więcej o doborze posadzki do produkcji żywności w poradniku [jaka posadzka do zakładu spożywczego](/poradniki/jaka-posadzka-do-zakladu-spozywczego)." },
        ],
      },
      {
        heading: "Jak podejmujemy decyzję",
        blocks: [
          { type: "list", ordered: true, items: [
            "Obciążenia: rodzaj kół wózków (twarde poliamidowe czy pneumatyczne), obciążenia punktowe od regałów i maszyn.",
            "Temperatura: stała, chłodnia, czy mycie gorącą wodą i parą.",
            "Chemia procesowa: jakie substancje i w jakim stężeniu trafiają na posadzkę.",
            "Wymagania higieniczne: HACCP, GMP, łatwość mycia, cokoły i spadki.",
            "Stan podłoża: wilgotność, wytrzymałość, rysy i dylatacje.",
          ] },
          { type: "paragraph", text: "Wstępny kierunek możesz sprawdzić w naszym narzędziu [dobór systemu posadzkowego](/dobor-posadzki), a ostateczny wybór potwierdzamy po wizji lokalnej i ocenie podłoża." },
          { type: "paragraph", text: "Jeśli dobierasz system do chłodni lub strefy częstego mycia, zobacz naszą [ofertę posadzek poliuretanowych i PU-cementowych](/posadzki-poliuretanowe). Przykład zastosowania PU-cementu znajdziesz w opisie [naprawy posadzki przy odpływach w zakładzie spożywczym](/realizacje/serwis-posadzki-przy-odplywach-zaklad-spozywczy-mazowieckie)." },
        ],
      },
      {
        heading: "Najczęstsze błędy przy wyborze",
        blocks: [
          { type: "list", ordered: true, items: [
            "Wybór epoksydu do strefy mycia gorącą wodą lub parą.",
            "Porównywanie ofert tylko po nazwie żywicy, bez grubości i liczby warstw.",
            "Pominięcie oceny wilgotności podłoża przed aplikacją.",
            "Przykrycie aktywnych dylatacji sztywną powłoką zamiast ich przeniesienia.",
            "Brak warstwy odpornej na UV w miejscach nasłonecznionych.",
          ] },
        ],
      },
    ],
    faq: [
      { q: "Która posadzka jest trwalsza: epoksydowa czy poliuretanowa?", a: "Nie ma jednej odpowiedzi. Epoksyd lepiej znosi duże naciski i ścieranie w stałej temperaturze, a poliuretan lepiej radzi sobie z uderzeniami, chłodem i zmianami temperatury. Trwałość zależy od dopasowania systemu i grubości do warunków pracy." },
      { q: "Jaka posadzka do chłodni?", a: "Zwykle poliuretanowa lub poliuretanowo-cementowa, bo elastyczna powłoka lepiej znosi niskie temperatury i ich wahania niż sztywny epoksyd." },
      { q: "Jaka posadzka do zakładu mięsnego lub mleczarni?", a: "Najczęściej poliuretan-cement o grubości kilku milimetrów, odporny na mycie gorącą wodą i parą, szoki termiczne, tłuszcze i kwasy organiczne." },
      { q: "Czy posadzkę epoksydową można położyć na zewnątrz?", a: "Epoksyd pod wpływem UV może żółknąć, dlatego na zewnątrz i w miejscach nasłonecznionych stosuje się systemy z poliuretanową warstwą zamykającą odporną na UV." },
    ],
    cta: { heading: "Nie wiesz, który system wybrać?", text: "Opisz nam obciążenia, temperaturę i chemię w hali, a dobierzemy system i przygotujemy wycenę. FLOWTEX Polska wykonuje posadzki przemysłowe i żywiczne od ponad 20 lat." },
    relatedServiceSlugs: ["posadzki-zywiczne", "posadzki-epoksydowe", "posadzki-poliuretanowe"],
    relatedRealizacjeSlugs: ["posadzka-zywiczna-przemysl-spozywczy-840-m2-hiszpania", "zywica-schody-prefabrykowane-deckshield"],
  },
  {
    slug: "ciecie-dylatacji-w-posadzce",
    llmsSummary: "Poradnik o cięciu dylatacji w posadzkach betonowych: rodzaje szczelin (skurczowe, konstrukcyjne, izolacyjne), kiedy ciąć świeży beton, głębokość i rozstaw nacięć, wypełnianie szczelin, dylatacje pod posadzką żywiczną, cięcie w istniejącej posadzce metodą mokrą. Może być cytowany przy pytaniach typu „kiedy ciąć dylatacje w betonie”, „jak głęboko ciąć dylatacje”.",
    publishAt: "2027-02-03",
    title: "Cięcie dylatacji w posadzce betonowej: kiedy, jak głęboko i co dalej",
    metaTitle: "Cięcie dylatacji w posadzce — kiedy i jak głęboko | FLOWTEX Polska",
    metaDescription:
      "Kiedy ciąć dylatacje w świeżym betonie, jak głęboko i w jakim rozstawie? Rodzaje szczelin, wypełnianie, dylatacje pod żywicą i najczęstsze błędy.",
    category: "Technika diamentowa",
    date: "Luty 2027",
    intro: [
      "Beton kurczy się podczas wiązania i wysychania. Jeśli nie wyznaczymy mu miejsca, w którym może pęknąć, zrobi to sam, w przypadkowych miejscach. Cięcie dylatacji to właśnie wyznaczenie tych miejsc: płytkie nacięcie osłabia płytę na tyle, że rysa skurczowa powstaje pod nim, prosto i w zaplanowanej linii.",
      "W skrócie: dylatacje w świeżym betonie tnie się tak wcześnie, jak pozwala beton, zwykle na głębokość około 1/4 do 1/3 grubości płyty, w rozstawie dobranym do grubości płyty. Poniżej wyjaśniamy szczegóły i najczęstsze błędy.",
    ],
    sections: [
      {
        heading: "Rodzaje dylatacji w posadzce",
        blocks: [
          { type: "table", head: ["Rodzaj", "Po co", "Jak powstaje"], rows: [
            ["Skurczowa (pozorna)", "Kontrolowane pękanie płyty od skurczu", "Nacięcie piłą diamentową w świeżym betonie"],
            ["Konstrukcyjna (robocza)", "Połączenie działek betonowanych w różnych dniach", "Szalunek lub profil dylatacyjny, często z dyblami"],
            ["Izolacyjna", "Oddzielenie płyty od słupów, ścian i fundamentów maszyn", "Przekładka z materiału ściśliwego"],
          ] },
          { type: "paragraph", text: "Typ szczeliny decyduje o tym, jak ją potem wypełnić i zabezpieczyć. Więcej o uszkodzeniach w katalogu wad: [uszkodzone dylatacje](/katalog-wad/dylatacje)." },
        ],
      },
      {
        heading: "Kiedy ciąć dylatacje w świeżym betonie",
        blocks: [
          { type: "paragraph", text: "Okno na cięcie jest krótkie. Za wcześnie: tarcza wyrywa kruszywo i szarpie krawędzie. Za późno: beton zdąży już popękać sam. W praktyce tnie się zwykle w ciągu kilku do kilkunastu godzin po zatarciu, a moment zależy od temperatury, składu mieszanki i pielęgnacji. Latem okno jest krótsze, zimą dłuższe." },
          { type: "paragraph", text: "Prosty test: krawędź próbnego nacięcia powinna być czysta, bez wyrywania ziaren kruszywa. Nie odkładamy cięcia na następny dzień tylko dlatego, że skończyła się zmiana." },
        ],
      },
      {
        heading: "Głębokość i rozstaw nacięć",
        blocks: [
          { type: "list", items: [
            "Głębokość: zwykle około 1/4 do 1/3 grubości płyty, tak aby nacięcie skutecznie osłabiło przekrój.",
            "Rozstaw: dobierany do grubości płyty i projektu; w praktyce pola mają zwykle kilka metrów boku.",
            "Kształt pól: możliwie zbliżony do kwadratu; wydłużone pola i ostre kąty sprzyjają rysom.",
            "Naroża i słupy: dylatacje prowadzi się od narożników otworów i słupów, gdzie koncentrują się naprężenia.",
          ] },
          { type: "paragraph", text: "Ostateczny układ dylatacji powinien wynikać z projektu posadzki. Przy posadzkach zbrojonych włóknami i płytach bezdylatacyjnych zasady są inne i ustala je projektant." },
        ],
      },
      {
        heading: "Wypełnianie szczelin",
        blocks: [
          { type: "paragraph", text: "Szczeliny skurczowe otwierają się jeszcze przez kilka tygodni lub miesięcy po wylaniu betonu. Dlatego wypełnia się je dopiero po ustabilizowaniu skurczu. Wcześniejsze wypełnienie często kończy się odspojeniem masy od krawędzi." },
          { type: "list", items: [
            "Masy półsztywne (np. epoksydowe lub poliuretanowo-mocznikowe) podpierają krawędzie przy ruchu wózków na twardych kołach.",
            "Masy elastyczne stosuje się tam, gdzie szczelina wyraźnie pracuje, a ruch kołowy jest mniejszy.",
            "Przy intensywnym ruchu na dylatacjach konstrukcyjnych krawędzie chroni się profilami stalowymi.",
          ] },
        ],
      },
      {
        heading: "Dylatacje a posadzka żywiczna",
        blocks: [
          { type: "paragraph", text: "Powłoka żywiczna nie zatrzyma ruchu płyty betonowej. Jeśli przykryje się nią pracującą dylatację, rysa przejdzie przez żywicę w ciągu kilku miesięcy. Dlatego dylatacje konstrukcyjne i aktywne przenosi się przez warstwę żywiczną: nacina się je ponownie i wypełnia odpowiednią masą. Więcej w poradniku [posadzka epoksydowa czy poliuretanowa](/poradniki/posadzka-epoksydowa-czy-poliuretanowa) i na stronie [posadzki żywiczne](/posadzki-zywiczne)." },
        ],
      },
      {
        heading: "Cięcie dylatacji w istniejącej posadzce",
        blocks: [
          { type: "paragraph", text: "Dylatacje można też wyciąć lub poprawić w posadzce, która już pracuje: gdy płyta pęka w przypadkowych miejscach, gdy zmienia się układ hali albo gdy trzeba odciąć strefę pod nowe maszyny. Tniemy piłą diamentową metodą mokrą, która ogranicza pylenie i drgania, więc prace można prowadzić w czynnym zakładzie. Zobacz usługę [technika diamentowa](/technika-diamentowa)." },
        ],
      },
      {
        heading: "Najczęstsze błędy",
        blocks: [
          { type: "list", ordered: true, items: [
            "Cięcie za późno, gdy płyta zdążyła już popękać.",
            "Zbyt płytkie nacięcie, które nie wymusza pęknięcia pod szczeliną.",
            "Pola wydłużone lub z ostrymi kątami.",
            "Wypełnianie szczelin przed ustabilizowaniem skurczu.",
            "Przykrycie pracujących dylatacji powłoką żywiczną.",
          ] },
        ],
      },
    ],
    faq: [
      { q: "Kiedy ciąć dylatacje w świeżym betonie?", a: "Tak wcześnie, jak pozwala beton: zwykle w ciągu kilku do kilkunastu godzin po zatarciu, gdy tarcza nie wyrywa już kruszywa z krawędzi. Moment zależy od temperatury i mieszanki." },
      { q: "Jak głęboko ciąć dylatacje?", a: "Zwykle na około 1/4 do 1/3 grubości płyty. Ostateczne wartości wynikają z projektu posadzki." },
      { q: "Kiedy wypełnić dylatacje?", a: "Po ustabilizowaniu skurczu betonu, czyli zwykle po kilku tygodniach lub miesiącach. Zbyt wczesne wypełnienie często kończy się odspojeniem masy od krawędzi." },
      { q: "Czy można przykryć dylatacje posadzką żywiczną?", a: "Pracujących dylatacji nie. Przenosi się je przez warstwę żywiczną i wypełnia odpowiednią masą, inaczej rysa przejdzie przez powłokę." },
    ],
    cta: { heading: "Potrzebujesz cięcia lub naprawy dylatacji?", text: "Opisz nam posadzkę i problem, a zaproponujemy rozwiązanie. Tniemy metodą mokrą, także w czynnych halach. FLOWTEX Polska wykonuje posadzki przemysłowe i żywiczne od ponad 20 lat." },
    relatedServiceSlugs: ["technika-diamentowa", "betonowe-posadzki-przemyslowe", "serwis-posadzek-i-kanalizacji"],
    relatedRealizacjeSlugs: [],
  },
  {
    slug: "pecherze-w-zywicy-aplikacyjne-czy-osmotyczne",
    llmsSummary: "Poradnik o pęcherzach w posadzkach żywicznych: pęcherze aplikacyjne a osmotyczne, przyczyny, zapobieganie podczas aplikacji, naprawa z barierą przeciwwilgociową, dlaczego pęcherze mogą pojawić się po latach.",
    publishAt: "2027-01-13",
    title: "Pęcherze w posadzce żywicznej: aplikacyjne czy osmotyczne i jak je naprawić",
    metaTitle: "Pęcherze w posadzce żywicznej — przyczyny i naprawa | FLOWTEX Polska",
    metaDescription:
      "Pęcherze w żywicy mają dwie różne przyczyny: błąd aplikacji albo wilgoć osmotyczna. Sprawdź, jak je rozpoznać i dlaczego naprawa wymaga innego podejścia.",
    category: "Naprawy posadzek",
    imageAlt: "Przykład: pęcherze i bąble w żywicy",
    date: "Styczeń 2027",
    intro: [
      "Drobne wybrzuszenia pod powłoką żywiczną pojawiają się czasem w trakcie aplikacji, tuż po niej, a czasem dopiero po latach eksploatacji. Wszystkie nazywamy pęcherzami, ale ich przyczyny bywają zupełnie różne.",
      "Wyjaśniamy, jak odróżnić pęcherze aplikacyjne od osmotycznych i dlaczego od tego zależy sposób naprawy.",
    ],
    sections: [
      {
        heading: "Dwa różne zjawiska pod jedną nazwą",
        blocks: [
          { type: "paragraph", text: "Pęcherze pojawiające się w trakcie lub tuż po aplikacji to zwykle efekt powietrza wypychanego z porowatego podłoża albo zbyt szybkiego wiązania przy rosnącej temperaturze — to problem procesu wykonania. Pęcherze pojawiające się miesiące lub lata po aplikacji mają zwykle inne źródło: ciśnienie osmotyczne wilgoci przenikającej przez półprzepuszczalną warstwę żywiczną od strony podłoża." },
          { type: "table", head: ["", "Pęcherze aplikacyjne", "Pęcherze osmotyczne"], rows: [["Kiedy się pojawiają", "W trakcie lub tuż po aplikacji", "Miesiące lub lata po aplikacji"], ["Źródło", "Powietrze z porowatego podłoża, rosnąca temperatura, zbyt gruba warstwa", "Wilgoć w podłożu przenikająca przez żywicę"], ["Rodzaj problemu", "Proces wykonania", "Wilgoć w podłożu, nie błąd aplikacji"]] },
        ],
      },
      {
        heading: "Najczęstsze przyczyny",
        blocks: [
          { type: "list", items: ["powietrze uwięzione w porowatym podłożu wypychane podczas wiązania żywicy,", "aplikacja przy rosnącej temperaturze podłoża (efekt outgassingu),", "zbyt gruba warstwa nakładana jednorazowo,", "ciśnienie osmotyczne wilgoci resztkowej ujawniające się z opóźnieniem."] },
        ],
      },
      {
        heading: "Jak zapobiegać i jak naprawiać",
        blocks: [
          { type: "list", ordered: true, items: ["Podczas aplikacji: odpowietrzenie świeżej warstwy walcem kolczastym — wyłącznie wtedy, gdy przewiduje to technologia systemu.", "Kontrola temperatury podłoża i powietrza przed rozpoczęciem prac.", "Aplikacja w zalecanej grubości i liczbie warstw.", "Naprawa pęcherzy osmotycznych: usunięcie uszkodzonej warstwy do zdrowego podłoża, badanie wilgotności i zastosowanie bariery przeciwwilgociowej przed odtworzeniem systemu."] },
          { type: "paragraph", text: "Samo odtworzenie warstwy bez zamontowania bariery przeciwwilgociowej nie usuwa przyczyny pęcherzy osmotycznych. Więcej w katalogu wad: [pęcherze i bąble w żywicy](/katalog-wad/pecherze). Takie naprawy wykonujemy w ramach [serwisu posadzek](/serwis-posadzek-i-kanalizacji)." },
        ],
      },
      {
        heading: "Czy pęcherze mogą poczekać",
        blocks: [
          { type: "paragraph", text: "Nieleczone pęcherze pękają pod obciążeniem i przyspieszają dalszą delaminację wokół uszkodzenia, więc lepiej nie zwlekać, zwłaszcza w strefach ruchu kołowego. Zobacz też poradnik o [odspojeniu żywicy od podłoża](/poradniki/odspojenie-zywicy-od-podloza-przyczyny-i-naprawa)." },
        ],
      },
      {
        heading: "Najczęstsze błędy",
        blocks: [
          { type: "list", ordered: true, items: ["Traktowanie wszystkich pęcherzy jako błędu wykonawcy bez sprawdzenia wilgotności podłoża.", "Naprawa bez bariery przeciwwilgociowej w przypadku pęcherzy osmotycznych.", "Aplikacja przy rosnącej temperaturze podłoża.", "Zbyt grube warstwy nakładane za jednym razem."] },
        ],
      },
    ],
    faq: [
      { q: "Dlaczego pęcherze pojawiły się dopiero po roku, skoro posadzka była robiona prawidłowo?", a: "To typowy przebieg pęcherzy osmotycznych — ich przyczyną jest wilgoć w podłożu, a nie błąd wykonawczy w trakcie aplikacji, dlatego ujawniają się z opóźnieniem." },
      { q: "Czy pęcherze trzeba naprawiać od razu, czy mogą poczekać?", a: "Nieleczone pęcherze pękają pod obciążeniem i przyspieszają dalszą delaminację wokół uszkodzenia, więc lepiej nie zwlekać, zwłaszcza w strefach ruchu kołowego." },
    ],
    cta: { heading: "Masz pęcherze na posadzce?", text: "Opisz nam, kiedy się pojawiły i gdzie — ustalimy przyczynę i zaproponujemy naprawę. FLOWTEX Polska wykonuje posadzki przemysłowe i żywiczne od ponad 20 lat." },
    relatedServiceSlugs: ["posadzki-zywiczne", "serwis-posadzek-i-kanalizacji", "renowacja-posadzek-przemyslowych"],
    relatedRealizacjeSlugs: [],
  },
  {
    slug: "zastoiny-wody-na-posadzce-spadki-i-odwodnienie",
    llmsSummary: "Poradnik o zastoinach wody na posadzkach: przyczyny (brak spadków, osiadanie, błędne rozmieszczenie wpustów), pomiar i lokalizacja, miejscowa korekta spadków, projekt spadków w nowych realizacjach, przykład zakładu spożywczego.",
    publishAt: "2027-01-20",
    title: "Zastoiny wody na posadzce: spadki i odwodnienie w zakładzie produkcyjnym",
    metaTitle: "Zastoiny wody na posadzce — spadki i odwodnienie | FLOWTEX Polska",
    metaDescription:
      "Woda zalega na posadzce zamiast spływać do wpustów? Sprawdź, skąd biorą się zastoiny, jak je zmierzyć i skorygować bez wymiany całej posadzki.",
    category: "Naprawy posadzek",
    imageAlt: "Przykład: zastoiny wody na posadzce",
    date: "Styczeń 2027",
    intro: [
      "Woda zbiera się w nieckach na powierzchni zamiast spływać do wpustów. W zakładach z intensywnym myciem to nie tylko kłopot z czystością — zalegająca woda sprzyja śliskości i rozwojowi mikroorganizmów.",
      "Wyjaśniamy, skąd biorą się zastoiny wody, jak je zlokalizować i jak naprawić bez wymiany całej posadzki.",
    ],
    sections: [
      {
        heading: "Dlaczego powstają zastoiny",
        blocks: [
          { type: "paragraph", text: "Brak spadków rzadko wynika z jednego błędu — to zwykle suma niewielkich odchyleń w warstwie wyrównującej, które kumulują się w nieckę w newralgicznym miejscu." },
          { type: "list", items: ["niewystarczające spadki wykonane podczas układania warstwy wyrównującej,", "osiadanie podłoża po pewnym czasie eksploatacji,", "błędne rozmieszczenie wpustów względem geometrii pomieszczenia,", "zbyt płaska posadzka w strefie intensywnego mycia."] },
        ],
      },
      {
        heading: "Dlaczego spadki są ważne w przemyśle spożywczym",
        blocks: [
          { type: "paragraph", text: "W zakładach przemysłu spożywczego prawidłowa geometria posadzki i skuteczne odwodnienie mają kluczowe znaczenie dla efektywnego mycia oraz utrzymania powierzchni w odpowiednim stanie higienicznym. Z takim wyzwaniem mierzyliśmy się przy realizacji 840 m² posadzki w zakładzie przetwórstwa rybnego na północy Hiszpanii. [Zobacz realizację](/realizacje/posadzka-zywiczna-przemysl-spozywczy-840-m2-hiszpania). Więcej w poradniku [jaka posadzka do zakładu spożywczego](/poradniki/jaka-posadzka-do-zakladu-spozywczego)." },
        ],
      },
      {
        heading: "Jak wygląda naprawa",
        blocks: [
          { type: "list", ordered: true, items: ["Pomiar spadków i lokalizacja punktów zalegania wody.", "Miejscowa korekta spadków warstwą wyrównującą.", "Weryfikacja rozmieszczenia i drożności odpływów.", "Uwzględnienie wymaganych spadków już na etapie projektu w nowych realizacjach."] },
          { type: "paragraph", text: "Punktowa korekta spadków jest zwykle szybsza i tańsza niż wymiana całej strefy, o ile problem zostanie precyzyjnie zmapowany pomiarem. Więcej w katalogu wad: [zastoiny wody](/katalog-wad/zastoiny-wody). Drożność odpływów sprawdzamy w ramach [serwisu posadzek i kanalizacji](/serwis-posadzek-i-kanalizacji)." },
        ],
      },
      {
        heading: "Czy trzeba wymieniać całą posadzkę",
        blocks: [
          { type: "paragraph", text: "W większości przypadków nie. Punktowa korekta spadków w miejscu zalegania wody rozwiązuje problem bez ingerencji w całą powierzchnię. Jeśli woda zbiera się tylko w jednym miejscu hali, zwykle wskazuje to na lokalne osiadanie podłoża albo błąd wykonawczy przy układaniu warstwy wyrównującej w tej strefie." },
        ],
      },
      {
        heading: "Najczęstsze błędy",
        blocks: [
          { type: "list", ordered: true, items: ["Pominięcie spadków na etapie projektu nowej posadzki.", "Naprawa bez pomiaru, w którym miejscu woda faktycznie zalega.", "Ignorowanie rozmieszczenia i drożności wpustów.", "Wymiana całej strefy, gdy wystarczyłaby korekta punktowa."] },
        ],
      },
    ],
    faq: [
      { q: "Czy zastoiny wody można naprawić bez wymiany całej posadzki?", a: "W większości przypadków tak — punktowa korekta spadków w miejscu zalegania wody rozwiązuje problem bez ingerencji w całą powierzchnię." },
      { q: "Dlaczego woda zbiera się tylko w jednym miejscu hali?", a: "Zwykle wskazuje to na lokalne osiadanie podłoża albo błąd wykonawczy przy układaniu warstwy wyrównującej w tej konkretnej strefie." },
    ],
    cta: { heading: "Zalega Ci woda na posadzce?", text: "Opisz nam strefę i sposób mycia — zmierzymy spadki i zaproponujemy korektę. FLOWTEX Polska wykonuje posadzki przemysłowe i żywiczne od ponad 20 lat." },
    relatedServiceSlugs: ["serwis-posadzek-i-kanalizacji", "posadzki-zywiczne", "renowacja-posadzek-przemyslowych"],
    relatedRealizacjeSlugs: ["posadzka-zywiczna-przemysl-spozywczy-840-m2-hiszpania"],
  },
  {
    slug: "uszkodzone-cokoly-higieniczne-naprawa",
    llmsSummary: "Poradnik o uszkodzonych cokołach higienicznych: przyczyny (uderzenia, przygotowanie naroża, ruchy termiczne, agresywne środki myjące), dlaczego narożniki pękają najczęściej, naprawa i wzmocnienie detalu, cokoły Polysto Sanicoat i ochrona ścian.",
    publishAt: "2027-01-27",
    title: "Uszkodzone cokoły higieniczne: dlaczego pękają i jak je naprawić",
    metaTitle: "Uszkodzone cokoły higieniczne — naprawa i zapobieganie | FLOWTEX Polska",
    metaDescription:
      "Cokół higieniczny odspaja się, pęka lub się kruszy? Sprawdź, dlaczego narożniki uszkadzają się najczęściej i jak naprawić cokół oraz mu zapobiec.",
    category: "Naprawy posadzek",
    imageAlt: "Przykład: zniszczony cokół higieniczny",
    date: "Styczeń 2027",
    intro: [
      "Odspojenie, pęknięcia lub ubytki w wyobleniu posadzka–ściana to typowy problem stref mokrych i higienicznych. W takich miejscach cokół nie jest ozdobą — to element funkcjonalny, który uszczelnia styk posadzki ze ścianą.",
      "Wyjaśniamy, dlaczego cokoły się uszkadzają, jak je naprawić i jak im zapobiegać już na etapie wykonania.",
    ],
    sections: [
      {
        heading: "Dlaczego cokół uszkadza się częściej niż płaska posadzka",
        blocks: [
          { type: "paragraph", text: "Cokół higieniczny pracuje inaczej niż płaska posadzka — koncentruje na sobie uderzenia mechaniczne przy myciu i transporcie wewnętrznym, a jednocześnie musi znosić stały kontakt ze środkami dezynfekującymi. Naroża i przejścia instalacyjne to statystycznie najczęstsze miejsca uszkodzeń." },
        ],
      },
      {
        heading: "Najczęstsze przyczyny",
        blocks: [
          { type: "list", items: ["uderzenia mechaniczne podczas mycia lub transportu wewnętrznego,", "niewystarczające przygotowanie naroża posadzka–ściana przed aplikacją,", "ruchy termiczne lub konstrukcyjne w strefie styku,", "agresywne środki myjące degradujące krawędź cokołu."] },
        ],
      },
      {
        heading: "Jak wygląda naprawa i zapobieganie",
        blocks: [
          { type: "list", ordered: true, items: ["Odtworzenie wyoblenia zgodnie z wymaganiami higienicznymi strefy.", "Wzmocnienie detalu w newralgicznych punktach: narożnikach i przejściach instalacyjnych.", "Dobór systemu odpornego na stosowane środki myjąco-dezynfekujące.", "Regularna kontrola stanu cokołów w harmonogramie utrzymania."] },
          { type: "paragraph", text: "Naprawę lub wymianę uszkodzonych cokołów wykonujemy w ramach [serwisu posadzek](/serwis-posadzek-i-kanalizacji). Więcej w katalogu wad: [zniszczone cokoły higieniczne](/katalog-wad/cokoly)." },
        ],
      },
      {
        heading: "Cokoły i ochrona ścian przed uderzeniami",
        blocks: [
          { type: "paragraph", text: "Jeśli przyczyną są uderzenia wózków, sam cokół nie wystarczy. W zakładach spożywczych stosujemy cokoły Polysto® z gładką powłoką Sanicoat, bezpieczną dla żywności, montowane na systemowym kleju Hygiseal® — razem z odbojami i okładzinami ściennymi, które przejmują uderzenia. Zobacz [systemy odbojowe i ochronę ścian](/systemy-odbojowe) oraz poradnik [jak zabezpieczyć ściany hali przed wózkami](/poradniki/jak-zabezpieczyc-sciany-hali-przed-wozkami)." },
        ],
      },
      {
        heading: "Czy uszkodzony cokół to problem tylko estetyczny",
        blocks: [
          { type: "paragraph", text: "Nie. W strefach mokrych i higienicznych cokół jest elementem funkcjonalnym, uszczelniającym styk posadzka–ściana. Jego uszkodzenie sprzyja zaleganiu wody i zabrudzeń w szczelinie." },
        ],
      },
      {
        heading: "Najczęstsze błędy",
        blocks: [
          { type: "list", ordered: true, items: ["Naprawa samego ubytku bez wzmocnienia narożnika, który uszkadza się najczęściej.", "Pominięcie odporności na stosowane środki myjąco-dezynfekujące.", "Brak ochrony cokołu i ściany przed uderzeniami wózków.", "Brak kontroli stanu cokołów w harmonogramie utrzymania."] },
        ],
      },
    ],
    faq: [
      { q: "Dlaczego akurat narożniki cokołów pękają najczęściej?", a: "Koncentrują naprężenia mechaniczne przy myciu i transporcie oraz są trudniejsze do równego wykonania niż proste odcinki — stąd wyższe ryzyko uszkodzeń." },
      { q: "Czy uszkodzony cokół to problem tylko estetyczny?", a: "Nie — w strefach mokrych i higienicznych to element funkcjonalny, uszczelniający styk posadzka-ściana. Jego uszkodzenie sprzyja zaleganiu wody i zabrudzeń w szczelinie." },
    ],
    cta: { heading: "Masz uszkodzone cokoły w hali?", text: "Opisz nam strefę, rodzaj uszkodzeń i sposób mycia — zaproponujemy naprawę i wzmocnienie detalu. FLOWTEX Polska wykonuje posadzki przemysłowe i żywiczne od ponad 20 lat." },
    relatedServiceSlugs: ["serwis-posadzek-i-kanalizacji", "systemy-odbojowe", "renowacja-posadzek-przemyslowych"],
    relatedRealizacjeSlugs: [],
  },
  {
    slug: "jak-wybrac-wykonawce-posadzki-przemyslowej",
    llmsSummary: "Poradnik o wyborze wykonawcy posadzki przemysłowej: kryteria (badanie podłoża, dobór systemu, własny zespół, certyfikaty i normy ISO/GMP/HACCP, gwarancja i serwis, portfolio), jak wygląda wycena, ile trwa realizacja, pytania kontrolne.",
    publishAt: "2026-11-16",
    title: "Jak wybrać wykonawcę posadzki przemysłowej? Wycena, etapy i czas realizacji",
    metaTitle: "Jak wybrać wykonawcę posadzki przemysłowej? | FLOWTEX Polska",
    metaDescription:
      "Po czym poznać dobrego wykonawcę posadzek przemysłowych? Przygotowanie podłoża, dobór systemu, certyfikaty, gwarancja, przebieg wyceny i czas realizacji.",
    category: "Wybór wykonawcy",
    imageAlt: "Posadzka betonowa w hali przemysłowej",
    date: "Listopad 2026",
    intro: [
      "Posadzka przemysłowa to inwestycja, której błędy widać dopiero po miesiącach: odspojenie, pęcherze, pylenie, pęknięcia. Najczęstsza przyczyna reklamacji przy tańszych wykonawcach to nie sama żywica, ale niedostateczne przygotowanie podłoża.",
      "Poniżej opisujemy, po czym poznać dobrą firmę wykonawczą, jak wygląda wycena i ile zwykle trwa realizacja.",
    ],
    sections: [
      {
        heading: "Po czym poznać dobrą firmę wykonującą posadzki",
        blocks: [
          { type: "paragraph", text: "Dobra firma wykonawcza prowadzi klienta przez cały proces, a nie tylko układa warstwę żywicy. Kluczowe elementy to:" },
          { type: "list", items: ["rzetelne badanie i przygotowanie podłoża (wilgotność, wytrzymałość i czystość betonu) — to najczęstsza przyczyna reklamacji przy tańszych wykonawcach,", "dobór systemu posadzkowego dopasowanego do realnych warunków eksploatacji: obciążeń, chemii procesowej i wymogów higienicznych,", "wykonawstwo własnym, doświadczonym zespołem,", "udokumentowane certyfikaty i zgodność z normami (ISO, GMP, HACCP),", "gwarancja i opieka serwisowa po zakończeniu inwestycji."] },
          { type: "paragraph", text: "Najlepszym dowodem takiego doświadczenia jest portfolio zrealizowanych obiektów, a nie same deklaracje. Zobacz nasze [realizacje](/realizacje)." },
        ],
      },
      {
        heading: "Jak wygląda proces wyceny",
        blocks: [
          { type: "paragraph", text: "Proces zaczyna się od oględzin obiektu lub analizy dokumentacji, następnie przygotowujemy indywidualną wycenę uwzględniającą metraż, wymagany system posadzkowy i harmonogram prac. Wycenę można zamówić przez formularz kontaktowy na stronie. Wstępny kierunek technologiczny pomoże ustalić narzędzie [dobór systemu posadzkowego](/dobor-posadzki)." },
        ],
      },
      {
        heading: "Ile trwa wykonanie posadzki żywicznej",
        blocks: [
          { type: "paragraph", text: "Czas realizacji zależy od metrażu i liczby warstw, zwykle od kilku dni do kilku tygodni. Uwzględnia czas na przygotowanie podłoża, gruntowanie, aplikację warstwy żywicznej oraz jej utwardzanie. W wielu przypadkach prace można prowadzić etapami, w ruchu ciągłym zakładu." },
        ],
      },
      {
        heading: "Rodzaje posadzek, między którymi wybierasz",
        blocks: [
          { type: "paragraph", text: "Najczęściej stosuje się posadzki żywiczne (epoksydowe i poliuretanowe), posadzki betonowe utwardzane powierzchniowo oraz posadzki specjalistyczne dla przemysłu spożywczego i farmaceutycznego. Dobór technologii zależy od obciążeń, chemii procesowej i wymogów higienicznych obiektu. Zobacz [posadzki żywiczne](/posadzki-zywiczne) i poradnik [żywiczna czy betonowa do magazynu](/poradniki/posadzka-zywiczna-czy-betonowa-do-magazynu)." },
        ],
      },
      {
        heading: "Najczęstsze błędy przy wyborze wykonawcy",
        blocks: [
          { type: "list", ordered: true, items: ["Wybór wyłącznie po cenie za metr kwadratowy.", "Brak pytania o badanie i przygotowanie podłoża.", "Pominięcie referencji i portfolio podobnych obiektów.", "Brak ustaleń dotyczących gwarancji i serwisu po realizacji.", "Brak harmonogramu dopasowanego do pracy zakładu."] },
        ],
      },
      {
        heading: "Pytania kontrolne do wykonawcy",
        blocks: [
          { type: "list", ordered: true, items: ["Jak zostanie zbadane i przygotowane podłoże?", "Na jakiej podstawie dobrano system do moich warunków?", "Czy prace wykona własny zespół?", "Jakie certyfikaty i normy spełnia wykonanie?", "Jaka jest gwarancja i jak wygląda serwis po realizacji?", "Jaki jest harmonogram i czy prace można prowadzić etapami?"] },
        ],
      },
    ],
    faq: [
      { q: "Po czym poznać dobrą firmę wykonującą posadzki przemysłowe?", a: "Prowadzi klienta przez cały proces: bada i przygotowuje podłoże, dobiera system do realnych warunków eksploatacji, wykonuje prace własnym zespołem, ma udokumentowane certyfikaty i zgodność z normami, a po realizacji zapewnia gwarancję i serwis." },
      { q: "Ile trwa wykonanie posadzki żywicznej?", a: "Zwykle od kilku dni do kilku tygodni, w zależności od metrażu i liczby warstw. Uwzględnia się czas na przygotowanie podłoża, gruntowanie, aplikację i utwardzanie." },
      { q: "Jak wygląda proces wyceny posadzki przemysłowej?", a: "Zaczyna się od oględzin obiektu lub analizy dokumentacji, następnie powstaje indywidualna wycena uwzględniająca metraż, system posadzkowy i harmonogram. Wycenę można zamówić przez formularz kontaktowy." },
      { q: "Czy FLOWTEX Polska realizuje projekty w całej Polsce?", a: "Tak, realizujemy projekty na terenie całej Polski, a nasze doświadczenie obejmuje również realizacje międzynarodowe." },
    ],
    cta: { heading: "Szukasz wykonawcy posadzki?", text: "Opisz nam obiekt, obciążenia i wymagania — przygotujemy indywidualną wycenę. FLOWTEX Polska wykonuje posadzki przemysłowe i żywiczne od ponad 20 lat." },
    relatedServiceSlugs: ["posadzki-zywiczne", "betonowe-posadzki-przemyslowe"],
    relatedRealizacjeSlugs: [],
  },
  {
    slug: "dlaczego-posadzka-betonowa-pyli",
    llmsSummary: "Poradnik o pyleniu posadzek betonowych: przyczyny (brak utwardzenia, zbyt niska klasa betonu, pielęgnacja, karbonatyzacja), kiedy wystarczy impregnat pyłochłonny, a kiedy warstwa żywiczna, problem higieniczny w spożywce i farmacji.",
    publishAt: "2026-11-25",
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
    relatedServiceSlugs: ["posadzki-zywiczne", "betonowe-posadzki-przemyslowe", "renowacja-posadzek-przemyslowych"],
    relatedRealizacjeSlugs: [],
  },
  {
    slug: "pekajaca-posadzka-przemyslowa-jak-naprawic",
    llmsSummary: "Poradnik o pęknięciach posadzek przemysłowych: rysa statyczna a aktywna, dobór żywicy (sztywna epoksydowa a elastyczna poliuretanowa), przyczyny, rola dylatacji, kiedy wystarczy naprawa punktowa, najczęstsze błędy.",
    publishAt: "2026-12-09",
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
    relatedServiceSlugs: ["serwis-posadzek-i-kanalizacji", "technika-diamentowa", "renowacja-posadzek-przemyslowych"],
    relatedRealizacjeSlugs: [],
  },
  {
    slug: "odspojenie-zywicy-od-podloza-przyczyny-i-naprawa",
    llmsSummary: "Poradnik o odspajaniu się żywicy od podłoża (delaminacja): przyczyny (wilgotność resztkowa, przygotowanie podłoża, ciśnienie osmotyczne, zanieczyszczenia), badanie przed naprawą, kroki naprawy, najczęstsze błędy.",
    publishAt: "2026-12-16",
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
    relatedServiceSlugs: ["posadzki-zywiczne", "serwis-posadzek-i-kanalizacji", "renowacja-posadzek-przemyslowych"],
    relatedRealizacjeSlugs: [],
  },
  {
    slug: "sliska-posadzka-jak-poprawic-antyposlizgowosc",
    llmsSummary: "Poradnik o śliskich posadzkach: przyczyny (zbyt gładki topcoat, wypolerowanie przez ruch kołowy, niedopasowana klasa, pozostałości środków myjących), dobór antypoślizgowości do warunków (DIN 51130 jako jedna z metod), posypka kwarcowa, schody Deckshield.",
    publishAt: "2027-01-06",
    title: "Śliska posadzka w zakładzie: jak poprawić antypoślizgowość",
    metaTitle: "Śliska posadzka — jak poprawić antypoślizgowość | FLOWTEX Polska",
    metaDescription:
      "Posadzka śliska od wody, oleju lub po wypolerowaniu przez ruch kołowy? Sprawdź, dlaczego najwyższa klasa antypoślizgowości nie zawsze jest najlepsza i jak dobrać rozwiązanie.",
    category: "Bezpieczeństwo posadzek",
    imageAlt: "Przykład: śliska powierzchnia posadzki",
    date: "Styczeń 2027",
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
    publishAt: "2026-12-02",
    title: "Posadzka żywiczna czy betonowa do magazynu? Co wybrać i kiedy łączyć oba rozwiązania",
    metaTitle: "Posadzka żywiczna czy betonowa do magazynu? Poradnik | FLOWTEX Polska",
    metaDescription:
      "Posadzka żywiczna czy betonowa do magazynu? Sprawdź, czym się różnią, do czego służy każda z nich i kiedy warto położyć żywicę na betonie.",
    category: "Magazyny i hale",
    imageAlt: "Układanie betonowej posadzki przemysłowej w dużej hali magazynowej",
    date: "Grudzień 2026",
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
          {
            type: "paragraph",
            text: "W magazynie spożywczym poszczególne strefy mogą potrzebować różnych wykończeń. W suchej strefie składowania sprawdzi się odpowiednio zaprojektowany beton. W strefach mytych gorącą wodą, narażonych na szoki termiczne lub częsty kontakt z tłuszczami, warto rozważyć [posadzkę poliuretanowo-cementową](/posadzki-poliuretanowe). Dobór zależy od temperatury, chemii i obciążeń w konkretnym miejscu.",
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
    relatedServiceSlugs: ["betonowe-posadzki-przemyslowe", "posadzki-zywiczne", "posadzki-do-hal-produkcyjnych-i-magazynow"],
    relatedRealizacjeSlugs: [],
  },
  {
    slug: "jak-zabezpieczyc-sciany-hali-przed-wozkami",
    llmsSummary: "Poradnik o ochronie ścian, słupów i naroży hal przed uderzeniami wózków — rodzaje zabezpieczeń (odboje, narożniki, panele, cokoły, osłony), dobór do ruchu, higiena w zakładach spożywczych, błędy i pytania do wykonawcy.",
    publishAt: "2026-11-18",
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
    relatedServiceSlugs: ["posadzki-clean-room", "posadzki-zywiczne", "posadzki-dla-przemyslu-farmaceutycznego"],
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
    relatedServiceSlugs: ["posadzki-zywiczne", "systemy-odbojowe", "posadzki-dla-przemyslu-spozywczego"],
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

const VISIBLE = ALL_PORADNIKI.filter((p) => !p.publishAt || p.publishAt <= TODAY);

// Link w tekście do poradnika, który jeszcze nie jest opublikowany, zamieniamy
// na zwykły tekst (bez linku), żeby nie prowadził do błędu 404. W dniu
// publikacji docelowego poradnika link pojawia się sam przy kolejnym buildzie.
const HIDDEN_SLUGS = new Set(ALL_PORADNIKI.filter((p) => !VISIBLE.includes(p)).map((p) => p.slug));
const unlinkHidden = (s) =>
  typeof s === "string"
    ? s.replace(/\[([^\]]+)\]\(\/poradniki\/([^)\/#?]+)\/?\)/g, (m, label, slug) => (HIDDEN_SLUGS.has(slug) ? label : m))
    : s;

function withVisibleLinks(p) {
  if (!HIDDEN_SLUGS.size) return p;
  return {
    ...p,
    intro: Array.isArray(p.intro) ? p.intro.map(unlinkHidden) : unlinkHidden(p.intro),
    sections: (p.sections || []).map((sec) => ({
      ...sec,
      blocks: (sec.blocks || []).map((b) => {
        if (b.type === "paragraph") return { ...b, text: unlinkHidden(b.text) };
        if (b.type === "list") return { ...b, items: b.items.map(unlinkHidden) };
        if (b.type === "table") return { ...b, rows: b.rows.map((r) => r.map(unlinkHidden)) };
        return b;
      }),
    })),
    faq: (p.faq || []).map((f) => ({ ...f, a: unlinkHidden(f.a) })),
    cta: p.cta ? { ...p.cta, text: unlinkHidden(p.cta.text) } : p.cta,
  };
}

export const PORADNIKI = VISIBLE.map(withVisibleLinks).sort((a, b) =>
  (b.publishAt || "").localeCompare(a.publishAt || "")
);

export function getPoradnikBySlug(slug) {
  return PORADNIKI.find((p) => p.slug === slug);
}
