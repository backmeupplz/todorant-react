import { LandingBodyText, LandingBodyTitle } from 'components/Text'
import { useLocalize } from '@borodutch-labs/localize-react'
import {
  classnames,
  display,
  flexDirection,
  justifyContent,
  margin,
  width,
} from 'classnames/tailwind'

const container = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-start'),
  width('w-full'),
  margin('mt-10')
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
