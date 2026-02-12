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
    <div className="my-8 rounded-lg border-2 border-[#004AAD]/20 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 shadow-lg dark:border-[#004AAD]/40 dark:from-gray-800 dark:to-gray-900">
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
        <div className="flex-shrink-0">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#004AAD]">
            <ShieldCheck className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="flex-grow">
          <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
          <p className="mb-4 text-gray-600 md:mb-0 dark:text-gray-300">{description}</p>
        </div>
        <div className="w-full flex-shrink-0 md:w-auto">
          <Link
            href={href}
            className="inline-block w-full transform rounded-lg bg-[#004AAD] px-6 py-3 text-center font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-[#003580] hover:shadow-xl md:w-auto"
          >
            {buttonText}
          </Link>
        </div>
      </div>
      <div className="mt-4 border-t border-[#004AAD]/10 pt-4 dark:border-[#004AAD]/20">
        <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
          <span className="flex items-center gap-1">✓ No terminal required</span>
          <span className="flex items-center gap-1">✓ Malware-free guarantee</span>
          <span className="flex items-center gap-1">✓ Secure cloud hosting</span>
        </div>
      </div>
    </div>
  )
}
