import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmSerifDisplay: ["var(--font-dmSerif)"],
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        primary: "var(--primary)",
        "primary-100": "var(--primary-100)",
        "primary-900": "var(--primary-900)",
        "primary-foreground": "var(--primary-foreground)",
        "primary-transparent": "var(--primary-transparent)",
        "light-primary": "var(--light-primary)",
        "light-primary-transparent": "var(--light-primary-transparent)",
        main: "var(--text-main)",
        secondary: "var(--text-secondary)",
        "main-border": "var(--border-main)",
        "hover-link": "var(--hover-link)",
      },
      scale: {
        102: "1.02",
      },
      borderRadius: {
        base: "10px",
      },
      boxShadow: {
        baseShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        halfShadow:
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      },
    },
  },
  plugins: [],
} satisfies Config;
