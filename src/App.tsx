import { Suspense } from 'react'
import Landing from 'screens/Landing'
import LocalizationProvider from 'localization/LocalizationProvider'
import Navbar from 'components/Navbar'
import React from 'preact/compat'
import Root from 'components/Root'

const App = () => {
  return (
    <Root>
      <LocalizationProvider>
        <Navbar />
        <Landing />
      </LocalizationProvider>
    </Root>
  )
}

export default App
