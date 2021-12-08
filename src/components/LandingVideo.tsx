import { classnames } from 'classnames/tailwind'
import { FC } from 'react'

const frame = classnames(
  'w-video',
  'h-video',
  'rounded-md',
  'self-end',
  'mr-video_right',
  'mt-video_top'
)
const LandingVideo: FC = () => {
  return (
    <iframe
      title="How to use Todorant"
      src="https://www.youtube.com/embed/lYXhqHt7_QY"
      className={frame}
    />
  )
}

export default LandingVideo
