import { useTranslations } from 'next-intl'

export default function Contact() {
  const t = useTranslations('Navigation')
  return <h1>{t('contact')}</h1>
}
