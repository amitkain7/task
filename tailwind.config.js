/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        menuColor: ' #091431',
         bgColor: '#F01C21'
        
      },
      colors: {
        buttonBG: ' #F01C21',
        searchBG: '#E3E3E3',
        newslatterC : '#091431',
        borderC : '#f1f5f9'
        

      },
      width: {
        searchW: '418px',
        cardW : '200px',
        cardW1 : '250px',
        cardW2 : '225px'
      },
      height : {
        cardH : '240px',
        dealH : '160px',
        dealH1 : '200px',
        appH : '300px'
      }
    },
  },
  plugins: [],
}