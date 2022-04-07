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
import ComponentName from 'components/Landing/ComponentNames'

type TextProps = {
  textArray: string[]
}
type PrivacyPolicy = {
  text: string[]
  links: React.ReactNode[]
}

const orangeBoxTitle = classnames(
  alignItems('items-start'),
  fontFamily('font-body-text'),
  fontSize('lg:text-xl', 'text-orange-box-title-mobile'),
  fontWeight('font-extrabold'),
  textColor('text-white')
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

const discList = classnames(
  listStylePosition('list-inside'),
  listStyleType('list-disc')
)

const orangeBoxList = classnames(
  alignItems('items-start'),
  discList,
  fontFamily('font-body-text'),
  fontSize('text-base'),
  fontWeight('font-medium'),
  padding('pt-6'),
  textColor('text-white')
)

export const OrangeBoxList: FC<TextProps> = ({ textArray }) => {
  return (
    <ul className={orangeBoxList}>
      {textArray.map((text) => (
        <li>{text}</li>
      ))}
    </ul>
  )
}
const landingBodyTitle = classnames(
  alignItems('items-start'),
  fontFamily('font-body-text'),
  fontSize('text-body-title-mobile', 'lg:text-xxxl'),
  fontWeight('font-bold'),
  textColor('text-main-text')
)

export const LandingBodyTitle: FC<{ text: string }> = ({ text }) => {
  return <p className={landingBodyTitle}>{text}</p>
}

const landingBodyText = (ma?: TMargin) =>
  classnames(
    alignItems('items-start'),
    fontFamily('font-body-text'),
    fontSize('text-lg'),
    fontWeight('font-normal'),
    margin(ma),
    opacity('opacity-80'),
    textColor('text-main-text'),
    whitespace('whitespace-pre-line')
  )
function landingBodyMargin(name?: string) {
  if (name === ComponentName.deal) {
    return 'mt-4'
  } else if (name === ComponentName.difference) {
    return 'mt-6'
  } else if (name === ComponentName.review) {
    return 'mt-3'
  }
}
export const LandingBodyText: FC<TextProps & { name?: string }> = ({
  textArray,
  name,
}) => {
  const margin: TMargin | undefined = landingBodyMargin(name)
  return (
    <>
      {textArray.map((text) => (
        <p className={landingBodyText(margin)}>{text}</p>
      ))}
    </>
  )
}

const basicText = classnames(fontFamily('font-body-text'))

const modalHeaderTitle = classnames(
  basicText,
  fontSize('text-xl'),
  fontWeight('font-medium'),
  textColor('text-main-text')
)

export const ModalHeaderTitle: FC<{ text: string }> = ({ text }) => {
  return <div className={modalHeaderTitle}>{text}</div>
}

const modalText = classnames(basicText, textColor('text-modal-text'))

export const ModalText: FC<{ text?: string }> = ({ children, text }) => {
  return <div className={modalText}>{children || text}</div>
}

const link = classnames(
  fontFamily('font-body-text'),
  fontSize('text-sm'),
  fontWeight('font-semibold'),
  textColor('text-screenshot-blue'),
  textDecoration('underline')
)

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

const orangeBoxAct = classnames(
  alignItems('items-center'),
  fontFamily('font-body-text'),
  fontSize('lg:text-xxl', 'text-act-mobile'),
  fontWeight('font-bold'),
  padding('pb-6'),
  textColor('text-white')
)

export const OrangeBoxAct: FC<{ text: string }> = ({ text }) => {
  return <p className={orangeBoxAct}>{text}</p>
}

const privacyPolicyText = classnames(
  fontFamily('font-body-text'),
  fontSize('text-sm'),
  fontWeight('font-medium'),
  textColor('text-gray-500'),
  whitespace('whitespace-pre-line')
)

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
