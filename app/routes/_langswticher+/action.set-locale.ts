import { type ActionFunction } from 'react-router'
import { i18nOptions } from '@/i18n/i18n'
import { createLocaleCookieResolver, localeCookie } from '@/i18n/i18n.server'

export const action: ActionFunction = async ({ request }) => {
  const localeResolver = createLocaleCookieResolver(localeCookie)
  const cookie = await localeResolver(request)
  const { locale } = await request.json()

  return Response.json(
    {
      success: true,
    },
    {
      headers: await cookie.setLocale(locale || i18nOptions.fallbackLng),
    },
  )
}
