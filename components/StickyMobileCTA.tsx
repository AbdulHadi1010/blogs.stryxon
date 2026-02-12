'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Zap, X } from 'lucide-react'

interface StickyMobileCTAProps {
  title?: string
  buttonText?: string
  href?: string
}

export default function StickyMobileCTA({
  title = 'Need these Green Scores? We guarantee 90+ Mobile Performance.',
  buttonText = 'Fix My Site Speed',
  href = '/services',
}: StickyMobileCTAProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (isDismissed) return

      const scrollPercentage =
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100

      // Show when user scrolls 50% down the page
      if (scrollPercentage > 50) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Only show on mobile devices
    const isMobile = window.innerWidth < 768

    if (isMobile) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [isDismissed])

  if (!isVisible || isDismissed) return null

  return (
    <div className="animate-slide-up fixed right-0 bottom-0 left-0 z-50 md:hidden">
      <div className="border-t-2 border-white/20 bg-gradient-to-r from-[#004AAD] to-[#0059CC] shadow-2xl">
        <div className="relative px-4 py-4">
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute top-2 right-2 text-white/80 hover:text-white"
            aria-label="Dismiss"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="flex items-start gap-3 pr-8">
            <div className="mt-1 flex-shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                <Zap className="h-5 w-5 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <p className="mb-3 text-sm font-medium text-white">{title}</p>
              <Link
                href={href}
                className="block w-full rounded-lg bg-white px-4 py-2.5 text-center font-bold text-[#004AAD] shadow-lg transition-colors hover:bg-gray-100"
              >
                {buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
