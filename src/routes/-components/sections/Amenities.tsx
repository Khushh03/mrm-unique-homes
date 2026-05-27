import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  Utensils,
  Dumbbell,
  BookOpen,
  Flower,
  Coffee,
  Laptop,
  Clock,
  Users,
  X,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react'
import { AMENITIES_DATA } from '#/data'
import type { Amenity } from '#/types'

interface AmenitiesProps {
  maxItems?: number
  showMore?: boolean
  showMoreHash?: string
  showBackHome?: boolean
}

export function Amenities({
  maxItems = AMENITIES_DATA.length,
  showMore = false,
  showMoreHash = '#amenities-page',
  showBackHome = false,
}: AmenitiesProps) {
  const [selectedAmenity, setSelectedAmenity] = useState<Amenity | null>(null)
  const [reservationName, setReservationName] = useState('')
  const [reservationTime, setReservationTime] = useState('')
  const [reservationDate, setReservationDate] = useState('')
  const [reservedSuccess, setReservedSuccess] = useState(false)
  const [reserving, setReserving] = useState(false)

  const getIcon = (name: string) => {
    switch (name) {
      case 'Utensils':
        return Utensils
      case 'Dumbbell':
        return Dumbbell
      case 'BookOpen':
        return BookOpen
      case 'Flower':
        return Flower
      case 'Coffee':
        return Coffee
      case 'Laptop':
        return Laptop
      default:
        return Flower
    }
  }

  const handleReserveSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!reservationName || !reservationTime || !reservationDate) return
    setReserving(true)
    setTimeout(() => {
      setReserving(false)
      setReservedSuccess(true)
    }, 1000)
  }

  const resetReservation = () => {
    setReservationName('')
    setReservationTime('')
    setReservationDate('')
    setReservedSuccess(false)
  }

  const closeModal = () => {
    setSelectedAmenity(null)
    resetReservation()
  }

  return (
    <section
      id="amenities"
      className="max-w-7xl mx-auto px-6 md:px-20 py-24 select-none"
    >
      {/* Section Header */}
      <div className="text-center mb-16 space-y-4">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-primary">
          Curated Amenities
        </h2>
        <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-xl mx-auto leading-relaxed">
          Beyond the private quarters, MRM Unique Homes offers spaces designed
          to elevate daily rituals and foster a sense of community.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10">
        {AMENITIES_DATA.slice(0, maxItems).map((amenity, index) => {
          const IconComponent = getIcon(amenity.iconName)
          return (
            <motion.div
              key={amenity.id}
              id={`amenity-card-${amenity.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              onClick={() => setSelectedAmenity(amenity)}
              className="group flex flex-col items-center text-center cursor-pointer p-4 rounded-xl hover:bg-surface transition-all duration-300"
            >
              {/* Icon Container with subtle ring */}
              <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center mb-6 bg-white text-black group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300 transform group-hover:scale-105 shadow-sm">
                <IconComponent className="h-6 w-6 transition-colors" />
              </div>

              {/* Text */}
              <h3 className="font-serif text-xl font-semibold text-primary mb-3">
                {amenity.name}
              </h3>
              <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed max-w-xs">
                {amenity.description}
              </p>

              {/* Expand Link */}
              <button
                id={`amenity-more-${amenity.id}`}
                className="mt-4 flex items-center gap-1.5 font-sans text-xs font-semibold uppercase tracking-wider text-soft-sage hover:text-primary transition-all pointer-events-none"
              >
                Learn More <ArrowRight className="h-3 w-3" />
              </button>
            </motion.div>
          )
        })}
      </div>

      {showMore && (
        <div className="mt-12 flex justify-center">
          <button
            id="amenities-show-more-btn"
            onClick={() => {
              window.location.hash = showMoreHash
            }}
            className="inline-flex items-center gap-2 rounded-full border border-black bg-black px-7 py-3 text-xs font-semibold uppercase tracking-widest text-white hover:bg-neutral-900 transition-all"
          >
            Show More
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}

      {showBackHome && (
        <div className="mt-12 flex justify-center">
          <button
            id="amenities-back-home-btn"
            onClick={() => {
              window.location.hash = ''
            }}
            className="inline-flex items-center gap-2 rounded-full border border-black bg-white px-7 py-3 text-xs font-semibold uppercase tracking-widest text-black hover:bg-gray-50 transition-all"
          >
            Back to Home
          </button>
        </div>
      )}

      {/* Interactive Modal Panel */}
      <AnimatePresence>
        {selectedAmenity && (
          <div
            className="fixed inset-0 z-100 overflow-y-auto"
            id="amenity-modal-overlay"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-primary/60 backdrop-blur-md"
            />
            <div className="flex min-h-screen items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative bg-background max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-outline-variant/20"
                id="amenity-modal-panel"
              >
                {/* Close Button Button */}
                <button
                  id="amenity-modal-close"
                  onClick={closeModal}
                  className="absolute right-4 top-4 p-1.5 rounded-full bg-background/80 text-primary hover:bg-surface-container transition-colors z-10"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Left Side: Photo & Specs */}
                <div className="w-full md:w-1/2 relative h-48 md:h-auto min-h-[250px]">
                  <img
                    src={selectedAmenity.image}
                    alt={selectedAmenity.name}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-on-primary">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-soft-sage">
                      Arbor &amp; Linen Features
                    </span>
                    <h4 className="font-serif text-2xl font-semibold mt-1">
                      {selectedAmenity.name}
                    </h4>
                  </div>
                </div>

                {/* Right Side: Details & Interactive Reservation Form */}
                <div className="w-full md:w-1/2 p-6 md:p-8 space-y-6">
                  <div>
                    <h5 className="font-serif text-lg font-bold text-primary mb-2">
                      Architectural Framing
                    </h5>
                    <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
                      {selectedAmenity.detailText}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 py-3 border-y border-outline-variant/20">
                    <div className="flex items-center gap-2.5">
                      <Clock className="h-4.5 w-4.5 text-soft-sage shrink-0" />
                      <div>
                        <span className="block text-[9px] uppercase font-mono text-on-surface-variant/70">
                          Hours
                        </span>
                        <span className="font-sans text-xs font-semibold text-primary">
                          {selectedAmenity.operatingHours}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Users className="h-4.5 w-4.5 text-soft-sage shrink-0" />
                      <div>
                        <span className="block text-[9px] uppercase font-mono text-on-surface-variant/70">
                          Capacity
                        </span>
                        <span className="font-sans text-xs font-semibold text-primary">
                          {selectedAmenity.capacityLimit}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Booking State Form */}
                  {!reservedSuccess ? (
                    <form
                      onSubmit={handleReserveSubmit}
                      className="space-y-3 pt-2"
                    >
                      <h6 className="font-sans text-xs font-bold uppercase tracking-wider text-primary">
                        Reserve a private spot
                      </h6>
                      <div className="grid grid-cols-1 gap-2">
                        <input
                          id="amenity-reserve-name"
                          required
                          type="text"
                          value={reservationName}
                          onChange={(e) => setReservationName(e.target.value)}
                          placeholder="Your Name / Suite ID"
                          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-xs text-black outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                        />
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            id="amenity-reserve-date"
                            required
                            type="date"
                            value={reservationDate}
                            onChange={(e) => setReservationDate(e.target.value)}
                            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-xs text-black outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                          />
                          <input
                            id="amenity-reserve-time"
                            required
                            type="time"
                            value={reservationTime}
                            onChange={(e) => setReservationTime(e.target.value)}
                            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 text-xs text-black outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                          />
                        </div>
                      </div>
                      <button
                        id="amenity-reserve-submit"
                        type="submit"
                        disabled={reserving}
                        className="w-full bg-black text-white text-xs font-semibold uppercase tracking-widest py-3.5 rounded-xl hover:bg-neutral-800 transition-all cursor-pointer shadow-md"
                      >
                        {reserving
                          ? 'Checking Slots...'
                          : 'Confirm Amenity Pass'}
                      </button>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-lg border border-soft-sage/30 bg-surface-container/20 p-4 text-center space-y-2 pt-4"
                    >
                      <ShieldCheck className="h-8 w-8 text-soft-sage mx-auto" />
                      <p className="font-serif text-sm font-semibold text-primary">
                        Reservation Confirmed
                      </p>
                      <p className="font-sans text-[11px] text-on-surface-variant max-w-xs mx-auto">
                        Your pass has been synced for{' '}
                        <strong>{selectedAmenity.name}</strong> on{' '}
                        <strong>{reservationDate}</strong> at{' '}
                        <strong>{reservationTime}</strong>. Welcome card
                        activated.
                      </p>
                      <button
                        type="button"
                        onClick={resetReservation}
                        className="text-xs font-semibold uppercase text-soft-sage hover:text-primary tracking-wider"
                      >
                        Book another
                      </button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
