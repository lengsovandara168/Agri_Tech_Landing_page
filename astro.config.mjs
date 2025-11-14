// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  // Use @ as an alias to the src directory
  alias: {
    "@": new URL("./src", import.meta.url),
  },
  vite: {
    plugins: [tailwind()],
  },
  webAnalytics: {
    enabled: true, // set to false when using @vercel/analytics@1.4.0
  },
});
