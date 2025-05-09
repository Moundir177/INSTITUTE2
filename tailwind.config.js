/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // UK flag colors
        "ukred": "#CF142B",
        "ukblue": "#00247D",
        "ukwhite": "#FFFFFF",
        // Metallics
        "gold": {
          50: "#FFF9E5",
          100: "#FFF2CC",
          200: "#FFE699",
          300: "#FFD966",
          400: "#FFCD33",
          500: "#FFC000", // Main gold
          600: "#CC9A00",
          700: "#997300",
          800: "#664D00",
          900: "#332600",
        },
        "silver": {
          50: "#F8F9FA",
          100: "#E9ECEF",
          200: "#DEE2E6",
          300: "#CED4DA",
          400: "#ADB5BD",
          500: "#8D98A5", // Main silver
          600: "#6C757D",
          700: "#495057",
          800: "#343A40",
          900: "#212529",
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}; 