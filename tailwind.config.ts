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
        urbanist: "var(--font-urbanist)",
      },
      colors: {
        green: {
          15: "#1a3129",
          20: "#234338",
          25: "#2c5446",
          30: "#356554",
          40: "#468671",
          70: "#cbea7b",
          80: "#DCF1A7",
          85: "#E5F5BD",
          90: "#EEF8D3",
          95: "#F6FBE9",
          97: "#FAFDF2",
        },
        grey: {
          15: "#262626",
          20: "#333333",
          30: "34C4C4D",
          35: "#59595A",
          40: "#656567",
        },
      },
    },
  },
  plugins: [],
};
export default config;
