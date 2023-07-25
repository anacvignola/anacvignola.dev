import { useTranslations } from 'next-intl'

export default function Contact() {
  const t = useTranslations()
  return <h1>{t('contact')}</h1>
}
