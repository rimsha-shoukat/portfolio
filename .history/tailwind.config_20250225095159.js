/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.js",
    "./src/components/*.js",
  ],
  theme: {
    screens: {
      '[313px]':'313px',
      '[315px]':'315px',
      '[336px]':'336px',
      '[360px]':'360px',
      '[431px]':'431px',
      '[448px]':'448px',
      '[445px]':'445px',
      '[480px]':'480px',
      '[511px]':'511px',
      '[541px]':'541px',
      '[570px]':'570px',
      '[599px]':'599px',
      '[615px]':'615px',
      '[970px]':'970px',
      '[758px]':'758px',
      '[879px]':'879px',
      '[913px]':'913px',
      '[970px]':'970px',
      '[1017px]':'1017px',
      '[1125px]':'1125px',

    },
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

