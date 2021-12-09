import { classnames } from 'classnames/tailwind'
import { FC } from 'react'

type TextProps = {
  textArray: string[]
}

const orangeBoxTitle = classnames(
  'items-start',
  'text-xl',
  'font-extrabold',
  'font-BodyText',
  'text-white'
)
const orangeBoxList = classnames(
  'items-start',
  'text-base',
  'font-medium',
  'pt-lg',
  'font-BodyText',
  'list-disc',
  'list-inside',
  'text-white'
)
const todorantDifferenceTitle = classnames(
  'items-start',
  'text-xxl',
  'font-bold',
  'font-BodyText'
)
const todorantDifferenceText = classnames(
  'items-start',
  'text-lg',
  'font-normal',
  'font-BodyText',
  'text-black',
  'text-opacity-80'
)

export const OrangeBoxTitle: FC<TextProps> = ({ textArray }) => {
  return (
    <div className={orangeBoxTitle}>
      {textArray.map((text) => (
        <p>{text}</p>
      ))}
    </div>
  )
}
export const OrangeBoxList: FC<TextProps> = ({ textArray }) => {
  return (
    <ul className={orangeBoxList}>
      {textArray.map((text) => (
        <li>{text}</li>
      ))}
    </ul>
  )
}
export const TodorantDifferenceTitle: FC<{ text: string }> = ({ text }) => {
  return <p className={todorantDifferenceTitle}>{text}</p>
}
export const TodorantDifferenceText: FC<TextProps> = ({ textArray }) => {
  return (
    <>
      {textArray.map((text) => (
        <p className={todorantDifferenceText}>{text}</p>
      ))}
    </>
  )
}
