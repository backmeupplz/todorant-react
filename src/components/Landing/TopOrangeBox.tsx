import { classnames } from 'classnames/tailwind'
import TodorantWorksTextBlock from 'components/Landing/TodorantWorksTextBlock'
import SignInButtonsBlock from 'components/Landing/SignInButtonsBlock'

const container = classnames('pr-xxxl', 'flex', 'w-full')

const orangeBox = classnames(
  'bg-gradient-to-r',
  'from-orangeBoxGradient-primary',
  'to-orangeBoxGradient-secondary',
  'rounded-xl',
  'w-full',
  'flex',
  'justify-between',
  'p-topOrangeBox'
)

const TopOrangeBox = () => {
  return (
    <div className={container}>
      <div className={orangeBox}>
        <TodorantWorksTextBlock />
        <SignInButtonsBlock />
      </div>
    </div>
  )
}

export default TopOrangeBox
