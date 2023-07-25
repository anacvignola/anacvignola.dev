import IntroSection from '@/components/IntroSection'
import CasesSection from '@/components/CasesSection'
import ServicesSection from '@/components/ServicesSection'

export default function Page() {
  return (
    <main className="h-full flex-col w-full justify-center items-center">
      <IntroSection />
      <ServicesSection />
      <CasesSection />
    </main>
  )
}
