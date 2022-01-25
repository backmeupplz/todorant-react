import { OrangeBoxAct } from 'components/Text'
import { classnames } from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'

import SignInButtonsBlock from 'components/Landing/SignInButtonsBlock'

const orangeBox = classnames(
  'bg-gradient-to-r',
  'from-orangeBoxGradient-primary',
  'to-orangeBoxGradient-secondary',
  'rounded-xl',
  'w-full',
  'flex',
  'flex-col',
  'justify-center',
  'items-center',
  'p-10',
  'mt-12'
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
