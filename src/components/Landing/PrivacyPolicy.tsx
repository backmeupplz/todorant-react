import { Link, PrivacyPolicyText } from 'components/Text'
import { classnames } from 'classnames/tailwind'

import useI18N from 'hooks/useI18N'

const block = classnames(
  'flex',
  'flex-row',
  'content-start',
  'w-full',
  'mt-xxl',
  'mb-xxxl'
)

const PrivacyPolicy = () => {
  const { LL } = useI18N()
  return (
    <div className={block}>
      <PrivacyPolicyText
        text={[LL.landingShort.contact[0](), LL.landingShort.contact[1]()]}
        links={[
          <Link url="mailto:n@borodutch.com" text="n@borodutch.com" />,
          <Link url="" text={LL.landingShort.privacy()} />,
        ]}
      />
    </div>
  )
}

export default PrivacyPolicy
