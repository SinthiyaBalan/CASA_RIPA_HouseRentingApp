/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {fontFamily: {
      custom: ['Font Name', 'Aref Ruqaa Ink']},
  },
  plugins: [require("daisyui")],
},
}

