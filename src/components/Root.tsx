import { FC } from 'react'
import { classnames } from 'classnames/tailwind'

const root = classnames('mx-auto', 'max-w-screen-lg', 'px-4')
const Root: FC = ({ children }) => {
  return <div className={root}>{children}</div>
}

export default Root
