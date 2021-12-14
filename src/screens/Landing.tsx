import { classnames } from 'classnames/tailwind'
import TopOrangeBox from 'components/Landing/TopOrangeBox'
import Video from 'components/Landing/Video'
import Difference from 'components/Landing/Difference'
import Crossplatform from 'components/Landing/Crossplatform'
import Deal from 'components/Landing/Deal'
import Feedback from 'components/Landing/Feedback'
import BottomOrangeBox from 'components/Landing/BottomOrangeBox'
import PrivacyPolicy from 'components/Landing/PrivacyPolicy'

const container = classnames('flex', 'flex-col', 'items-end')

const Landing = () => {
  return (
    <div className={container}>
      <TopOrangeBox />
      <Video />
      <Difference />
      <Crossplatform />
      <Deal />
      <Feedback />
      <BottomOrangeBox />
      <PrivacyPolicy />
    </div>
  )
}

export default Landing
