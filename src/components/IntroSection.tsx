import Link from 'next/link'
import Image from 'next/image'
import { ArrowDown } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function IntroSection() {
  const t = useTranslations('Home')

  return (
    <section className="min-h-[80vh] h-full flex-col w-full justify-center items-center">
      <div className="w-full pt-10 max-w-4xl mx-auto my-0">
        <h1 className="pb-5 text-center font-bold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400">
          {t('title')}
        </h1>
        <Link href="#services">
          <ArrowDown
            size={24}
            color="#E1E1E6"
            className="animate-bounce mx-auto my-0 cursor-pointer"
          />
        </Link>
      </div>
      <div className="w-full pt-8 flex justify-center items-center">
        <Image
          width={1024}
          height={800}
          quality={100}
          src="/images/ilustration.svg"
          alt="Fullstack developer"
        />
      </div>
    </section>
  )
}
