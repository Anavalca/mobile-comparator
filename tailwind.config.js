/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "white": "#ffffff",
      "whiteSmoke": "#f5f5f5",
      'red': "#ff5b5b",
      'black':"#302f2f",
    },
    extend: {
      fontFamily: {
        'sacramento': ['Sacramento', 'cursive'],
      },
    }
  },
  plugins: [],
}

