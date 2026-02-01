'use client'

import { ReactNode, useRef, useState } from 'react'

interface PreProps {
  children?: ReactNode
  className?: string
  [key: string]: any
}

const Pre = ({ children, className, ...props }: PreProps) => {
  const textInput = useRef<HTMLDivElement>(null)
  const [copied, setCopied] = useState(false)

  const onCopy = () => {
    setCopied(true)
    if (textInput.current?.textContent) {
      navigator.clipboard.writeText(textInput.current.textContent)
    }
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  // Extract language from className (e.g., "language-javascript" -> "JavaScript")
  const getLanguageLabel = (className?: string): string => {
    if (!className) return 'Code'
    
    const match = className.match(/language-(\w+)/)
    if (!match) return 'Code'
    
    const lang = match[1]
    const languageMap: { [key: string]: string } = {
      js: 'JavaScript',
      jsx: 'JSX',
      ts: 'TypeScript',
      tsx: 'TSX',
      py: 'Python',
      python: 'Python',
      bash: 'Bash',
      shell: 'Shell',
      sh: 'Shell',
      html: 'HTML',
      css: 'CSS',
      json: 'JSON',
      yaml: 'YAML',
      yml: 'YAML',
      xml: 'XML',
      markdown: 'Markdown',
      md: 'Markdown',
      sql: 'SQL',
      java: 'Java',
      go: 'Go',
      rust: 'Rust',
      c: 'C',
      cpp: 'C++',
      csharp: 'C#',
      php: 'PHP',
      ruby: 'Ruby',
      swift: 'Swift',
      kotlin: 'Kotlin',
      dart: 'Dart',
      r: 'R',
      scala: 'Scala',
      graphql: 'GraphQL',
      dockerfile: 'Dockerfile',
      nginx: 'Nginx',
      diff: 'Diff',
    }
    
    return languageMap[lang.toLowerCase()] || lang.toUpperCase()
  }

  // Get the language from the pre's child element (code element)
  const codeElement = children as any
  const codeClassName = codeElement?.props?.className || className
  const language = getLanguageLabel(codeClassName)

  return (
    <div ref={textInput} className="relative overflow-hidden rounded-lg">
      <pre className={className} {...props}>
        {/* Language label and copy button - positioned inside the pre element */}
        <div className="sticky top-0 flex items-center justify-between border-b border-gray-300/50 bg-gray-200/90 px-4 py-2.5 text-xs font-medium text-gray-700 backdrop-blur-sm dark:border-gray-600/50 dark:bg-gray-700/90 dark:text-gray-300">
          <span className="select-none">{language}</span>
          <button
            aria-label="Copy code"
            type="button"
            className="rounded bg-gray-300 px-2 py-1 text-xs text-gray-700 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500"
            onClick={onCopy}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <div className="py-4">
          {children}
        </div>
      </pre>
    </div>
  )
}

export default Pre
