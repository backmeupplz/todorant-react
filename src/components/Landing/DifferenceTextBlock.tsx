import { LandingBodyText, LandingBodyTitle } from 'components/Text'
import { classnames } from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'

const block = classnames('flex', 'flex-col', 'max-w-xl', 'mt-8')

const DifferenceTextBlock = () => {
  const { translate } = useLocalize()
  return (
    <div className={block}>
      <LandingBodyTitle text={translate('landingShort.differenceTitle')} />
      <LandingBodyText
        textArray={[
          translate('landingShort.differenceText1'),
          translate('landingShort.differenceText2'),
          translate('landingShort.differenceText3'),
        ]}
        margin="mt-lg24"
      />
    </div>
  )
}

export default DifferenceTextBlock
