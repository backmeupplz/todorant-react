import { FC } from 'react'
import { classnames, TArg } from 'classnames/tailwind'

type ButtonProps = {
  onClick: () => void
}
type LogoButtonProps = {
  onClick: () => void
  path: string
  alt: string
}

const iconButton = classnames(
  'flex',
  'justify-center',
  'items-center',
  'w-mediumButton',
  'h-mediumButton',
  'hover:bg-gray-100',
  'focus:outline-none',
  'text-gray-700',
  'hover:bg-gray-100',
  'focus:outline-none',
  'text-generalButton',
  'rounded-sm',
  'font-BodyText',
  'font-medium',
  'whitespace-nowrap'
)

const signInBtn = classnames(
  'rounded-md',
  'px-signInBtn',
  'py-md12',
  'ml-sm',
  'font-BodyText',
  'text-lg',
  'text-white',
  'bg-button-signIn',
  'font-bold',
  'w-signInBtn',
  'h-signInBtn'
)
const storeBtn = classnames('rounded-md', 'w-storeBtn', 'h-storeBtn', 'ml-sm')
const platformBtn = classnames(
  'rounded-lg',
  'w-platformBtn',
  'h-platformBtn',
  'm-sm',
  'p-md16',
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
const circleButton = (opacity?: TArg) =>
  classnames(
    'rounded-full',
    'bg-button-circle',
    'w-circleBtn',
    'h-circleBtn',
    'm-sm',
    'hover:opacity-100',
    opacity
  )

export const IconButton: FC<ButtonProps & { text?: string; img?: string }> = ({
  onClick,
  text,
  img,
  children,
}) => {
  return (
    <button
      type="button"
      className={iconButton}
      id="menu-button"
      aria-expanded="true"
      aria-haspopup="true"
      onClick={onClick}
    >
      {children || text}
      {img && <img src={img} className={classnames('h-6')} />}
    </button>
  )
}

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

export const CircleButton: FC<{ onClick: () => void; inactive?: boolean }> = ({
  onClick,
  inactive,
}) => {
  let opacity: TArg
  if (inactive) opacity = 'opacity-30'
  return <button className={circleButton(opacity)} onClick={onClick} />
}
