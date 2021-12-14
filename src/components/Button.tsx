import { DiskList, ModalHeaderTitle, ModalText } from 'components/Text'
import { FC, useRef, useState } from 'react'
import { classnames } from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'
import { useSnapshot } from 'valtio'
import AppStore from 'stores/AppStore'
import Language from 'models/Language'
import LeftArrow from 'components/icons/ChevronLeft'
import Modal from 'components/Modal'
import RightArrow from 'components/icons/ChevronRight'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import useClickOutside from 'hooks/useClickOutside'
import useEscape from 'hooks/useEscape'

type ButtonProps = {
  onClick: () => void
  // title: string
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

const logoBtn = classnames('w-28')

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
  'rounded-md',
  'font-BodyText',
  'font-medium',
  'whitespace-nowrap'
)

const regularButton = classnames(
  'flex',
  'justify-center',
  'items-center',
  'focus:outline-none',
  'focus:outline-none',
  'rounded-md',
  'font-BodyText',
  'font-medium',
  'whitespace-nowrap',
  'p-3'
)

const dropdownContainer = classnames(
  'origin-top-right',
  'absolute',
  'right-0',
  'mt-2',
  'rounded-md',
  'shadow-lg',
  'bg-white',
  'ring-1',
  'ring-black',
  'ring-opacity-5',
  'focus:outline-none',
  'flex',
  'flex-col',
  'p-2'
)

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

export const LogoButton = () => {
  return (
    <button className={logoBtn}>
      <img src={'public/img/logo.svg'} />
    </button>
  )
}

const DropDownButtn: FC<{
  text?: string
  img?: string
  ButtonHandler: FC<any>
}> = ({ children, ButtonHandler, ...props }) => {
  const ref = useRef<HTMLDivElement>(null)

  const [showDropDown, setShowDropDown] = useState(false)

  const closeModal = () => setShowDropDown(false)

  useClickOutside(ref, closeModal)

  useEscape(ref, closeModal)

  return (
    <div ref={ref} className="relative inline-block">
      <ButtonHandler
        {...props}
        onClick={() => {
          setShowDropDown(!showDropDown)
        }}
      />

      {showDropDown && (
        <div
          onClick={() => {
            setShowDropDown(!showDropDown)
          }}
          className={dropdownContainer}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          {children}
        </div>
      )}
    </div>
  )
}

const flags = {
  US: Language.en,
  RU: Language.ru,
} as { [key: string]: Language }

export const LanguageButton: FC = () => {
  const { language } = useSnapshot(AppStore)

  return (
    <DropDownButtn text={language.toUpperCase()} ButtonHandler={IconButton}>
      {Object.keys(flags).map((k) => (
        <IconButton
          key={flags[k]}
          onClick={() => {
            AppStore.language = flags[k]
          }}
        >
          {getUnicodeFlagIcon(k.toUpperCase())}
        </IconButton>
      ))}
    </DropDownButtn>
  )
}

export const SettingsButton = () => {
  const { dark } = useSnapshot(AppStore)
  const { translate } = useLocalize()

  return (
    <DropDownButtn img={'/img/settings.svg'} ButtonHandler={IconButton}>
      <GrayButton
        onClick={() => {
          AppStore.dark = !AppStore.dark
        }}
      >
        {dark ? translate('menu.darkMode.on') : translate('menu.darkMode.off')}
      </GrayButton>
    </DropDownButtn>
  )
}

const iconImage = classnames('h-6')

const IconButton: FC<ButtonProps & { text?: string; img?: string }> = ({
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
      {img && <img src={img} className={iconImage} />}
    </button>
  )
}

const blueButton = classnames(
  regularButton,
  'text-blue-500',
  'hover:bg-blue-100',
  'uppercase'
)
export const BlueButton: FC<
  ButtonProps & {
    text?: string
  }
> = ({ onClick, text, children }) => {
  return (
    <button
      type="button"
      className={blueButton}
      id="menu-button"
      aria-expanded="true"
      aria-haspopup="true"
      onClick={onClick}
    >
      {children || text}
    </button>
  )
}

const grayButton = classnames(
  regularButton,
  'text-gray-500',
  'hover:bg-gray-100'
)
export const GrayButton: FC<
  ButtonProps & {
    text?: string
  }
> = ({ onClick, text, children }) => {
  return (
    <button
      type="button"
      className={grayButton}
      id="menu-button"
      aria-expanded="true"
      aria-haspopup="true"
      onClick={onClick}
    >
      {children || text}
    </button>
  )
}

const infoRules = classnames('mb-4')
const infoFooter = classnames('flex', 'justify-end')
export const InfoButton = () => {
  const [modalOpened, setModalOpened] = useState(false)
  const { translate } = useLocalize()

  const rules = translate('rules') as unknown as string[]
  const rulesEl = rules.map((_, index) => {
    return (
      <ModalText>
        {/* Hack to make localized array reactive. TODO: Fix internal of localize-react to make arrays reactive by default */}
        <li className={infoRules}>{translate(`rules.${index}`)}</li>
      </ModalText>
    )
  })

  return (
    <>
      <IconButton
        img={'/img/info.svg'}
        onClick={() => {
          setModalOpened(!modalOpened)
        }}
      />
      {modalOpened && (
        <Modal
          closeModal={() => setModalOpened(false)}
          header={<ModalHeaderTitle text={translate('howto.title')} />}
          body={<DiskList>{rulesEl}</DiskList>}
          footer={
            <div className={infoFooter}>
              <BlueButton
                onClick={() => setModalOpened(false)}
                text={translate('cookie.button')}
              />
            </div>
          }
        />
      )}
    </>
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
