import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const site = process.env.PUBLIC_SITE_URL ?? "https://example.github.io";
const base =
  process.env.PUBLIC_BASE_PATH ??
  (process.env.NODE_ENV === "development" ? "/" : "/rfv-website");

export default defineConfig({
  site,
  base,
  integrations: [mdx(), react(), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
