import { Link, PrivacyPolicyText } from 'components/Text'
import { classnames } from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'

const block = classnames(
  'flex',
  'flex-row',
  'content-start',
  'w-full',
  'mt-10',
  'mb-16'
)

const PrivacyPolicy = () => {
  const { translate } = useLocalize()
  return (
    <div className={block}>
      <PrivacyPolicyText
        text={[
          translate('landingShort.contact.0'),
          translate('landingShort.contact.1'),
        ]}
        links={[
          <Link url="mailto:n@borodutch.com" text="n@borodutch.com" />,
          <Link url="" text={translate('landingShort.privacy')} />,
        ]}
      />
    </div>
  )
}

export default PrivacyPolicy
