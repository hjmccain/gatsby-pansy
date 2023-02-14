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
        'sans-outline': ['Lack Line', 'sans-serif'],
        body: ['Happy Times', 'sans-serif'],
        serif: ['Director', 'serif']
      },
      fontSize: {
        medium: '5rem',
        big: '11rem',
        'super-big': '16rem'
      },
      colors: {
        black: '#0D0C0D',
        white: '#FFFCFF',
        neutral: '#948894',
        'primary-100': '#FBF1FD',
        'primary-200': '#F7DCFA',
        'primary-500': '#BD86B1',
        'secondary-800': '#7D693B',
        'secondary-200': '#F7F368',
        'tertiary-500': '#B2C347',
        'tertiary-800': '#5B6324',
        error: '#DB1F1F',
        green: '#EAFB9E'
        // 'primary-200': '#F7DCFA',
        // 'primary-500': '#BD86B1',
        // 'secondary-800': '#7D693B',
        // 'secondary-200': '#F7F368',
        // 'tertiary-500': '#B2C347',
        // 'tertiary-800': '#5B6324',
        // error: '#DB1F1F',
      }
    },
  },
  plugins: [],
}

// beardvans

// fuuld
// KJV1611
// lunar palms distorted
// PicNic*
// pleatures*
// poool poool shadow
// saint
// yorker*