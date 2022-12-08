/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        'slider-w': '100vh'
      }
    },
    colors: {
      'main-color': '#E6F4F1',
      'accent1': '#96AFB8',
      'accent2': '#ffffff',
      'complement1': '#033D51',
    }
  },
  plugins: [],
}
