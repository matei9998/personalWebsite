module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'gradient-x-soft': 'gradientX 100s ease-in-out infinite',
      },
      keyframes: {
        gradientX: {
          '0%':   { backgroundPosition: '0% 0%' },
          '25%':  { backgroundPosition: '50% 25%' },
          '50%':  { backgroundPosition: '100% 50%' },
          '75%':  { backgroundPosition: '50% 75%' },
          '100%': { backgroundPosition: '0% 0%' },
        },
      },
      backgroundSize: {
        '300': '300% 300%',
      },
    },
  },
  plugins: [],
};
