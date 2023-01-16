/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        offwhite: "rgb(245,245,245)",
        blue:'#0f286e'
      },
      backgroundImage: {
        hero: "url('/src/assets/images/bg-portfolio.svg')",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow:{
        customOne:'0 5px 15px 0 rgb(0 0 0 / 15%)'
      }
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "28px",
      "4xl": "32px",
      "5xl": "36px",
      "6xl": "40px",
      "7xl": "44px",
      "8xl": "48px",
      "9xl": "52px",
    },
  },
  plugins: [],
};
