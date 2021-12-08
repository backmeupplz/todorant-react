/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  purge: ['./public/index.html', './src/**/!(tailwind).{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          dark: '#FA6641',
          light: '#EAE100',
        },
        orange: {
          button: '#FF9A6A',
        },
        screenshot: {
          yellow: '#ffd166',
          blue: '#3366ff',
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
        screenshot_container: '425px',
        screenshot: '300px',
      },
      height: {
        test: '47px',
        video: '246px',
        screenshot_container: '425px',
        screenshot: '300px',
      },
      fontSize: {
        base: [
          '16px',
          {
            lineHeight: '30px',
          },
        ],
        lg: [
          '18px',
          {
            lineHeight: '22px',
          },
        ],
        xl: [
          '28px',
          {
            lineHeight: '34,13px',
          },
        ],
        xxl: [
          '48px',
          {
            lineHeight: '58,51px',
          },
        ],
      },
      spacing: {
        video_right: '-64px',
        video_top: '-182px',
        sm: '8px',
        lg: '24px',
        xl: '30px',
        xxl: '40px',
        12: '12px',
        15: '15px',
        45: '45px',
      },
      fontFamily: {
        montserrat: ['Montserrat'],
      },
    },
    gradientColorStops: (theme) => ({
      orange_dark: '#FF5F13',
      orange_light: '#FF8A53',
    }),
    container: {
      center: true,
      padding: '2rem',
    },
  },
}
