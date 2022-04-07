/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  purge: ['./public/index.html', './src/**/!(tailwind).{ts,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        'todorant-works-text': '60%',
        'review-text': '85%',
      },
      width: {
        video: '437px',
        'screenshot-container': '384px',
        'screenshot-container-mobile': '256px',
        screenshot: '300px',
        'screenshot-mobile': '200px',
      },
      height: {
        video: '246px',
        'screenshot-container': '425px',
        'screenshot-container-mobile': '283px',
        screenshot: '607px',
        'screenshot-mobile': '405px',
      },
      maxHeight: {
        '9/10': '90%',
      },
      zIndex: { underModal: '-1' },
      colors: {
        'main-background': 'var(--main-background)',
        'main-text': 'var(--main-text)',
        'modal-text': 'var(--modal-text)',
        button: {
          'sign-in': '#FF9A6A',
        },
        screenshot: {
          yellow: '#ffd166',
          blue: '#3366ff',
        },
        'general-button': '#a7a9b5',
        'semi-transparent-background': 'rgba(0, 0, 0, 0.6)',
      },
      borderRadius: {
        sm: '8px',
        md: '10px',
        lg: '12px',
        xl: '20px',
        xxl: '64px',
      },
      spacing: {
        'video-top': '-182px',
        'mobile-video-top': '-40px',
      },
      boxShadow: {
        'landing-video': '0px 5px 40px rgba(0, 0, 0, 0.1)',
      },
      rotate: {
        'screenshot-primary': '-10deg',
        'screenshot-secondary': '10deg',
      },
      fontFamily: {
        'body-text': ['Montserrat'],
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
        'body-title-mobile': ['24px', { lineHeight: '28px' }],
        'act-mobile': ['24px', { lineHeight: '30px' }],
        'orange-box-title-mobile': ['20px', { lineHeight: '26px' }],
      },
    },
    gradientColorStops: () => ({
      'orange-box-gradient': {
        primary: '#FF5F13',
        secondary: '#FF8A53',
      },
    }),
  },
}
