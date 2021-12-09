module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      site: {
        light: '#EEF0F2',
        bright: '#EEC643',
        blue: '#0D21A1',
        dark: '#011638',
        black: '#141414',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
