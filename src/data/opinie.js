/*
  Opinie klientów z profilu FLOWTEX Polska w Google (Mapy Google).
  Zasady:
  - tekst przepisany BEZ ZMIAN (wolno najwyżej skrócić wielokropkiem),
  - autor: imię i pierwsza litera nazwiska (zgoda autora dotyczyła publikacji
    w Google, więc nie powielamy pełnych nazwisk),
  - rating: ocena w gwiazdkach (1–5), taka jak w Google,
  - serviceSlugs: na których stronach usług opinia ma się pokazać
    (slugi z services.js / service-pages.js); strona główna pokazuje wszystkie.
  Celowo BEZ danych strukturalnych Review/AggregateRating — Google nie pokazuje
  gwiazdek dla opinii, które firma publikuje o sobie na własnej stronie.
*/
export const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/place/?q=place_id:ChIJNacXGtWMHkcRj4L0IyaJbmc";

export const OPINIE = [
  {
    author: "Bartosz F.",
    rating: 5,
    date: "Listopad 2026",
    topic: "Posadzka ESD",
    text: "Miałem okazję korzystać z usług FLOWTEX Polska w poprzedniej firmie przy realizacji posadzki ESD. Prace zostały wykonane rzetelnie i terminowo, a całość obejmowała również niezbędne pomiary i weryfikację parametrów posadzki. Dobra organizacja, profesjonalne podejście i sprawna realizacja. Zdecydowanie polecam!",
    serviceSlugs: ["posadzki-esd"],
  },
  {
    author: "Krzysiek N.",
    rating: 5,
    date: "Listopad 2026",
    topic: "Posadzka pod maszyny przemysłowe",
    text: "Bardzo dobra współpraca przy przygotowaniu i wykonaniu posadzki pod maszyny przemysłowe. Widać doświadczenie w realizacjach dla przemysłu. Ważne było dla nas odpowiednie przygotowanie podłoża, wytrzymałość nawierzchni i dotrzymanie harmonogramu. FLOWTEX Polska wywiązał się z zadania.",
    serviceSlugs: ["posadzki-do-hal-produkcyjnych-i-magazynow", "betonowe-posadzki-przemyslowe"],
  },
  {
    author: "Jakub",
    rating: 5,
    date: "Listopad 2026",
    topic: "Naprawa posadzki przemysłowej",
    text: "Zleciliśmy naprawę istniejącej posadzki przemysłowej. Problem został właściwie oceniony, a prace wykonane solidnie i bez zbędnego komplikowania organizacji pracy zakładu. Dobry kontakt i profesjonalna obsługa.",
    serviceSlugs: ["renowacja-posadzek-przemyslowych", "serwis-posadzek-i-kanalizacji"],
  },
];

export const getOpinieForService = (slug) => OPINIE.filter((o) => o.serviceSlugs.includes(slug));
