import { RefObject, useEffect } from 'react'

const useClickOutside = (ref: RefObject<HTMLElement>, action: () => void) => {
  useEffect(() => {
    const checkIfClickedOutside = (e: Event) => {
      if (ref && ref.current && !ref.current?.contains(e.target as Node)) {
        action()
      }
    }

    document.addEventListener('mousedown', checkIfClickedOutside)

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [action, ref])
}

export default useClickOutside
