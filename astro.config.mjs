import { defineConfig } from "astro/config";

// Site institucional da Brabo Jiu-Jitsu.
// Build gera HTML estático puro em dist/ — mesmo modelo de deploy do site atual.
export default defineConfig({
  site: "https://brabojiujitsu.com",
  trailingSlash: "always",
});
