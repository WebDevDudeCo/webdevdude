export default {
	content: ['./src/**/*.{astro,html,js,ts,tsx,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  primary: '#FFF', // white
		  secondary: '#FFC107', // yellow
		  accent: '#795548', // brown
		  paletteColor1: '#212B2E', // Gunmetal
		  paletteColor2: '#383E27', // Black Olive
		  paletteColor3: '#151F22', // Eerie Black
		  paletteColor4: '#82754F', // Coyote
		  paletteColor5: '#D2D4DA' // French Grey
		},
      fontFamily: {
        'base': ['Montserrat', 'sans-serif'],
      },
		fontSize: {
		  '2xl': '1.5rem',
		  '3xl': '1.875rem',
		},
	  },
	},
	plugins: [],
  };