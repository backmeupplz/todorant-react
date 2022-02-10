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
  gradientColorStops(
    'from-orange-box-gradient-primary',
    'to-orange-box-gradient-secondary'
  ),
  backgroundImage('bg-gradient-to-r'),
  borderRadius('rounded-xl'),
  width('w-full'),
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  padding('p-10'),
  margin('mt-12')
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
