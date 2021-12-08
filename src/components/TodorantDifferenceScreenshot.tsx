import { classnames } from 'classnames/tailwind'

const container = classnames(
  'overflow-hidden',
  'h-screenshot_container',
  'mt-xxl',
  'relative'
)

const yellow_screen = classnames(
  'bg-screenshot-yellow',
  'rotate-12',
  'w-screenshot',
  'h-screenshot_container'
)

const frame = classnames('flex', 'relative', 'justify-center', 'mt-xxl')

const TodorantDifferenceScreenshot = () => {
  return (
    <div className={container}>
      <div className={frame}>
        <img alt="Screenshot" src="/img/screenshots/en.webp" />
      </div>
    </div>
  )
}

export default TodorantDifferenceScreenshot
