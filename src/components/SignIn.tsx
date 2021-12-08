import { classnames } from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'
import { FC } from 'react'
import React from 'react'
const Button = React.lazy(() => import('components/Button'))
const StoreButton = React.lazy(() => import('components/StoreButton'))

const block = classnames('flex-col')
const buttons = classnames('flex', 'flex-row', 'justify-end')

const SignIn: FC = () => {
  const { translate } = useLocalize()
  return (
    <div className={block}>
      <div className={buttons}>
        <Button
          onClick={() => {
            console.log('click')
          }}
          title={translate('signIn')}
          props={[
            'ml-sm',
            'font-montserrat',
            'text-lg',
            'text-white',
            'bg-orange-button',
            'font-bold',
          ]}
        ></Button>
        <StoreButton
          onClick={() => {
            console.log('click')
          }}
          path={'/img/appstore.svg'}
          alt={'App Store logo'}
        ></StoreButton>
        <StoreButton
          onClick={() => {
            console.log('click')
          }}
          path={'/img/playstore.svg'}
          alt={'Play Store logo'}
        ></StoreButton>
      </div>
    </div>
  )
}

export default SignIn
