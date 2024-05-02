/** @type {import('tailwindcss').Config} */
export const content = [
  './src/**/*.{js,jsx,ts,tsx}',
  './node_modules/flowbite/**/*.js',
]
export const theme = {
  extend: {
    fontFamily: {
      Montserrat: ['Montserrat', 'sans-serif'],
      Raleway: ['Inter', 'sans-serif'],
      Outfit: ['Outfit', 'sans-serif'],
    },
  },
}
export const plugins = [require('flowbite/plugin')]