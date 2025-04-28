/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",  // This will include all HTML files in the current directory and subdirectories
    "./*.html"      // This will include HTML files in the root directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
