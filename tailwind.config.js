/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/flowbite/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { opacity: "0", transform: "rotate(0.0deg)" },
          "10%": { opacity: "1", transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        rubberband: {
          "0%": {
            transform: "scaleX(1.32) scaleY(0.95)",
          },
          "40%": {
            transform: "scaleX(0.5) scaleY(0.95)",
          },
          "55%": {
            transform: "scaleX(1.40) scaleY(0.85)",
          },
          "65%": {
            transform: "scaleX(0.8) scaleY(0.9)",
          },
          "75%": {
            transform: "scaleX(1.1)  scaleY(1)",
          },
          "100%": {
            transform: "scaleX(1) scaleY(1)",
          },
        },
        slidein: {
          "0%": {
            "margin-left": "100%",
            width: "300%",
          },

          "30%": {
            "margin-left": "-30%",
            width: "100%",
          },
          "70%": {
            "margin-left": "30%",
            width: "100%",
          },
          "90%": {
            "margin-left": "0%",
            width: "100%",
          },
        },
        before: {
          "0%": {
            "margin-left": "100%",
            "width": "300%",
            "opacity" : "0",
            "visibility":"hidden",
            "overflow":"hidden"
          },

          "30%": {
            "margin-left": "60%",
            "width": "100%",
          },
          "70%": {
            "margin-left": "30%",
            "width": "100%",
            "visibility":"visible",
            "opacity": "1"
          },
          "90%": {
            "margin-left": "0%",
            width: "100%",
          },
        },
      },
      animation: {
        "waving-hand": "wave 4s linear 1 3s",
        "rubber-band": "rubberband 0.8s linear 1 ",
        "slide-in": "slidein 3s linear 1",
        "initial-delay": "before 7s linear 1",
        "ping-once": "ping 3s linear 1 3s"
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      belle: ["La Belle Aurore", "cursive"],
      shantell: ["Shantell Sans", "cursive"],
      calibre: ["Calibre", "sans-serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
