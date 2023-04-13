/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		fontFamily: {
			sans: ['Plus Jakarta Sans', 'sans-serif'],
		},
		extend: {
			colors: {
				primary: 'var(--color-primary)',
				secondary: 'rgba(var(--color-secondary), <alpha-value>)',
				danger: 'var(--color-dangger)',
				transparent: 'transparent',
				current: 'currentColor',
				blue: '##00B8D4',
				purple: '#635FC7',
				'purple-light': '#A8A4FF',
				gray: '#828FA3',
				black: '#000112',
				light: '#F4F7FD',
				line: '##E4EBFA',
				white: '#FFFFFF',
				red: '#EA5555',
				'red-light': '#FF9898',
				orange: '#F4911E',
				green: '#6AE86A',
			},
		},
  },
  plugins: [],
}

