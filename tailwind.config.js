/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        libre: ["Libre Bodoni", "serif"],
      },
    },
  },
  plugins: [],
};