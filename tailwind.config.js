/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "hsla(0, 0%, 8%, 1)",
      green: "hsla(154, 71%, 59%, 1)",
      darkGray: "hsla(0, 0%, 14%, 1)",
      grey: "hsla(0, 0%, 85%, 1)",
      white: "hsla(0, 0%, 100%, 1)",
    },
    fontFamily: {
      sans: ["Space Grotesk", "sans-serif"],
    },
    fontSize: {
      "sm": "0.75rem",
      "base": "1rem",
      "lg": "1.125rem",
      "xl": "2.5rem",
      "2xl": "2rem",
      "3xl": "2.5rem",
      "4xl": "3rem",
      "5xl": "4.5rem",
      "6xl": "5.5rem",
    },
    extend: {},
  },
  plugins: [],
};
