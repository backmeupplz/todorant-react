import { classnames } from 'classnames/tailwind'
import { FC } from 'react'
import React from 'react'
const TextBlock = React.lazy(() => import('components/TextBlock'))
const SignIn = React.lazy(() => import('components/SignIn'))

const box = classnames(
  'bg-gradient-to-r',
  'from-dark',
  'to-light',
  'rounded-xl',
  'w-full',
  'h-80',
  'flex',
  'justify-between',
  'p-xl'
)

const OrangeBox: FC = () => {
  return (
    <div className={box}>
      <TextBlock />
      <SignIn />
    </div>
  )
}

export default OrangeBox
