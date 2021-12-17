import type { AsyncFormattersInitializer } from 'typesafe-i18n'
import type { Formatters, Locales } from 'i18n/i18n-types'

export const initFormatters: AsyncFormattersInitializer<Locales, Formatters> =
  // eslint-disable-next-line require-await
  async () => {
    const formatters: Formatters = {
      // add your formatter functions here
    }

    return formatters
  }

export default initFormatters
