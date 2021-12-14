import { classnames } from 'classnames/tailwind'

import DifferenceTextBlock from 'components/Landing/DifferenceTextBlock'

import DifferenceScreenshot from 'components/Landing/DifferenceScreenshot'

const container = classnames('flex', 'justify-between', 'w-full', 'pr-lg22')

const Difference = () => {
  return (
    <div className={container}>
      <DifferenceTextBlock />
      <DifferenceScreenshot />
    </div>
  )
}

export default Difference
