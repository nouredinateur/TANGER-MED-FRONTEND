module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blueship": "#14213d",
        "white": "#ffff"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
