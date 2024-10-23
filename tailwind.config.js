/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      slate: {
        50: "#f6f6f7",
        100: "#eaebed",
        200: "#cfcfd5",
        300: "#b4b4bd",
        400: "#7e7e8e",
        500: "#484857",
        600: "#40404d",
        700: "#35353f",
        800: "#292932",
        900: "#1f1f27",
      },
      vaibhav: {
        900: "#451f29fa",
      },
    },
  },
  plugins: [],
};
