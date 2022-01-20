import { classnames } from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'
import { useSnapshot } from 'valtio'
import AppStore from 'stores/AppStore'
import Language from 'models/Language'

const frame = classnames(
  'lg:w-video',
  'h-video',
  'rounded-sm',
  'mt-mobileVideoTop',
  'lg:mt-videoTop',
  'shadow-landingVideo',
  'h-full',
  'w-full'
)

const Video = () => {
  const { translate } = useLocalize()
  const { language } = useSnapshot(AppStore)
  const source =
    language === Language.ru
      ? 'https://www.youtube.com/embed/heR0rlllTVg'
      : 'https://www.youtube.com/embed/lYXhqHt7_QY'
  return (
    <iframe title={translate('howto.title')} src={source} className={frame} />
  )
}

export default Video
