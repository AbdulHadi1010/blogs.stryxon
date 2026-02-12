import Link from 'next/link'
import { ShieldCheck } from 'lucide-react'

interface ServiceCalloutProps {
  title?: string
  description?: string
  buttonText?: string
  href?: string
  variant?: 'openclaw' | 'pagespeed' | 'default'
}

export default function ServiceCallout({
  title = "Don't want to mess with the terminal?",
  description = 'Hire us to set up a secure OpenClaw instance for you.',
  buttonText = 'Get Expert Setup',
  href = '/services/openclaw-setup',
  variant = 'openclaw',
}: ServiceCalloutProps) {
  return (
    <div className="my-8 rounded-lg border-2 border-[#004AAD]/20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 dark:border-[#004AAD]/40 p-6 shadow-lg">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-[#004AAD] flex items-center justify-center">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 md:mb-0">{description}</p>
        </div>
        <div className="flex-shrink-0 w-full md:w-auto">
          <Link
            href={href}
            className="inline-block w-full md:w-auto px-6 py-3 bg-[#004AAD] hover:bg-[#003580] text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-xl text-center"
          >
            {buttonText}
          </Link>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-[#004AAD]/10 dark:border-[#004AAD]/20">
        <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
          <span className="flex items-center gap-1">
            ✓ No terminal required
          </span>
          <span className="flex items-center gap-1">✓ Malware-free guarantee</span>
          <span className="flex items-center gap-1">✓ Secure cloud hosting</span>
        </div>
      </div>
    </div>
  )
}
