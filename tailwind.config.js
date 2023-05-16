/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    colors: {
      white: "#fff",
      "color-primary": "#01B99F",
      "color-bold": "#1D232B",
      "color-light": "#919EB6",
      "color-regular": "#313B49",
      "color-grey": "#5A6B87",
      "slate-100": "#F7F8FA",
    },
    extend: {
      aspectRatio: {
        "5/6": "5 / 6",
      },
      fontSize: {
        xxs: "0.625rem",
      },
    },
  },
  plugins: [],
};
