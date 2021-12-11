import { useLocalize } from '@borodutch-labs/localize-react'
import { classnames } from 'classnames/tailwind'
import { LandingBodyTitle, LandingBodyText } from '../Text'

const container = classnames(
  'flex',
  'flex-col',
  'justify-start',
  'w-full',
  'mt-xxl'
)

const Deal = () => {
  const { translate } = useLocalize()
  return (
    <div className={container}>
      <LandingBodyTitle text={translate('landingShort.dealTitle')} />
      <LandingBodyText
        textArray={[
          translate('landingShort.dealText1'),
          translate('landingShort.dealText2'),
          translate('landingShort.dealText3'),
        ]}
        margin="mt-16"
      />
    </div>
  )
}

export default Deal
