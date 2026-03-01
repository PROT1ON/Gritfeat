// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",          // or wherever your HTML is located
    "./src/**/*.{js,jsx,ts,tsx}",  // Ensure it includes your React JSX files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}