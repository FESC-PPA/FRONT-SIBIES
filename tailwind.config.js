/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom-bgColor': '#3C3C3B',
        'custom-button-bgColor': '#CE2126',
      },
      textColor: {
        'custom-textColor': '#FFFFFF',
      },
    },
  },
  plugins: [],
}

