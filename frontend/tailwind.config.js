/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      billingBgColor: '#5e3182',
      white: '#ffffff',
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "bumblebee"
    ],
  },
};
