import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router'

export default function NotFound() {
  const navigate = useNavigate()
  const { i18n } = useTranslation()
  const lang = i18n.language
  useEffect(() => {
    navigate(`/${lang}`, { replace: true })
  }, [])

  return null
}
