/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      ...defaultTheme.screens,
      sm: "480px",
      xs: "320px",
      xxs: "160px",
    },
    fontFamily: {
      intern: ["SFProDisplay-Regular", "sans-serif"],
    },

    extend: {
      colors: {
        primary: "var(--primary-color)",
      },
    },
  },
  plugins: [],
};
