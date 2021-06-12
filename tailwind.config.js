module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      translate: {
        nav: "1000px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
