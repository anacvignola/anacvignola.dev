import '@/styles/globals.css'

import Image from 'next/image'
import Link from 'next-intl/link'
import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { useLocale } from 'next-intl'
import { Rubik } from 'next/font/google'
import { notFound } from 'next/navigation'

import Navigation from '@/components/Navigation'
import Footer from './footer'

const rubik = Rubik({ subsets: ['latin'] })

type Props = {
  children: ReactNode
  params: { locale: string }
}

export const metadata: Metadata = {
  title: {
    default: 'anacvignola.dev',
    template: '%s | anacvignola.dev',
  },
  robots: {
    index: true,
    follow: true,
  },
  description: 'Front-end developer focused on UX/UI design.',
}

export default async function RootLayout({ children, params }: Props) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const locale = useLocale()

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound()
  }

  return (
    <html lang={locale}>
      <head />

      <body
        className={`${rubik.className} w-full h-auto min-w-full min-h-screen scroll-smooth bg-omnibackground`}
      >
        <div className="w-full max-w-6xl xs:p-4 ss:p-5 mx-auto my-0">
          <header className="w-full flex items-center justify-between py-5">
            <Link href="/" locale={locale} className="cursor-pointer">
              <Image
                src="/images/logo.png"
                alt="anacvignola.dev"
                width={45}
                height={49}
                quality={100}
              />
            </Link>
            <Navigation />
          </header>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
