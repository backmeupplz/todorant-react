import DifferenceScreenshot from 'components/Landing/DifferenceScreenshot'
import DifferenceTextBlock from 'components/Landing/DifferenceTextBlock'
import {
  alignItems,
  classnames,
  display,
  flexDirection,
  justifyContent,
  padding,
  width,
} from 'classnames/tailwind'

const container = classnames(
  display('flex'),
  justifyContent('justify-between'),
  width('w-full'),
  padding('lg:pr-6'),
  flexDirection('flex-col', 'lg:flex-row'),
  alignItems('items-center')
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
