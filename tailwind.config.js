/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFF",
        main: "#1E6AFF",
        mainHover: "#4F8AFF",
        mainBack: "rgba(31, 105, 255, 0.3)",
        mainBack2: "rgba(31, 105, 255, 0.1)",
        black6: "rgba(0, 0, 0, 0.60)",
        experienceBg: "#2563FF",
        cyan: "#3EB9FF",
        blue: "#3A6CFF",
        purple: "#5238FF",
        pink: "#8E43FF",
        mainWhite: "rgba(255, 255, 255, 0.85)",
        subnWhite: "rgba(255, 255, 255, 0.4)",
        yellow: "#FFA800",
        yellowBg: "rgba(255, 168, 0, 0.10)",
        red: "#BC0000",
        redBg: "rgba(199, 0, 0, 0.30)",
        line: "rgba(255, 255, 255, 0.20)",
        navLine: "rgba(0, 0, 0, 0.10)",
        cardBg: "rgba(255, 255, 255, 0.10)",
        cardBorder: "rgba(255, 255, 255, 0.20)",
        black: "#000000",
        mainBlack: "rgba(0, 0, 0, 0.80)",
        subBlack: "rgba(0, 0, 0, 0.60)",
      },
      fontFamily: {
        main: ["mainGeo"],
        main2: ["mainEng"],
      },
      boxShadow: {
        backdrop: "8px 8px 0",
      },
      animation: {
        dancingBlocks: "dancingBlocks 2s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
