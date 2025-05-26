import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false, // Optional: if you want more control
    }),
  ],
  output: "static", // For Vercel deployment
});
