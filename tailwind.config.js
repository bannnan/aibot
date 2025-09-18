module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js',
  ],
  daisyui: {
    themes: [
      {
        termynal: {
          primary: "#8b5cf6",
          "primary-focus": "#7c3aed",
          "primary-content": "#ffffff",
          secondary: "#ec4899",
          accent: "#3b82f6",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      'black',
    ],
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
};
