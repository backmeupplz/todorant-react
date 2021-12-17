import { SignInButton, StoreButton } from 'components/Button'
import { classnames } from 'classnames/tailwind'

import useI18N from 'hooks/useI18N'

const block = classnames('flex-col')
const buttons = classnames('flex', 'flex-row', 'justify-end')

const SignInButtonsBlock = () => {
  const { LL } = useI18N()
  return (
    <div className={block}>
      <div className={buttons}>
        <SignInButton title={LL.signIn()} />
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
