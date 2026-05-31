import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  X,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  CheckCircle2,
  Building,
  ShieldCheck,
} from 'lucide-react'
import { RESIDENCES_DATA } from '#/data'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  initialResidenceId?: string
}

export function BookingModal({
  isOpen,
  onClose,
  initialResidenceId,
}: BookingModalProps) {
  const [step, setStep] = useState(1)
  const [residenceId, setResidenceId] = useState(initialResidenceId || 'solo')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [preferredDate, setPreferredDate] = useState('')
  const [preferredTime, setPreferredTime] = useState('')
  const [additionalNotes, setAdditionalNotes] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Sync initial preselection
  React.useEffect(() => {
    if (initialResidenceId) {
      setResidenceId(initialResidenceId)
    }
  }, [initialResidenceId])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !phone || !email || !preferredDate) {
      return
    }
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setStep(3) // Success step
    }, 1200)
  }

  const selectedResidence = RESIDENCES_DATA.find((r) => r.id === residenceId)

  const resetForm = () => {
    setStep(1)
    setName('')
    setPhone('')
    setEmail('')
    setPreferredDate('')
    setPreferredTime('')
    setAdditionalNotes('')
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-100 overflow-y-auto"
          id="booking-modal-overlay"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={resetForm}
            className="fixed inset-0 bg-primary/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <div className="flex min-h-screen items-center justify-center p-4 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-background text-left shadow-2xl border border-border/30"
              id="booking-modal-panel"
            >
              {/* Top accent line */}
              <div className="h-1.5 w-full bg-primary" />

              {/* Close Button */}
              <button
                id="modal-close-btn"
                onClick={resetForm}
                className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground hover:bg-secondary hover:text-primary transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="p-8 md:p-10">
                {step === 1 && (
                  <div>
                    <span className="font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Private Invitation
                    </span>
                    <h3 className="font-serif text-2xl font-semibold tracking-tight text-primary mt-1 mb-4">
                      Initiate Tour Consultation
                    </h3>
                    <p className="font-sans text-sm leading-relaxed text-muted-foreground mb-6">
                      Schedule a private guided walkthrough or online meeting
                      with our boutique housing concierge.
                    </p>

                    <div className="space-y-4">
                      <div>
                        <label className="block font-sans text-xs font-medium uppercase tracking-wider text-muted-foreground mb-2">
                          Select Suite Tier
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {RESIDENCES_DATA.map((r) => (
                            <button
                              key={r.id}
                              type="button"
                              onClick={() => setResidenceId(r.id)}
                              className={`flex flex-col items-center justify-center rounded-xl p-3 border text-center transition-all cursor-pointer ${
                                residenceId === r.id
                                  ? 'border-black bg-gray-50 text-black font-semibold shadow-sm'
                                  : 'border-gray-200 hover:border-black text-gray-500 hover:text-black'
                              }`}
                            >
                              <span className="font-sans text-xs font-semibold">
                                {r.name}
                              </span>
                              <span className="font-sans text-[10px] text-gray-400 mt-0.5 font-medium">
                                {r.pricePerMonth} per Bed
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4">
                        <button
                          id="modal-next-btn"
                          onClick={() => setStep(2)}
                          className="w-full rounded-xl bg-black py-4 px-4 text-center font-sans text-sm font-semibold text-white hover:bg-neutral-800 transition-colors shadow-lg cursor-pointer"
                        >
                          Continue to Details
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <span className="font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Tier Preselected: {selectedResidence?.name}
                      </span>
                      <h3 className="font-serif text-2xl font-semibold tracking-tight text-primary mt-1 mb-6">
                        Provide Consultation Details
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block font-sans text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
                          <input
                            id="modal-input-name"
                            required
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="John Carter"
                            className="w-full rounded-lg border border-border/50 bg-card px-10 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block font-sans text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                            Phone Number
                          </label>
                          <div className="relative">
                            <Phone className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
                            <input
                              id="modal-input-phone"
                              required
                              type="tel"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="+1 (555) 123-4567"
                              className="w-full rounded-lg border border-border/50 bg-card px-10 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block font-sans text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                            Email Address
                          </label>
                          <div className="relative">
                            <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
                            <input
                              id="modal-input-email"
                              required
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="john@example.com"
                              className="w-full rounded-lg border border-border/50 bg-card px-10 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block font-sans text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                            Guided Date
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                            <input
                              id="modal-input-date"
                              required
                              type="date"
                              value={preferredDate}
                              onChange={(e) => setPreferredDate(e.target.value)}
                              className="w-full rounded-lg border border-border/50 bg-card px-10 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block font-sans text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                            Preferred Time
                          </label>
                          <div className="relative">
                            <Clock className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                            <select
                              id="modal-input-time"
                              value={preferredTime}
                              onChange={(e) => setPreferredTime(e.target.value)}
                              className="w-full rounded-lg border border-border/50 bg-card px-10 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors appearance-none"
                            >
                              <option value="10:00 AM">
                                10:00 AM – Morning
                              </option>
                              <option value="01:30 PM">
                                01:30 PM – Afternoon
                              </option>
                              <option value="04:00 PM">
                                04:00 PM – Late Afternoon
                              </option>
                              <option value="06:30 PM">
                                06:30 PM – Sunset Consult
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block font-sans text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">
                          Tailoring Notes (Optional)
                        </label>
                        <textarea
                          id="modal-input-notes"
                          rows={2}
                          value={additionalNotes}
                          onChange={(e) => setAdditionalNotes(e.target.value)}
                          placeholder="e.g. wheelchair access, specific organic bedding requirements..."
                          className="w-full rounded-lg border border-border/50 bg-card p-3.5 font-sans text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="w-1/3 rounded-xl border border-gray-250 bg-transparent py-4 px-4 text-center font-sans text-sm font-semibold text-black hover:bg-gray-50 transition-colors cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                        id="modal-submit-btn"
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-2/3 rounded-xl bg-black py-4 px-4 text-center font-sans text-sm font-semibold text-white hover:bg-neutral-800 transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer ${
                          isSubmitting ? 'opacity-80 cursor-loading' : ''
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            Curating...
                          </>
                        ) : (
                          'Request Callback & Tour'
                        )}
                      </button>
                    </div>
                  </form>
                )}

                {step === 3 && (
                  <div className="text-center py-6">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary mb-6">
                      <CheckCircle2 className="h-10 w-10 text-primary" />
                    </div>
                    <span className="font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Submission Received
                    </span>
                    <h3 className="font-serif text-3xl font-semibold tracking-tight text-primary mt-1 mb-4">
                      Walkthrough Curated
                    </h3>
                    <p className="font-sans text-sm leading-relaxed text-muted-foreground max-w-sm mx-auto mb-8">
                      Thank you,{' '}
                      <strong className="text-foreground">{name}</strong>. An
                      appointments concierge will address your inquiry for{' '}
                      <strong className="text-foreground">
                        {selectedResidence?.name}
                      </strong>
                      . We will contact you at{' '}
                      <strong className="text-foreground">{phone}</strong>{' '}
                      shortly.
                    </p>

                    <div className="rounded-xl border border-border/20 bg-card p-4 text-left space-y-3 mb-8 max-w-sm mx-auto">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <Building className="h-4 w-4 text-muted-foreground shrink-0" />
                        <span>
                          Residency Tier:{' '}
                          <strong className="text-primary">
                            {selectedResidence?.name}
                          </strong>
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <Calendar className="h-4 w-4 text-muted-foreground shrink-0" />
                        <span>
                          Date:{' '}
                          <strong>
                            {preferredDate} ({preferredTime})
                          </strong>
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <ShieldCheck className="h-4 w-4 text-muted-foreground shrink-0" />
                        <span>
                          Email Copy: <strong>{email}</strong>
                        </span>
                      </div>
                    </div>

                    <button
                      id="modal-done-btn"
                      onClick={resetForm}
                      className="w-full max-w-xs rounded-lg bg-primary py-3 px-6 font-sans text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                    >
                      Return to Journal
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}
