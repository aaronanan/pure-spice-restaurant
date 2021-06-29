const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        bubblegum: ["Bubblegum Sans"],
        changa: ["Changa"],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        gold: {
          light: "#B99D69",
          DEFAULT: "#A88544",
          dark: "#866A36",
        },
        pickup: {
          light: "#6E4E4F",
          DEFAULT: "#5E3B3C",
          dark: "#4B2F30",
        },
        blood: {
          light: "#6F1E21",
          DEFAULT: "#5F0609",
          dark: "#420406",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
