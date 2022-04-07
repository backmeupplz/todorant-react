import { LandingBodyText, LandingBodyTitle } from 'components/Text'
import {
  classnames,
  display,
  flexDirection,
  justifyContent,
  margin,
  width,
} from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'
import ComponentName from 'components/Landing/ComponentNames'

const container = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-start'),
  margin('mt-10'),
  width('w-full')
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
        name={ComponentName.deal}
      />
    </div>
  )
}

export default Deal
