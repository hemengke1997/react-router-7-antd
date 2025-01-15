import { RemixI18Next } from 'remix-i18next/server'
import { resources } from 'virtual:i18n-ally-resource'
import { i18nOptions, localeCookie } from '@/i18n/i18n'

const supportedLngs = Object.keys(resources)

export const i18nServerOptions = {
  ...i18nOptions,
  supportedLngs,
  resources,
}

export const i18nServer = new RemixI18Next({
  detection: {
    supportedLanguages: i18nServerOptions.supportedLngs,
    fallbackLanguage: i18nServerOptions.fallbackLng,
    cookie: localeCookie,
  },
  i18next: {
    ...i18nServerOptions,
  },
})
