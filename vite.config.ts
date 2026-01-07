import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  // --- CONFIGURAÇÃO PARA O GITHUB PAGES (Link: /portifolio/) ---
  base: "/portifolio/", 
  
  build: {
    outDir: "docs", // Manda o site pronto para a pasta 'docs'
  },
}));