import LocalizationProvider from 'localization/LocalizationProvider'
import Root from 'components/Root'
import Landing from 'screens/Landing'

const App = () => {
  return (
    <Root>
      <LocalizationProvider>
        <Landing />
      </LocalizationProvider>
    </Root>
  )
}

export default App
