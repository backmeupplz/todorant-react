import { FC } from 'react'
import { classnames, margin, maxWidth, padding } from 'classnames/tailwind'

const root = classnames(
  margin('mx-auto'),
  maxWidth('max-w-screen-lg'),
  padding('px-4')
)
const Root: FC = ({ children }) => {
  return <div className={root}>{children}</div>
}

export default Root
