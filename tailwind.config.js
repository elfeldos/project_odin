/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      "sm": "580px",
      "md": "770px",
      "lg": "995px",
      "xl": "1200",
      "2xl": "1400",
    },
      colors: {
        "odin-blue": "#1D00FF",
      }
  },
  plugins: [],
}

