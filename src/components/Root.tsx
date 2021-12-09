import { FC } from 'react'
import { classnames } from 'classnames/tailwind'

const root = classnames('mx-auto', 'max-w-screen-lg')
const Root: FC = ({ children }) => {
  return <div className={root}>{children}</div>
}

export default Root
