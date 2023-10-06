/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-cyan': 'hsl(193, 38%, 86%)',
        'neon-green': 'hsl(150, 100%, 66%)',
        
        'grayish-blue': 'hsl(217, 19%, 38%)',
        'dark-grayish-blue': 'hsl(217, 19%, 24%)',
        'dark-blue': 'hsl(218, 23%, 16%)',
    },
    fontFamily: {
      'theme-manrope': ['Manrope', 'sans-serif'], 
    },
    boxShadow: {
      'random-button-shadow': '0px 0px 20px 3px hsl(150, 100%, 66%)',
    },
  },
},
plugins: [],
}

