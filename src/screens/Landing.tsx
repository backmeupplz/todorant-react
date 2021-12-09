import { classnames } from 'classnames/tailwind'
import React from 'react'

const OrangeBox = React.lazy(() => import('components/Landing/OrangeBox'))
const Video = React.lazy(() => import('components/Landing/Video'))
const TodorantDifference = React.lazy(
  () => import('components/Landing/TodorantDifference')
)

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
