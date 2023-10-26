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
      'gray': {
        300: '#F1F1F1',
        500: '#999999'
      }
    },
    extend: {},
  },
  plugins: [],
} satisfies Config

