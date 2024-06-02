/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        '': "url('/src/assets/hero-bg.svg')",
      },
    },
  },
  plugins: [],
}

