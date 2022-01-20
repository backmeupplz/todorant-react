import { useEffect, useState } from 'react'
import { useSnapshot } from 'valtio'
import AppStore from 'stores/AppStore'

function usePrefersDarkMode() {
  const [value, setValue] = useState(true)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setValue(mediaQuery.matches)

    const handler = () => setValue(mediaQuery.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  return value
}

export function useDarkMode() {
  const prefersDarkMode = usePrefersDarkMode()
  const { dark: isEnabled } = useSnapshot(AppStore)

  const enabled = isEnabled === undefined ? prefersDarkMode : isEnabled

  const setIsEnabled = (value: boolean) => {
    AppStore.dark = value
  }

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove(enabled ? 'light' : 'dark')
    root.classList.add(enabled ? 'dark' : 'light')
  }, [enabled])

  return [enabled, setIsEnabled] as [boolean, (value: boolean) => void]
}

export default useDarkMode
