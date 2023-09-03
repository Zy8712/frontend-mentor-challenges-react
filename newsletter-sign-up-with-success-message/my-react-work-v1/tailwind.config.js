/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-tomato': 'hsl(4, 100%, 67%)',

        'theme-dark-slate-grey': 'hsl(234, 29%, 20%)',
        'theme-charcoal-grey': 'hsl(235, 18%, 26%)',
        'theme-grey': 'hsl(231, 7%, 60%)',
        'theme-white': 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        'theme-roboto': ['"Roboto"', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

