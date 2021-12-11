import { FC } from 'react'
import { Route, RouteProps } from 'wouter'
import { useLocation } from 'wouter'
import { useSnapshot } from 'valtio'
import AppStore from 'stores/AppStore'

const ProtectedRoute: FC<RouteProps> = (props) => {
  const { user } = useSnapshot(AppStore)
  const [_, setLocation] = useLocation()

  if (!user?.token) {
    setLocation('/')
    return null
  }
  return <Route {...props} />
}

export default ProtectedRoute
