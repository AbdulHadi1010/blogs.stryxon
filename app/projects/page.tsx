import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  // Group projects by category
  const projectsByCategory = projectsData.reduce(
    (acc, project) => {
      const category = project.category || 'Other'
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(project)
      return acc
    },
    {} as Record<string, typeof projectsData>
  )

  // Define category order
  const categoryOrder = [
    'AI Automation & Agents',
    'AI Engineering & RAG',
    'Cloud & DevOps',
    'Containerization & Kubernetes',
    'Cloudera & Big Data',
    'Web Application Development',
    'Mobile App Development',
  ]

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            A showcase of my professional work in AI, Cloud Infrastructure, DevOps, and Application
            Development
          </p>
        </div>
        <div className="container py-12">
          <div className="space-y-16">
            {categoryOrder.map((category) => {
              const projects = projectsByCategory[category]
              if (!projects || projects.length === 0) return null

              return (
                <div key={category}>
                  <h2 className="border-primary-500 mb-8 border-b-2 pb-2 text-2xl font-bold tracking-tight text-gray-900 md:text-3xl dark:text-gray-100">
                    {category}
                  </h2>
                  <div className="-m-4 flex flex-wrap">
                    {projects.map((d) => (
                      <Card
                        key={d.title}
                        title={d.title}
                        description={d.description}
                        imgSrc={d.imgSrc}
                        href={d.href}
                        tags={d.tags}
                        category={d.category}
                      />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
