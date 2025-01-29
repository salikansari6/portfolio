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
          DEFAULT: '#3b82f6', // Blue-500
          dark: '#2563eb',    // Blue-600
          light: '#93c5fd',   // Blue-300
        },
        dark: {
          DEFAULT: '#020617', // Darker blue
          light: '#0f172a',   // Dark blue
          lighter: '#1e293b', // Slate blue
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(135deg, #020617 0%, #0f172a 50%, #1e293b 100%)',
        'gradient-card': 'linear-gradient(rgba(15, 23, 42, 0.5), rgba(2, 6, 23, 0.8))',
        'gradient-hover': 'linear-gradient(rgba(15, 23, 42, 0.7), rgba(2, 6, 23, 0.9))',
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
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
