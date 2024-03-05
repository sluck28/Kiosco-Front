/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    /**Agregar los estilos de tailwindccs a todos estos archivos */
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

