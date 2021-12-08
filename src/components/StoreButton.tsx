import { classnames } from 'classnames/tailwind'
import { FC } from 'react'

type ButtonProps = {
  onClick: () => void
  path: string
  alt: string
}

const storeBtn = classnames('rounded-lg', 'w-test', 'h-test', 'ml-sm')

const StoreButton: FC<ButtonProps> = ({ onClick, path, alt }) => {
  return (
    <button className={storeBtn} onClick={onClick}>
      <img src={path} alt={alt} />
    </button>
  )
}

export default StoreButton
