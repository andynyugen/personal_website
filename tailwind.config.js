/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      // -- Custom Colors --
      colors: {
        lightHover: '#fcf4ff',              // Light background used for hover effects
        darkHover: '#2a004a',               // Dark background used for hover effects
        darkTheme: '#11001F',               // Main dark theme background color
      },

      // -- Custom Fonts --
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],   // Sans-serif font for headings/body
        Ovo: ["Ovo", "serif"]               // Serif font for titles
      },

      // -- Custom Box Shadows --
      boxShadow: {
        'black' : '4px 4px 0 #000',          // Slight offset black shadow
        'white' : '4px 4px 0 #FFF',          // Slight offset white shadow
      },

      // -- Custom Grid Templates --
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
        // Responsive grid: as many columns as fit, min 200px, max 1fr
      }
    },
  },

  // Enable dark mode via a CSS selector
  darkMode: 'selector',

  plugins: [],
}
