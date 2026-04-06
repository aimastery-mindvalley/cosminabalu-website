import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#CE1B28",
          black: "#222222",
          "black-light": "#323232",
          gray: "#8e8e8e",
          "gray-light": "#d3d3d3",
          "gray-pale": "#efefef",
          white: "#ffffff",
        },
      },
      fontFamily: {
        serif: ["var(--font-fira-sans)", "sans-serif"],
        sans: ["var(--font-fira-sans)", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#222222",
            fontSize: "20px",
            a: { color: "#CE1B28" },
            "h1,h2,h3,h4,h5,h6": { fontFamily: "var(--font-fira-sans), sans-serif", fontWeight: "700" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
