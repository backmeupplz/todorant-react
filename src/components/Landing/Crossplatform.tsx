import { LandingBodyTitle } from 'components/Text'
import { classnames } from 'classnames/tailwind'

import CrossplatformButtonsBlock from 'components/Landing/CrossplatformButtonsBlock'
import useI18N from 'hooks/useI18N'

const container = classnames(
  'flex',
  'flex-col',
  'justify-start',
  'w-full',
  'mt-xxl',
  'max-w-full'
)

const Crossplatform = () => {
  const { LL } = useI18N()
  return (
    <div className={container}>
      <LandingBodyTitle text={LL.landingShort.crossplatform()} />
      <CrossplatformButtonsBlock />
    </div>
  )
}

export default Crossplatform
