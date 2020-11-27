const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: false
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors
    }
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled']
    }
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/forms')
  ]
}
