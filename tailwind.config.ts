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
        accent: {
          cyan: "#0284C7",
          violet: "#7C3AED",
          emerald: "#059669",
        },
      },
      boxShadow: {
        "3d-glow": "0 10px 35px -10px rgba(2, 132, 199, 0.25)",
        "violet-glow": "0 10px 35px -10px rgba(124, 58, 237, 0.25)",
        "glass-sm": "0 2px 10px 0 rgba(15, 23, 42, 0.04)",
        "glass-lg": "0 20px 40px -15px rgba(15, 23, 42, 0.08)",
        "card-hover": "0 20px 40px -12px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(2, 132, 199, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
