module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
     
      'kaushan': ['Kaushan Script'],
     },
    extend: {
      colors: {
        green: {
         
          DEFAULT: '#43cea2',
          
        },
         blue: {
         
          DEFAULT: '#185a9d',
          
        },
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#16181d",
          300: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
