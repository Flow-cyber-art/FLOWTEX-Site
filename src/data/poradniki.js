/*
  Każdy wpis = jeden poradnik pod adresem /poradniki/{slug}. Najnowsze wpisy
  dopisuj na GÓRZE tablicy.

  Pola:
  - zdjęcie: plik src/assets/poradniki/{slug}.webp (opcjonalnie imageAlt)
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
export const PORADNIKI = [
  {
    slug: "jaka-posadzka-do-zakladu-spozywczego",
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

export function getPoradnikBySlug(slug) {
  return PORADNIKI.find((p) => p.slug === slug);
}
