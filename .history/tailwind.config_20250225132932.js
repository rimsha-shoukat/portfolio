/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.js",
    "./src/components/*.js",
  ],
  theme: {
    screens: {
      '313':'313px',
      '315':'315px',
      '336':'336px',
      '360':'360px',
      '426':'426px',
      '431':'431px',
      '448':'448px',
      '445':'445px',
      '452':'452px',
      '461':'461px',
      '480':'480px',
      '493':'493px',
      '509':'509px',
      '511':'511px',
      '517':'517px',
      '541':'541px',
      '561':'561px',
      '570':'570px',
      '599':'599px',
      '615':'615px',
      '669':'669px',
      '758':'758px',
      '879':'879px',
      '913':'913px',
      '970':'970px',
      '1017':'1017px',
      '1125px':'1125px',

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

