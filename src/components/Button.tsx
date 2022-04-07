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

const logoBtn = classnames(width('w-28'))

export const LogoButton = () => {
  return (
    <button className={logoBtn}>
      <img src="public/img/logo.svg" />
    </button>
  )
}

const dropDownWrapper = classnames(
  display('inline-block'),
  position('relative')
)

const dropdownContainer = classnames(
  backgroundColor('bg-main-background'),
  borderRadius('rounded-md'),
  boxShadow('shadow-lg'),
  display('flex'),
  flexDirection('flex-col'),
  inset('right-0'),
  margin('mt-2'),
  outlineStyle('focus:outline-none'),
  padding('p-2'),
  position('absolute'),
  ringColor('ring-black'),
  ringOpacity('ring-opacity-5'),
  ringWidth('ring-1'),
  transformOrigin('origin-top-right')
)

export const DropDownButton: FC<{
  text?: string
  img?: string
  wrapper: FC<any>
}> = ({ children, wrapper, ...props }) => {
  const ButtonHandler = wrapper

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

const iconButton = classnames(
  alignItems('items-center'),
  backgroundColor('hover:bg-gray-500'),
  backgroundOpacity('hover:bg-opacity-10'),
  borderRadius('rounded-md'),
  display('flex'),
  fontFamily('font-body-text'),
  fontWeight('font-medium'),
  height('h-12'),
  justifyContent('justify-center'),
  outlineStyle('focus:outline-none'),
  textColor('text-general-button'),
  whitespace('whitespace-nowrap'),
  width('w-12')
)

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
    <DropDownButton text={language.toUpperCase()} wrapper={IconButton}>
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
    <DropDownButton img="/img/settings.svg" wrapper={IconButton}>
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

const signInBtn = classnames(
  backgroundColor('bg-button-sign-in'),
  borderRadius('rounded-md'),
  display('flex'),
  fontFamily('font-body-text'),
  fontSize('text-lg'),
  fontWeight('font-bold'),
  height('h-12'),
  justifyContent('justify-center'),
  margin('lg:ml-2'),
  padding('px-11', 'py-3'),
  textColor('text-white'),
  width('w-40')
)

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

const storeBtn = classnames(
  borderRadius('rounded-md'),
  height('h-12'),
  margin('ml-1', 'lg:ml-2'),
  width('w-14')
)

export const StoreButton: FC<LogoButtonProps> = ({ onClick, path, alt }) => {
  return (
    <button className={storeBtn} onClick={onClick}>
      <img src={`/img/${path}.svg`} alt={alt} />
    </button>
  )
}

const regularButton = classnames(
  alignItems('items-center'),
  borderRadius('rounded-md'),
  display('flex'),
  fontFamily('font-body-text'),
  fontWeight('font-medium'),
  justifyContent('justify-center'),
  outlineStyle('focus:outline-none'),
  padding('p-3'),
  whitespace('whitespace-nowrap')
)

const blueButton = classnames(
  backgroundColor('hover:bg-blue-500'),
  backgroundOpacity('hover:bg-opacity-10'),
  regularButton,
  textColor('text-blue-500'),
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
  backgroundColor('hover:bg-gray-500'),
  backgroundOpacity('hover:bg-opacity-10'),
  regularButton,
  textColor('text-modal-text')
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
        img="/img/info.svg"
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

const platformBtn = classnames(
  alignItems('items-center'),
  backgroundColor('bg-gray-500', 'hover:bg-gray-500'),
  backgroundOpacity('bg-opacity-5', 'hover:bg-opacity-20'),
  borderRadius('rounded-lg'),
  display('flex'),
  flexDirection('flex-col'),
  height('h-24'),
  justifyContent('justify-center'),
  margin('m-2'),
  padding('p-4'),
  textColor('text-main-text'),
  width('w-24')
)

const platformLogoContainer = classnames(
  alignContent('content-center'),
  display('flex'),
  height('h-10'),
  justifyContent('justify-center'),
  width('w-10')
)

const platformLogo = classnames(maxWidth('max-w-xs'))

const platformTitle = classnames(
  fontFamily('font-body-text'),
  fontSize('text-sm'),
  fontWeight('font-medium'),
  margin('mt-2')
)

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

const circleButton = (op?: TOpacity) =>
  classnames(
    backgroundColor('bg-gray-500'),
    borderRadius('rounded-full'),
    height('h-2'),
    margin('m-2'),
    opacity('hover:opacity-100', op),
    width('w-2')
  )

function circleButtonOpacity(inactive?: boolean) {
  if (inactive) return 'opacity-30'
  return 'opacity-50'
}

export const CircleButton: FC<{ onClick: () => void; inactive?: boolean }> = ({
  onClick,
  inactive,
}) => {
  const opacity: TOpacity = circleButtonOpacity(inactive)
  return <button className={circleButton(opacity)} onClick={onClick} />
}
