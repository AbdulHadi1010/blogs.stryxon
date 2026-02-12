import Link from 'next/link'
import { Zap, ShieldCheck, Cloud, Code } from 'lucide-react'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Services - Stryxon',
  description:
    'Professional Next.js development, AI agent deployment, and web performance optimization services.',
})

const services = [
  {
    icon: ShieldCheck,
    title: 'OpenClaw AI Agent Setup',
    description:
      'Secure installation and hosting of OpenClaw (formerly ClawdBot) AI agents. No terminal required, zero malware risk.',
    features: ['Malware-free guarantee', 'Cloud hosting', '30-day support'],
    href: '/services/openclaw-setup',
    price: 'From $497',
  },
  {
    icon: Zap,
    title: 'PageSpeed Optimization',
    description:
      'Guaranteed 90+ Mobile Performance score. We optimize your Next.js site for Core Web Vitals.',
    features: ['Green scores guaranteed', 'SEO improvement', 'Performance audit'],
    href: '#',
    price: 'From $997',
  },
  {
    icon: Cloud,
    title: 'DevOps & Cloud Setup',
    description:
      'Complete AWS/Azure infrastructure setup with CI/CD pipelines, monitoring, and security hardening.',
    features: ['Infrastructure as Code', 'Auto-scaling', 'Security best practices'],
    href: '#',
    price: 'Custom pricing',
  },
  {
    icon: Code,
    title: 'Next.js Development',
    description:
      'Custom Next.js application development with modern architecture, SEO optimization, and performance tuning.',
    features: ['Full-stack development', 'Modern UI/UX', 'API integration'],
    href: '#',
    price: 'Custom pricing',
  },
]

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'PageSpeed Optimization Service',
            description:
              'Professional web performance optimization service guaranteeing 90+ PageSpeed scores for Next.js and React applications.',
            brand: {
              '@type': 'Brand',
              name: 'Stryxon',
            },
            offers: {
              '@type': 'Offer',
              price: '997',
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5.0',
              reviewCount: '12',
              bestRating: '5',
              worstRating: '1',
            },
          }),
        }}
      />

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Services
          </h1>
          <p className="text-xl leading-7 text-gray-500 dark:text-gray-400">
            Professional Next.js development, AI agent deployment, and web performance
            optimization. Trusted by startups and enterprises.
          </p>
        </div>

        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="p-8 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-[#004AAD] dark:hover:border-[#004AAD] transition-all duration-200 hover:shadow-xl"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#004AAD] flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        {service.title}
                      </h2>
                      <p className="text-sm text-[#004AAD] font-medium">{service.price}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <span className="text-[#004AAD]">✓</span>
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {service.href !== '#' ? (
                    <Link
                      href={service.href}
                      className="inline-block px-6 py-3 bg-[#004AAD] hover:bg-[#003580] text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
                    >
                      Learn More →
                    </Link>
                  ) : (
                    <Link
                      href="/services/openclaw-setup"
                      className="inline-block px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-lg"
                    >
                      Coming Soon
                    </Link>
                  )}
                </div>
              )
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 border-2 border-[#004AAD]/20 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Every project is unique. Let's discuss your specific needs and create a tailored
              solution that fits your budget and timeline.
            </p>
            <a
              href="mailto:abdul.hadi@stryxon.com"
              className="inline-block px-8 py-4 bg-[#004AAD] hover:bg-[#003580] text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
