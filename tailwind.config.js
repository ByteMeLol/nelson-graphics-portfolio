/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'sans-serif'],
      },
      colors: { ink: '#171717', paper: '#f2f1ed', acid: '#f5f22e' },
      boxShadow: { card: '0 18px 50px rgba(0,0,0,.10)' },
    },
  },
  plugins: [],
}