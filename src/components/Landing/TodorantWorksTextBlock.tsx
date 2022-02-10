import { OrangeBoxList, OrangeBoxTitle } from 'components/Text'
import { useLocalize } from '@borodutch-labs/localize-react'
import {
  classnames,
  display,
  flexDirection,
  flexWrap,
  justifyContent,
  margin,
  maxWidth,
  padding,
} from 'classnames/tailwind'

const block = classnames(
  maxWidth('lg:max-w-todorantWorksText'),
  display('flex'),
  flexDirection('flex-col'),
  justifyContent('justify-between'),
  flexWrap('flex-wrap'),
  margin('mb-4', 'lg:mb-0'),
  padding('p-4')
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
