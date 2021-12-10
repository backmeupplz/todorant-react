import { useLocalize } from '@borodutch-labs/localize-react'
import { classnames } from 'classnames/tailwind'
import { LandingBodyTitle } from '../Text'
import ReviewBlock from './ReviewBlock'

const container = classnames(
  'flex',
  'flex-col',
  'justify-start',
  'w-full',
  'mt-xxl'
)

const Feedback = () => {
  const { translate } = useLocalize()
  return (
    <div className={container}>
      <LandingBodyTitle text={translate('feedback.title')} />
      <ReviewBlock />
    </div>
  )
}

export default Feedback
