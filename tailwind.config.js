/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    daisyui: {
      themes: ["pastel", "sunset"],
      darkTheme: "sunset",
    },
  },
  plugins: [require("daisyui")],
};
