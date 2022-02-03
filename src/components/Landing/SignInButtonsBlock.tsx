import { SignInButton, StoreButton } from 'components/Button'
import { classnames } from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'

const buttons = classnames(
  'flex',
  'flex-row',
  'justify-center',
  'lg:justify-end'
)

const SignInButtonsBlock = () => {
  const { translate } = useLocalize()
  return (
    <div className={buttons}>
      <SignInButton title={translate('home.signIn')} />
      <StoreButton
        onClick={() => {
          console.log('click')
        }}
        path="appstore"
        alt="App Store logo"
      />
      <StoreButton
        onClick={() => {
          console.log('click')
        }}
        path="playstore"
        alt="Play Store logo"
      />
    </div>
  )
}

export default SignInButtonsBlock
