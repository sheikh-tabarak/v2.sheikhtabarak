// /** @type {import('tailwindcss').Config} */
module.exports = {
 

  content: [
    "./index.html" , 
    "./src/**/*.{js,jsx,ts,tsx,html}",
    // "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      // backgroundImage: {
      //   'hero-pattern': "url('/assest')",
      //  'footer-texture': "url('/img/footer-texture.png')",
      // }
    },
  },
  plugins: [

    require('flowbite/plugin')
  ],
}

