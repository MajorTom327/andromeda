module.exports = {
  purge: [
    './client/**/*.{css,tsx}',
    './imports/**/*.{css,tsx}',
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
