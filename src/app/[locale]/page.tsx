import { getAllPublished } from '@/lib/notion'
import IntroSection from '@/components/IntroSection'
import CasesSection from '@/components/CasesSection'
import ServicesSection from '@/components/ServicesSection'

export default async function Page({ params: { locale } }: string | any) {
  const allProjects = await getAllPublished(locale)

  return (
    <section className="pb-14 h-full flex-col w-full justify-center items-center animate-fadeIn animation-delay-2">
      <IntroSection />
      <ServicesSection />
      <CasesSection projects={allProjects} />
    </section>
  )
}
