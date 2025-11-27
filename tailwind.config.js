/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B6B",
        secondary: "#4ECDC4",
        dark: "#1A1A1A",
        light: "#F7F7F7",
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
        serif: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
