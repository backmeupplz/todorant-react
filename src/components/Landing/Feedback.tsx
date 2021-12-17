import { LandingBodyTitle } from 'components/Text'
import { classnames } from 'classnames/tailwind'

import ReviewBlock from 'components/Landing/ReviewBlock'
import useI18N from 'hooks/useI18N'

const container = classnames(
  'flex',
  'flex-col',
  'justify-start',
  'w-full',
  'mt-xxl'
)

const Feedback = () => {
  const { LL } = useI18N()
  return (
    <div className={container}>
      <LandingBodyTitle text={LL.feedback.title()} />
      <ReviewBlock />
    </div>
  )
}

export default Feedback
