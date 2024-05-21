/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1220px",
      "2xl": "1440px",
      "3xl": "1700px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
         inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#2190FF",
        black: {
          DEFAULT: "#000",
          100: "#0D1117",
          200: "#161B22",
          300: "#1F2428",
          400: "#242C38",
        },
        grey: {
          100: "#969BA5",
          200: "#55616D",
        },
        white: {
          DEFAULT: "#FFF",
          400: "#A3B3BC",
          500: "#A4B8D5",
          800: "#D0DFFF",
        },
        purple: "#8C7CFF",
        pink: "#ED5FBD",
        violet: "#F16565",
        orange: "#FF964B",
      },
      backgroundImage: {
        banner: "url('/mica-banner.png')",
        'bg-scotia': "url('/Scotiabank_Logo.svg')",
        'bg-rbc': "url('/Rbc-logo.svg')",
        'bg-bmo': "url('/bmo-logo.svg')",
        'bg-purelife': "url('/purelife-logo.svg')",
        'bg-onni': "url('/onni-logo.svg')",
        'bg-wrm': "url('/wrm-logo.svg')",
        'bg-onSite': "url('/onSite-logo.svg')",
        'bg-img-1': "url('/scotia-whistler.png')",
        'bg-img-2': "url('/RBC Langford2.jpg')",
        'bg-img-3': "url('/RBC No.3 & Cook.jpg')",
        'bg-img-4': "url('/BMO Denman.jpg')",
        'bg-img-5': "url('/BMO Poco2.jpg')",
        'bg-img-6': "url('/Scotia Wealth.jpg')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/hero-pattern.png')",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'loop-scroll': 'loop-scroll 50s linear infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};