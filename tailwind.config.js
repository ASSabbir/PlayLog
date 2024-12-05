import daisyui from './node_modules/daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'description': '"Funnel Sans", sans-serif',
        'title': '"Play", serif',
        'title2': '"Press Start 2P", serif'
      },
      colors:{
        'primary':'#BD0507'
      }
    },
  },
  plugins: [daisyui],
}

