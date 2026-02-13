'use client'

import { useState } from 'react'
import { ShieldCheck, Server, Lock, Zap, CheckCircle2 } from 'lucide-react'

export default function OpenClawSetup() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormState({ name: '', email: '', company: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Secure OpenClaw AI Agent Setup & Hosting',
            description:
              'Professional installation and hosting service for OpenClaw (formerly ClawdBot) AI agents. Secure, malware-free setup with cloud hosting.',
            provider: {
              '@type': 'Organization',
              name: 'Stryxon',
              url: 'https://www.stryxon.com',
            },
            areaServed: 'Worldwide',
            serviceType: 'AI Agent Setup and Hosting',
            offers: {
              '@type': 'Offer',
              price: '497',
              priceCurrency: 'USD',
              description: 'Complete setup with 30 days support',
            },
          }),
        }}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* Hero Section */}
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Secure OpenClaw AI Agent Setup & Hosting
          </h1>
          <p className="text-xl leading-7 text-gray-500 dark:text-gray-400">
            We install, secure, and host your private AI agent. No terminal required. No malware
            risks.
          </p>
        </div>

        <div className="container py-12">
          {/* Trust Badges */}
          <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex items-start gap-4 rounded-lg border border-[#004AAD]/20 bg-blue-50 p-6 dark:bg-gray-800">
              <div className="flex-shrink-0">
                <ShieldCheck className="h-8 w-8 text-[#004AAD]" />
              </div>
              <div>
                <h3 className="mb-2 font-bold text-gray-900 dark:text-gray-100">
                  Malware-Free Guarantee
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  We install only official OpenClaw (formerly Clawdbot) releases. Zero risk of fake
                  extensions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-lg border border-[#004AAD]/20 bg-blue-50 p-6 dark:bg-gray-800">
              <div className="flex-shrink-0">
                <Server className="h-8 w-8 text-[#004AAD]" />
              </div>
              <div>
                <h3 className="mb-2 font-bold text-gray-900 dark:text-gray-100">
                  Secure Cloud Hosting
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Your AI agent runs on hardened cloud infrastructure with automatic backups and
                  99.9% uptime.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-lg border border-[#004AAD]/20 bg-blue-50 p-6 dark:bg-gray-800">
              <div className="flex-shrink-0">
                <Lock className="h-8 w-8 text-[#004AAD]" />
              </div>
              <div>
                <h3 className="mb-2 font-bold text-gray-900 dark:text-gray-100">Privacy First</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Your API keys and data stay private. We follow enterprise security best practices.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* What's Included */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
                What's Included
              </h2>
              <ul className="space-y-4">
                {[
                  'Complete OpenClaw installation and configuration',
                  'Secure API key setup (OpenAI, Anthropic, etc.)',
                  'Cloud server provisioning and hardening',
                  'SSL certificate and domain setup',
                  'Automated backup configuration',
                  '30-day support and troubleshooting',
                  'Performance optimization',
                  'Security audit and monitoring setup',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#004AAD]" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-lg border border-[#004AAD]/20 bg-gradient-to-br from-blue-50 to-indigo-50 p-6 dark:from-gray-800 dark:to-gray-900">
                <div className="mb-3 flex items-center gap-3">
                  <Zap className="h-6 w-6 text-[#004AAD]" />
                  <h3 className="font-bold text-gray-900 dark:text-gray-100">Fast Turnaround</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Most setups completed within 24-48 hours. We'll have you running secure AI
                  workflows by tomorrow.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="rounded-lg border-2 border-[#004AAD]/20 bg-white p-8 shadow-xl dark:bg-gray-900">
                <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Get Your Secure Setup
                </h2>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                  Fill out the form below and we'll get back to you within 4 hours.
                </p>

                {submitStatus === 'success' && (
                  <div className="mb-6 rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
                    <p className="font-medium text-green-800 dark:text-green-200">
                      ✓ Thanks! We'll contact you within 4 hours.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
                    <p className="text-red-800 dark:text-red-200">
                      Something went wrong. Please email us directly at abdul.hadi@stryxon.com
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-[#004AAD] dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-[#004AAD] dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      value={formState.company}
                      onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-[#004AAD] dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell us about your AI automation needs..."
                      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-transparent focus:ring-2 focus:ring-[#004AAD] dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full transform rounded-lg bg-[#004AAD] px-6 py-3 font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-[#003580] hover:shadow-xl disabled:transform-none disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Get Started →'}
                  </button>
                </form>

                <p className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
                  By submitting, you agree to our privacy policy. We'll never share your
                  information.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-gray-100">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                <h3 className="mb-2 font-bold text-gray-900 dark:text-gray-100">
                  Why not install it myself?
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  You can! But recent malware scares and terminal complexity make it risky. We
                  handle security, hosting, and ongoing maintenance.
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                <h3 className="mb-2 font-bold text-gray-900 dark:text-gray-100">
                  Is this OpenClaw or Clawdbot?
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Same tool, new name. OpenClaw is the official rebrand of Clawdbot/Moltbot. We
                  install the latest official release.
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                <h3 className="mb-2 font-bold text-gray-900 dark:text-gray-100">
                  What's the pricing?
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Starting at $497 for complete setup + 30 days support. Hosting costs vary based on
                  usage (typically $20-50/month).
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                <h3 className="mb-2 font-bold text-gray-900 dark:text-gray-100">
                  Do you provide ongoing support?
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Yes! We offer monthly retainers for maintenance, updates, and troubleshooting.
                  Contact us for custom support plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
