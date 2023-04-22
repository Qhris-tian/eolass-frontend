/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Plus Jakarta Sans', 'sans-serif']
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'rgba(var(--color-secondary), <alpha-value>)',
        danger: 'var(--color-dangger)',
        transparent: 'transparent',
        current: 'currentColor',
        purple: '#635FC7',
        'purple-light': '#A8A4FF',
        black: '#000112',
        light: '#F4F7FD',
        line: '#E4EBFA',
        white: '#FFFFFF',
        orange: '#F4911E'
      }
    }
  },
  plugins: []
}
