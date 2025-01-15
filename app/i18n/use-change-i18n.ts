import { useTranslation } from 'react-i18next'
import { useUpdateEffect } from 'ahooks'
import useLocaleNavigate from '@/hooks/use-locale-navigate'

export function useChangeI18n() {
  const navigate = useLocaleNavigate()
  const { i18n } = useTranslation()
  const lang = i18n.language

  useUpdateEffect(() => {
    fetch('/action/set-locale', {
      method: 'POST',
      body: JSON.stringify({ locale: lang }),
    })

    navigate(location.pathname, { replace: true })
  }, [i18n.language])
}
