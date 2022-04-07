import { LandingBodyText, LandingBodyTitle } from 'components/Text'
import {
  classnames,
  display,
  flexDirection,
  margin,
  maxWidth,
} from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'
import ComponentName from 'components/Landing/ComponentNames'

const block = classnames(
  display('flex'),
  flexDirection('flex-col'),
  margin('mt-8'),
  maxWidth('max-w-xl')
)

const DifferenceTextBlock = () => {
  const { translate } = useLocalize()
  return (
    <div className={block}>
      <LandingBodyTitle text={translate('homeShort.differenceTitle')} />
      <LandingBodyText
        textArray={[
          translate('homeShort.differenceText1'),
          translate('homeShort.differenceText2'),
          translate('homeShort.differenceText3'),
        ]}
        name={ComponentName.difference}
      />
    </div>
  )
}

export default DifferenceTextBlock
