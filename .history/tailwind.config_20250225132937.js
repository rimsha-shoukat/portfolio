/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.js",
    "./src/components/*.js",
  ],
  theme: {
    screens: {
      '313p':'313px',
      '315p':'315px',
      '336p':'336px',
      '360p':'360px',
      '426p':'426px',
      '431p':'431px',
      '448p':'448px',
      '445p':'445px',
      '452p':'452px',
      '461p':'461px',
      '480p':'480px',
      '493p':'493px',
      '509p':'509px',
      '511p':'511px',
      '517p':'517px',
      '541p':'541px',
      '561p':'561px',
      '570p':'570px',
      '599p':'599px',
      '615p':'615px',
      '669p':'669px',
      '758p':'758px',
      '879p':'879px',
      '913p':'913px',
      '970p':'970px',
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

