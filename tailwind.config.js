/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "sm": "376px",
      "md": "768px",
      "lg": "1440px"
    },
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
      "xl": "1.5rem",
      "2xl": "2.5rem",
      "3xl": "2rem",
      "4xl": "2.5rem",
      "5xl": "3rem",
      "6xl": "4.5rem",
      "7xl": "5.5rem",
    },
    extend: {},
  },
  plugins: [],
};
