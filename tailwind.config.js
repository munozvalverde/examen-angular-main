/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'brown-gray': {
          50: '#f8f5f2',
          100: '#f1ebe5',
          200: '#e2d7cc',
          300: '#d4c3b2',
          400: '#a69b8c',
          500: '#796366',
          600: '#5f514d',
          700: '#453d3b',
          800: '#2c2928',
          900: '#1a1716',
        },
        'brown': {
          50: '#fbf6f4',
          100: '#f3e6e0',
          200: '#e1cac0',
          300: '#cfae9f',
          400: '#a8716e',
          500: '#81453e',
          600: '#743c37',
          700: '#62322f',
          800: '#502726',
          900: '#41201e',
        },
        'coffee-gray': {
          50: '#fafaf9',
          100: '#f3f2f0',
          200: '#e1dfdb',
          300: '#cfcdc7',
          400: '#aba8a2',
          500: '#88847c',
          600: '#77736c',
          700: '#64615b',
          800: '#525048',
          900: '#43413b',
        },
        'coffee': {
          50: '#fdf9f7',
          100: '#fbeee6',
          200: '#f5d0ba',
          300: '#eeb18e',
          400: '#e17b45',
          500: '#d1440c',
          600: '#b13b0b',
          700: '#8f3109',
          800: '#712806',
          900: '#5a2005',
        },
        'custom-brown': '#b98d70',
        'custom-brown-dark': '#795943',
      }
    },
    fontFamily: {
      'body': [
    'Inter',
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'system-ui',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'Noto Sans',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji'
  ],
      'sans': [
    'Inter',
    'ui-sans-serif',
    'system-ui',
    '-apple-system',
    'system-ui',
    'Segoe UI',
    'Roboto',
    'Helvetica Neue',
    'Arial',
    'Noto Sans',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'Noto Color Emoji'
  ]

    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

