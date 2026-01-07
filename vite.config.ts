import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

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
  
  // --- A CORREÇÃO ESTÁ AQUI ---
  // Se for build (Online) usa "/portifolio/"
  // Se for dev (Local) usa "/"
  base: mode === "production" ? "/portifolio/" : "/", 
  
  build: {
    outDir: "docs", 
  },
}));