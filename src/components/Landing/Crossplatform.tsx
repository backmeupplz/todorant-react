import { LandingBodyTitle } from 'components/Text'
import { classnames } from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'
import CrossplatformButtonsBlock from 'components/Landing/CrossplatformButtonsBlock'

const container = classnames(
  'flex',
  'flex-col',
  'justify-start',
  'w-full',
  'mt-xxl',
  'max-w-full',
  'break-all'
)

const Crossplatform = () => {
  const { translate } = useLocalize()
  return (
    <div className={container}>
      <LandingBodyTitle text={translate('landingShort.crossplatform')} />
      <CrossplatformButtonsBlock />
    </div>
  )
}

export default Crossplatform
