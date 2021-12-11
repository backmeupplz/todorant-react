import { FC, useEffect, useRef, useState } from 'react'
import { ModalHeaderTitle, ModalText } from 'components/Text'
import {
  TBackgroundColor,
  TPseudoClasses,
  classnames,
} from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'
import { useMemo } from 'preact/hooks'
import { useSnapshot } from 'valtio'
import AppStore from 'stores/AppStore'
import Language from 'models/Language'
import Modal from 'components/Modal'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import useClickOutside from 'hooks/useClickOutside'

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
  const ref = useRef<HTMLDivElement | null>(null)

  const [showDropDown, setShowDropDown] = useState(false)

  useClickOutside(ref, () => setShowDropDown(false))

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
      <Button
        onClick={() => {
          AppStore.dark = !AppStore.dark
        }}
      >
        {dark ? translate('menu.darkMode.on') : translate('menu.darkMode.off')}
      </Button>
    </DropDownButtn>
  )
}

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
      {img && <img src={img} className={classnames('h-6')} />}
    </button>
  )
}

const Button: FC<
  ButtonProps & {
    text?: string
    backgroundColor?: TPseudoClasses
  }
> = ({ onClick, text, children, backgroundColor }) => {
  const regularButtonWithBgColor = classnames(regularButton)

  return (
    <button
      type="button"
      className={regularButtonWithBgColor}
      id="menu-button"
      aria-expanded="true"
      aria-haspopup="true"
      onClick={onClick}
    >
      {children || text}
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

export const InfoButton = () => {
  const [modalOpened, setModalOpened] = useState(false)
  const { translate } = useLocalize()

  const ruleClassnames = classnames('mb-4')

  const rules = translate('rules') as unknown as string[]
  const rulesEl = useMemo(() => {
    return rules.map((rule) => {
      return (
        <ModalText>
          <li className={ruleClassnames}>{rule}</li>
        </ModalText>
      )
    })
  }, [rules, ruleClassnames])

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
          body={
            <ul className={classnames('list-disc', 'list-inside')}>
              {rulesEl}
            </ul>
          }
          footer={
            <div className={classnames('flex', 'justify-between')}>
              <BlueButton
                onClick={() => setModalOpened(false)}
                text={translate('introButton')}
              />
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
