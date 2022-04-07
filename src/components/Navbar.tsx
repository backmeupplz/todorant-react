import {
  InfoButton,
  LanguageButton,
  LogoButton,
  SettingsButton,
} from 'components/Button'
import {
  alignItems,
  backgroundColor,
  classnames,
  display,
  fontFamily,
  inset,
  justifyContent,
  opacity,
  padding,
  position,
  zIndex,
} from 'classnames/tailwind'

const navbar = classnames(
  backgroundColor('bg-main-background'),
  display('flex'),
  fontFamily('font-body-text'),
  inset('top-0'),
  justifyContent('justify-between'),
  opacity('opacity-100'),
  padding('lg:p-3'),
  position('sticky'),
  zIndex('z-10')
)

const navbarBtnsContainer = classnames(
  alignItems('items-center'),
  display('flex')
)

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
