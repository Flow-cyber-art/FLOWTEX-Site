import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Dzień buildu (UTC) — poradniki z publishAt w przyszłości są wtedy ukryte
// (patrz src/data/poradniki.js). BUILD_DATE pozwala to wymusić przy testach.
const BUILD_DATE = process.env.BUILD_DATE || new Date().toISOString().slice(0, 10);

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  define: { __BUILD_DATE__: JSON.stringify(BUILD_DATE) },
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
}));
