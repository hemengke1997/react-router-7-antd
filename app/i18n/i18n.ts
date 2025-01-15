import { type Cookie, createCookie } from 'react-router'
import { LOCALE_COOKIE_NAME } from '@/utils/constants/storage'

const fallbackLng = 'en'
const defaultNS = ['common']

export const i18nOptions = {
  fallbackLng,
  defaultNS,
  nsSeparator: '.',
  keySeparator: '.',
}

export const localeCookie = createCookie(LOCALE_COOKIE_NAME, {
  path: '/',
  sameSite: 'lax',
  secure: false,
  httpOnly: true,
})

export function createLocaleCookieResolver(localeCookie: Cookie) {
  const resolver = async (request: Request) => {
    const cookie = await localeCookie.parse(request.headers.get('Cookie'))

    return {
      getLocale: async () => {
        return cookie || i18nOptions.fallbackLng
      },
      setLocale: async (locale: string) => {
        return {
          'Set-Cookie': await localeCookie.serialize(locale),
        }
      },
    }
  }
  return resolver
}
