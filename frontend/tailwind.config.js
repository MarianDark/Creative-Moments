/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mmlpink: '#d640b2',
        mmlyellow: '#fbc02d',
        mmlturquoise: '#00bcd4',
        mmlpurple: '#8e24aa',
        mmlblack: '#1a1a1a',
        mmlgradient: ['#d640b2', '#fbc02d', '#00bcd4'],
      },
    },
  },
  plugins: [],
}
