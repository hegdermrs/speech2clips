import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '../lib/utils'
import { FadeIn } from './FadeIn'
import { PatrioticBarThin } from './PatrioticMotifs'

const faqs = [
  {
    question: 'How many clips do I get?',
    answer: 'See the full list in What You Get — usually 30 to 40 per session.',
  },
  {
    question: 'How fast is delivery?',
    answer: 'Typically within 48 hours of your event.',
  },
  {
    question: 'Do you manage my social accounts?',
    answer: 'No. I deliver the files — your team handles posting.',
  },
  {
    question: 'Are there contracts?',
    answer: 'Nope. You book event by event.',
  },
  {
    question: 'How do I book?',
    answer: 'Fill out the form below or email me directly. Limited slots before November.',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-28 md:py-36">
      <PatrioticBarThin className="absolute inset-x-0 top-0" />
      <div className="relative mx-auto max-w-3xl px-6 md:px-10">
        <FadeIn>
          <p className="section-label-color mb-4 justify-center">FAQ</p>
          <h2 className="text-center font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] leading-tight text-white">
            Common questions
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
                        'h-5 w-5 shrink-0 transition-transform duration-300',
                        isOpen ? 'rotate-180 text-patriot-blue' : 'text-[var(--color-muted)]',
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
                        <p className="border-l-2 border-[var(--color-blue-bright)]/40 pb-5 pl-4 text-base leading-relaxed text-[var(--color-muted)]">
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
