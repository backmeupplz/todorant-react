import { FC } from 'react'
import { LandingBodyText, Link } from 'components/Text'
import {
  borderRadius,
  classnames,
  display,
  flexDirection,
  height,
  margin,
  width,
} from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'

const container = classnames(
  display('flex'),
  flexDirection('flex-row'),
  margin('mb-5')
)
const text = classnames(
  display('flex'),
  flexDirection('flex-col'),
  margin('ml-3')
)
const avatar = classnames(
  borderRadius('rounded-full'),
  height('h-12'),
  width('w-12')
)

const Review: FC<{ count: number }> = ({ count }) => {
  const { translate } = useLocalize()
  const review = {
    text: translate(`home.feedback.reviews.${count}.text`),
    userName: translate(`home.feedback.reviews.${count}.username`),
  }

  return (
    <div className={container}>
      <img
        src={`/avatars/${review.userName}.webp`}
        alt={`${review.userName} avatar`}
        className={avatar}
      />
      <div className={text}>
        <Link
          url={`https://t.me/${review.userName}`}
          text={`@${review.userName}`}
        />
        <LandingBodyText textArray={[review.text]} margin="mt-3" />
      </div>
    </div>
  )
}

export default Review
