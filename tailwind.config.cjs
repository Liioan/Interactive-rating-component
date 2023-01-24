/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        'custom-orange': 'hsl(25, 97%, 53%)',
        'custom-white': 'hsl(0, 0%, 100%)',
        'custom-lightGrey': 'hsl(217, 12%, 63%)',
        'custom-mediumGrey': 'hsl(216, 12%, 54%)',
        'custom-darkBlue': 'hsl(213, 19%, 18%)',
        'custom-veryDarkBlue': 'hsl(216, 12%, 8%)',
      },
      fontFamily: {
        overpass: ['Overpass'],
      },
      fontWeight: {
        400: '400',
        700: '700',
      },
      backgroundImage: {
        gradient:
          'radial-gradient(76.82% 98.76% at 50% -9.53%, rgba(37, 45, 55, 0.895833) 0%, rgba(18, 20, 23, 0.56) 100%)',
      },
    },
  },
  plugins: [],
};
