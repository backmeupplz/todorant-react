import { LandingBodyTitle } from 'components/Text'
import {
  classnames,
  display,
  flexDirection,
  justifyContent,
  margin,
  width,
} from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'

import ReviewBlock from 'components/Landing/ReviewBlock'

const container = classnames(
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-start'),
  margin('mt-10'),
  width('w-full')
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
