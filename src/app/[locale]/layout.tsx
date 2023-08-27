/* eslint-disable @next/next/no-sync-scripts */
import '@/styles/globals.css'

import Image from 'next/image'
import Link from 'next-intl/link'
import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { useLocale } from 'next-intl'
import { Rubik } from 'next/font/google'
import { notFound } from 'next/navigation'

import Footer from './footer'
import Navigation from '@/components/Navigation'

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
    <html lang={locale} className="scroll-smooth">
      <head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="shortcut icon" href="/images/favicon.ico" type="image/png" />
        <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="anacvignola"
          data-description="Support me on Buy me a coffee!"
          data-message="Thank you for visiting. You can now buy me a coffeee."
          data-color="#875FE7"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="86"
        ></script>
      </head>
      <body
        className={`${rubik.className} w-full min-w-screen bg-omnibackground`}
      >
        <main className="w-full max-w-6xl px-5 md:px-7 mx-auto my-0 min-h-screen flex flex-col justify-between items-center">
          <div className="w-full">
            <header className="w-full flex items-center justify-between py-5">
              <Link href="/" locale={locale} className="cursor-pointer">
                <Image
                  src="/images/logo.png"
                  alt="anacvignola.dev"
                  width={45}
                  height={49}
                />
              </Link>
              <Navigation />
            </header>
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  )
}
