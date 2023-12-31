import type { Config } from 'tailwindcss'

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    colors: {
      'teal': {
        DEFAULT: '#46B2C8',
        dark: '#115766'
      },
      'dark': '#000',
      'red': '#aa3333',
      'white': '#fff',
      'link': '#3056D3',
      'gray': {
        DEFAULT: '#F1F1F1',
        'fade': '#C4C4C4',
        'dark': '#999999',
        'light': '#F1F1F1',
        '400': '#828282',
        '500': '#023A59',
      }
    },
    extend: {
      backgroundImage: {
        'user-1': "url('/img/user-1.png')"
      },
      keyframes: {
        zoomIn: {
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          }
        },
        zoomOut: {
          '0%': {
            opacity: 1
          },
          '100%': {
            opacity: 0
          }
        }
      },
      animation: {
        zoomIn: 'zoomIn 300ms ease-in-out',
        zoomOut: 'zoomOut 300ms ease-in-out',
      }
    },
  },
  plugins: [],
} satisfies Config

