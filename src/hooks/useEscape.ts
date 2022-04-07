import { RefObject, useEffect } from 'react'

const useEscape = (ref: RefObject<HTMLElement>, action: () => void) => {
  useEffect(() => {
    const checkIfEscPressed = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        action()
      }
    }

    document.addEventListener('keydown', checkIfEscPressed, false)

    return () => {
      document.removeEventListener('keydown', checkIfEscPressed, false)
    }
  }, [action, ref])
}

export default useEscape
