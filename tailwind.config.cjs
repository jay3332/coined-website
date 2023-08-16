const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const plugin = require("tailwindcss/plugin")

const accent = {
  DEFAULT: '#ffcc20',
  50: '#fff6D8',
  100: '#fff1c3',
  200: '#ffe89a',
  300: '#ffdf72',
  400: '#ffd549',
  500: '#ffcc20',
  600: '#e7b200',
  700: '#af8700',
  800: '#775c00',
  900: '#3f3000',
  950: '#231b00',
}

const secondary = {
  DEFAULT: '#2a669f',
  50: '#ffffff',
  100: '#fdfefe',
  200: '#cceef2',
  300: '#9cd7e5',
  400: '#6cb9d8',
  500: '#3b94cb',
  600: '#2a669f',
  700: '#234b83',
  800: '#1b3366',
  900: '#14204a',
}

const gray = {
  DEFAULT: '#8C8778',
  50: '#E1DFDB',
  100: '#D7D5D0',
  200: '#C4C2BA',
  300: '#B2AEA4',
  400: '#9F9A8E',
  500: '#8C8778',
  600: '#6E6A5E',
  700: '#504D44',
  800: '#32302A',
  900: '#131310',
  950: '#040404'
}

const tertiary = {
  DEFAULT: '#F5780B',
  50: '#FCDABB',
  100: '#FBCFA8',
  200: '#FAB981',
  300: '#F8A459',
  400: '#F78E32',
  500: '#F5780B',
  600: '#C05E08',
  700: '#8A4306',
  800: '#542903',
  900: '#1E0F01',
  950: '#030200'
}

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent,
        secondary,
        tertiary,
        link: {
          DEFAULT: '#4bd5ff',
          hover: '#9be7ff',
          visited: '#4bd5ff',
        },
        base: {
          content: '#ffffff',
        },
        gray,
        highlight: {
          DEFAULT: colors.yellow[400],
          content: colors.black,
        },
      },
      screens: {
        'mobile-xs': { max: '369px' },
        'mobile': { max: '767px' },
      },
    },
    fontFamily: {
      title: ["'DM Sans'", "'Inter var'", ...defaultTheme.fontFamily.sans],
      sans: ["'Inter var'", ...defaultTheme.fontFamily.sans],
      mono: [
        'Menlo', 'Monaco', 'Lucida Console', 'Liberation Mono',
        'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', 'monospace',
      ],
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
    plugin(({ addComponents, addVariant }) => {
      addComponents({
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          }
        }
      })
      addVariant('all', '&, *')
      addVariant('all-children', '& *')
    })
  ],
}

config.daisyui = {
  themes: [{
    default: {
      primary: secondary.DEFAULT,
      secondary: tertiary.DEFAULT,
      accent: accent.DEFAULT,
      neutral: '#3a3a41',
      error: '#ee3434',
      base: {
        content: '#ffffff',
      },
      '.btn': {
        'text-transform': 'initial',
      },
    },
  }],
}

module.exports = config