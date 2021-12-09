import { classnames } from 'classnames/tailwind'
import React from 'react'

const TodorantDifferenceTextBlock = React.lazy(
  () => import('components/Landing/TodorantDifferenceTextBlock')
)
const TodorantDifferenceScreenshot = React.lazy(
  () => import('components/Landing/TodorantDifferenceScreenshot')
)

const container = classnames('flex', 'justify-between', 'w-full', 'pr-22')

const TodorantDifference = () => {
  return (
    <div className={container}>
      <TodorantDifferenceTextBlock />
      <TodorantDifferenceScreenshot />
    </div>
  )
}

export default TodorantDifference
