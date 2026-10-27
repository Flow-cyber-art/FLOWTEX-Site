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
