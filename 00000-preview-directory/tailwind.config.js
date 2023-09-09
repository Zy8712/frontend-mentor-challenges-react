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

        'price-grid-theme-cyan': 'hsl(179, 62%, 43%)',
        'price-grid-theme-bright-yellow': 'hsl(71, 73%, 54%)',

        'price-grid-theme-light-gray': 'hsl(204, 43%, 93%)',
        'price-grid-theme-grayish-blue': 'hsl(218, 22%, 67%)',


        /** Newsletter */
        'newsletter-sign-up-theme-tomato': 'hsl(4, 100%, 67%)',

        'newsletter-sign-up-theme-dark-slate-grey': 'hsl(234, 29%, 20%)',
        'newsletter-sign-up-theme-charcoal-grey': 'hsl(235, 18%, 26%)',
        'newsletter-sign-up-theme-grey': 'hsl(231, 7%, 60%)',
        'newsletter-sign-up-theme-white': 'hsl(0, 0%, 100%)',

        'newsletter-sign-up-custom-red': 'rgba(238,77,110,255)',
        'newsletter-sign-up-custom-orange': 'rgba(255,106,58,255)',

        'newsletter-sign-up-translucent-red': 'rgba(255,232,230,255)',
      },
      fontFamily: {
        'price-grid-theme-karla': ['"Karla"', 'sans-serif'], 
        'newsletter-sign-up-theme-roboto': ['"Roboto"', 'sans-serif'], 
      },
      backgroundImage: {
        'desktop-image': "url('./src/pages/newsletter-sign-up-with-success-message-directory-ver/assets/illustration-sign-up-desktop.svg')",
        'mobile-image': "url('./src/pages/newsletter-sign-up-with-success-message-directory-ver/assets/illustration-sign-up-mobile.svg')",
      },
    },
  },
  plugins: [],
}

