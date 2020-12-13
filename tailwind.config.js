const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    	minWidth: {
    		'sm': '500px'
    	},
    	boxShadow: {
        'dark': '0 15px 50px 10px rgba(0, 0, 0, 0.35)',
        'medium': '0 15px 50px 10px rgba(0, 0, 0, 0.2)',
        'light': '0 15px 50px 10px rgba(0, 0, 0, 0.1)'
    	},
      screens: {
        '3xl': '1920px'
      },
      height: {
        128: '32rem',
        160: '40rem',
        192: '48rem'
      },
      colors: {
        gray: {
          'warm': '#F4F2EC'
        },
        primary: colors.rose,
        secondary: colors.lightBlue,
        tertiary: colors.yellow,
        silk: '#f8f7ff',
        purpz: '#6347ff'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
