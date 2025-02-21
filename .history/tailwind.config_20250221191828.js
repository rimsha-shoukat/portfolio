/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.js",
    "./src/components/*.js",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "header" : "url('/src/images/header.jpg')",
        "about": "/src/images/about.png",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], 
      },
      images:{
      }
    },
  },
  plugins: [
  ],
}

