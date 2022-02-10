import { FC } from 'react'
import {
  TArg,
  TMargin,
  alignItems,
  classnames,
  fontFamily,
  fontSize,
  fontWeight,
  listStylePosition,
  listStyleType,
  margin,
  opacity,
  padding,
  textColor,
  textDecoration,
  whitespace,
} from 'classnames/tailwind'

type TextProps = {
  textArray: string[]
}
type PrivacyPolicy = {
  text: string[]
  links: React.ReactNode[]
}

const discList = classnames(
  listStyleType('list-disc'),
  listStylePosition('list-inside')
)

const basicText = classnames(fontFamily('font-body-text'))

const orangeBoxTitle = classnames(
  fontSize('text-orange-box-title-mobile'),
  fontFamily('font-body-text'),
  alignItems('items-start'),
  fontSize('lg:text-xl'),
  fontWeight('font-extrabold'),
  textColor('text-white')
)
const orangeBoxList = classnames(
  discList,
  fontFamily('font-body-text'),
  alignItems('items-start'),
  fontSize('text-base'),
  fontWeight('font-medium'),
  padding('pt-6'),
  textColor('text-white')
)
const landingBodyTitle = classnames(
  fontSize('text-body-title-mobile', 'lg:text-xxxl'),
  fontFamily('font-body-text'),
  textColor('text-main-text'),
  alignItems('items-start'),
  fontWeight('font-bold')
)
const landingBodyText = (ma?: TMargin) =>
  classnames(
    fontFamily('font-body-text'),
    textColor('text-main-text'),
    margin(ma),
    alignItems('items-start'),
    fontSize('text-lg'),
    fontWeight('font-normal'),
    opacity('opacity-80'),
    whitespace('whitespace-pre-line')
  )
const link = classnames(
  fontFamily('font-body-text'),
  textColor('text-screenshot-blue'),
  fontWeight('font-semibold'),
  fontSize('text-sm'),
  textDecoration('underline')
)
const orangeBoxAct = classnames(
  fontSize('lg:text-xxl', 'text-act-mobile'),
  fontFamily('font-body-text'),
  alignItems('items-center'),
  fontWeight('font-bold'),
  textColor('text-white'),
  padding('pb-6')
)
const privacyPolicyText = classnames(
  fontFamily('font-body-text'),
  textColor('text-gray-500'),
  fontSize('text-sm'),
  fontWeight('font-medium'),
  whitespace('whitespace-pre-line')
)

const modalHeaderTitle = classnames(
  basicText,
  textColor('text-main-text'),
  fontWeight('font-medium'),
  fontSize('text-xl')
)

const modalText = classnames(basicText, textColor('text-modal-text'))

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
export const LandingBodyText: FC<TextProps & { margin?: TMargin }> = ({
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

export const ModalHeaderTitle: FC<{ text: string }> = ({ text }) => {
  return <div className={modalHeaderTitle}>{text}</div>
}

export const ModalText: FC<{ text?: string }> = ({ children, text }) => {
  return <div className={modalText}>{children || text}</div>
}

export const Link: FC<{ url: string; text: string }> = ({ url, text }) => {
  return (
    <a href={url} target="_blank" rel="noreferrer noopener" className={link}>
      {text}
    </a>
  )
}

export const DiskList: FC = ({ children }) => {
  return <ul className={discList}>{children}</ul>
}
export const OrangeBoxAct: FC<{ text: string }> = ({ text }) => {
  return <p className={orangeBoxAct}>{text}</p>
}

export const PrivacyPolicyText: FC<PrivacyPolicy> = ({ text, links }) => {
  return (
    <span className={privacyPolicyText}>
      {text[0]}
      {links[0]}
      {text[1]}
      {links[1]}
    </span>
  )
}
