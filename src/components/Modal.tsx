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
  backgroundColor('bg-semiTransparentBackground'),
  minHeight('min-h-screen'),
  height('h-screen'),
  position('fixed'),
  inset('left-0', 'top-0', 'inset-0'),
  display('flex'),
  justifyContent('justify-center'),
  alignItems('items-center'),
  zIndex('z-50'),
  outlineStyle('outline-none'),
  maxHeight('max-h-full'),
  padding('p-4')
)

const modalContent = classnames(
  backgroundColor('bg-mainBackground'),
  maxHeight('max-h-9/10'),
  maxWidth('max-w-2xl'),
  position('relative'),
  margin('mx-auto', 'my-auto'),
  borderRadius('rounded-xl'),
  boxShadow('shadow-lg'),
  flex('flex-auto'),
  display('flex'),
  flexDirection('flex-col')
)

const modalItems = (topPadding = true) =>
  classnames(padding('px-8', 'pb-5'), padding({ 'pt-5': topPadding }))

const modalContentBody = classnames(
  modalItems(false),
  flex('flex-auto'),
  justifyContent('justify-center'),
  display('flex'),
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
