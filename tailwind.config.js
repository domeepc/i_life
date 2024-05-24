/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        headlines: {
          light: '#101840',
          dark: '#ffffff',
        },
        primary: {
          light: '#474d66',
          dark: '#ffffff',
        },
        container: {
          light: '#edeff5',
          dark: '#414141',
        },
        card: {
          light: '#ffffff',
          dark: '#151515',
        },
        icons: {
          DEFAULT: '#3a6ad4',
        },
      },
    },
  },
  plugins: [],
};
