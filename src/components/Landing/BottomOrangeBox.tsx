import { useLocalize } from '@borodutch-labs/localize-react'
import { classnames } from 'classnames/tailwind'
import { OrangeBoxAct } from '../Text'
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
  'p-xxl',
  'mt-bottomOrangeBox'
)

const BottomOrangeBox = () => {
  const { translate } = useLocalize()
  return (
    <div className={orangeBox}>
      <OrangeBoxAct text={translate('landingShort.act')} />
      <SignInButtonsBlock />
    </div>
  )
}

export default BottomOrangeBox
