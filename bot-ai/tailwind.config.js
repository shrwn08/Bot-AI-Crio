/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/Components/*.js',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:['Open Sans'],
      }
    },

  },
  plugins: [],
}

