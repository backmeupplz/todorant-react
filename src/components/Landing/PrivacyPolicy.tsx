import { classnames } from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'
import { Link, PrivacyPolicyText } from '../Text'

const block = classnames(
  'flex',
  'flex-row',
  'content-start',
  'w-full',
  'mt-xxl',
  'mb-xxxl'
)

const PrivacyPolicy = () => {
  const { translate } = useLocalize()
  return (
    <div className={block}>
      <PrivacyPolicyText text={translate('landingShort.contact.0')}>
        <Link url="mailto:n@borodutch.com" text="n@borodutch.com" />
      </PrivacyPolicyText>
      <PrivacyPolicyText text={translate('landingShort.contact.1')}>
        <Link url="" text={translate('landingShort.privacy')} />
      </PrivacyPolicyText>
    </div>
  )
}

export default PrivacyPolicy
