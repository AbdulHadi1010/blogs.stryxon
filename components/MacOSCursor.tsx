'use client'

import { useEffect, useState } from 'react'

export default function MacOSCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const target = e.target as HTMLElement
      const isClickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.onclick !== null ||
        target.getAttribute('role') === 'button' ||
        target.closest('a') !== null ||
        target.closest('button') !== null

      setIsPointer(isClickable)
    }

    const hideCursor = () => setIsHidden(true)
    const showCursor = () => setIsHidden(false)

    window.addEventListener('mousemove', updateCursor)
    document.addEventListener('mouseleave', hideCursor)
    document.addEventListener('mouseenter', showCursor)

    return () => {
      window.removeEventListener('mousemove', updateCursor)
      document.removeEventListener('mouseleave', hideCursor)
      document.removeEventListener('mouseenter', showCursor)
    }
  }, [])

  if (isHidden) return null

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
      <div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: '24px',
          height: '28px',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: 'transform 0.05s ease-out',
        }}
      >
        {isPointer ? (
          // Hand pointer cursor
          <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#shadow)">
              <path d="M10 4C10 4 10 8 10 10.5L12.5 10.5C12.5 10.5 14.2 10.5 14.8 11.5C15.4 12.5 15 13.5 13.8 13.5H12.5C12.5 13.5 13.2 13.5 13.8 14.5C14.4 15.5 14 16.5 12.8 16.5H11.5C11.5 16.5 12.2 16.5 12.8 17.5C13.4 18.5 13 19.5 11.8 19.5H9.5L7 17L7 9C7 9 7 6.5 8 5.5C9 4.5 10 4 10 4Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M7 11C7 11 5.8 11 5.2 10.3C4.6 9.6 4.6 8.5 5.8 7.8C7 7.1 7.8 7.8 7.8 9L7 11Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinejoin="round"/>
            </g>
            <defs>
              <filter id="shadow" x="0" y="0" width="24" height="28">
                <feDropShadow dx="1" dy="1" stdDeviation="0.5" floodOpacity="0.3"/>
              </filter>
            </defs>
          </svg>
        ) : (
          // Default arrow cursor
          <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#shadowDefault)">
              <path d="M5 3L18.5 13.5L11 15L7.5 23L5 3Z" fill="white" stroke="black" strokeWidth="1.5" strokeLinejoin="round"/>
            </g>
            <defs>
              <filter id="shadowDefault" x="0" y="0" width="24" height="28">
                <feDropShadow dx="1" dy="1" stdDeviation="0.5" floodOpacity="0.3"/>
              </filter>
            </defs>
          </svg>
        )}
      </div>
    </>
  )
}
