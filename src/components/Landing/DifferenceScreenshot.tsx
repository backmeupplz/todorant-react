import { classnames } from 'classnames/tailwind'
import { useSnapshot } from 'valtio'
import AppStore from 'stores/AppStore'
import useDarkMode from 'hooks/useDarkMode'

const container = classnames(
  'overflow-hidden',
  'h-full',
  'mt-10',
  'relative',
  'justify-center',
  'flex',
  'h-screenshotContainerMobile',
  'w-screenshotContainerMobile',
  'sm:h-screenshotContainer',
  'sm:w-screenshotContainer',
  'z-underModal'
)
const screen = classnames(
  'transform-gpu',
  'w-screenshotMobile',
  'h-screenshotMobile',
  'sm:w-screenshot',
  'sm:h-screenshot',
  'absolute',
  'mt-10',
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
  'mt-10',
  'w-screenshotMobile',
  'sm:w-screenshot',
  'rounded-sm'
)

const DifferenceScreenshot = () => {
  const { language } = useSnapshot(AppStore)
  const [isDark] = useDarkMode()
  return (
    <div className={container}>
      <div className={blueScreen} />
      <div className={yellowScreen} />
      <img
        alt="Screenshot"
        src={`/img/screenshots/${
          language === 'ptBR' || language === 'ro' ? 'en' : language
        }${isDark ? '-dark' : ''}.webp`}
        className={frame}
      />
    </div>
  )
}

export default DifferenceScreenshot
