import { classnames } from 'classnames/tailwind'
import { FC } from 'react'
import React from 'react'
const TextBlock = React.lazy(() => import('components/TextBlock'))
const SignIn = React.lazy(() => import('components/SignIn'))

const orangeBox = classnames(
  'bg-gradient-to-r',
  'from-orange_dark',
  'to-orange_light',
  'rounded-xl',
  'w-full',
  'flex',
  'justify-between',
  'p-xl'
)

const OrangeBox: FC = () => {
  return (
    <div className={orangeBox}>
      <TextBlock />
      <SignIn />
    </div>
  )
}

export default OrangeBox
