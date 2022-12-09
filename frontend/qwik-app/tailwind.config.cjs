/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-colour": "#0b1120",
      },
      screens: {
        "md-lg": "870px",
      },
    },
  },
  plugins: [],
};
