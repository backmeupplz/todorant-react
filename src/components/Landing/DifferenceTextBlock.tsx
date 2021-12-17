import { LandingBodyText, LandingBodyTitle } from 'components/Text'
import { classnames } from 'classnames/tailwind'

import useI18N from 'hooks/useI18N'

const block = classnames('flex', 'flex-col', 'max-w-xl', 'mt-8')

const DifferenceTextBlock = () => {
  const { LL } = useI18N()
  return (
    <div className={block}>
      <LandingBodyTitle text={LL.landingShort.differenceTitle()} />
      <LandingBodyText
        textArray={[
          LL.landingShort.differenceText1(),
          LL.landingShort.differenceText2(),
          LL.landingShort.differenceText3(),
        ]}
        margin="mt-lg24"
      />
    </div>
  )
}

export default DifferenceTextBlock
