import { SignInButton, StoreButton } from 'components/Button'
import { classnames } from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'

const block = classnames('flex-col')
const buttons = classnames('flex', 'flex-row', 'justify-end')

const SignInButtonsBlock = () => {
  const { translate } = useLocalize()
  return (
    <div className={block}>
      <div className={buttons}>
        <SignInButton
          onClick={() => {
            console.log('click')
          }}
          title={translate('signIn')}
        />
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
    </div>
  )
}

export default SignInButtonsBlock
