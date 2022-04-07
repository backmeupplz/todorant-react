import { LandingBodyTitle } from 'components/Text'
import {
  classnames,
  display,
  flexDirection,
  justifyContent,
  margin,
  maxWidth,
  width,
} from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'

import CrossplatformButtonsBlock from 'components/Landing/CrossplatformButtonsBlock'

const container = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-start'),
  margin('mt-10'),
  maxWidth('max-w-full'),
  width('w-full')
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
