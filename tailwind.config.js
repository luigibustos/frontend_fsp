/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    // colors: {
    //   primary: "#263E3E",
    //   secondary: "#CFC5B6",
    //   accent: "#FF8C67",
    //   "p-background": "#1E1E24",
    //   "s-background": "#B5B5B5",
    // },
    fontFamily: {
      oswald: ["Oswald"],
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
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
    },
  },
  plugins: [],
};
