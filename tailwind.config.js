/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        pink: 'hsl(322, 100%, 66%)',
        lightpink: 'hsl(321, 100%, 78%)',
        lightred: 'hsl(0, 100%, 63%)',
        verydarkcyan: 'hsl(192, 100%, 9%)',
        verypaleblue: 'hsl(207, 100%, 98%)'
      },
      fontFamily: {
        opensans: 'Open Sans', // body
        poppins: 'Poppins' // heading
      }
    },
    container: {
      center: true
    }
  },
  plugins: []
}
