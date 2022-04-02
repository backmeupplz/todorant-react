import { PlatformButton } from 'components/Button'
import {
  alignItems,
  classnames,
  display,
  flexDirection,
  flexWrap,
  justifyContent,
  margin,
  maxWidth,
} from 'classnames/tailwind'
import useDarkMode from 'hooks/useDarkMode'

const block = classnames(
  alignItems('items-center'),
  display('flex'),
  flexDirection('flex-row'),
  flexWrap('flex-wrap'),
  justifyContent('justify-center'),
  margin('mt-4'),
  maxWidth('max-w-xl')
)
const CrossplatformButtonsBlock = () => {
  function open(url: string) {
    window.open(url, '_blank')
  }
  const [isDark] = useDarkMode()

  const buttons = platforms.map((platform) => (
    <PlatformButton
      path={isDark && platform.pathDark ? platform.pathDark : platform.path}
      alt={platform.alt}
      title={platform.title}
      onClick={() => {
        open(platform.url)
      }}
    />
  ))

  return <div className={block}>{buttons}</div>
}

export default CrossplatformButtonsBlock

const platforms = [
  {
    path: 'webapp',
    alt: 'Web app logo',
    title: 'Web',
    url: 'https://apps.apple.com/${appstoreLanguage}/app/todorant/id1482078243',
  },
  {
    path: 'apple-black',
    pathDark: 'apple',
    alt: 'Apple logo',
    title: 'iOS',
    url: 'https://apps.apple.com/${appstoreLanguage}/app/todorant/id1482078243',
  },
  {
    path: 'android',
    alt: 'Android logo',
    title: 'Android',
    url: 'https://play.google.com/store/apps/details?id=com.todorant',
  },
  {
    path: 'macos',
    alt: 'macOS logo',
    title: 'macOS',
    url: 'https://github.com/backmeupplz/todorant-releases/releases/download/v1.0.7/todorant-1.0.7-linux-x86_64.AppImage',
  },
  {
    path: 'windows',
    alt: 'Windows logo',
    title: 'Windows',
    url: 'https://github.com/backmeupplz/todorant-releases/releases/download/v1.0.7/todorant-1.0.7-win.exe',
  },
  {
    path: 'linux',
    alt: 'Linux logo',
    title: 'Linux',
    url: 'https://github.com/backmeupplz/todorant-releases/releases/download/v1.0.7/todorant-1.0.7-linux-x86_64.AppImage',
  },
  {
    path: 'snapcraft',
    pathDark: 'snapcraft-white',
    alt: 'Snap logo',
    title: 'Snapcraft',
    url: 'https://snapcraft.io/todorant',
  },
  {
    path: 'chrome',
    alt: 'Chrome logo',
    title: 'Chrome',
    url: 'https://chrome.google.com/webstore/detail/todorant/elbpjnphgkgohncpccajbomicnejijdk',
  },
  {
    path: 'firefox',
    alt: 'Firefox logo',
    title: 'Firefox',
    url: 'https://addons.mozilla.org/en-US/firefox/addon/todorant',
  },
  {
    path: 'telegram',
    alt: 'Telegram logo',
    title: 'Telegram',
    url: 'https://t.me/todorant_bot',
  },
]
