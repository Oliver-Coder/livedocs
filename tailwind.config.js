/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-100': '#09111f',
        'dark-200': '#0f1c34',
        'dark-300': '#161e30',
        'dark-350': '#1b2840',
        'dark-400': '#2e3d5b',
        'blue-100': '#b4c6ee',
      },
    },
  },
  plugins: [],
} 