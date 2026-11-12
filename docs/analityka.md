# Analityka: GA4, GTM, Search Console

Kod strony jest gotowy. Do uruchomienia pomiaru potrzebne są identyfikatory z kont
Google — ustawia się je jako zmienne środowiskowe w Vercelu (Project → Settings →
Environment Variables), po czym trzeba wykonać nowy deploy.

| Zmienna | Wartość | Kiedy |
| --- | --- | --- |
| `VITE_GA4_ID` | `G-XXXXXXXXXX` | Najprostszy wariant: samo GA4, bez konfiguracji GTM |
| `VITE_GTM_ID` | `GTM-XXXXXXX` | Gdy tagami ma zarządzać Google Tag Manager |
| `VITE_GSC_VERIFICATION` | kod z metatagu | Tylko przy weryfikacji Search Console metatagiem |

Ustaw `VITE_GA4_ID` **albo** `VITE_GTM_ID`. Gdy są obie, działa GTM (żeby nie liczyć
zdarzeń podwójnie). Bez żadnej z nich nic się nie ładuje i strona działa jak dotąd.

## Wariant A — samo GA4 (zalecany na start)

1. analytics.google.com → Administracja → Utwórz usługę → strumień danych „Sieć"
   dla `https://www.flowtex.pl`. Skopiuj identyfikator pomiaru `G-…`.
2. Wpisz go w Vercelu jako `VITE_GA4_ID` i uruchom deploy.
3. W GA4: Administracja → Zdarzenia → oznacz `generate_lead` jako **kluczowe
   zdarzenie**. Opcjonalnie także `click_phone` i `click_email`.
4. W GA4: Administracja → Definicje niestandardowe → utwórz wymiary o zakresie
   „Zdarzenie" dla parametrów: `form_id`, `form_location`, `lead_context`,
   `link_location`, `mode`, `top_result`, `lead_source`, `lead_medium`.
5. W strumieniu danych zostaw włączony pomiar zaawansowany („Zmiany strony na
   podstawie zdarzeń historii przeglądarki") — strona jest aplikacją SPA i tak
   liczone są odsłony kolejnych podstron.

## Wariant B — Google Tag Manager

1. tagmanager.google.com → utwórz kontener „Sieć". Wpisz `GTM-…` jako `VITE_GTM_ID`.
2. Tag „Tag Google" z identyfikatorem `G-…`, reguła: Initialization – All Pages.
3. Zmienne warstwy danych: `form_id`, `form_location`, `lead_context`, `lead_id`,
   `link_location`, `mode`, `top_result`, `lead_source`, `lead_medium`, `page_path`.
4. Reguła „Zdarzenie niestandardowe" z wyrażeniem regularnym:
   `^(generate_lead|click_phone|click_email|form_start|form_error|selector_start|selector_complete)$`
5. Tag „GA4 – zdarzenie", nazwa zdarzenia `{{Event}}`, parametry ze zmiennych
   z punktu 3, reguła z punktu 4.
6. Kroki 3–5 z wariantu A (kluczowe zdarzenie, wymiary, pomiar zaawansowany).

Zgoda: strona sama ustawia Consent Mode v2 (`analytics_storage: granted` po
akceptacji, sygnały reklamowe zawsze `denied`) i ładuje kontener dopiero po
kliknięciu „Akceptuję". W GTM nie trzeba dodawać szablonu zgody.

## Search Console

1. search.google.com/search-console → Dodaj usługę.
   - **Domena** (`flowtex.pl`, zalecane): weryfikacja rekordem TXT w DNS — obejmuje
     wszystkie warianty adresu, nie wymaga zmian na stronie.
   - **Prefiks adresu URL** (`https://www.flowtex.pl/`): metoda „Tag HTML" — skopiuj
     samą wartość `content` do `VITE_GSC_VERIFICATION` i uruchom deploy.
2. Mapy witryn → dodaj `https://www.flowtex.pl/sitemap.xml`.
3. GA4 → Administracja → Połączenia z usługami → Search Console → połącz.

## Zdarzenia wysyłane przez stronę

| Zdarzenie | Kiedy | Parametry |
| --- | --- | --- |
| `generate_lead` | Poprawna wysyłka formularza | `form_id`, `form_location`, `lead_context`, `lead_id`, `lead_source`, `lead_medium` |
| `click_phone` | Kliknięcie numeru telefonu | `link_location` |
| `click_email` | Kliknięcie adresu e-mail | `link_location` |
| `form_start` | Pierwsze wejście w pole formularza | `form_id` |
| `form_error` | Nieudana wysyłka | `form_id`, `error_type` |
| `selector_start` | Start narzędzia doboru | `mode` (`quick` / `precision`) |
| `selector_complete` | Wynik narzędzia doboru | `mode`, `top_result` |

Każde zdarzenie ma też `page_path`. Żadne nie zawiera danych osobowych.

Wartości `form_id`: `formularz_strona_glowna`, `formularz_usluga`,
`formularz_realizacja`, `formularz_poradnik`, `formularz_katalog_wad`,
`formularz_dobor_posadzki`.

Wartości `link_location`: `naglowek`, `stopka`, `przycisk_mobilny`, identyfikator
sekcji (np. `kontakt`, `narzedzia`) albo `tresc`.

## Źródło zapytania w mailu

Do maila, który trafia do firmy, strona dopisuje blok:

```
--- Źródło zapytania (dodane automatycznie) ---
Numer zapytania: FT-20261112-A1B2
Wysłano ze strony: https://www.flowtex.pl/posadzki-esd
Źródło wizyty: google / organic · strona wejścia: /poradniki/... · 2026-11-12
Pierwsza wizyta: linkedin / social · kampania: realizacja-atex · ...
```

Potwierdzenie wysyłane do klienta tego bloku nie zawiera. Nie wymaga to zmian
w szablonach EmailJS. Te same dane są dostępne jako pola szablonu: `{{lead_id}}`,
`{{lead_source}}`, `{{lead_medium}}`, `{{lead_campaign}}`,
`{{lead_landing_page}}`, `{{lead_page_url}}`, `{{lead_first_source}}`.

Jak ustalane jest źródło: parametry `utm_*` w adresie → identyfikator kliknięcia
reklamy Google → strona odsyłająca (wyszukiwarka = `organic`, ChatGPT / Perplexity /
Gemini / Copilot / Claude = `ai`, inna = `referral`) → `(direct)`.

„Pierwsza wizyta" jest zapamiętywana w przeglądarce tylko po zgodzie na analitykę.
Bez zgody źródło jest znane wyłącznie w obrębie bieżącej karty; po przeładowaniu
strony wewnątrz serwisu pojawi się jako `(nieznane) / (nawigacja wewnętrzna)`.

## Oznaczanie linków (UTM)

Małe litery, bez polskich znaków i spacji.

| Gdzie | Dopisek do adresu |
| --- | --- |
| Wizytówka Google | `?utm_source=google&utm_medium=organic&utm_campaign=gbp` |
| Posty LinkedIn | `?utm_source=linkedin&utm_medium=social&utm_campaign={temat}` |
| Stopka e-mail | `?utm_source=email&utm_medium=signature` |
| Oferty PDF | `?utm_source=email&utm_medium=offer` |
| Prasa branżowa | `?utm_source={tytul}&utm_medium=referral&utm_campaign={artykul}` |
| Katalogi firm | `?utm_source={katalog}&utm_medium=directory` |
| Google Ads | nic — włącz automatyczne tagowanie |

## Zgoda na cookies

Po ustawieniu `VITE_GA4_ID` lub `VITE_GTM_ID` komunikat o cookies zamienia się
w baner z przyciskami „Odrzuć" i „Akceptuję", w stopce pojawia się link
„Ustawienia cookies", a Polityka Cookies automatycznie opisuje Google Analytics.
Przed zgodą i po odmowie do Google nie jest wysyłane żadne żądanie.

Treść Polityki Cookies (`src/pages/CookiePolicy.jsx`) warto dać do przejrzenia
prawnikowi przed włączeniem pomiaru.

## Sprawdzenie po wdrożeniu

1. Otwórz stronę w oknie prywatnym — powinien pojawić się baner zgody.
2. Kliknij „Akceptuję", potem numer telefonu w nagłówku.
3. GA4 → Raporty → Czas rzeczywisty: widać odsłonę i zdarzenie `click_phone`.
4. Wyślij testowe zapytanie — w czasie rzeczywistym pojawi się `generate_lead`,
   a w mailu blok „Źródło zapytania".
