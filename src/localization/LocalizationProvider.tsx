import { LocalizationProvider as BaseLocalizationProvider } from '@borodutch-labs/localize-react'
import { FC } from 'preact/compat'
import { useSnapshot } from 'valtio'
import AppStore from 'stores/AppStore'
import Language from 'models/Language'
import en from 'localization/locales/en.json'
import es from 'localization/locales/es.json'
import it from 'localization/locales/it.json'
import merge from 'helpers/deepMerge'
import ptBR from 'localization/locales/pt-BR.json'
import ro from 'localization/locales/ro.json'
import ru from 'localization/locales/ru.json'
import uk from 'localization/locales/uk.json'

const messages = {
  en,
  es: merge({}, en, es),
  it: merge({}, en, it),
  ptBR: merge({}, en, ptBR),
  ro: merge({}, en, ro),
  ru: merge({}, en, ru),
  uk: merge({}, en, uk),
}

const LocalizationProvider: FC = ({ children }) => {
  const appStore = useSnapshot(AppStore)
  return (
    <BaseLocalizationProvider
      locale={appStore.language}
      defaultLocale={Language.en}
      translations={messages}
      disableCache
    >
      {children}
    </BaseLocalizationProvider>
  )
}

export default LocalizationProvider
