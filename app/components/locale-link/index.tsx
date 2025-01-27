import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { generatePath, Link, type LinkProps, type Path } from 'react-router'
import { isString } from 'lodash-es'

function generateLocalePath(route: string, locale: string, params: Record<string, string>) {
  route = route.replace(/^\/+/, '')
  return generatePath(`/${locale}/${route}`, { ...params, lang: locale })
}

function LocaleLink(props: LinkProps) {
  const { children, to } = props
  const { i18n } = useTranslation()
  let localoTo: Partial<Path>
  if (isString(to)) {
    localoTo = { pathname: to }
  } else {
    localoTo = to
  }
  return (
    <Link {...props} to={generateLocalePath(localoTo.pathname || '', i18n.language, { ...localoTo })}>
      {children}
    </Link>
  )
}

export default memo(LocaleLink)
