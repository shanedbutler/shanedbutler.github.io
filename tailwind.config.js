/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  purge: ["*.html"],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [],
  variants: {
    extend: {
      display: ["group-hover"],
    }
  }
}
