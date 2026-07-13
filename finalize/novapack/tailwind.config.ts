import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: "#1C2530",
        steel: "#2E5F8A",
        "steel-light": "#DCE7F0",
        kraft: "#C4A77D",
        "kraft-light": "#EFE6D6",
        canvas: "#F7F7F5",
        ink: "#2A2E33",
        success: "#3A7D5C",
        amber: "#C97A2B",
        line: "#DEDBD3",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      borderRadius: {
        sm: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
