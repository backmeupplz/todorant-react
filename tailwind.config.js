/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  purge: ['./public/index.html', './src/**/!(tailwind).{ts,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        todorantWorksText: '60%',
        reviewText: '85%',
      },
      width: {
        video: '437px',
        screenshotContainer: '384px',
        screenshotMobile: '200px',
        screenshot: '300px',
      },
      height: {
        video: '246px',
        screenshotContainer: '425px',
        screenshot: '607px',
        screenshotMobile: '200px',
      },
      maxHeight: {
        '9/10': '90%',
      },
      zIndex: { underModal: '-1' },
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
        mobileVideoTop: '-40px',
      },
      boxShadow: {
        landingVideo: '0px 5px 40px rgba(0, 0, 0, 0.1)',
      },
      rotate: {
        screenshotYellow: '-10deg',
        screenshotBlue: '10deg',
      },
      fontFamily: {
        BodyText: ['Montserrat'],
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
            lineHeight: '34.13px',
          },
        ],
        xxl: ['48px', { lineHeight: '30px' }],
        xxxl: [
          '48px',
          {
            lineHeight: '58.51px',
          },
        ],
        bodyTitleMobile: ['24px', { lineHeight: '28px' }],
        actMobile: ['24px', { lineHeight: '30px' }],
      },
    },
    gradientColorStops: () => ({
      orangeBoxGradient: {
        primary: '#FF5F13',
        secondary: '#FF8A53',
      },
    }),
  },
}
