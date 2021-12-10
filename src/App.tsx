import { Route } from 'wouter'
import Landing from 'screens/Landing'
import LocalizationProvider from 'localization/LocalizationProvider'
import Navbar from 'components/Navbar'
import ProtectedRoute from 'components/ProtectedRoute'
import Root from 'components/Root'
import Superpower from 'screens/Superpower'

const App = () => {
  return (
    <Root>
      <LocalizationProvider>
        <Navbar />
        <Route path="/" component={Landing} />
        <ProtectedRoute path="/superpower" component={Superpower} />
      </LocalizationProvider>
    </Root>
  )
}

export default App
