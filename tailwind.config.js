/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'navbarImg': "url('https://i.postimg.cc/44qR0v7f/pietro-de-grandi-T7-K4a-EPo-GGk-unsplash.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}

