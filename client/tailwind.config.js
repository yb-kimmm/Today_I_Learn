// const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  // mode: "jit",
  theme: {
    extend: {
      colors: {
        // sky: colors.sky,
        // cyan: colors.cyan,
      },
      backgroundImage: {},
    },
  },
  variants: {},
  plugins: [],
};
