import { classnames } from 'classnames/tailwind'
import SignInButtonsBlock from 'components/Landing/SignInButtonsBlock'
import TodorantWorksTextBlock from 'components/Landing/TodorantWorksTextBlock'

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
