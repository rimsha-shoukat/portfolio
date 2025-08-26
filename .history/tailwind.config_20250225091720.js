/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.js",
    "./src/components/*.js",
  ],
  theme: {
    screens: {

      'sm': '640px', // Default small breakpoint

      'md': '768px', // Default medium breakpoint

      'lg': '1024px', // Default large breakpoint

      'xl': '1280px', // Default extra large breakpoint

      'tablet': '700px', // Custom tablet breakpoint

      'desktop': '1440px' // Custom desktop breakpoint

    }
    extend: {
      backgroundImage:{
        "header" : "url('/src/images/header.jpg')",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], 
      }, 
    },
  },
  plugins: [
  ],
}

