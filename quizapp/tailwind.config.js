module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': {'max': '1400px'},
        'xl': {'max': '1279px'},
        'lg': {'max': '1023px'},
        'md': {'max': '767px'},
        'sm': {'max': '639px'},
      },
      colors: {
        'text-base': 'var(--color-text-base)',
        'background-base': 'var(--background-color-base)',
        'button-hover': 'var(--color-button-hover)',
        'button-base': 'var(--button-color-base)',
        'spaan-text': 'var(--spaan-text-color)',
      },
    },
  },
  plugins: [],
};
