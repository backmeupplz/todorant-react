import { classnames } from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'
import { SignInButton, StoreButton } from '../Button'

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
          path="/img/appstore.svg"
          alt="App Store logo"
        />
        <StoreButton
          onClick={() => {
            console.log('click')
          }}
          path="/img/playstore.svg"
          alt="Play Store logo"
        />
      </div>
    </div>
  )
}

export default SignInButtonsBlock
