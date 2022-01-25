import { LandingBodyTitle } from 'components/Text'
import { classnames } from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'

import CrossplatformButtonsBlock from 'components/Landing/CrossplatformButtonsBlock'

const container = classnames(
  'flex',
  'flex-col',
  'justify-start',
  'w-full',
  'mt-10',
  'max-w-full'
)

const Crossplatform = () => {
  const { translate } = useLocalize()
  return (
    <div className={container}>
      <LandingBodyTitle text={translate('home.crossplatform.title')} />
      <CrossplatformButtonsBlock />
    </div>
  )
}

export default Crossplatform
