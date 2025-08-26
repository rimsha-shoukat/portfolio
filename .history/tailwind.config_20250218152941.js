/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.js",
    "./src/components/*.js"
  ],
  theme: {
    extend: {
      backgroundImage:{
        'headerBg':"url('src/images/hesder.jpg')",
      }
    },
  },
  plugins: [],
}

