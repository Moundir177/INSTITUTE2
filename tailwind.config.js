/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Colors from British company branding
        "darkblue": "#012169", // Pantone 280C
        "lightgray": "#E0E0E0", // Light gray to balance with blue
        "gold": "#D4AF37", // PMS 9143c (gold/cream)
        "gray": "#6E7F80", // PMS 7544c
        "white": "#FFFFFF", // White for visual balance
        
        // Color variations
        "brand": {
          blue: {
            100: "#E6EBF4",
            200: "#C1CEE5",
            300: "#8696C1",
            400: "#4A5F9F",
            500: "#012169", // Main dark blue
            600: "#011A54",
            700: "#01143F",
            800: "#000D2A",
            900: "#000715",
          },
          gold: {
            100: "#F9F4E3",
            200: "#F1E7C2",
            300: "#E8D9A0",
            400: "#DFCC7F",
            500: "#D4AF37", // Main gold/cream
            600: "#B89723",
            700: "#8B7119",
            800: "#5D4C11",
            900: "#2F2608",
          },
          gray: {
            100: "#F0F2F2",
            200: "#DFE3E3",
            300: "#C3CACA",
            400: "#A6B0B1",
            500: "#6E7F80", // Main gray
            600: "#576566",
            700: "#414B4C",
            800: "#2B3233",
            900: "#151919",
          },
        },
        // Dark mode specific colors
        dark: {
          background: "#121418",
          card: "#1E2028",
          border: "#2E323C",
          primary: "#1F3E7C", // Darker blue
          highlight: "#C49A2F", // Darker gold
          text: {
            primary: "#E1E2E5",
            secondary: "#A1A3A9",
            muted: "#6C7078",
          }
        }
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
        serif: ['Merriweather', 'serif'],
      },
      // RTL support additions
      textDirection: {
        rtl: 'rtl',
        ltr: 'ltr',
      },
    },
  },
  // Add RTL specific variants
  variants: {
    extend: {
      margin: ['rtl'],
      padding: ['rtl'],
      inset: ['rtl'],
      textAlign: ['rtl'],
    },
  },
  plugins: [
    // Add custom plugin for RTL support
    function({ addUtilities }) {
      const newUtilities = {
        '.rtl': {
          direction: 'rtl',
        },
        '.ltr': {
          direction: 'ltr',
        },
      };
      addUtilities(newUtilities);
    },
  ],
}; 