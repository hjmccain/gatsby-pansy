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
        white: '#FFFAFA',
        'white-alt': '#BECCE3',
        neutral: '#948894',
        'primary-100': '#F3FFD4', // nyanza (light green)
        'primary-200': '#E2FF9A', // mindaro (apple green)
        'secondary-100': '#F2C1A7', // apricot
        'secondary-200': '#F39B6D', // atomic tangerine
        'tertiary-200': '#A6D8D4', // tiffany blue
        error: '#DB1F1F',
        green: '#EAFB9E'
      }
    },
  },
  plugins: [],
}