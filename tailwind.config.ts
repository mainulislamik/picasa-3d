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
      colors: {
        background: "#F8FAFC",
        card: "#FFFFFF",
        surface: "#F1F5F9",
        accent: {
          cyan: "#0284C7",
          violet: "#7C3AED",
          emerald: "#059669",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      boxShadow: {
        "3d-glow": "0 10px 40px -10px rgba(2, 132, 199, 0.25)",
        "violet-glow": "0 10px 40px -10px rgba(124, 58, 237, 0.22)",
        "glass-sm": "0 4px 20px 0 rgba(15, 23, 42, 0.05)",
        "glass-lg": "0 20px 40px -15px rgba(15, 23, 42, 0.08)",
        "card-hover": "0 20px 40px -12px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(2, 132, 199, 0.2)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "float-reverse": "floatReverse 7s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
