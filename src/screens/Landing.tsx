import { classnames } from 'classnames/tailwind'
import React from 'react'
const OrangeBox = React.lazy(() => import('components/OrangeBox'))

const Landing = () => {
  return (
    <div>
      <OrangeBox />
    </div>
  )
}

export default Landing
