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
  zIndex('z-underModal'),
  overflow('overflow-hidden'),
  height('h-screenshot-container-mobile', 'sm:h-screenshot-container'),
  width('w-screenshot-container-mobile', 'sm:w-screenshot-container'),
  margin('mt-10'),
  position('relative'),
  justifyContent('justify-center'),
  display('flex')
)
const screen = classnames(
  width('w-screenshot-mobile', 'sm:w-screenshot'),
  height('h-screenshot-mobile', 'sm:h-screenshot'),
  borderRadius('rounded-xxl'),
  hardwareAcceleration('transform-gpu'),
  position('absolute'),
  margin('mt-10')
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
  width('w-screenshot-mobile', 'sm:w-screenshot'),
  display('flex'),
  position('absolute'),
  margin('mt-10'),
  borderRadius('rounded-sm')
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
