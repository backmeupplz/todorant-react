import { LandingBodyText, LandingBodyTitle } from 'components/Text'
import { classnames } from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'

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
        margin="mt-md16"
      />
    </div>
  )
}

export default Deal
