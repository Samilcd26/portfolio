/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'regal-blue': '#38BDF8',
      'main-bg-color':'#0F172A',
      'dirty-white':'#E2E8F0'
    },},
  },
  plugins: [],
}