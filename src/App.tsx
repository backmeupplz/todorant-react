import { Route } from 'wouter'
import AppStore from 'stores/AppStore'
import Landing from 'screens/Landing'
import Navbar from 'components/Navbar'
import ProtectedRoute from 'components/ProtectedRoute'
import Root from 'components/Root'
import Superpower from 'screens/Superpower'
import TypesafeI18n from 'i18n/i18n-react'

const App = () => {
  return (
    <Root>
      <TypesafeI18n initialLocale={AppStore.language}>
        <Navbar />
        <Route path="/" component={Landing} />
        <ProtectedRoute path="/superpower" component={Superpower} />
      </TypesafeI18n>
    </Root>
  )
}

export default App
