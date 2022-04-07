import {
  backgroundColor,
  backgroundImage,
  borderRadius,
  classnames,
  display,
  flexDirection,
  gradientColorStops,
  justifyContent,
  padding,
  width,
} from 'classnames/tailwind'

import SignInButtonsBlock from 'components/Landing/SignInButtonsBlock'
import TodorantWorksTextBlock from 'components/Landing/TodorantWorksTextBlock'

const container = classnames(
  display('flex'),
  padding('lg:pr-16'),
  width('w-full')
)

const orangeBox = classnames(
  backgroundImage('bg-gradient-to-r'),
  borderRadius('rounded-xl'),
  display('flex'),
  flexDirection('flex-col', 'lg:flex-row'),
  gradientColorStops(
    'from-orange-box-gradient-primary',
    'to-orange-box-gradient-secondary'
  ),
  justifyContent('justify-between'),
  padding('lg:p-8', 'pb-16', 'lg:pb-8'),
  width('w-full')
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
