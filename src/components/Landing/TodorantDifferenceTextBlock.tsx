import { classnames } from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'
import { TodorantDifferenceTitle, TodorantDifferenceText } from '../Text'

const block = classnames(
  'flex',
  'flex-col',
  'justify-between',
  'max-w-xl',
  'mt-8'
)

const TodorantDifferenceTextBlock = () => {
  const { translate } = useLocalize()
  return (
    <div className={block}>
      <TodorantDifferenceTitle
        text={translate('landingShort.differenceTitle')}
      />
      <TodorantDifferenceText
        textArray={[
          translate('landingShort.differenceText1'),
          translate('landingShort.differenceText2'),
          translate('landingShort.differenceText3'),
        ]}
      />
    </div>
  )
}

export default TodorantDifferenceTextBlock
