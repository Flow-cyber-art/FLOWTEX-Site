# FLOWTEX Polska

Strona firmowa https://www.flowtex.pl — React + Vite + Tailwind CSS,
z prerenderingiem statycznego HTML (SSG) dla wyszukiwarek i botów AI.

## Uruchomienie lokalnie

```bash
npm install
cp .env.example .env   # uzupełnij klucze EmailJS (formularz kontaktowy)
npm run dev
```

Strona startuje pod `http://localhost:5173`.

## Build produkcyjny

```bash
npm run build
npm run preview
```

`npm run build` wykonuje po kolei: generowanie `public/sitemap.xml`
(`scripts/generate-sitemap.js`), build klienta, build SSR, prerendering
wszystkich tras do `dist/` (`scripts/prerender.js`) i ping IndexNow.
Do szybkiego podglądu bez prerenderingu służy `npm run build:client`.

## Deploy

Vercel, automatycznie po pushu na `main` (konfiguracja w `vercel.json`).
Zmienne `VITE_EMAILJS_*` ustaw w ustawieniach projektu na Vercelu.

## Gdzie edytować treści

| Co | Plik |
| --- | --- |
| Usługi (każda = podstrona `/{slug}`) | `src/data/services.js` |
| Realizacje (`/realizacje/{slug}`) | `src/data/realizacje.js` |
| Katalog wad (`/katalog-wad/{id}`) | `src/data/defects.js` |
| Strona główna, FAQ | `src/pages/Home.jsx` |
| Dane firmy, JSON-LD | `index.html` |
| Opis dla modeli AI | `public/llms.txt` |

Nowa usługa, realizacja lub wada trafia automatycznie do sitemap i
prerenderingu — nie trzeba dopisywać jej w osobnych listach.

Zdjęcia: `src/assets/realizacje/{slug-usługi}.webp` (zdjęcie na stronie usługi),
`src/assets/case-studies/{slug-realizacji}.webp` (zdjęcie wpisu realizacji).

## Struktura

```
├── index.html            # meta SEO i dane strukturalne firmy
├── public/               # fonty, ikony, llms.txt, sitemap.xml
├── scripts/              # sitemap, prerender, IndexNow, hooki git
└── src/
    ├── App.jsx           # routing (strony ładowane leniwie)
    ├── entry-server.jsx  # renderowanie SSR do prerenderingu
    ├── components/       # Layout, formularz, karuzela, cookies...
    ├── data/             # services, realizacje, defects
    ├── pages/            # Home, ServicePage, Realizacje, narzędzia...
    └── styles/
```
