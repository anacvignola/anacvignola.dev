import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('Navigation')
  return <h1>{t('about')}</h1>
}
