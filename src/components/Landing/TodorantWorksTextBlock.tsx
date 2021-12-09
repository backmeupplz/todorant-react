import { classnames } from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'
import { OrangeBoxTitle, OrangeBoxList } from '../Text'

const block = classnames('flex', 'flex-col', 'justify-between')

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
