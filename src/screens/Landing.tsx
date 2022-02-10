import BottomOrangeBox from 'components/Landing/BottomOrangeBox'
import Crossplatform from 'components/Landing/Crossplatform'
import Deal from 'components/Landing/Deal'
import Difference from 'components/Landing/Difference'
import Feedback from 'components/Landing/Feedback'
import PrivacyPolicy from 'components/Landing/PrivacyPolicy'
import TopOrangeBox from 'components/Landing/TopOrangeBox'
import Video from 'components/Landing/Video'
import {
  alignItems,
  classnames,
  display,
  flexDirection,
} from 'classnames/tailwind'

const container = classnames(
  display('flex'),
  flexDirection('flex-col'),
  alignItems('items-end')
)

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
