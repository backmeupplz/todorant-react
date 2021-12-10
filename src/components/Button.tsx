import { FC, useEffect, useRef, useState } from 'react'
import { classnames } from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'
import { useSnapshot } from 'valtio'
import AppStore from 'stores/AppStore'
import Language from 'models/Language'
import getUnicodeFlagIcon from 'country-flag-icons/unicode'

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
  'p-3.5'
)

const DropDownButtn: FC<{ text?: string; path?: string }> = ({
  children,
  text = null,
  path,
}) => {
  const ref = useRef<HTMLDivElement | null>(null)

  const [showDropDown, setShowDropDown] = useState(false)

  useEffect(() => {
    const checkIfClickedOutside = (e: Event) => {
      if (
        showDropDown &&
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        setShowDropDown(false)
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [showDropDown])

  return (
    <div ref={ref} className="relative inline-block">
      <div>
        <button
          type="button"
          className={iconButton}
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => {
            setShowDropDown(!showDropDown)
          }}
        >
          {text}
          {path && <img src={path} className={classnames('h-6')} />}
        </button>
      </div>

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
    <DropDownButtn text={language.toUpperCase()}>
      {Object.keys(flags).map((k) => (
        <button
          className={classnames('text-2xl', 'text-gray-100')}
          key={flags[k]}
          onClick={() => {
            AppStore.language = flags[k]
          }}
          title={k}
        >
          {getUnicodeFlagIcon(k.toUpperCase())}
        </button>
      ))}
    </DropDownButtn>
  )
}

export const SettingsButton = () => {
  const { dark } = useSnapshot(AppStore)
  const { translate } = useLocalize()

  return (
    <DropDownButtn path={'/img/settings.svg'}>
      <button
        onClick={() => {
          AppStore.dark = !AppStore.dark
        }}
        className={classnames('whitespace-nowrap')}
      >
        {dark ? translate('menu.darkMode.on') : translate('menu.darkMode.off')}
      </button>
    </DropDownButtn>
  )
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
  'rounded-md'
)
