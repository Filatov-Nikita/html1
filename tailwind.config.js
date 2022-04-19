module.exports = {
  content: ["./src/**/*.{js,vue}"],
  prefix: 't-',
  theme: {
    fontFamily: {
      body: ['Noto Sans', 'sans-serif']
    },
    extend: {
      fontSize: {
        '4.1xl': '2.5rem',
        '1.1xl': '1.375rem'
      },
      colors: {
        primary: '#0F4DEC',
        secondary: '#FEC600',
        serebro: '#F7F7F7',
        platina: '#C5C5C5'
      }
    },
  },
  plugins: [],
}
