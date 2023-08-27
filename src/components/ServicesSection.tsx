import Link from 'next-intl/link'
import { useTranslations } from 'next-intl'
import { Code, Pencil, Pointer } from 'lucide-react'

export default function ServicesSection() {
  const t = useTranslations('Home')
  return (
    <section
      id="services"
      className="py-12 h-full flex-col w-full justify-center items-center"
    >
      <h3 className="font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
        {t('services')}
      </h3>
      <div className="w-full my-6 grid md:grid-cols-3 gap-5 grid-cols-1 justify-items-center">
        <div className="flex-col items-center justify-center p-5 h-[200px] w-full max-w-[400px] bg-omnicomment rounded-3xl">
          <div className="flex items-center">
            <div className="flex items-center justify-center rounded-full bg-omnililac p-4">
              <Pencil size={24} color="#E1E1E6" />
            </div>
            <h6 className="text-omnililac font-semibold mx-4">
              {t('prototyping')}
            </h6>
          </div>
          <p className="text-omniforeground my-4">
            {t('prototypingDescription')}
          </p>
        </div>
        <div className="flex-col items-center justify-center p-5 h-[200px] w-full max-w-[400px] bg-omnicomment rounded-3xl">
          <div className="flex items-center">
            <div className="flex items-center justify-center rounded-full bg-omnicyan p-4">
              <Code size={24} color="#E1E1E6" />
            </div>
            <h6 className="text-omnicyan font-semibold mx-4">
              {t('development')}
            </h6>
          </div>
          <p className="text-omniforeground my-4">
            {t('developmentDescription')}
          </p>
        </div>
        <div className="flex-col items-center justify-center p-5 h-[200px] w-full max-w-[400px] bg-omnicomment rounded-3xl">
          <div className="flex items-center">
            <div className="flex items-center justify-center rounded-full bg-omnipink p-4">
              <Pointer size={24} color="#E1E1E6" />
            </div>
            <h6 className="text-omnipink font-semibold mx-4">{t('motion')}</h6>
          </div>
          <p className="text-omniforeground my-4">{t('motionDescription')}</p>
        </div>
      </div>
    </section>
  )
}
