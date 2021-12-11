import { classnames } from 'classnames/tailwind'
import Crossplatform from 'components/Landing/Crossplatform'
import Deal from 'components/Landing/Deal'
import Difference from 'components/Landing/Difference'
import Feedback from 'components/Landing/Feedback'
import OrangeBox from 'components/Landing/OrangeBox'
import Video from 'components/Landing/Video'

const container = classnames('flex', 'flex-col', 'items-end')

const Landing = () => {
  return (
    <div className={container}>
      <OrangeBox />
      <Video />
      <Difference />
      <Crossplatform />
      <Deal />
      <Feedback />
    </div>
  )
}

export default Landing
