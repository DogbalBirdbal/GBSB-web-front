/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        'default': '19.2vw',
        '50': '50px',
        '80': '80px',
        '100': '100px',
        '150': '150px',
        '180': '180px',
        '200': '200px',
        'theme-width': '12.7vw',
        'theme-height': '16vw',
        'theme-gap': '3.2vw',
        'selector-gap': '2vw',

        '0.3vw': '0.3vw',
        '0.5vw': '0.5vw',
        '0.6vw': '0.6vw',
        '0.8vw': '0.8vw',
        '1vw': '1vw',
        
        '5vh': '5vh',
        '6vh': '6vh',
        '7vh': '7vh',
        '8vh': '8vh',
        '10vh': '10vh',
      },
      colors: {
        'blue-dark': '#2980f2',
        'blue-main': '#1b1464',
        'blue-medium': '#6ea9f7',
        'blue-semilight': '#9fc6f9',
        'blue-light': '#afafce',

        'gray-main': '#999999',
        'gray-medium': '#cccccc',
        'gray-semilight': '#f5f5f5',
        'gray-light': '#fafbff'
      }
    },
  },
  plugins: [],
}
