import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Check, X, Home, ShieldCheck, Ruler, CalendarRange } from 'lucide-react'
import { RESIDENCES_DATA } from '#/data'
import type { Residence } from '#/types'

interface ResidencesProps {
  onOpenBookingWithId: (id: string) => void
}

export function Residences({ onOpenBookingWithId }: ResidencesProps) {
  const [selectedResidence, setSelectedResidence] = useState<Residence | null>(
    null,
  )

  const handleOpenSpecs = (res: Residence) => {
    setSelectedResidence(res)
  }

  const handleInquireFromSpecs = () => {
    if (selectedResidence) {
      onOpenBookingWithId(selectedResidence.id)
      setSelectedResidence(null)
    }
  }

  return (
    <section
      id="residences"
      className="max-w-7xl mx-auto px-6 md:px-20 py-24 select-none"
    >
      {/* Header Block and View All Link */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-border/20 pb-8 gap-4">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-primary">
            The Residences
          </h2>
          <p className="font-sans text-sm md:text-base text-muted-foreground mt-2 leading-relaxed">
            Intentionally designed spaces for distinct ways of living.
          </p>
        </div>
        <button
          id="view-floorplans-btn"
          onClick={() => handleOpenSpecs(RESIDENCES_DATA[1])} // Open default specs info as floor plan preview
          className="font-sans text-xs md:text-sm font-semibold uppercase tracking-widest text-primary border-b border-primary hover:text-muted-foreground hover:border-muted-foreground transition-all pb-1 cursor-pointer"
        >
          View All Floorplans
        </button>
      </div>

      {/* Grid of 3 options */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-stretch pt-4">
        {RESIDENCES_DATA.map((res) => {
          const isDual = res.id === 'dual' // Symmetric premium card
          return (
            <motion.div
              key={res.id}
              id={`residence-card-${res.id}`}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className={`relative bg-card rounded-3xl p-8 border hover-zoom-container overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                isDual
                  ? 'border-muted-foreground/40 shadow-xl lg:scale-103 z-10 bg-card'
                  : 'border-border/20 hover:border-muted-foreground/40'
              }`}
            >
              {/* Optional Signature Tag */}
              {isDual && (
                <div className="absolute top-6 right-6 bg-black text-white font-sans text-[9px] font-bold px-3 py-1 rounded-md uppercase tracking-widest shadow-sm">
                  Signature
                </div>
              )}

              {/* Image with hover effect */}
              <div>
                <div className="h-64 rounded-xl overflow-hidden mb-8 relative">
                  <img
                    src={res.image}
                    alt={res.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover-zoom transform transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 hover:bg-transparent transition-all duration-300 pointer-events-none" />
                </div>

                {/* Text Context */}
                <h3 className="font-serif text-2xl font-bold text-primary mb-2">
                  {res.name}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                  {res.tagline}
                </p>

                {/* Features Check List */}
                <ul className="space-y-3 font-sans text-xs text-muted-foreground border-t border-gray-150 pt-6 mb-8">
                  {res.specs.map((spec) => (
                    <li
                      key={spec}
                      className="flex items-center gap-3 text-gray-500 font-light"
                    >
                      <div className="rounded-full bg-gray-100 p-0.5 text-black border border-gray-200">
                        <Check className="h-3 w-3 stroke-[2.5]" />
                      </div>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div>
                {isDual ? (
                  <button
                    id="btn-inquire-dual"
                    onClick={() => onOpenBookingWithId(res.id)}
                    className="w-full bg-black text-white font-sans text-xs font-semibold uppercase tracking-widest py-4 rounded-xl hover:bg-neutral-800 hover:shadow-lg transition-all duration-300 cursor-pointer"
                  >
                    Inquire Availability
                  </button>
                ) : (
                  <button
                    id={`btn-details-${res.id}`}
                    onClick={() => handleOpenSpecs(res)}
                    className="w-full border border-gray-250 text-black font-sans text-xs font-semibold uppercase tracking-widest py-3.5 rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-pointer"
                  >
                    Details
                  </button>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Specification Slide-Over Panel */}
      <AnimatePresence>
        {selectedResidence && (
          <div
            className="fixed inset-0 z-100 overflow-y-auto"
            id="specs-modal-overlay"
          >
            {/* Dark back backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedResidence(null)}
              className="fixed inset-0 bg-primary/60 backdrop-blur-md"
            />
            {/* Modal Body */}
            <div className="flex min-h-screen items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-background max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl p-8 md:p-10 border border-border/20 space-y-6"
                id="specs-modal-panel"
              >
                {/* Close button button */}
                <button
                  id="specs-close-btn"
                  onClick={() => setSelectedResidence(null)}
                  className="absolute right-4 top-4 p-1.5 rounded-full text-muted-foreground hover:bg-secondary transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="space-y-4">
                  <span className="font-sans text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    Architectural Layout Specs
                  </span>
                  <div className="flex justify-between items-center border-b border-border/10 pb-4">
                    <h3 className="font-serif text-3xl font-bold text-primary">
                      {selectedResidence.name}
                    </h3>
                    <p className="font-serif text-2xl font-bold text-primary">
                      {selectedResidence.pricePerMonth}{' '}
                      <span className="font-sans text-xs text-muted-foreground">
                        /Bed
                      </span>
                    </p>
                  </div>

                  <p className="font-sans text-xs md:text-sm leading-relaxed text-muted-foreground">
                    {selectedResidence.description}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 py-4 px-2 bg-card rounded-xl border border-border/20">
                    <div className="flex items-center gap-2.5">
                      <Ruler className="h-5 w-5 text-muted-foreground shrink-0" />
                      <div>
                        <span className="block text-[8px] uppercase tracking-wider text-muted-foreground/70">
                          Area
                        </span>
                        <p className="font-sans text-xs font-semibold text-primary">
                          {selectedResidence.sizeSqFt} Sq Ft
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <CalendarRange className="h-5 w-5 text-muted-foreground shrink-0" />
                      <div>
                        <span className="block text-[8px] uppercase tracking-wider text-muted-foreground/70">
                          Availability
                        </span>
                        <p className="font-sans text-xs font-semibold text-primary">
                          {selectedResidence.availableFrom}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <ShieldCheck className="h-5 w-5 text-muted-foreground shrink-0" />
                      <div>
                        <span className="block text-[8px] uppercase tracking-wider text-muted-foreground/70">
                          Lease cycle
                        </span>
                        <p className="font-sans text-xs font-semibold text-primary">
                          12 Months
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <h4 className="font-serif text-sm font-bold text-primary flex items-center gap-2">
                      <Home className="h-4 w-4" /> Bespoke Specifications
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-muted-foreground pl-1">
                      {selectedResidence.features.map((feat) => (
                        <li key={feat} className="flex gap-2 items-start">
                          <Check className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 flex gap-3">
                    <button
                      onClick={() => setSelectedResidence(null)}
                      className="w-1/3 border border-gray-250 py-3.5 text-center font-sans text-xs font-semibold uppercase tracking-widest text-black hover:bg-gray-50 rounded-xl transition-colors cursor-pointer"
                    >
                      Close Window
                    </button>
                    <button
                      id="specs-inquire-btn"
                      onClick={handleInquireFromSpecs}
                      className="w-2/3 bg-black text-white py-3.5 text-center font-sans text-xs font-semibold uppercase tracking-widest hover:bg-neutral-800 rounded-xl transition-colors shadow-lg cursor-pointer animate-none"
                    >
                      Book Tour Consultation
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
