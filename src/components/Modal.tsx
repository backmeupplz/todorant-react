import { FC, useRef } from 'react'
import {
  alignItems,
  backgroundColor,
  borderRadius,
  boxShadow,
  classnames,
  display,
  flex,
  flexDirection,
  height,
  inset,
  justifyContent,
  margin,
  maxHeight,
  maxWidth,
  minHeight,
  outlineStyle,
  overflow,
  padding,
  position,
  textAlign,
  zIndex,
} from 'classnames/tailwind'
import useClickOutside from 'hooks/useClickOutside'
import useEscape from 'hooks/useEscape'

const modalWrapper = classnames(
  alignItems('items-center'),
  backgroundColor('bg-semi-transparent-background'),
  display('flex'),
  height('h-screen'),
  inset('left-0', 'top-0', 'inset-0'),
  justifyContent('justify-center'),
  maxHeight('max-h-full'),
  minHeight('min-h-screen'),
  outlineStyle('outline-none'),
  padding('p-4'),
  position('fixed'),
  zIndex('z-50')
)

const modalContent = classnames(
  backgroundColor('bg-main-background'),
  borderRadius('rounded-xl'),
  boxShadow('shadow-lg'),
  display('flex'),
  flex('flex-auto'),
  flexDirection('flex-col'),
  margin('mx-auto', 'my-auto'),
  maxHeight('max-h-9/10'),
  maxWidth('max-w-2xl'),
  position('relative')
)

const modalItems = (topPadding = true) =>
  classnames(padding('px-8', 'pb-5'), padding({ 'pt-5': topPadding }))

const modalContentBody = classnames(
  display('flex'),
  flex('flex-auto'),
  justifyContent('justify-center'),
  modalItems(false),
  overflow('overflow-auto'),
  textAlign('text-left')
)

interface Props {
  header?: React.ReactNode
  body?: React.ReactNode
  footer?: React.ReactNode
  closeModal: () => void
}

const ModalContent: FC<Props> = ({
  children,
  header = null,
  body = null,
  footer = null,
  closeModal,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  useClickOutside(ref, closeModal)

  useEscape(ref, closeModal)

  return (
    <div className={modalContent} ref={ref}>
      <div className={modalItems()}>{header}</div>
      <div className={modalContentBody}>{children || body}</div>
      <div className={modalItems()}>{footer}</div>
    </div>
  )
}

const Modal: FC<Props> = ({ children, ...props }) => {
  return (
    <div className={modalWrapper}>
      <ModalContent {...props}>{children}</ModalContent>
    </div>
  )
}

export default Modal
