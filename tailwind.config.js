/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "branco-site": 'var(--branco-site)',
        "stone-100-site": 'var(--stone-100-site)',
        "stone-150-site": 'var(--stone-150-site)',
        "stone-600-site": 'var(--stone-600-site)',
        "stone-900-site": 'var(--stone-900-site)',
        "marrom-800-site": 'var(--marrom-800-site)',
        "rose-800-site": 'var(--rose-800-site)',
        "rose-50-site": 'var(--rose-50-site)'
      },

      fontFamily:{
        'font-young': 'var(--font-young)',
        'font-outfit': 'var(--font-outfit)'
      }
    },
  },
  plugins: [],
}

