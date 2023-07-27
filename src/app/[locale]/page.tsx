import IntroSection from '@/components/IntroSection'
import CasesSection from '@/components/CasesSection'
import ServicesSection from '@/components/ServicesSection'

export default async function Page() {
  return (
    <main className="pb-14 h-full flex-col w-full justify-center items-center">
      <IntroSection />
      <ServicesSection />
      <CasesSection />
    </main>
  )
}
