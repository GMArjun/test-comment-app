/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    extend: {
      colors: {
        // Add a custom color
        "primary": "#01B99F"
      },
    },
  },
  plugins: [],
};
