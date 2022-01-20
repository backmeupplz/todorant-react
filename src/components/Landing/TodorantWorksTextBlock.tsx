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
  'lg:mb-0'
)

const TodorantWorksTextBlock = () => {
  const { translate } = useLocalize()
  return (
    <div className={block}>
      <OrangeBoxTitle
        textArray={[
          translate('landingShort.headline'),
          translate('landingShort.headline2'),
        ]}
      />
      <OrangeBoxList
        textArray={[
          translate('landingShort.feature1'),
          translate('landingShort.feature2'),
          translate('landingShort.feature3'),
          translate('landingShort.feature4'),
        ]}
      />
    </div>
  )
}

export default TodorantWorksTextBlock
