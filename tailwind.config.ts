/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Sans", "sans-serif"],
      },
      keyframes: {
        fadein: {
          "0%": {
            transform: "translateY(120px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0px)",
            opacity: 1,
          },
        },
      },
      animation: {
        fadein: "fadein 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
}
