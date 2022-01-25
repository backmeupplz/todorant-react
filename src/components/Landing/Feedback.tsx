import { LandingBodyTitle } from 'components/Text'
import { classnames } from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'

import ReviewBlock from 'components/Landing/ReviewBlock'

const container = classnames(
  'flex',
  'flex-col',
  'justify-start',
  'w-full',
  'mt-10'
)

const Feedback = () => {
  const { translate } = useLocalize()
  return (
    <div className={container}>
      <LandingBodyTitle text={translate('home.feedback.title')} />
      <ReviewBlock />
    </div>
  )
}

export default Feedback
