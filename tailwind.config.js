/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "white": "#ffffff",
      "whiteSmoke": "#f5f5f5",
      'green': "#17bebb",
      'black':"#444",
    },
    extend: {
      fontFamily: {
        'sacramento': ['Sacramento', 'cursive'],
      },
      screens: {
        '3xl': '1600px',
      },
    }
  },
  plugins: [],
}

