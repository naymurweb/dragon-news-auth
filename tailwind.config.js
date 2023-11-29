/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif"
      },

      colors: {
        'blue': '#1fb6ff',
        'pink': '#D72050',
        'orange': '#ff7849',
        'green': '#13ce66',
        'gray-dark':'#403F3F',
        'gray': '#8492a6',
        'gray-light': '#F3F3F3',
      },
    }

    
  },
  plugins: [require("daisyui")],
};
