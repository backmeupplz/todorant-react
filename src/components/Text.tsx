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
  'pt-lg24',
  'font-BodyText',
  'list-disc',
  'list-inside',
  'text-white'
)
const landingBodyTitle = classnames(
  'items-start',
  'text-xxxl',
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
    'whitespace-pre-line',
    margin
  )
const link = classnames(
  'font-BodyText',
  'text-screenshot-blue',
  'font-semibold',
  'text-sm',
  'underline'
)
const orangeBoxAct = classnames(
  'items-center',
  'text-xxl',
  'font-bold',
  'font-BodyText',
  'text-white',
  'pb-lg24'
)
const privacyPolicyText = classnames(
  'text-button-circle',
  'text-sm',
  'font-medium',
  'font-BodyText',
  'whitespace-pre-line'
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
export const LandingBodyText: FC<TextProps & { margin?: TArg }> = ({
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
export const Link: FC<{ url: string; text: string }> = ({ url, text }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer noopener" className={link}>
      {text}
    </a>
  )
}
export const OrangeBoxAct: FC<{ text: string }> = ({ text }) => {
  return <p className={orangeBoxAct}>{text}</p>
}
export const PrivacyPolicyText: FC<{ text: string }> = ({ text, children }) => {
  return (
    <p className={privacyPolicyText}>
      {text}
      {children}
    </p>
  )
}
