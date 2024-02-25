import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "catchy-mager": "CatchyMager",
        "heebo": "heebo",
        "coco-gothic": "Coco Gothic"
      },
      backgroundColor: {
        chocolate: "#92611e",
        mustard: "#ffbd59"
      },
      screens: {

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'filterBtn': '1px 1px 4px 0 #000',
        'cardShadowTopRight': '2px 2px 4px 0 #000',
      },
    },
  },
  plugins: [],
};
export default config;
