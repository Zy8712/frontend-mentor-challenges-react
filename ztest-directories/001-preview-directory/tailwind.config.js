/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'price-grid-theme-cyan': 'hsl(179, 62%, 43%)',
        'price-grid-theme-bright-yellow': 'hsl(71, 73%, 54%)',

        'price-grid-theme-light-gray': 'hsl(204, 43%, 93%)',
        'price-grid-theme-grayish-blue': 'hsl(218, 22%, 67%)',
      },
      fontFamily: {
        'price-grid-theme-karla': ['"Karla"', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

