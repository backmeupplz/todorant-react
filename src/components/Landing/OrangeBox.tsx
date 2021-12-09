import { classnames } from 'classnames/tailwind'
import React from 'react'

const TodorantWorksTextBlock = React.lazy(
  () => import('components/Landing/TodorantWorksTextBlock')
)
const SignInButtonsBlock = React.lazy(
  () => import('components/Landing/SignInButtonsBlock')
)

const container = classnames('pr-64', 'flex', 'w-full')

const orangeBox = classnames(
  'bg-gradient-to-r',
  'from-orangeBoxGradient-primary',
  'to-orangeBoxGradient-secondary',
  'rounded-xl',
  'w-full',
  'flex',
  'justify-between',
  'p-xl'
)

const OrangeBox = () => {
  return (
    <div className={container}>
      <div className={orangeBox}>
        <TodorantWorksTextBlock />
        <SignInButtonsBlock />
      </div>
    </div>
  )
}

export default OrangeBox
