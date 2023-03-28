/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "white": "#ffffff",
      'red': "#ff5b5b",
    },
    extend: {
      fontFamily: {
        'sacramento': ['Sacramento', 'cursive'],
      },
    }
  },
  plugins: [],
}

