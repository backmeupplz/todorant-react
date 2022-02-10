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
  fontFamily('font-body-text'),
  backgroundColor('bg-main-background'),
  position('sticky'),
  display('flex'),
  justifyContent('justify-between'),
  padding('lg:p-3'),
  inset('top-0'),
  opacity('opacity-100'),
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
