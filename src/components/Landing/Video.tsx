import { useLocalize } from '@borodutch-labs/localize-react'
import { useSnapshot } from 'valtio'
import AppStore from 'stores/AppStore'
import Language from 'models/Language'
import {
  borderRadius,
  boxShadow,
  classnames,
  height,
  margin,
  width,
} from 'classnames/tailwind'

const frame = classnames(
  margin('mt-mobileVideoTop', 'lg:mt-videoTop'),
  boxShadow('shadow-landingVideo'),
  borderRadius('rounded-sm'),
  height('h-video'),
  width('lg:w-video', 'w-full')
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
