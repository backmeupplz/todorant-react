import { IconButton } from 'components/Button'
import {
  alignItems,
  classnames,
  display,
  flexDirection,
  justifyContent,
  margin,
  maxWidth,
} from 'classnames/tailwind'
import { useState } from 'react'
import CircleButtons from 'components/Landing/CircleButtons'
import LeftArrow from 'components/icons/ChevronLeft'
import Review from 'components/Landing/Review'
import RightArrow from 'components/icons/ChevronRight'

const block = classnames(
  alignItems('lg:items-start', 'items-end'),
  display('flex'),
  flexDirection('flex-row'),
  justifyContent('justify-between'),
  margin('mt-8')
)
const reviewContainer = classnames(
  alignItems('items-center'),
  display('flex'),
  flexDirection('flex-col'),
  maxWidth('max-w-review-text')
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
