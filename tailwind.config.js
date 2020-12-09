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
        128: '32rem'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
