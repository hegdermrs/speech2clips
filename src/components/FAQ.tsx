import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FadeIn } from './FadeIn'
import { cn } from '../lib/utils'

const faqs = [
  {
    question: 'How many clips do I get per event?',
    answer:
      'You\'ll receive 30 to 40 polished video clips per recording session — each 30 to 60 seconds long, professionally cut, color-corrected, and audio-enhanced.',
  },
  {
    question: 'How fast is delivery?',
    answer:
      'Within 24 to 48 hours after your event, all clips are delivered to a private cloud folder your team can access immediately.',
  },
  {
    question: 'Do you manage my social accounts?',
    answer:
      'No. You keep full rights to everything. I\'m not managing your accounts — I\'m making sure you never run out of high-quality content during the most critical months of your campaign.',
  },
  {
    question: 'Are there long-term contracts?',
    answer:
      'No long contracts, no complicated approvals. Tell me where and when you\'re speaking — I show up, record, and deliver.',
  },
  {
    question: 'How do I book?',
    answer:
      'Click below and tell me where you\'re speaking next. Limited slots available before November — spots are filling up fast.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-28 md:py-36">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <FadeIn>
          <p className="section-label mb-4 text-center">FAQ</p>
          <h2 className="text-center font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] leading-tight text-white">
            Questions before you book
          </h2>
        </FadeIn>

        <div className="mt-12 divide-y divide-white/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <FadeIn key={faq.question} delay={index * 0.05}>
                <div className="py-2">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-lg font-medium text-white">{faq.question}</span>
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 shrink-0 text-[var(--color-muted)] transition-transform duration-300',
                        isOpen && 'rotate-180',
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-base leading-relaxed text-[var(--color-muted)]">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
