import { FC } from 'react'
import { LandingBodyText, Link } from 'components/Text'
import { classnames } from 'classnames/tailwind'
import useI18N from 'hooks/useI18N'

const container = classnames('flex', 'flex-row', 'mb-lg22')
const text = classnames('flex', 'flex-col', 'ml-md12')
const avatar = classnames('w-avatar', 'h-avatar', 'rounded-full')

const Review: FC<{ count: number }> = ({ count }) => {
  const { LL } = useI18N()
  const review = {
    text: LL.feedback.reviews[
      `${count}` as keyof typeof LL.feedback.reviews
    ].text(),
    userName:
      LL.feedback.reviews[
        `${count}` as keyof typeof LL.feedback.reviews
      ].username(),
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
