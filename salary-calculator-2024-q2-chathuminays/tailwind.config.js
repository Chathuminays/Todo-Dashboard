/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '425px',
      'md': '768px',
      'lg': '800px',
      'xl': '1024px',
      '2xl': '1280px',
    },
    extend: {
      colors: {
        purple: 'hsla(277, 84%, 17%, 1)',
        purple_light: 'hsla(283, 16%, 92%, 0.1)',
        background: 'hsla(0, 0%, 98%, 1)',
      },
    },
  },
  plugins: [],
}

