import { FC } from 'react'
import { classnames } from 'classnames/tailwind'

type ButtonProps = {
  onClick: () => void
}

const signInBtn = classnames(
  'rounded-lg',
  'px-45',
  'py-12',
  'ml-sm',
  'font-BodyText',
  'text-lg',
  'text-white',
  'bg-signInButton',
  'font-bold'
)
const storeBtn = classnames('rounded-lg', 'w-storeBtn', 'h-storeBtn', 'ml-sm')

export const SignInButton: FC<ButtonProps & { title: string }> = ({
  onClick,
  title,
}) => {
  return (
    <button className={signInBtn} onClick={onClick}>
      {title}
    </button>
  )
}
export const StoreButton: FC<ButtonProps & { path: string; alt: string }> = ({
  onClick,
  path,
  alt,
}) => {
  return (
    <button className={storeBtn} onClick={onClick}>
      <img src={path} alt={alt} />
    </button>
  )
}
