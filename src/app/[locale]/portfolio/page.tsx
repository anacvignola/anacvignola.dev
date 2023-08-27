import Image from 'next/image'
import { getTranslator } from 'next-intl/server'
import { getAllPublished, getTags } from '@/lib/notion'

import SlideUp from '@/components/SlideUp'
import { Construction, Github, Link2 } from 'lucide-react'

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

export default async function Portfolio({ params: { locale } }: string | any) {
  const t = await getTranslator(locale, 'PortfolioPage')
  const allProjects = await getAllPublished(locale)

  return (
    <section className="pt-10 pb-36 flex flex-col min-w-full min-h-full">
      <div className="min-w-full border-b-2 border-b-omnililac py-4 mb-16">
        <h2 className="text-2xl text-omnililac">{t('title')}</h2>
      </div>
      <div className="flex flex-col space-y-28 items-center">
        {allProjects.map((project: Project) => {
          return (
            <div key={project?.id}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2">
                    <a
                      href={
                        project?.link === null ? project?.github : project?.link
                      }
                    >
                      {/* <Image
                        src={project?.image}
                        alt={project?.title_en}
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      /> */}
                      <div className="w-auto h-[248px] max-w-[464px] flex items-center justify-center bg-omnililac p-6 rounded-xl shadow-xl hover:opacity-70 text-omniforeground">
                        <Construction size={100} />
                      </div>
                    </a>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6 text-omnililac">
                      {project?.title}
                    </h1>
                    <p className="text-xl leading-7 mb-4 text-omniforeground">
                      {project?.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {project?.github === null ? null : (
                        <a
                          href={project?.github}
                          target="_blank"
                          className="text-omnicyan"
                        >
                          <Github
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </a>
                      )}
                      {project?.link === null ? null : (
                        <a
                          href={project?.link}
                          target="_blank"
                          className="text-omnicyan"
                        >
                          <Link2
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
      </div>
    </section>
  )
}
