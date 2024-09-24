/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "custom-md": "1200px",
        "mobile-md": "375px",
      },
      fontSize: {
        "coustom-md": "22px",
      },
      colors: {
        red: "#db4444",
        "black-light": "#f5f5f5",
        "white-light": "#fafafa",
        "black-dark": "#b3b3b3",
        "gray-dark": "#f7f7f7",
        "red-dark":"#DB4444",
        "green":"0 255 102",
        "border-color":"179 179 179",
        "green-color":"#00FF66"
        
      },
      backgroundImage: {
        hero: "url('./assets/images/home-page/png/jbl-speaker.png')",
      }
    },
  },
  plugins: [],
}