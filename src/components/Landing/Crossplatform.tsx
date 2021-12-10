import { useLocalize } from '@borodutch-labs/localize-react'
import { classnames } from 'classnames/tailwind'
import { LandingBodyTitle } from '../Text'
import CrossplatformButtonsBlock from './CrossplatformButtonsBlock'

const container = classnames(
  'flex',
  'flex-col',
  'justify-start',
  'w-full',
  'mt-xxl'
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
