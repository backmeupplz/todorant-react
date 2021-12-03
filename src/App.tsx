import LocalizationProvider from 'localization/LocalizationProvider'
import Root from 'components/Root'
import React from 'preact/compat'
import { Suspense } from 'react'
const Landing = React.lazy(() => import('screens/Landing'))

const App = () => {
  return (
    <Suspense fallback={null}>
      <Root>
        <LocalizationProvider>
          <Landing />
        </LocalizationProvider>
      </Root>
    </Suspense>
  )
}

export default App
