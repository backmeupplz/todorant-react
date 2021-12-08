import { classnames } from 'classnames/tailwind'
import React from 'react'
const OrangeBox = React.lazy(() => import('components/OrangeBox'))
const LandingVideo = React.lazy(() => import('components/LandingVideo'))
const TodorantDifference = React.lazy(
  () => import('components/TodorantDifference')
)

const container = classnames('flex', 'flex-col')

const Landing = () => {
  return (
    <div className={container}>
      <OrangeBox />
      <LandingVideo />
      <TodorantDifference />
    </div>
  )
}

export default Landing
