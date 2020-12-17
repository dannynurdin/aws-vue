const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.html',
     './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Build your palette here
        lime: colors.lime,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        amber: colors.amber,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
