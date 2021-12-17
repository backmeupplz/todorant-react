import { classnames } from 'classnames/tailwind'

import SignInButtonsBlock from 'components/Landing/SignInButtonsBlock'
import TodorantWorksTextBlock from 'components/Landing/TodorantWorksTextBlock'

const container = classnames('lg:pr-xxxl', 'flex', 'w-full')

const orangeBox = classnames(
  'bg-gradient-to-r',
  'from-orangeBoxGradient-primary',
  'to-orangeBoxGradient-secondary',
  'rounded-xl',
  'w-full',
  'flex',
  'justify-between',
  'flex-col',
  'lg:flex-row',
  'p-topOrangeBox',
  'pb-xxxl',
  'lg:pb-topOrangeBox'
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
