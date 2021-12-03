import { classnames } from 'classnames/tailwind'
import { useLocalize } from '@borodutch-labs/localize-react'
import { FC } from 'react'
import Button from './Button'
import React from 'react'
const LandingVideo = React.lazy(() => import('components/LandingVideo'))

type ButtonProps = {
  onClick: () => void
  path: string
  alt: string
}

const block = classnames('flex-col')
const buttons = classnames('flex', 'flex-row', 'justify-end')
const storeBtn = classnames('rounded-lg', 'w-test', 'h-test', 'ml-sm')

const StoreButton: FC<ButtonProps> = ({ onClick, path, alt }) => {
  return (
    <button className={storeBtn} onClick={onClick}>
      <img src={path} alt={alt} />
    </button>
  )
}

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
            'text-button',
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
      <LandingVideo />
    </div>
  )
}

export default SignIn
