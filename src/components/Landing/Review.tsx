import { classnames } from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'
import { LandingBodyText, Link } from 'components/Text'
import { FC } from 'react'

const container = classnames('flex', 'flex-row', 'mb-lg22')
const text = classnames('flex', 'flex-col', 'ml-md12')
const avatar = classnames('w-avatar', 'h-avatar', 'rounded-full')

const Review: FC<{ count: number }> = ({ count }) => {
  const { translate } = useLocalize()
  const review = {
    text: translate(`feedback.reviews.${count}.text`),
    userName: translate(`feedback.reviews.${count}.username`),
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
        <LandingBodyText textArray={[review.text]} margin={'mt-reviewText'} />
      </div>
    </div>
  )
}

export default Review
