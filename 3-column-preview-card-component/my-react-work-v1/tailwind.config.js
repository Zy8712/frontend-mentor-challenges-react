/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'theme-bright-orange': 'hsl(31, 77%, 52%)',
        'theme-dark-cyan': 'hsl(184, 100%, 22%)',
        'theme-very-dark-cyan': 'hsl(179, 100%, 13%)',

        'theme-transparent-white': 'hsla(0, 0%, 100%, 0.75)',
        'theme-very-light-gray': 'hsl(0, 0%, 95%)',
      },
      fontFamily: {
        'theme-lexend': ['"Lexend Deca"', 'sans-serif'],
        'theme-shoulders': ['"Big Shoulders Display"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

