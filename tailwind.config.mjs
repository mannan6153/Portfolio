/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'dark1': '#0e0f15',
				'dark2': '#2f3245',
				'light1': '#e1e2ea',
				'light2': '#c3c5d5',
	
				// instructions
				// dark 1 is the darkest and light 1 is the lightest color
	
				// current colors
				// 'dark1': '#000000',
				// 'dark2': '#101010',
				// 'light1': '#ffffff',
				// 'light2': '#f0f0f0',
			},
		},
	},
	plugins: [],
}
