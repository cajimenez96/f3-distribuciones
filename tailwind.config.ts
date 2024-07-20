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
      "rosa": "var(--color-rosa)",
      "celeste": "var(--color-celeste)",
      "naranja": "var(--color-naranja)",
      "mandarina": "var(--color-mandarina)",
      "blanco": "var(--color-blanco)",
      "transparent": "transparent"
    }
  },
  plugins: [],
};
export default config;
