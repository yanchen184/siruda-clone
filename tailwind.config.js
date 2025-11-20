/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E30613', // SIRUDA 紅色
          dark: '#B30410',
        },
        dark: {
          DEFAULT: '#2F2F2F',
          light: '#999999',
        },
        light: {
          DEFAULT: '#FAFAFA',
          gray: '#F4F4F4',
        }
      },
      fontFamily: {
        sans: ['Arial', '微軟正黑體', 'Microsoft JhengHei', 'sans-serif'],
        heading: ['SquadaOne', 'Impact', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      }
    },
  },
  plugins: [],
}

