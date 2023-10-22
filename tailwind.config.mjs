export default {
	content: ['./src/**/*.{astro,html,js,ts,tsx,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  primary: '#091625', // white
		  secondary: '#FFC107', // yellow
		  accent: '#795548', // brown
		  paletteColor1: '#091625', // FireFly
		  paletteColor2: '#C4A98E', // Indian Khaki
		  paletteColor3: '#35A4AB', // Keppel
		  paletteColor4: '#2578A0', // Jelly Bean
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