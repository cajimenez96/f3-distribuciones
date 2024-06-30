import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      "naranja": "var(--color-naranja)",
      "blanco": "var(--color-blanco)",
      "gris": "var(--color-gris)",
      "negro": "var(--color-negro)",
      "azul": "var(--color-azul)"
    }
  },
  plugins: [],
};
export default config;
