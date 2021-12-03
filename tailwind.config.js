/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  purge: ['./public/index.html', './src/**/!(tailwind).{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        black: {
          background: '#040404',
          'background-purpose': '#12141D',
          'perk-gradient-light': 'rgba(4, 6, 14, 0.9)',
          'perk-gradient-dark': '#04060E',
        },
        gold: {
          dark: '#FA6641',
          light: '#EAE100',
        },
        orange: {
          dark: '#FF5F13',
          light: '#FF8A53',
          button: '#FF9A6A',
        },
      },
      borderRadius: {
        md: '8px',
        lg: '10px',
        xl: '20px',
      },
      width: {
        test: '54px',
        video: '460px',
      },
      height: {
        test: '47px',
        video: '246px',
      },
      fontSize: {
        title: [
          '28px',
          {
            lineHeight: '34,13px',
          },
        ],
        regular: [
          '16px',
          {
            lineHeight: '30px',
          },
        ],
        button: [
          '18px',
          {
            lineHeight: '22px',
          },
        ],
      },
      spacing: {
        test: '-112px',
        sdsd: '43px',
        sm: '8px',
        lg: '24px',
        xl: '48px',
        12: '12px',
        45: '45px',
      },
      fontFamily: {
        montserrat: ['Montserrat'],
      },
    },
    gradientColorStops: (theme) => ({
      dark: '#FF5F13',
      light: '#FF8A53',
    }),
    container: {
      center: true,
      padding: '2rem',
    },
  },
}
