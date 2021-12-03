import { classnames } from 'classnames/tailwind'
import { FC } from 'react'
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const frame = classnames(
  'bg-green-300',
  'w-video',
  'h-video',
  'mr-test',
  'mt-sdsd',
  'rounded-md',
  'overflow-hidden'
)
const LandingVideo: FC = () => {
  return (
    <div className={frame}>
      <LiteYouTubeEmbed id="lYXhqHt7_QY" title="How to use Todorant" />
    </div>
  )
}

export default LandingVideo
