/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'pastel-green': {
        '50': '#effef4',
        '100': '#dafee5',
        '200': '#b7fbce',
        '300': '#7ff6a8',
        '400': '#53ea87',
        '500': '#17d057',
        '600': '#0dac45',
        '700': '#0e8739',
        '800': '#116a31',
        '900': '#10572b',
        '950': '#023115',
      },
      'mercury-white': {
        '50': '#f8f8f8',
        '100': '#f0f0f0',
        '200': '#e6e6e6',
        '300': '#d1d1d1',
        '400': '#b4b4b4',
        '500': '#9a9a9a',
        '600': '#818181',
        '700': '#6a6a6a',
        '800': '#5a5a5a',
        '900': '#4e4e4e',
        '950': '#282828',
      },
    },
    screens: {
      'desktop': { 'max': '2560px' },
      'laptopL': { 'max': '1600px' },
      'laptopM': { 'max': '1440px' },
      'laptopS': { 'max': '1280px' },
      'tabletL': { 'max': '1024px' },
      'tabletM': { 'max': '920px' },
      'tabletS': { 'max': '768px' },
      'tabletXS': { 'max': '640px' },
      'mobileXL': { 'max': '540px' },
      'mobileL': { 'max': '425px' },
      'mobileM': { 'max': '375px' },
      'mobileS': { 'max': '320px' },      
    },
  },
  plugins: [],
}