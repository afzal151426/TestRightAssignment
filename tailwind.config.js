module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#fafbfd",
          300: "#e6e6e6",
          500: "#8d9598",
          700: "#5a5a5a",
          "300_42": "#e6e6e642",
          "300_c4": "#e6e6e6c4",
        },
        white: { A700: "#fefefe", A700_01: "#ffffff" },
        green: { "800_59": "#00a81459" },
        indigo: { 800: "#184a7c", "800_3f": "#184a7c3f" },
      },
      boxShadow: { xs: "0px 0px 4px 0px #00000019" },
      fontFamily: { opensans: "Open Sans" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
