import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('AboutPage')

  return (
    <section className="pt-10 pb-14 flex flex-col min-w-full min-h-full animate-fadeIn animation-delay-2">
      <div className="min-w-full border-b-2 border-b-omnililac py-4">
        <h2 className="text-2xl text-omnililac">{t('title')}</h2>
      </div>
      <div className="grid min-w-full py-8 grid-cols-1 gap-5 md:grid-cols-2 text-omniforeground text-base sm:text-lg">
        <div className="w-full">
          <p className="">
            {t('paragraphOne')}{' '}
            <a
              className="text-omnicyan"
              href="https://www.navegg.com/br"
              target="_blank"
            >
              Navegg
            </a>
            , {t('phraseOne')}
          </p>
          <p className="py-8">{t('paragraphTwo')}</p>
          <p className="">
            {t('phraseTwo')}{' '}
            <a className="text-omnicyan" href={t('cvLink')} target="_blank">
              {t('myCv')}
            </a>{' '}
            ou{' '}
            <a
              className="text-omnicyan"
              href="https://www.linkedin.com/in/anacvignola/"
              target="_blank"
            >
              {t('myLinkedin')}
            </a>
            .
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="border-2 border-omnililac rounded-3xl p-1">
            <Image
              className="rounded-2xl"
              src="/images/photo.jpeg"
              width={382}
              height={380}
              alt="Ana Claudia Vignola photo"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
