'use client'

import { useState } from 'react'
import { Plus, Minus } from '@/components/icons'
import SectionHeading from './section-heading'

interface FAQ {
  id: number
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs: FAQ[]
  title?: string
  subtitle?: string
}

export default function FAQSection({
  faqs,
  title = 'Frequently Asked Questions',
  subtitle = 'Find answers to common questions about our services and pharmacy.',
}: FAQSectionProps) {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading tag="Help & Support" title={title} subtitle={subtitle} />

        <div className="space-y-4 mt-12">
          {faqs.map(faq => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-primary-300 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full flex items-center justify-between p-6 bg-white hover:bg-primary-50 transition-colors text-left"
                aria-expanded={openId === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <h3 className="font-bold text-gray-900 pr-4">{faq.question}</h3>
                <div className="flex-shrink-0">
                  {openId === faq.id ? (
                    <Minus className="w-5 h-5 text-primary-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-gray-400 group-hover:text-primary-600" />
                  )}
                </div>
              </button>

              {openId === faq.id && (
                <div
                  id={`faq-answer-${faq.id}`}
                  className="px-6 py-4 bg-primary-50 border-t border-gray-200 animate-slide-down"
                >
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
