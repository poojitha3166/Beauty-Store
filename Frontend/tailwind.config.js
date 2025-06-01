/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-color": "#000000",
        "other": "#0dfjod"
      }
    },
  },
  plugins: [],
}

