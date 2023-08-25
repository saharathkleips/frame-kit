const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      tan: "#FCEED3",
      yellow: "#F0C254",
      blue: "#A7D5EA",
      green: "#62CB96",
      pink: "#CE84C7",
      red: "#D85988",
    },
    fontFamily: {
      sans: ["Work Sans", defaultTheme.fontFamily.sans],
      heading: ["Work Sans", defaultTheme.fontFamily.sans],
    },
    boxShadow: {
      sm: "2px 2px 0px 0px #000000",
      DEFAULT: "3px 3px 0px 0px #000000",
      lg: "6px 6px 0px 0px #000000",
    },
    extend: {},
  },
  plugins: [],
};
