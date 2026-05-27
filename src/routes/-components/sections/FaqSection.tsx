import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { FAQ_DATA } from '#/data'

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('faq-1')

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section
      id="inquiries"
      className="max-w-3xl mx-auto px-6 py-24 select-none"
    >
      {/* Title */}
      <div className="text-center mb-16 space-y-2">
        <span className="text-xs font-semibold uppercase tracking-widest text-soft-sage">
          Inquiry Assistant
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-primary">
          Inquiries
        </h2>
      </div>

      {/* Accordion List */}
      <div className="space-y-4 border-t border-outline-variant/20 pt-6">
        {FAQ_DATA.map((faq) => {
          const isOpen = openId === faq.id
          return (
            <div
              key={faq.id}
              className="border-b border-outline-variant/10 pb-6"
              id={`faq-item-${faq.id}`}
            >
              {/* Question Header */}
              <button
                id={`faq-trigger-${faq.id}`}
                onClick={() => toggleFaq(faq.id)}
                className="flex justify-between items-center w-full text-left font-serif text-lg md:text-xl font-medium text-primary hover:text-gray-400 transition-colors focus:outline-none cursor-pointer py-1.5"
              >
                <span className="pr-6">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer Box (Animated Expand) */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 pr-12 text-xs md:text-sm text-on-surface-variant font-sans leading-relaxed tracking-normal">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}
