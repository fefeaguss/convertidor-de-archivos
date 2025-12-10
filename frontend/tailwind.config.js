export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        naranjamandarina : '#FF6B35',       // naranja mandarina vibrante
        duraznoclaro: '#F7C59F',     // durazno claro
        'neutral-dark': '#2D2D2D',// casi negro para tipografía
        'neutral-light': '#FAF8F5',// blanco cálido premium
        accent: '#FF8A5B', 
        brand: {
          50: "#eef2ff",
          500: "#4a6cf7"
        }
      }
    }
  },
  plugins: []
}
