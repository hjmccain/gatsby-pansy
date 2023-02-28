/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Saint', 'sans-serif'],
        sans: ['Lack', 'sans-serif'],
        serif: ['Director', 'serif'],
        dingbats: ['Mister Pixel', 'serif']
      },
      fontSize: {
        'x-small': '3.5rem',
        small: '5.5rem',
        medium: '8rem',
        big: '11rem',
        display: '16rem'
      },
      colors: {
        black: '#0D0C0D',
        white: '#BECCE3',
        // white: '#FFFCFF',
        neutral: '#948894',
        'primary-100': '#F3FFD4',
        'primary-200': '#E2FF9A',
        // 'primary-200': '#F7DCFA',
        'primary-500': '#BD86B1',
        'secondary-800': '#7D693B',
        'secondary-200': '#F7F368',
        'tertiary-500': '#B2C347',
        'tertiary-800': '#5B6324',
        error: '#DB1F1F',
        green: '#EAFB9E'
      }
    },
  },
  plugins: [],
}