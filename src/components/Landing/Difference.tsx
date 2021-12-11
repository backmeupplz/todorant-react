import { classnames } from 'classnames/tailwind'
import React from 'react'

import DifferenceTextBlock from 'components/Landing/DifferenceTextBlock'

import DifferenceScreenshot from 'components/Landing/DifferenceScreenshot'

const container = classnames('flex', 'justify-between', 'w-full', 'pr-22')

const Difference = () => {
  return (
    <div className={container}>
      <DifferenceTextBlock />
      <DifferenceScreenshot />
    </div>
  )
}

export default Difference
