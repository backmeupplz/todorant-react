import { classnames } from 'classnames/tailwind'
import OrangeBox from 'components/Landing/OrangeBox'
import TodorantDifference from 'components/Landing/TodorantDifference'
import Video from 'components/Landing/Video'

const container = classnames('flex', 'flex-col', 'items-end')

const Landing = () => {
  return (
    <div className={container}>
      <OrangeBox />
      <Video />
      <TodorantDifference />
    </div>
  )
}

export default Landing
