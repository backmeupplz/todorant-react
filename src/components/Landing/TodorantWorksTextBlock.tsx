import { OrangeBoxList, OrangeBoxTitle } from 'components/Text'
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
import { useLocalize } from '@borodutch-labs/localize-react'

const block = classnames(
  display('flex'),
  flexDirection('flex-col'),
  flexWrap('flex-wrap'),
  justifyContent('justify-between'),
  margin('mb-4', 'lg:mb-0'),
  maxWidth('lg:max-w-todorant-works-text'),
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
