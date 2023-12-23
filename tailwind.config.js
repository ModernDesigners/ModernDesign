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
        cyanDecor: "#46F4FF",
        cyan: "#3EB9FF",
        blue: "#3A6CFF",
        purple: "#5238FF",
        pink: "#8E43FF",
        mainWhiteT: "rgba(255, 255, 255, 0.9)",
        mainWhite: "rgba(255, 255, 255, 0.85)",
        subWhite: "rgba(255, 255, 255, 0.4)",
        lineWhite: "rgba(255, 255, 255, 0.3)",
        lineWhite2: "rgba(255, 255, 255, 0.2)",
        yellow: "#FFA800",
        yellowBg: "rgba(255, 168, 0, 0.10)",
        red: "#BC0000",
        redBr: "#CC0000",
        redBg: "rgba(199, 0, 0, 0.30)",
        line: "rgba(255, 255, 255, 0.20)",
        navLine: "rgba(0, 0, 0, 0.10)",
        cardBg: "rgba(255, 255, 255, 0.10)",
        cardBgHover: "rgba(255, 255, 255, 0.20)",
        cardBorder: "rgba(255, 255, 255, 0.20)",
        inputBg: "rgba(255, 255, 255, 0.05)",
        inputBgHover: "rgba(255, 255, 255, 0.08)",
        inputBorder: "rgba(255, 255, 255, 0.10)",
        black: "#000000",
        mainBlack: "rgba(0, 0, 0, 0.80)",
        subBlack: "rgba(0, 0, 0, 0.60)",
        opaBlack: "rgba(0, 0, 0, 0.30)",
        blueButtonTransparent: "rgba(30, 106, 255, 0.1)",
        blueButton: "rgba(30, 106, 255, 1)",
      },
      fontFamily: {
        main: ["mainGeo"],
        main2: ["mainEng"],
      },
      boxShadow: {
        backdrop: "8px 8px 0",
        projectCard: "0px 0px 20px 0px rgba(0, 0, 0, 0.10)",
        showImages: "0px 0px 40px 0px rgba(0, 0, 0, 0.25)",
      },
      animation: {
        dancingBlocks: "dancingBlocks 2s infinite ease-in-out",
        rolling: "rolling 5s infinite linear",
      },
      dropShadow: {
        stars: "0px 0px 10px rgba(70, 244, 255, 0.50)",
      },
      screens: {
        "3xl": { max: "1700px" },
        "2xl": { max: "1400px" },
        xl: { max: "1068px" },
        lg: { max: "992px" },
        md: { max: "771px" },
        sm: { max: "590px" },
      },
    },
  },
  plugins: [],
};
