import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        tangerine: ["Tangerine", "cursive"],
      },
      colors: {
        primary: "#EBBC74", // Yale Blue as an example
        secondary: "#31485a",
        darkPrimary: "#2e1e11",
        extraDarkPrimary: "#1f140b",
      },
    },
  },
  plugins: [],
};
export default config;
