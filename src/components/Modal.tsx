import { FC, useRef } from 'react'
import { classnames } from 'classnames/tailwind'
import useClickOutside from 'hooks/useClickOutside'
import useEscape from 'hooks/useEscape'

const modalWrapper = classnames(
  'min-h-screen',
  'h-screen',
  'fixed',
  'left-0',
  'top-0',
  'flex',
  'justify-center',
  'items-center',
  'inset-0',
  'z-50',
  'outline-none',
  'bg-semiTransparentBackground',
  'max-h-full',
  'p-4'
)

const modalContent = classnames(
  'max-w-2xl',
  'relative',
  'mx-auto',
  'my-auto',
  'rounded-xl',
  'shadow-lg',
  'bg-white',
  'max-h-9/10',
  'flex-auto',
  'flex',
  'flex-col'
)

const modalItems = (topPadding = true) =>
  classnames('px-8', 'pb-5', {
    'pt-5': topPadding,
  })

const modalContentBody = classnames(
  modalItems(false),
  'flex-auto',
  'justify-center',
  'flex',
  'overflow-auto',
  'text-left'
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
