import { DiskList, ModalHeaderTitle, ModalText } from 'components/Text'
import { FC, useRef, useState } from 'react'
import {
  TOpacity,
  alignContent,
  alignItems,
  backgroundColor,
  backgroundOpacity,
  borderRadius,
  boxShadow,
  classnames,
  display,
  flexDirection,
  fontFamily,
  fontSize,
  fontWeight,
  height,
  inset,
  justifyContent,
  margin,
  maxWidth,
  opacity,
  outlineStyle,
  padding,
  position,
  ringColor,
  ringOpacity,
  ringWidth,
  textColor,
  textTransform,
  transformOrigin,
  whitespace,
  width,
} from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'
import { useSnapshot } from 'valtio'
import AppStore from 'stores/AppStore'
import Language from 'models/Language'
import Modal from 'components/Modal'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import useClickOutside from 'hooks/useClickOutside'
import useDarkMode from 'hooks/useDarkMode'
import useEscape from 'hooks/useEscape'

type ButtonProps = {
  onClick: () => void
}
type LogoButtonProps = {
  onClick: () => void
  path: string
  alt: string
}

const iconButton = classnames(
  textColor('text-general-button'),
  fontFamily('font-body-text'),
  display('flex'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  width('w-12'),
  height('h-12'),
  backgroundColor('hover:bg-gray-500'),
  backgroundOpacity('hover:bg-opacity-10'),
  textColor('text-gray-500'),
  outlineStyle('focus:outline-none'),
  borderRadius('rounded-md'),
  fontWeight('font-medium'),
  whitespace('whitespace-nowrap')
)

const signInBtn = classnames(
  fontFamily('font-body-text'),
  backgroundColor('bg-button-sign-in'),
  borderRadius('rounded-md'),
  padding('px-11', 'py-3'),
  margin('lg:ml-2'),
  fontSize('text-lg'),
  textColor('text-white'),
  fontWeight('font-bold'),
  width('w-40'),
  height('h-12'),
  display('flex'),
  justifyContent('justify-center')
)
const storeBtn = classnames(
  borderRadius('rounded-md'),
  width('w-14'),
  height('h-12'),
  margin('ml-1', 'lg:ml-2')
)
const platformBtn = classnames(
  textColor('text-main-text'),
  borderRadius('rounded-lg'),
  width('w-24'),
  height('h-24'),
  margin('m-2'),
  padding('p-4'),
  backgroundColor('bg-gray-500', 'hover:bg-gray-500'),
  backgroundOpacity('bg-opacity-5', 'hover:bg-opacity-20'),
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-center'),
  alignItems('items-center')
)
const platformLogoContainer = classnames(
  display('flex'),
  width('w-10'),
  height('h-10'),
  justifyContent('justify-center'),
  alignContent('content-center')
)
const platformLogo = classnames(maxWidth('max-w-xs'))
const platformTitle = classnames(
  fontFamily('font-body-text'),
  fontWeight('font-medium'),
  fontSize('text-sm'),
  margin('mt-2')
)
const circleButton = (op?: TOpacity) =>
  classnames(
    borderRadius('rounded-full'),
    backgroundColor('bg-gray-500'),
    width('w-2'),
    height('h-2'),
    margin('m-2'),
    opacity('hover:opacity-100', op)
  )

const logoBtn = classnames(width('w-28'))

const regularButton = classnames(
  fontFamily('font-body-text'),
  display('flex'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  outlineStyle('focus:outline-none'),
  borderRadius('rounded-md'),
  fontWeight('font-medium'),
  whitespace('whitespace-nowrap'),
  padding('p-3')
)

const dropdownContainer = classnames(
  backgroundColor('bg-main-background'),
  transformOrigin('origin-top-right'),
  position('absolute'),
  inset('right-0'),
  margin('mt-2'),
  borderRadius('rounded-md'),
  boxShadow('shadow-lg'),
  ringWidth('ring-1'),
  ringColor('ring-black'),
  ringOpacity('ring-opacity-5'),
  outlineStyle('focus:outline-none'),
  display('flex'),
  flexDirection('flex-col'),
  padding('p-2')
)

export const LogoButton = () => {
  return (
    <button className={logoBtn}>
      <img src={'public/img/logo.svg'} />
    </button>
  )
}

const dropDownWrapper = classnames(
  position('relative'),
  display('inline-block')
)
export const DropDownButton: FC<{
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
    <div ref={ref} className={dropDownWrapper}>
      <ButtonHandler
        {...props}
        onClick={() => {
          setShowDropDown(!showDropDown)
        }}
      />

      {showDropDown && (
        <div
          onClick={closeModal}
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
  UA: Language.uk,
  ES: Language.es,
  IT: Language.it,
  RO: Language.ro,
  PT: Language.ptBR,
} as { [key: string]: Language }

export const LanguageButton: FC = () => {
  const { language } = useSnapshot(AppStore)

  return (
    <DropDownButton text={language.toUpperCase()} ButtonHandler={IconButton}>
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
    </DropDownButton>
  )
}

export const SettingsButton = () => {
  const [isDark, setIsDark] = useDarkMode()
  const { translate } = useLocalize()

  return (
    <DropDownButton img={'/img/settings.svg'} ButtonHandler={IconButton}>
      <GrayButton
        onClick={() => {
          setIsDark(!isDark)
        }}
      >
        {isDark
          ? translate('menu.darkMode.on')
          : translate('menu.darkMode.off')}
      </GrayButton>
    </DropDownButton>
  )
}

const iconImage = classnames(height('h-6'))

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
      {img && <img src={img} className={iconImage} />}
    </button>
  )
}

export const SignInButton: FC<{ title: string }> = ({ title }) => {
  const [modalOpened, setModalOpened] = useState(false)
  return (
    <>
      <button
        className={signInBtn}
        onClick={() => {
          setModalOpened(!modalOpened)
        }}
      >
        {title}
      </button>
      {modalOpened && (
        <Modal
          closeModal={() => setModalOpened(false)}
          header={<ModalHeaderTitle text={title} />}
          body={<div>{title}</div>}
        />
      )}
    </>
  )
}

export const StoreButton: FC<LogoButtonProps> = ({ onClick, path, alt }) => {
  return (
    <button className={storeBtn} onClick={onClick}>
      <img src={`/img/${path}.svg`} alt={alt} />
    </button>
  )
}

const blueButton = classnames(
  regularButton,
  textColor('text-blue-500'),
  backgroundColor('hover:bg-blue-500'),
  backgroundOpacity('hover:bg-opacity-10'),
  textTransform('uppercase')
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
  textColor('text-modal-text'),
  backgroundColor('hover:bg-gray-500'),
  backgroundOpacity('hover:bg-opacity-10')
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

const infoRules = classnames(margin('mb-4'))
const infoFooter = classnames(display('flex'), justifyContent('justify-end'))
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

export const CircleButton: FC<{ onClick: () => void; inactive?: boolean }> = ({
  onClick,
  inactive,
}) => {
  let opacity: TOpacity = 'opacity-50'
  if (inactive) opacity = 'opacity-30'
  return <button className={circleButton(opacity)} onClick={onClick} />
}
