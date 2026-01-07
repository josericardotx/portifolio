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
  
  // --- CORREÇÃO INTELIGENTE ---
  // Se for "production" (Build para GitHub), usa "/portifolio/"
  // Se for "development" (Local no seu PC), usa "/" (raiz normal)
  base: mode === "production" ? "/portifolio/" : "/", 
  
  build: {
    outDir: "docs", // Manda o site pronto para a pasta 'docs'
  },
}));  