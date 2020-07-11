const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Anonymous Pro', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    backgroundColor: ['hover', 'active'],
  },
  plugins: [],
};
