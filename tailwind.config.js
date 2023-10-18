/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#CE5236",
        secondery: "#EBF2CA",
        accent: "#C14A2F",
        background: "#e6f6f9",
        text: "#081C21",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      dropShadow: {
        text: "4px 4px 8px",
      },
    },
  },
  plugins: [require("daisyui")],
};
