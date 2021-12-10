import { classnames } from 'classnames/tailwind'
import TodorantDifferenceScreenshot from 'components/Landing/TodorantDifferenceScreenshot'
import TodorantDifferenceTextBlock from 'components/Landing/TodorantDifferenceTextBlock'

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
