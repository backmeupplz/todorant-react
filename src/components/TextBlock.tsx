import { classnames } from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'
import { FC } from 'react'

const block = classnames('flex-col')

const title = classnames(
  'items-start',
  'text-title',
  'font-extrabold',
  'font-montserrat',
  'text-white'
)
const text = classnames(
  'items-start',
  'text-regular',
  'font-medium',
  'pt-lg',
  'font-montserrat',
  'list-disc',
  'list-inside',
  'text-white'
)

const TextBlock: FC = () => {
  const { translate } = useLocalize()
  return (
    <div className={block}>
      <div className={title}>
        <p>{translate('landingShort.headline')}</p>
        <p>{translate('landingShort.headline2')}</p>
      </div>
      <ul className={text}>
        <li>{translate('landingShort.feature1')}</li>
        <li>{translate('landingShort.feature2')}</li>
        <li>{translate('landingShort.feature3')}</li>
        <li>{translate('landingShort.feature4')}</li>
      </ul>
    </div>
  )
}

export default TextBlock
