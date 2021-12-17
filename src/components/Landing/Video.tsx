import { classnames } from 'classnames/tailwind'

const frame = classnames(
  'lg:w-video',
  'h-video',
  'rounded-sm',
  'mt-mobileVideoTop',
  'lg:mt-videoTop',
  'shadow-landingVideo',
  'h-full',
  'w-full'
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
