module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "index.html"
  ],
  theme: {
    screens: {
      'sm': '380px',
      'md': '480px',
      'lg': '768px',
    },  
    extend: {
      colors:{
        primary: '#064e7e'
      }
    },
  },
  plugins: [],
};
