import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-open-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      colors: {
        background: "#F8FAFC",
        surface: "#FFFFFF",
        card: "#FFFFFF",
        brand: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48", // Authentic Picasa Logo Red
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
          950: "#4c0519",
        },
        accent: {
          rose: "#E11D48",
          red: "#DC2626",
          dark: "#0F172A",
        },
      },
      boxShadow: {
        "3d-glow": "0 10px 35px -10px rgba(225, 29, 72, 0.25)",
        "rose-glow": "0 10px 35px -10px rgba(225, 29, 72, 0.3)",
        "glass-sm": "0 2px 10px 0 rgba(15, 23, 42, 0.04)",
        "glass-lg": "0 20px 40px -15px rgba(15, 23, 42, 0.08)",
        "card-hover": "0 20px 40px -12px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(225, 29, 72, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
