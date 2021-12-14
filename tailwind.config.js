/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  purge: ['./public/index.html', './src/**/!(tailwind).{ts,tsx}'],
  theme: {
    extend: {
      maxHeight: {
        'almost-full': '90%',
      },
      minWidth: { 24: '24px' },
      zIndex: { underModal: '-1' },
      borderRadius: {
        md: '8px',
        lg: '10px',
        xl: '20px',
        xxl: '64px',
        12: '12px',
      },
      maxWidth: {
        crossplatformButtons: '600px',
        platformLogo: '40px',
        todorantWorksText: '60%',
        reviewText: '85%',
      },
      width: {
        storeBtn: '54px',
        video: '437px',
        screenshotContainer: '384px',
        screenshotMobile: '200px',
        screenshot: '300px',
        mediumButton: '48px',
        platformBtn: '100px',
        platformLogo: '40px',
        signInBtn: '160px',
        avatar: '48px',
        circleBtn: '8px',
      },
      height: {
        storeBtn: '47px',
        video: '246px',
        screenshotContainer: '425px',
        screenshot: '607px',
        screenshotMobile: '200px',
        mediumButton: '48px',
        platformBtn: '96px',
        platformLogo: '40px',
        signInBtn: '47px',
        avatar: '48px',
        circleBtn: '8px',
      },
      colors: {
        button: {
          signIn: '#FF9A6A',
          platform: 'rgba(0, 0, 0, 0.03)',
          platformHover: 'rgba(0, 0, 0, 0.1)',
          circle: '#868a9a',
        },
        screenshot: {
          yellow: '#ffd166',
          blue: '#3366ff',
        },
        generalButton: '#a7a9b5',
        semiTransparentBackground: 'rgba(0, 0, 0, 0.6)',
        neutralButton: 'rgba(96, 165, 250, 0.1)',
      },
      borderRadius: {
        sm: '8px',
        md: '10px',
        lg: '12px',
        xl: '20px',
        xxl: '64px',
      },
      spacing: {
        videoTop: '-182px',
        reviewText: '15px',
        topOrangeBox: '30px',
        signInBtn: '45px',
        bottomOrangeBox: '48px',
        sm: '8px',
        md12: '12px',
        md16: '16px',
        lg22: '22px',
        lg24: '24px',
        xxl: '40px',
        xxxl: '64px',
      },
      boxShadow: {
        landingVideo: '0px 5px 40px rgba(0, 0, 0, 0.1)',
      },
      rotate: {
        screenshotYellow: '-10deg',
        screenshotBlue: '10deg',
      },
      fontSize: {
        sm: [
          '14px',
          {
            lineHeight: '17px',
          },
        ],
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
        xxl: ['48px', { lineHeight: '30px' }],
        xxxl: [
          '48px',
          {
            lineHeight: '58,51px',
          },
        ],
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
      gradientColorStops: () => ({
        orangeBoxGradient: {
          primary: '#FF5F13',
          secondary: '#FF8A53',
        },
      }),
    },
  },
}
