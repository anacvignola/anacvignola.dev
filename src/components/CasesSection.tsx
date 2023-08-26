'use client'
import { useEffect, useRef, useState } from 'react'

// import Image from 'next/image'
import Link from 'next-intl/link'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'
import { Construction, Link2 } from 'lucide-react'

export interface Project {
  id: string
  title: string
  description: string
  image: string
  link: string
  tags: Array<string>
  date: string
  github: string
}
hx - core - admin

export default function CasesSection({ projects }: Project[] | any) {
  const { locale } = useParams() as string | any
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const scrol = carousel?.current?.scrollWidth
      ? carousel?.current?.scrollWidth
      : 0
    const off = carousel?.current?.offsetWidth
      ? carousel?.current?.offsetWidth
      : 0
    setWidth(scrol - off)
  }, [])

  return (
    <section
      id="cases"
      className="py-12 h-full flex-col w-full justify-center items-center animate-slideUpCubiBezier animation-delay-2 "
    >
      <h3 className="font-bold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
        {locale === 'pt' ? 'Projetos recentes' : 'Recent Projects'}
      </h3>
      <motion.div
        className="cursor-grab overflow-hidden"
        ref={carousel}
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          className="flex"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {projects.map((project: Project) => {
            return (
              <motion.div
                key={project?.id}
                className="flex flex-col items-center justify-center w-full min-h-[400px] min-w-[360px] max-w-[600px] h-full max-h-[300px] bg-omnicomment rounded-3xl my-5 mr-5 p-5 shadow-sm"
              >
                {/* <Image
                  width={360}
                  height={260}
                  quality={100}
                  src={project?.image}
                  alt={project?.title}
                /> */}
                <div className="w-auto flex items-center justify-center bg-omnililac p-6 rounded-full text-omniforeground">
                  <Construction size={100} />
                </div>
                <div className="mt-5 flex w-full justify-between items-center">
                  <span className="text-omnililac font-semibold">
                    {project?.title}
                  </span>
                  <a href={project?.link} target="_blanck">
                    <Link2 size={24} color="#78D1E1" />
                  </a>
                </div>
                <p className="text-omniforeground mt-5">
                  {project?.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
      <div className="py-4 flex w-full justify-center items-center pb-6">
        <Link href="/portfolio">
          <button className="py-4 px-9 rounded-[61px] text-omnipurple magnifyBorder">
            {locale === 'pt' ? 'Ver mais' : 'More'}
          </button>
        </Link>
      </div>
    </section>
  )
}
