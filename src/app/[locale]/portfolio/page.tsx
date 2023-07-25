import { useTranslations } from 'next-intl'

export default function Portfolio() {
  const t = useTranslations('Navigation')
  return <h1>{t('portfolio')}</h1>
}
