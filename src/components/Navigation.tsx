import { useTranslations } from 'next-intl'
import LocaleSwitcher from '@/components/LocaleSwitcher'
import NavigationLink from '@/components/NavigationLink'

export default function Navigation() {
  const t = useTranslations('Navigation')

  return (
    <nav className="max-w-md flex justify-between items-center">
      <NavigationLink href="/about">{t('about')}</NavigationLink>
      <NavigationLink href="/portfolio">{t('portfolio')}</NavigationLink>
      <LocaleSwitcher />
    </nav>
  )
}
