/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#84cc16', // lime-500
          dark: '#65a30d',    // lime-600
          light: '#d9f99d',   // lime-200
        },
        dark: {
          DEFAULT: '#18181b', // zinc-900
          light: '#27272a',   // zinc-800
          lighter: '#3f3f46', // zinc-700
        },
      },
      screens: {
        "3xl": "1600px",
      },
      animation: {
        "fade-in": "fade-in 0.3s ease-in-out",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      translate: {
        nav: "1000px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
