


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'RobotoSlab': ['Roboto Slab', 'serif'],
        'Lato' : ['Lato', 'sans-serif']
      },
      height:{
        'h-104': ['32rem']
      }
    },
    
  },
  plugins: [],
}