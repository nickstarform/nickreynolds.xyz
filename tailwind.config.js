module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './components/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './layouts/*.vue',
    './pages/**/*.vue',
    './pages/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  future: {},
  theme: {
    extend: {
      colors: {
        primary: '#4c1d95',
        splash: '#9A4EF9',
        highlight: '#8acb88',
        bolden: '#414361',
      },
    },
  },
  plugins: [],
}
