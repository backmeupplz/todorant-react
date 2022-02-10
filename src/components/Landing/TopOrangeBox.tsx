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
  padding('lg:pr-16'),
  display('flex'),
  width('w-full')
)

const orangeBox = classnames(
  backgroundImage('bg-gradient-to-r'),
  gradientColorStops(
    'from-orangeBoxGradient-primary',
    'to-orangeBoxGradient-secondary'
  ),
  borderRadius('rounded-xl'),
  width('w-full'),
  display('flex'),
  justifyContent('justify-between'),
  flexDirection('flex-col', 'lg:flex-row'),
  padding('lg:p-8', 'pb-16', 'lg:pb-8')
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
