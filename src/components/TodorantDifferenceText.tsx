import { classnames } from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'
import { FC } from 'react'

const block = classnames(
  'flex',
  'flex-col',
  'justify-between',
  'max-w-xl',
  'mt-8'
)

const title = classnames(
  'items-start',
  'text-xxl',
  'font-bold',
  'font-montserrat'
)

const text = classnames(
  'items-start',
  'text-base',
  'font-normal',
  'font-montserrat',
  'pt-lg',
  'text-black',
  'text-opacity-80'
)

const TodorantDifferenceText: FC = () => {
  const { translate } = useLocalize()
  return (
    <div className={block}>
      <p className={title}>{translate('landingShort.differenceTitle')}</p>
      <p className={text}>{translate('landingShort.differenceText1')}</p>
      <p className={text}>{translate('landingShort.differenceText2')}</p>
      <p className={text}>{translate('landingShort.differenceText3')}</p>
    </div>
  )
}

export default TodorantDifferenceText
