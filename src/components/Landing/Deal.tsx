import { LandingBodyText, LandingBodyTitle } from 'components/Text'
import { classnames } from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'

const container = classnames(
  'flex',
  'flex-col',
  'justify-start',
  'w-full',
  'mt-10'
)

const Deal = () => {
  const { translate } = useLocalize()
  return (
    <div className={container}>
      <LandingBodyTitle text={translate('homeShort.dealTitle')} />
      <LandingBodyText
        textArray={[
          translate('homeShort.dealText1'),
          translate('homeShort.dealText2'),
          translate('homeShort.dealText3'),
        ]}
        margin="mt-4"
      />
    </div>
  )
}

export default Deal
