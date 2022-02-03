import { classnames } from 'classnames/tailwind'
import DifferenceScreenshot from 'components/Landing/DifferenceScreenshot'
import DifferenceTextBlock from 'components/Landing/DifferenceTextBlock'

const container = classnames(
  'flex',
  'justify-between',
  'w-full',
  'lg:pr-6',
  'flex-col',
  'lg:flex-row',
  'items-center'
)

const Difference = () => {
  return (
    <div className={container}>
      <DifferenceTextBlock />
      <DifferenceScreenshot />
    </div>
  )
}

export default Difference
