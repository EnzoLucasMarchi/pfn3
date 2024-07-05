/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        softblue: '#1E213A',
        darkestblue: '#100E1D',
        bggray: '#6E707A',
        wordwhite: '#E7E7EB',
        wordgray : '#A09FB1',
        blu: '#3C47E9',
        bggrades: '#585676'
      },
    },
  },
  plugins: [],
}