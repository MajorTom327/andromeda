module.exports = {
  purge: {
    content: [
      './client/**/*.{css,tsx}',
      './imports/**/*.{css,tsx}',
    ],
    options: {
      safelist: [
        /data-theme$/,
      ]
    },
  },
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
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    theme: [
      'luxury'
    ],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
