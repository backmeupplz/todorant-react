import { FC } from 'react'
import { classnames, TArg } from 'classnames/tailwind'

type ButtonProps = {
  onClick: () => void
  title: string
  props: TArg[]
}

const button = (props: TArg[] = []) =>
  classnames('rounded-lg', 'px-45', 'py-12', ...props)

const Button: FC<ButtonProps> = ({ onClick, title, props }) => {
  return (
    <button className={button(props)} onClick={onClick}>
      {title}
    </button>
  )
}

export default Button
