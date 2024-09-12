module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Ensure you're watching all JS/TS files in pages folder
    './components/**/*.{js,ts,jsx,tsx}', // Same for components folder
    './app/**/*.{js,ts,jsx,tsx}', // If you're using the app directory (Next.js 13+)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
