/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/app/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}"
],

  theme: {
    extend: {
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "0.2", transform: "scale(0.95)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
        },
      },
      animation: {
        flicker: "flicker 2s infinite ease-in-out",
       
      },
    },
  },
  plugins: [],
};
