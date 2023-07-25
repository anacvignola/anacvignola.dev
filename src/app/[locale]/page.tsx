import {
  Link2,
  ArrowDown,
  Pencil,
  Pointer,
  Code,
  Dribbble,
  Github,
  Codepen,
  Linkedin,
  Mail,
} from 'lucide-react'

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
