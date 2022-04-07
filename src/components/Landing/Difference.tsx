import {
  alignItems,
  classnames,
  display,
  flexDirection,
  justifyContent,
  padding,
  width,
} from 'classnames/tailwind'
import DifferenceScreenshot from 'components/Landing/DifferenceScreenshot'
import DifferenceTextBlock from 'components/Landing/DifferenceTextBlock'

const container = classnames(
  alignItems('items-center'),
  display('flex'),
  flexDirection('flex-col', 'lg:flex-row'),
  justifyContent('justify-between'),
  padding('lg:pr-6'),
  width('w-full')
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
