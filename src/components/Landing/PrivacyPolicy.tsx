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
      <PrivacyPolicyText text={LL.landingShort.contact[0]()}>
        <Link url="mailto:n@borodutch.com" text="n@borodutch.com" />
      </PrivacyPolicyText>
      <PrivacyPolicyText text={LL.landingShort.contact[1]()}>
        <Link url="" text={LL.landingShort.privacy()} />
      </PrivacyPolicyText>
    </div>
  )
}

export default PrivacyPolicy
