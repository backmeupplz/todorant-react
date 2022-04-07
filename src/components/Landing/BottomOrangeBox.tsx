import { OrangeBoxAct } from 'components/Text'
import {
  alignItems,
  backgroundImage,
  borderRadius,
  classnames,
  display,
  flexDirection,
  gradientColorStops,
  justifyContent,
  margin,
  padding,
  width,
} from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'

import SignInButtonsBlock from 'components/Landing/SignInButtonsBlock'

const orangeBox = classnames(
  alignItems('items-center'),
  backgroundImage('bg-gradient-to-r'),
  borderRadius('rounded-xl'),
  display('flex'),
  flexDirection('flex-col'),
  gradientColorStops(
    'from-orange-box-gradient-primary',
    'to-orange-box-gradient-secondary'
  ),
  justifyContent('justify-center'),
  margin('mt-12'),
  padding('p-10'),
  width('w-full')
)

const BottomOrangeBox = () => {
  const { translate } = useLocalize()
  return (
    <div className={orangeBox}>
      <OrangeBoxAct text={translate('home.act')} />
      <SignInButtonsBlock />
    </div>
  )
}

export default BottomOrangeBox
