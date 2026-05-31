import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Star } from 'lucide-react'

const GOOGLE_REVIEW_URL =
  'https://www.google.com/search?q=MRM+Unique+Homes+PG+For+Girls+II+Anand+Niketan+Reviews'

const reviews = [
  {
    name: 'Harsh Raj Upadhyay',
    role: 'Resident, Anand Niketan',
    image: '',
    review:
      'Best pg for girls in Anand Niketan. It’s provide shuttle service for girls. Very clean rooms and hygienic food.',
    highlight: 'Shuttle service & clean rooms',
  },
  {
    name: 'Abhi Mishra',
    role: 'Resident, Anand Niketan',
    image: '',
    review: 'Environment is friendly & Best PG for Girls.',
    highlight: 'Friendly environment',
  },
  {
    name: 'Neeraj Mishra',
    role: 'Resident, Anand Niketan',
    image: '',
    review:
      'Best budget friendly with shuttle service pg in this area. Very clean room and hygienic food here.',
    highlight: 'Budget friendly & hygiene',
  },
]

const stats = [
  { id: 'stat-residents', value: 300, suffix: '+', label: 'Happy Residents' },
  { id: 'stat-rating', value: 4.5, suffix: '', label: 'Google Rating' },
  { id: 'stat-reviews', value: 24, suffix: '', label: 'Google Reviews' },
  { id: 'stat-security', value: 24, suffix: '/7', label: 'Security' },
]

export function Testimonials() {
  const [counters, setCounters] = useState(stats.map(() => 0))
  const [rating, setRating] = useState(0)

  useEffect(() => {
    let start: number | null = null
    const duration = 900

    const animate = (timestamp: number) => {
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      setCounters(stats.map((stat) => Math.floor(stat.value * progress)))
      setRating(parseFloat((4.5 * progress).toFixed(1)))

      if (progress < 1) {
        window.requestAnimationFrame(animate)
      }
    }

    window.requestAnimationFrame(animate)
  }, [])

  const handleReviewClick = () => {
    window.open(GOOGLE_REVIEW_URL, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="testimonials" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-slate-950/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-amber-300/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-20">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-slate-950/20">
            <span>⭐ 4.5 Rated on Google · 24 Reviews</span>
          </span>
          <h2 className="mt-6 font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-primary">
            What Our Residents Say
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-7">
            Trusted by girls seeking a premium, secure and comfortable stay in
            New Delhi.
          </p>
          <p className="mt-3 text-xs uppercase tracking-[0.28em] text-slate-400">
            Based on Google reviews for MRM Unique Homes PG For Girls II, Anand
            Niketan.
          </p>
        </div>

        <div className="mt-16">
          <div className="-mx-4 overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible">
            <div className="flex min-w-[90vw] gap-6 px-4 snap-x snap-mandatory sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:min-w-full sm:px-0">
              {reviews.map((review, index) => (
                <motion.article
                  key={review.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.12,
                    ease: 'easeOut',
                  }}
                  className="snap-start min-w-[82vw] sm:min-w-0 bg-white/85 backdrop-blur-xl border border-slate-200/70 shadow-2xl shadow-slate-200/30 rounded-[2rem] p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/40"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="h-16 w-16 rounded-full overflow-hidden ring-2 ring-primary/20">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="h-full w-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary">
                          {review.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {review.role}
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                      Verified
                    </span>
                  </div>

                  <div className="mt-5 flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 text-amber-500" />
                    ))}
                  </div>

                  <p className="mt-5 text-sm leading-7 text-muted-foreground">
                    {review.review}
                  </p>

                  <div className="mt-6 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    <span className="rounded-full bg-slate-100 px-3 py-2 text-slate-600">
                      {review.highlight}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-3 py-2 text-white">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        aria-hidden="true"
                      >
                        <path
                          fill="#4285F4"
                          d="M12 11.5v3.5h5.1c-.22 1.14-.9 2.1-1.92 2.75l3.1 2.4C20.58 19.4 22 16.98 22 14c0-1.1-.1-2.17-.28-3.21H12z"
                        />
                        <path
                          fill="#34A853"
                          d="M6.2 14.48c-.18-.54-.28-1.12-.28-1.72s.1-1.18.28-1.72L3.1 8.64A8.98 8.98 0 0 0 2 12c0 1.51.37 2.94 1.1 4.24l3.1-1.76z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M12 6.5c1.33 0 2.52.46 3.47 1.22l2.6-2.6C16.98 3.59 14.69 2.5 12 2.5A9 9 0 0 0 3.1 8.64l3.1 2.74A5.99 5.99 0 0 1 12 6.5z"
                        />
                        <path
                          fill="#EA4335"
                          d="M6.2 9.52L3.1 6.78A8.98 8.98 0 0 0 2 12c0 1.51.37 2.94 1.1 4.24l3.1-1.76c-.18-.54-.28-1.12-.28-1.72s.1-1.18.28-1.72z"
                        />
                      </svg>
                      Google
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-slate-200/70 bg-white/80 p-6 shadow-xl shadow-slate-200/30 backdrop-blur-xl sm:px-8">
          <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
            {stats.map((stat, idx) => (
              <div key={stat.id} className="rounded-3xl bg-slate-50 p-5">
                <p className="text-3xl font-semibold tracking-tight text-primary">
                  {stat.id === 'stat-rating'
                    ? rating.toFixed(1)
                    : counters[idx].toLocaleString()}
                  {stat.suffix}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] bg-slate-950 px-8 py-12 text-center text-white shadow-2xl shadow-slate-950/20">
          <div className="mx-auto max-w-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">
              Share Your Experience With Us
            </p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight">
              Join our community of joyful residents.
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Preview verified feedback from MRM Unique Homes PG For Girls II
              and explore why residents choose this premium Anand Niketan
              address.
            </p>
            <button
              type="button"
              onClick={handleReviewClick}
              className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-amber-400 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-950 transition-transform duration-300 hover:-translate-y-1 hover:bg-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-300/40"
            >
              ⭐ View Google Reviews
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
