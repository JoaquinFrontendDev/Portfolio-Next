/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        move: {
          '0%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(-90px)' },
        },
        title: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        slide: {
          '100%': {
            'top': '-200px'
          }
        },
        typewriter: {
          '40%, 60%': {
            'left': '100%'
          },
          '100%': {
            'left': '0'
          }
        }
      },
      animation: {
        move: 'move 3s ease-in-out infinite alternate-reverse',
        title: 'title 5s ease infinite',
        slide: 'slide 20000ms steps(4) infinite',
        typewriter: 'typewriter 5s steps(38) infinite'
      },
      fontFamily: {
        OpenSans: ['Open Sans', 'sans-serif'],
      },
      screens: {
        'sm': { min: '480px' },
        'md': { min: '700px' },
        'lg': { min: '960px' },
        'xl': { min: '1024px' },
        '2xl': { min: '1280px' }
      }
    },
    lineHeight: {
      'extra-loose': '2.5',
      '11': '50px',
    },
    plugins: [],
  }
};
