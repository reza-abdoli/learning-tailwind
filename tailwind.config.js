const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./dest/*.{html,js}"],

  theme: {
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif']
    },
    screens: {
      'sr': '600px',
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        'preview-bl': "url('../files/pv.jpg')"
      }
    },
  },
  plugins: [],
}

