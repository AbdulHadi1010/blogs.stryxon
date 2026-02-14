import { ExternalLink, ArrowRight } from 'lucide-react'

interface MainSiteCTAProps {
  service?: 'openclaw' | 'pagespeed' | 'devops' | 'nextjs' | 'custom'
  title?: string
  description?: string
  buttonText?: string
  href?: string
}

const serviceConfigs = {
  openclaw: {
    title: 'Need Professional OpenClaw Setup?',
    description:
      'Skip the terminal complexity and security risks. We install, configure, and host your secure AI agent with zero malware risk.',
    buttonText: 'Get Secure Setup →',
    href: 'https://stryxon.com/services/openclaw-setup',
  },
  pagespeed: {
    title: 'Want 90+ PageSpeed Scores?',
    description:
      'Our experts optimize images, implement lazy loading, and tune Core Web Vitals for maximum performance.',
    buttonText: 'Get PageSpeed Audit →',
    href: 'https://stryxon.com/services/pagespeed-optimization',
  },
  devops: {
    title: 'Need DevOps Infrastructure?',
    description:
      'From CI/CD pipelines to cloud architecture, we build scalable systems that grow with your business.',
    buttonText: 'View DevOps Services →',
    href: 'https://stryxon.com/services/devops-consulting',
  },
  nextjs: {
    title: 'Building a Next.js Application?',
    description:
      'Our team builds production-ready Next.js apps with best practices, TypeScript, and modern tooling.',
    buttonText: 'Start Your Project →',
    href: 'https://stryxon.com/services/nextjs-development',
  },
  custom: {
    title: 'Need Custom Development?',
    description:
      'From MVPs to enterprise applications, we deliver high-quality software solutions.',
    buttonText: 'Get a Quote →',
    href: 'https://stryxon.com/contact',
  },
}

export default function MainSiteCTA({
  service = 'custom',
  title,
  description,
  buttonText,
  href,
}: MainSiteCTAProps) {
  const config = serviceConfigs[service]

  const finalTitle = title || config.title
  const finalDescription = description || config.description
  const finalButtonText = buttonText || config.buttonText
  const finalHref = href || config.href

  return (
    <div className="not-prose my-8">
      <div className="relative overflow-hidden rounded-lg border-2 border-[#004AAD]/20 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 shadow-lg dark:from-gray-800 dark:to-gray-900">
        <div className="absolute top-0 right-0 -mt-16 -mr-16 h-32 w-32 rounded-full bg-[#004AAD]/5" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 h-24 w-24 rounded-full bg-[#004AAD]/5" />

        <div className="relative">
          <div className="mb-3 flex items-start gap-3">
            <ExternalLink className="mt-1 h-5 w-5 flex-shrink-0 text-[#004AAD]" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{finalTitle}</h3>
          </div>

          <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
            {finalDescription}
          </p>

          <div className="flex items-center justify-between">
            <a
              href={finalHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex transform items-center gap-2 rounded-lg bg-[#004AAD] px-6 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-[#003580] hover:shadow-xl"
            >
              {finalButtonText}
              <ArrowRight className="h-4 w-4" />
            </a>

            <div className="hidden items-center gap-2 text-sm text-gray-600 sm:flex dark:text-gray-400">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                Available Now
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
