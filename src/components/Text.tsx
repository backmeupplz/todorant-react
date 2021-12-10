import { classnames, TArg } from 'classnames/tailwind'
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
const landingBodyTitle = classnames(
  'items-start',
  'text-xxl',
  'font-bold',
  'font-BodyText'
)
const landingBodyText = (margin?: TArg) =>
  classnames(
    'items-start',
    'text-lg',
    'font-normal',
    'font-BodyText',
    'text-black',
    'text-opacity-80',
    margin
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
export const LandingBodyTitle: FC<{ text: string }> = ({ text }) => {
  return <p className={landingBodyTitle}>{text}</p>
}
export const LandingBodyText: FC<TextProps & { margin: TArg }> = ({
  textArray,
  margin,
}) => {
  return (
    <>
      {textArray.map((text) => (
        <p className={landingBodyText(margin)}>{text}</p>
      ))}
    </>
  )
}
