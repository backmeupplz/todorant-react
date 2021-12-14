import { IconButton } from 'components/Button'
import { classnames } from 'classnames/tailwind'
import { useState } from 'react'
import CircleButtons from 'components/Landing/CircleButtons'
import LeftArrow from 'components/icons/ChevronLeft'
import Review from 'components/Landing/Review'
import RightArrow from 'components/icons/ChevronRight'

const block = classnames(
  'flex',
  'flex-row',
  'mt-8',
  'justify-between',
  'content-start'
)
const reviewContainer = classnames(
  'max-w-reviewText',
  'flex',
  'flex-col',
  'items-center'
)

const ReviewBlock = () => {
  const [count, setCount] = useState(0)

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
      <IconButton onClick={moveLeft}>
        <LeftArrow />
      </IconButton>
      <div className={reviewContainer}>
        <Review count={count} />
        <CircleButtons count={count} setCount={setCount} />
      </div>
      <IconButton onClick={moveRight}>
        <RightArrow />
      </IconButton>
    </div>
  )
}

export default ReviewBlock
