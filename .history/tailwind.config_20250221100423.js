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
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"], // Custom class: `font-inter`
      },
    },
  },
  plugins: [
  ],
}

