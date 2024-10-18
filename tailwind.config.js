/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000",
        accent: {
          200: '#D4DEE7',
          400: '#4C6B8A',
          600: '#2C3D4F',
          800: '#1B2631',
        },
        primary: {
          200: '#30c9a1',
          400: '#1d6e58',
          600: '#113d31',
          800: '#061712',
        },
      },
    },
  },
  plugins: [],
};
