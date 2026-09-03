/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0284c7",
          darkblue: "#0369a1",
          electric: "#0066FF",
          accent: "#f59e0b",
          dark: "#0f172a",
          surface: "#1e293b",
          card: "#334155"
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
