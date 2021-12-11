import { proxy } from 'valtio'
import Language from 'models/Language'
import PersistableStore from 'stores/persistence/PersistableStore'

interface User {
  token: string
}

class AppStore extends PersistableStore {
  language: Language = Language.en
  dark = false
  user?: User
}

export default proxy(new AppStore()).makePersistent()
