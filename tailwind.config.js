module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx,stories.tsx}'],
	darkMode: ['class', '[data-mode="dark"]'],
	theme: {
		extend: {},
	},
	plugins: [
		require('postcss-import'),
		require('tailwindcss')('./tailwind.config.js'),
		require('autoprefixer'),
	],
};
