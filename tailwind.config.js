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
    extend: {},
  },
  plugins: [],
};
