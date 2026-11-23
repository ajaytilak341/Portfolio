/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#ededed',
        'electric-blue': '#00faff',
        cyan: '#00ffff',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
