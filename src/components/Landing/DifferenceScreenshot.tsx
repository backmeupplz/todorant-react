import {
  backgroundColor,
  borderRadius,
  classnames,
  display,
  hardwareAcceleration,
  height,
  justifyContent,
  margin,
  overflow,
  position,
  rotate,
  width,
  zIndex,
} from 'classnames/tailwind'
import { useSnapshot } from 'valtio'
import AppStore from 'stores/AppStore'
import useDarkMode from 'hooks/useDarkMode'

const container = classnames(
  display('flex'),
  height('h-screenshot-container-mobile', 'sm:h-screenshot-container'),
  justifyContent('justify-center'),
  margin('mt-10'),
  overflow('overflow-hidden'),
  position('relative'),
  width('w-screenshot-container-mobile', 'sm:w-screenshot-container'),
  zIndex('z-underModal')
)
const screen = classnames(
  borderRadius('rounded-xxl'),
  hardwareAcceleration('transform-gpu'),
  height('h-screenshot-mobile', 'sm:h-screenshot'),
  margin('mt-10'),
  position('absolute'),
  width('w-screenshot-mobile', 'sm:w-screenshot')
)
const blueScreen = classnames(
  backgroundColor('bg-screenshot-blue'),
  rotate('rotate-screenshot-secondary'),
  screen
)
const yellowScreen = classnames(
  backgroundColor('bg-screenshot-yellow'),
  rotate('rotate-screenshot-primary'),
  screen
)
const frame = classnames(
  borderRadius('rounded-sm'),
  display('flex'),
  margin('mt-10'),
  position('absolute'),
  width('w-screenshot-mobile', 'sm:w-screenshot')
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
