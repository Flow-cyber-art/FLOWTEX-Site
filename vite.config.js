import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// Dzień buildu (UTC) — poradniki z publishAt w przyszłości są wtedy ukryte
// (patrz src/data/poradniki.js). BUILD_DATE pozwala to wymusić przy testach.
const BUILD_DATE = process.env.BUILD_DATE || new Date().toISOString().slice(0, 10);

// Weryfikacja Google Search Console metatagiem: ustaw VITE_GSC_VERIFICATION
// (sam kod z pola content) — tag trafi do <head> każdej podstrony. Jeśli
// domena jest zweryfikowana przez DNS, zmienna nie jest potrzebna.
function searchConsoleVerification(token) {
  return {
    name: "flowtex-gsc-verification",
    transformIndexHtml() {
      if (!token) return [];
      return [{ tag: "meta", attrs: { name: "google-site-verification", content: token }, injectTo: "head" }];
    },
  };
}

export default defineConfig(({ isSsrBuild, mode }) => {
  // GTM_ID i GA4_ID są zmiennymi BEZ prefiksu VITE_: Vite nie wystawia ich
  // automatycznie w import.meta.env, tylko wczytujemy je tu (z pliku .env lub
  // zmiennych Vercela) i wstawiamy do kodu świadomie, jako stałe __GTM_ID__ /
  // __GA4_ID__. Uwaga: identyfikator kontenera i tak trafia do przeglądarki
  // (jest w adresie gtm.js), więc to porządek w konfiguracji, nie tajemnica.
  const env = loadEnv(mode, process.cwd(), "");
  return {
  plugins: [react(), searchConsoleVerification(loadEnv(mode, process.cwd(), "VITE_").VITE_GSC_VERIFICATION)],
  define: {
    __BUILD_DATE__: JSON.stringify(BUILD_DATE),
    __GTM_ID__: JSON.stringify(env.GTM_ID || ""),
    __GA4_ID__: JSON.stringify(env.GA4_ID || ""),
  },
  build: {
    rollupOptions: isSsrBuild
      ? {}
      : {
          output: {
            // React/React Router zmieniają się dużo rzadziej niż kod
            // aplikacji — osobny chunk oznacza, że po każdym wdrożeniu
            // (np. drobna zmiana treści) przeglądarki powracających
            // użytkowników nie muszą ponownie pobierać całego React-a
            // z cache'a. Pomijamy to dla buildu SSR (--ssr), gdzie
            // react/react-dom są i tak externalizowane przez Vite.
            manualChunks: {
              vendor: ["react", "react-dom", "react-router-dom"],
            },
          },
        },
  },
};
});
