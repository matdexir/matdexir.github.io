import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

// https://astro.build/config
import react from "@astrojs/react";
// import remarkCodeTitles from "remark-code-titles";
// import remarkToc from "remark-toc";
// import { remarkReadingTime } from "./remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind(),
    image(),
    // image({
    //   serviceEntryPoint: "@astrojs/image/sharp",
    // }),
  ],
  site: "https://matdexir.github.io",
  base: "/",
  markdown: {
    drafts: true,
    syntaxHighlight: "shiki",
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "dracula-soft",
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      // langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: false,
    },
    // remarkPlugins: [remarkToc],
    extendDefaultPlugins: true,
    gfm: true,
  },
});
