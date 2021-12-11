import { FC } from 'react'
import { classnames } from 'classnames/tailwind'
import LeftArrow from './icons/ChevronLeft'
import RightArrow from './icons/ChevronRight'

type ButtonProps = {
  onClick: () => void
  title: string
}
type LogoButtonProps = {
  onClick: () => void
  path: string
  alt: string
}

const signInBtn = classnames(
  'rounded-lg',
  'px-45',
  'py-12',
  'ml-sm',
  'font-BodyText',
  'text-lg',
  'text-white',
  'bg-button-signIn',
  'font-bold',
  'w-signInBtn',
  'h-signInBtn'
)
const storeBtn = classnames('rounded-lg', 'w-storeBtn', 'h-storeBtn', 'ml-sm')
const platformBtn = classnames(
  'rounded-12',
  'w-platformBtn',
  'h-platformBtn',
  'm-sm',
  'p-16',
  'bg-button-platform',
  'hover:bg-button-platformHover',
  'flex',
  'flex-col',
  'justify-center',
  'items-center'
)
const platformLogoContainer = classnames(
  'flex',
  'w-platformLogo',
  'h-platformLogo',
  'justify-center',
  'content-center'
)
const platformLogo = classnames('max-w-platformLogo')
const platformTitle = classnames(
  'font-medium',
  'text-sm',
  'mt-sm',
  'font-BodyText'
)
const arrowBtn = classnames(
  'rounded-full',
  'bg-button-platform',
  'hover:bg-button-platformHover',
  'w-platformLogo',
  'h-platformLogo',
  'flex',
  'justify-center',
  'items-center'
)
const circleButton = classnames(
  'rounded-full',
  'bg-button-circle',
  'hover:bg-button-circleHover',
  'w-circleBtn',
  'h-circleBtn',
  'm-sm',
  'opacity-30'
)

export const SignInButton: FC<ButtonProps> = ({ onClick, title }) => {
  return (
    <button className={signInBtn} onClick={onClick}>
      {title}
    </button>
  )
}

export const StoreButton: FC<LogoButtonProps> = ({ onClick, path, alt }) => {
  return (
    <button className={storeBtn} onClick={onClick}>
      <img src={`/img/${path}.svg`} alt={alt} />
    </button>
  )
}

export const PlatformButton: FC<LogoButtonProps & { title: string }> = ({
  onClick,
  path,
  alt,
  title,
}) => {
  return (
    <button className={platformBtn} onClick={onClick}>
      <div className={platformLogoContainer}>
        <img
          src={`/img/platforms/${path}.svg`}
          alt={alt}
          className={platformLogo}
        />
      </div>
      <p className={platformTitle}>{title}</p>
    </button>
  )
}

export const LeftArrowButton: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button className={arrowBtn} onClick={onClick}>
      <LeftArrow />
    </button>
  )
}
export const RightArrowButton: FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button className={arrowBtn} onClick={onClick}>
      <RightArrow />
    </button>
  )
}

export const CircleButton: FC<{ onClick: () => void }> = ({ onClick }) => {
  return <button className={circleButton} onClick={onClick} />
}
