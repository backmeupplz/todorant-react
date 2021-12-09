/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  purge: ['./public/index.html', './src/**/!(tailwind).{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        signInButton: '#FF9A6A',
        screenshot: {
          yellow: '#ffd166',
          blue: '#3366ff',
        },
      },
      borderRadius: {
        md: '8px',
        lg: '10px',
        xl: '20px',
        xxl: '64px',
      },
      width: {
        storeBtn: '54px',
        video: '437px',
        screenshotContainer: '384px',
        screenshot: '300px',
      },
      height: {
        storeBtn: '47px',
        video: '246px',
        screenshotContainer: '425px',
        screenshot: '607px',
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
        videoTop: '-182px',
        sm: '8px',
        lg: '24px',
        xl: '30px',
        xxl: '40px',
        12: '12px',
        15: '15px',
        22: '22px',
        45: '45px',
        64: '64px',
      },
      fontFamily: {
        BodyText: ['Montserrat'],
      },
      boxShadow: {
        landingVideo: '0px 5px 40px rgba(0, 0, 0, 0.1)',
      },
      rotate: {
        screenshotYellow: '-10deg',
        screenshotBlue: '10deg',
      },
    },
    gradientColorStops: () => ({
      orangeBoxGradient: {
        primary: '#FF5F13',
        secondary: '#FF8A53',
      },
    }),
    container: {
      center: true,
      padding: '2rem',
    },
  },
}
