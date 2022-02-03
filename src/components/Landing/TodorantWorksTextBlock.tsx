import { OrangeBoxList, OrangeBoxTitle } from 'components/Text'
import { classnames } from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'

const block = classnames(
  'flex',
  'flex-col',
  'justify-between',
  'flex-wrap',
  'lg:max-w-todorantWorksText',
  'mb-4',
  'lg:mb-0',
  'p-4'
)

const TodorantWorksTextBlock = () => {
  const { translate } = useLocalize()
  return (
    <div className={block}>
      <OrangeBoxTitle
        textArray={[
          translate('homeShort.headline'),
          translate('homeShort.headline2'),
        ]}
      />
      <OrangeBoxList
        textArray={[
          translate('homeShort.feature1'),
          translate('homeShort.feature2'),
          translate('homeShort.feature3'),
          translate('homeShort.feature4'),
        ]}
      />
    </div>
  )
}

export default TodorantWorksTextBlock
