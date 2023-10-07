/** @type {import('tailwindcss').Config} */
export default {
  //purge: false,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js,tsx,jsx}',
    './components/**/*.{html,js,tsx,jsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
}

