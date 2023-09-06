/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navbar-gradient-colour-1': '#764BA2',
        'navbar-gradient-colour-2': '#667EEA',
      },
    },
  },
  plugins: [],
}

