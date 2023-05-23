/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    './src/home.html',
    './src/navbar.html'
  ],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0284c7',
        dark: '#0f172a',
      },
      screens: {
        '2xl': '1320px',
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        }
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
      }
    },
  },
  plugins: [],
}

