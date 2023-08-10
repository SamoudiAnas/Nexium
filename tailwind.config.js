const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      sans: ["'DM Sans'", ...defaultTheme.fontFamily],
    },
    extend: {
      colors: {
        main: "#E53D00",
        grey: "#7a7d9c",
        cosmos: "#420217",
        dark: "#040f16",
        error: "#e3170a",
        success: "#5c8001",
        "main-hover": "#C23A09",
      },
    },
  },
  plugins: [],
};
