# Zapis leadów do arkusza Google

Każde wysłanie formularza (zapytanie ofertowe, materiał do pobrania, np. protokół
odbioru) dopisuje wiersz do arkusza Google. Dzieje się to niezależnie od maila
EmailJS — lead zostaje zapisany nawet wtedy, gdy mail nie dojdzie.

Droga danych: przeglądarka → `/api/lead` (funkcja Vercel, `api/lead.js`) →
aplikacja Google Apps Script podpięta do arkusza → nowy wiersz w zakładce „Leady”.
Adres skryptu i sekret są tylko w zmiennych serwera na Vercelu, nie w przeglądarce.

## Konfiguracja (jednorazowo, ok. 10 minut)

### 1. Arkusz i skrypt

1. Na Dysku Google utwórz nowy arkusz, np. „FLOWTEX – leady ze strony”.
2. W arkuszu: **Rozszerzenia → Apps Script**.
3. Usuń zawartość pliku `Kod.gs` i wklej skrypt z sekcji poniżej.
4. W skrypcie w linii `const SECRET = "…"` wpisz własny długi, losowy ciąg znaków
   (np. 40 liter i cyfr). Zapisz go — ten sam ciąg trafi do Vercela.
5. Zapisz projekt (ikona dyskietki).

### 2. Wdrożenie skryptu jako aplikacji internetowej

1. **Wdróż → Nowe wdrożenie** → typ: **Aplikacja internetowa**.
2. „Wykonaj jako”: **Ja** (Twoje konto). „Kto ma dostęp”: **Każdy**.
   (Skrypt i tak odrzuca zapis bez poprawnego sekretu.)
3. **Wdróż**, zezwól na dostęp do arkusza, skopiuj **adres URL aplikacji**
   (kończy się na `/exec`).

### 3. Zmienne na Vercelu

Vercel → projekt → **Settings → Environment Variables** (środowisko Production):

| Nazwa | Wartość |
|---|---|
| `LEADS_WEBHOOK_URL` | adres aplikacji z kroku 2 (`https://script.google.com/macros/s/…/exec`) |
| `LEADS_WEBHOOK_SECRET` | ten sam ciąg co `SECRET` w skrypcie |

Potem **Deployments → Redeploy** ostatniego wdrożenia, żeby funkcja dostała zmienne.

### 4. Test

Wyślij formularz na stronie (np. protokół odbioru z własnym adresem e-mail).
W arkuszu powinna pojawić się zakładka „Leady” z nowym wierszem.

## Skrypt Apps Script

```javascript
// FLOWTEX Polska — zapis leadów ze strony www.flowtex.pl do tego arkusza.
const SECRET = "WPISZ-TU-DLUGI-LOSOWY-SEKRET";
const SHEET_NAME = "Leady";
const COLUMNS = [
  ["Data", null],
  ["Numer zgłoszenia", "lead_id"],
  ["Formularz", "form_id"],
  ["Materiał", "resource"],
  ["Imię i nazwisko", "name"],
  ["Firma", "company"],
  ["E-mail", "email"],
  ["Telefon", "phone"],
  ["Wiadomość", "message"],
  ["Strona", "page_url"],
  ["Źródło wizyty", "source"],
  ["Pierwsza wizyta", "first_source"],
];

function doPost(e) {
  let data;
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    return reply({ ok: false, error: "bad_json" });
  }
  if (!data || data.secret !== SECRET) return reply({ ok: false, error: "forbidden" });

  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(COLUMNS.map((c) => c[0]));
      sheet.setFrozenRows(1);
      sheet.getRange(1, 1, 1, COLUMNS.length).setFontWeight("bold");
    }
    const lead = data.lead || {};
    // Apostrof na początku: tekst zostaje tekstem (telefon bez zamiany na liczbę,
    // brak wykonywania formuł wpisanych w formularzu).
    const row = COLUMNS.map(([, key]) => (key ? "'" + String(lead[key] || "") : new Date()));
    sheet.appendRow(row);
    return reply({ ok: true });
  } finally {
    lock.releaseLock();
  }
}

function reply(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
```

Po każdej zmianie skryptu: **Wdróż → Zarządzaj wdrożeniami → edytuj → Nowa wersja**
(adres `/exec` zostaje ten sam).

## Uwagi

- Formularze działają także bez tej konfiguracji — wtedy `/api/lead` po prostu
  nic nie zapisuje.
- Zapis nie blokuje formularza: jeśli arkusz jest niedostępny, klient i tak
  dostaje maila, a błąd widać w logach funkcji na Vercelu.
- Arkusz zawiera dane osobowe: udostępniaj go tylko osobom, które obsługują
  zapytania. Polityka prywatności wymienia przechowywanie zgłoszeń w usługach
  Google jako odbiorcę danych (sekcja 5).
