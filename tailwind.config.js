/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A0A0B",
        bubble: "#374A6D",
      },
      fontFamily: {
        exo: ["Exo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
