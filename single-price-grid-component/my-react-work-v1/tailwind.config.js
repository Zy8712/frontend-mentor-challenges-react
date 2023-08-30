/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-cyan': 'hsl(179, 62%, 43%)',
        'theme-bright-yellow': 'hsl(71, 73%, 54%)',

        'theme-light-gray': 'hsl(204, 43%, 93%)',
        'theme-grayish-blue': 'hsl(218, 22%, 67%)',
      },
      fontFamily: {
        'theme-karla': ['"Karla"', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

