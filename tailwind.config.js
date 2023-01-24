/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    colors: {
      platinum: "#EBEBEB",
      cultured: "#F8F8F8",
      orangeWeb: "#FBA423",
      grayXgray: "#B8B8B8",
      spanishGrey: "#9E9E9E",
      davysGrey: "#565656",
      eeireBlack: "#222222",
      spanishBistro: "#6F7330",
      slateGrey: "#69747C",
      yellowOrange: "#FAAC40",
    },
    fontFamily: {
      oswald: ["Oswald"],
      cabin: ["Cabin"],
      bodoni: ["Bodoni Moda"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
