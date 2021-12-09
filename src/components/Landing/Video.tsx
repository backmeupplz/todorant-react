import { classnames } from 'classnames/tailwind'

const frame = classnames(
  'w-video',
  'h-video',
  'rounded-md',
  'mt-videoTop',
  'shadow-landingVideo'
)

const Video = () => {
  return (
    <iframe
      title="How to use Todorant"
      src="https://www.youtube.com/embed/lYXhqHt7_QY"
      className={frame}
    />
  )
}

export default Video
