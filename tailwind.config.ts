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
      'teal': '#46B2C8',
      'dark': '#000',
      'red': '#aa3333',
      'gray': {
        DEFAULT: '#F1F1F1',
        dark: '#999999'
      }
    },
    extend: {
      backgroundImage: {
        'user-1': "url('/img/user-1.png')"
      }
    },
  },
  plugins: [],
} satisfies Config

