import { classnames } from 'classnames/tailwind'
import React from 'react'
const TodorantDifferenceText = React.lazy(
  () => import('components/TodorantDifferenceText')
)
const TodorantDifferenceScreenshot = React.lazy(
  () => import('components/TodorantDifferenceScreenshot')
)

const container = classnames('flex', 'justify-between')

const TodorantDifference = () => {
  return (
    <div className={container}>
      <TodorantDifferenceText />
      <TodorantDifferenceScreenshot />
    </div>
  )
}

export default TodorantDifference
