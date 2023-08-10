/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  
  content: ["index.html", "./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm' : '540px',

      'md' : '720px',

      'lg' : '960px',

      'xl' : '1200px',

      '2xl': '1400px'
    },

    container: {
      center: true,
      padding: "15px"
    },
    
    extend: {
  
    },
  },
  plugins: [],
}

