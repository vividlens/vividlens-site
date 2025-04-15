/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'allura': ['Allura', 'cursive'],
        'playfair': ['Playfair Display', 'serif'],
        'rockybilly': ['Rockybilly', 'sans-serif'],
      },
      colors: {
        'theme': {
          DEFAULT: '#9333ea',
          dark: '#7e22ce',
        }
      }
    },
  },
  plugins: [],
};