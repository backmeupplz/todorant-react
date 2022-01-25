import { FC } from 'react'
import { LandingBodyText, Link } from 'components/Text'
import { classnames } from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'

const container = classnames('flex', 'flex-row', 'mb-5')
const text = classnames('flex', 'flex-col', 'ml-3')
const avatar = classnames('w-12', 'h-12', 'rounded-full')

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
        <LandingBodyText textArray={[review.text]} margin={'mt-3'} />
      </div>
    </div>
  )
}

export default Review
