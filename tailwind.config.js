/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Whitney", "sans-serif"],
        heading: ["Saira", "sans-serif"]
      },
      colors: {
        background: "#3c4be7",
        'dark-background': '#2937cc',
      },
      screens: {
        'semimd': '946px',
        'lg': '1072px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
  

}