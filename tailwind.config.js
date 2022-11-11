/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Playfair Display', 'serif'],
        'dancing': ['Dancing Script', 'cursive']
      },
    },
  },
  plugins: [require("daisyui")],
}