import { LandingBodyText, LandingBodyTitle } from 'components/Text'
import { classnames } from 'classnames/tailwind'

import useI18N from 'hooks/useI18N'

const container = classnames(
  'flex',
  'flex-col',
  'justify-start',
  'w-full',
  'mt-xxl'
)

const Deal = () => {
  const { LL } = useI18N()
  return (
    <div className={container}>
      <LandingBodyTitle text={LL.landingShort.dealTitle()} />
      <LandingBodyText
        textArray={[
          LL.landingShort.dealText1(),
          LL.landingShort.dealText2(),
          LL.landingShort.dealText3(),
        ]}
        margin="mt-md16"
      />
    </div>
  )
}

export default Deal
