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
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden animate-slide-up">
      <div className="bg-gradient-to-r from-[#004AAD] to-[#0059CC] shadow-2xl border-t-2 border-white/20">
        <div className="relative px-4 py-4">
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute top-2 right-2 text-white/80 hover:text-white"
            aria-label="Dismiss"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-start gap-3 pr-8">
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm text-white font-medium mb-3">{title}</p>
              <Link
                href={href}
                className="block w-full px-4 py-2.5 bg-white text-[#004AAD] font-bold rounded-lg text-center hover:bg-gray-100 transition-colors shadow-lg"
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
