const tailwindTheme = require('tailwindcss/defaultTheme');
const debugScreens = require('tailwindcss-debug-screens');

module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.njk',
    './src/**/*.js',
    './src/**/*.md',
  ],
  darkMode: 'media', 
  theme: {
    screens: {
      sm: '600px',
      lg: ' 950px',
      xl: '1200px',

    },
    fontFamily: {
      'sans': ['Plex', ...tailwindTheme.fontFamily.sans],
    },
  },

  plugins: [debugScreens],
}
