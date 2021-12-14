import { classnames } from 'classnames/tailwind'
import { CircleButton } from 'components/Button'
import { FC } from 'react'

type CircleBtnProps = {
  count: number
  setCount: (count: React.SetStateAction<number>) => void
}

const container = classnames('flex', 'flex-row', 'mb-lg22')

const CircleButtons: FC<CircleBtnProps> = ({ count, setCount }) => {
  return (
    <div className={container}>
      {[...Array(9)].map((_, j) => {
        let inactive = true
        if (j === count) inactive = false
        return (
          <CircleButton
            onClick={() => {
              setCount(j)
            }}
            inactive={inactive}
          />
        )
      })}
    </div>
  )
}
export default CircleButtons