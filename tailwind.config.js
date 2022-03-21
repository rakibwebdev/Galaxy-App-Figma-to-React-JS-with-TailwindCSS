module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}",  ],
  theme: {
	fontFamily: {
		body: ['Michroma', 'sans-serif'],
		display: ['Marvel', 'sans-serif'],
		iceland: ['Iceland', 'cursive'],
		roboto: ['Roboto', 'sans-serif'],
	  },
    extend: {
		colors: {
			"prm": "#57F9FB",
			"purple": "#920DFC",
			"darkpurple": "#12003E",
			"black": "#050010",
			"deepblack": "#000000",
			"themeblack": "#0B0027",
			"yellow": "#958600",
			"gray": "#6F6F6F",
			"lightgray": "#E5E5E5",
			"lihtblue": "#6177BF",
			"close": "#B39FDE",
		  },
		  fontSize: {
			'xs': '11px',
			'sm': '15px',
			'md': '17px',
			'lmd': '19px',
			'base': '20px',
			'lg': '24px',
			'llg': '26px',
			'xl': '28px',
			'sxl': '39px',
			'xxl': '41px',
			'xxxl': '60px',
			'2xxl': '64px',
		  }
	},
  },
  plugins: [],
}
