/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0C3C14', //navbar bg
        greenA: '#5D9D68',  //inactive color
        greenB: '#E0FAE5',  //almost shada color
        greenC: '#7CEC93',  //brightest green
        redA: '#b8001f',
        redC: '#ebcbcb',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

