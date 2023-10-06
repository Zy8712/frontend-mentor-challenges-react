/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'theme-dark-black': '#0B0D17',
        'theme-light-blue': '#D0D6F9',
        'theme-white': '#FFFFFF',

        'custom-nav-grey': '#979797',
        'custom-transparent-white': 'rgba(255, 255, 255, 0.04)',
        'custom-explore-white': 'rgba(255, 255, 255, 0.1)',

        'custom-dest-stats-divider': '#383B4B',
        'custom-tech-button-border': 'rgba(255, 255, 255, 0.25)',
      },
    },
  },
  plugins: [],
}

