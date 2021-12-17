import { classnames } from 'classnames/tailwind'

const container = classnames(
  'overflow-hidden',
  'h-full',
  'mt-xxl',
  'relative',
  'justify-center',
  'flex',
  'h-screenshotContainer',
  'w-screenshotContainer',
  'lg:w-screenshotContainer',
  'z-underModal'
)
const screen = classnames(
  'transform-gpu',
  'w-screenshotMobile',
  'lg:w-screenshot',
  'h-screenshot',
  'absolute',
  'mt-xxl',
  'rounded-xxl'
)
const blueScreen = classnames(
  'bg-screenshot-blue',
  'rotate-screenshotBlue',
  screen
)
const yellowScreen = classnames(
  'bg-screenshot-yellow',
  'rotate-screenshotYellow',
  screen
)
const frame = classnames(
  'flex',
  'absolute',
  'mt-xxl',
  'lg:w-screenshot',
  'w-screenshotMobile'
)

const DifferenceScreenshot = () => {
  return (
    <div className={container}>
      <div className={blueScreen} />
      <div className={yellowScreen} />
      <img alt="Screenshot" src="/img/screenshots/en.webp" className={frame} />
    </div>
  )
}

export default DifferenceScreenshot
