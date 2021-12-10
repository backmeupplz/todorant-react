import { classnames } from 'classnames/tailwind'
import React from 'react'

const DifferenceTextBlock = React.lazy(
  () => import('components/Landing/DifferenceTextBlock')
)
const DifferenceScreenshot = React.lazy(
  () => import('components/Landing/DifferenceScreenshot')
)

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
