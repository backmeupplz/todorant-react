import { CircleButton } from 'components/Button'
import { FC } from 'react'
import { classnames, display, flexDirection, margin } from 'classnames/tailwind'

type CircleBtnProps = {
  count: number
  setCount: (count: React.SetStateAction<number>) => void
}

const container = classnames(
  display('flex'),
  flexDirection('flex-row'),
  margin('mb-3')
)

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
