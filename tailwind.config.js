module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    	minWidth: {
    		'sm': '375px'
    	},
    	maxWidth: {
    	}
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
