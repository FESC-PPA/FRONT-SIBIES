/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom-bgColor': '#F9FAFB',
        'custom-button-bgColor': '#CE2126',
        'custom-button-bgColor-accept': '#7ED957',
      },
      textColor: {
        'custom-textColor': '#FFFFFF',
      },
    },
  },
  plugins: [],
}

