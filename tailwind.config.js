module.exports = {
  darkMode: 'class', // qui class sta nel themetoggle
  content: [
    "./pages/**/*.{js,jsx}", // questo serve ad applicare il css a questi path
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {}, // serve a personalizzare il tema di tailwind
  },
  plugins: [], // permette l'uso di plugin di terze parti tipo quelli che sono nel global css
}