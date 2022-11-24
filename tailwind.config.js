/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('./images/bgimg.webp')",
        'hero': "url('./images/hero-bgi.webp')",
      },
      backgroundSize: {
        'imgw': "1440px 650px",
        'imgh': "731px 500px"
      },
      container: {
        'page': "1110px"
      },
      spacing: {
        px: '1px',
        98: '24.5rem',
        100: '25rem',
        136: '34rem',
      },
      fontFamily:{
        body: ['Josefin Sans']
      }
    },
  },
  plugins: [],
}
