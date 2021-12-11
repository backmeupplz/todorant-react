import { classnames } from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'
import { LandingBodyText, Link } from 'components/Text'
import {
  CircleButton,
  LeftArrowButton,
  RightArrowButton,
} from 'components/Button'
import { useState } from 'react'

const block = classnames(
  'flex',
  'flex-row',
  'mt-8',
  'justify-between',
  'content-start'
)
const sdds = classnames('max-w-reviewText', 'flex', 'flex-col', 'items-center')
const reviewContainer = classnames('flex', 'flex-row', 'mb-22')
const text = classnames('flex', 'flex-col', 'ml-12')
const avatar = classnames('w-avatar', 'h-avatar', 'rounded-full')

const ReviewBlock = () => {
  const { translate } = useLocalize()
  const [count, setCount] = useState(0)
  const review = {
    text: translate(`feedback.reviews.${count}.text`),
    userName: translate(`feedback.reviews.${count}.username`),
  }

  function moveLeft() {
    if (count - 1 < 0) {
      setCount(8)
    } else {
      setCount(count - 1)
    }
  }
  function moveRight() {
    if (count + 1 > 8) {
      setCount(0)
    } else {
      setCount(count + 1)
    }
  }

  return (
    <div className={block}>
      <LeftArrowButton onClick={moveLeft} />
      <div className={sdds}>
        <div className={reviewContainer}>
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
            <LandingBodyText textArray={[review.text]} margin={'mt-15'} />
          </div>
        </div>
        <div className={reviewContainer}>
          {[...Array(9)].map((_, j) => (
            <CircleButton
              onClick={() => {
                setCount(j)
              }}
            />
          ))}
        </div>
      </div>
      <RightArrowButton onClick={moveRight} />
    </div>
  )
}

export default ReviewBlock
