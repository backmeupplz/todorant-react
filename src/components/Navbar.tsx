import {
  InfoButton,
  LanguageButton,
  LogoButton,
  SettingsButton,
} from 'components/Button'
import { classnames } from 'classnames/tailwind'

const navbar = classnames(
  'sticky',
  'flex',
  'justify-between',
  'lg:p-3',
  'font-BodyText',
  'top-0',
  'bg-white'
)

const navbarBtnsContainer = classnames('items-center', 'flex')

export default function Navbar() {
  return (
    <nav className={navbar}>
      <LogoButton />
      <div className={navbarBtnsContainer}>
        <LanguageButton />
        <InfoButton />
        <SettingsButton />
      </div>
    </nav>
  )
}
