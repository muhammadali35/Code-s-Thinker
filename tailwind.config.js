/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin'); // Correct import

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    // Define your custom plugin
    plugin(function({ addUtilities }) {
      addUtilities({
        '.my-rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
      });
    }),
  ],
};
