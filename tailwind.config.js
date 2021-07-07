module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
      },
    },
    minWidth: {
      360: '360px',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
