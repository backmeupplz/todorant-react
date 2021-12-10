import { classnames } from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'

const block = classnames('flex', 'flex-col', 'max-w-xl', 'mt-8')

const ReviewBlock = () => {
  const { translate } = useLocalize()
  return <div className={block}></div>
}

export default ReviewBlock
