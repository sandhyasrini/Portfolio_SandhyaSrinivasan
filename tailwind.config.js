/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  mode: "jit",
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
        wiggle: {
          "0%, 100%": { transform: "rotate(-15deg)" },
          "50%": { transform: "rotate(15deg)" },
        },
        heartBeat: {
          "0%": { transform: "scale(1);" },
          "14%": { transform: "scale(1.3);" },
          "28%": { transform: "scale(1);" },
          "42%": { transform: "scale(1.3);" },
          "70%": { transform: "scale(1);" },
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
        progressSlide: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "100%",
          },
        },
        slideup: {
          "0%": {
            transform: "translateY(80%)",
            opacity: "0",
            visibility: "hidden",
          },
          "50%": {
            transform: "translateY(50%)",
            opacity: "0",
            visibility: "visible",
          },
          "100%": {
            transform: "translateY(0%)",
            opacity: "1",
            visibility: "visible",
          },
        },
        fadeinright: {
          "0%": {
            transform: "translateX(-5%)",
            opacity: "0",
            visibility: "hidden",
          },
          "50%": {
            transform: "translateX(-2%)",
            opacity: "0",
            visibility: "visible",
          },
          "100%": {
            transform: "translateX(0%)",
            opacity: "1",
            visibility: "visible",
          },
        },
        fadein: {
          "0%": {
            opacity: "0",
            visibility: "hidden",
          },
          "50%": {
            opacity: "0.5",
            visibility: "visible",
          },
          "100%": {
            transform: "translateX(0%)",
            opacity: "1",
            visibility: "visible",
          },
        },
      },
      animation: {
        "waving-hand": "wave 1s linear 1",
        "rubber-band": "rubberband 0.8s linear 1 ",
        "progress-slide": "progressSlide 2s cubic-bezier(0.4, 0, 1, 1) 1 ",
        "slide-in": "slidein 3s linear 1",
        "slide-up": "slideup 1.5s linear 1",
        "ping-once": "ping 1s linear 1",
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
