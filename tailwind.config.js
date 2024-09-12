module.exports = {
  mode: 'jit', // Enable Just-In-Time mode for improved performance
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {}, // You can add custom theme configurations or overrides here
  },
  variants: {}, // Define variants for your theme (e.g., dark mode, responsive design)
  plugins: [
    // Add plugins as needed, such as autoprefixer
    // require('autoprefixer'),
  ],
}