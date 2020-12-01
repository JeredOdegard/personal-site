module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    	minWidth: {
    		'sm': '375px'
    	},
    	maxWidth: {
    		'xl': '1024px'
    	}
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
