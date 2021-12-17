import { OrangeBoxAct } from 'components/Text'
import { classnames } from 'classnames/tailwind'

import SignInButtonsBlock from 'components/Landing/SignInButtonsBlock'
import useI18N from 'hooks/useI18N'

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
  const { LL } = useI18N()
  return (
    <div className={orangeBox}>
      <OrangeBoxAct text={LL.landingShort.act()} />
      <SignInButtonsBlock />
    </div>
  )
}

export default BottomOrangeBox
