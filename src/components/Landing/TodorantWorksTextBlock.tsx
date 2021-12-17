import { OrangeBoxList, OrangeBoxTitle } from 'components/Text'
import { classnames } from 'classnames/tailwind'
import useI18N from 'hooks/useI18N'

const block = classnames(
  'flex',
  'flex-col',
  'justify-between',
  'flex-wrap',
  'lg:max-w-todorantWorksText',
  'mb-md16',
  'lg:mb-0'
)

const TodorantWorksTextBlock = () => {
  const { LL } = useI18N()
  return (
    <div className={block}>
      <OrangeBoxTitle
        textArray={[LL.landingShort.headline(), LL.landingShort.headline2()]}
      />
      <OrangeBoxList
        textArray={[
          LL.landingShort.feature1(),
          LL.landingShort.feature2(),
          LL.landingShort.feature3(),
          LL.landingShort.feature4(),
        ]}
      />
    </div>
  )
}

export default TodorantWorksTextBlock
