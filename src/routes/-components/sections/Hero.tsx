import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronLeft, ChevronRight, X, Play } from 'lucide-react'

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showStoryModal, setShowStoryModal] = useState(false)

  const slides = [
    {
      title: 'Serene Quarters',
      desc: 'Personal sanctuaries crafted for profound rest.',
      image: '/images/li1.png',
    },
    {
      title: 'Artisan Dining Space',
      desc: 'Where culinary arts meet architectural elegance.',
      image: '/images/li2.png',
    },
    {
      title: 'Tranquil Bedroom Setting',
      desc: 'Serene spaces designed with natural linen accents.',
      image: '/images/li3.png',
    },
    {
      title: 'Premium Lounge Area',
      desc: 'Elegant common spaces for relaxation and connection.',
      image: '/images/si1.png',
    },
    {
      title: 'Modern Workspaces',
      desc: 'Dedicated areas optimized for focus and productivity.',
      image: '/images/si2.png',
    },
    {
      title: 'Vibrant Community',
      desc: 'Shared spaces that foster meaningful interactions.',
      image: '/images/si3.png',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const scrollToResidences = () => {
    const resSec = document.getElementById('residences')
    if (resSec) {
      const offset = 80
      const pos =
        resSec.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top: pos, behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-6 md:px-20 pt-28 md:pt-36 pb-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column Description */}
        <div className="lg:col-span-5 space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-border/40 rounded-full shadow-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500">
              Suite Bookings Open
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-primary leading-[1.1] mb-2">
            Where design meets <br />
            <span className="text-gray-400">daily life.</span>
          </h1>
          <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed max-w-md">
            A precision-engineered sanctuary designed for creators who demand
            clarity, speed, and an uncompromising aesthetic focus.
          </p>

          <div className="pt-2 flex flex-wrap gap-4">
            <button
              id="hero-explore"
              onClick={scrollToResidences}
              className="bg-black text-white text-xs font-semibold uppercase tracking-widest py-4 px-8 rounded-xl hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl transform active:scale-95 duration-200 cursor-pointer"
            >
              Explore Residences
            </button>
            <button
              id="hero-story"
              onClick={() => setShowStoryModal(true)}
              className="bg-white border border-border text-black text-xs font-semibold uppercase tracking-widest py-4 px-8 rounded-xl hover:bg-gray-50 transition-all transform active:scale-95 duration-200 cursor-pointer"
            >
              Our Story
            </button>
          </div>
        </div>

        {/* Right Column Custom Slideshow */}
        <div className="lg:col-span-7">
          <div className="relative h-[480px] sm:h-[580px] w-full rounded-2xl overflow-hidden shadow-2xl group border border-border/10">
            {/* Slide Images */}
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                referrerPolicy="no-referrer"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-102"
              />
            </AnimatePresence>

            {/* Gradient Darkener on bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-80" />

            {/* Dynamic Card Overlay */}
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex justify-between items-end gap-4">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="bg-background/95 backdrop-blur-md p-5 sm:p-6 rounded-xl shadow-xl max-w-sm border border-border/20"
              >
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-primary mb-1">
                  {slides[currentSlide].title}
                </h3>
                <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                  {slides[currentSlide].desc}
                </p>
              </motion.div>

              {/* Navigation Arrows */}
              <div className="flex gap-2.5 shrink-0">
                <button
                  id="hero-slider-prev"
                  onClick={handlePrev}
                  className="p-3.5 rounded-full bg-background/90 hover:bg-background text-primary shadow-lg border border-border/10 transition-transform active:scale-90 duration-150"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  id="hero-slider-next"
                  onClick={handleNext}
                  className="p-3.5 rounded-full bg-background/90 hover:bg-background text-primary shadow-lg border border-border/10 transition-transform active:scale-90 duration-150"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Narrative Story Modal */}
      <AnimatePresence>
        {showStoryModal && (
          <div
            className="fixed inset-0 z-100 overflow-y-auto"
            id="story-modal-overlay"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowStoryModal(false)}
              className="fixed inset-0 bg-primary/60 backdrop-blur-md"
            />
            <div className="flex min-h-screen items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative bg-background max-w-2xl w-full rounded-2xl overflow-hidden shadow-2xl p-8 md:p-12 border border-border/20"
                id="story-modal-panel"
              >
                <button
                  onClick={() => setShowStoryModal(false)}
                  className="absolute right-4 top-4 p-1.5 rounded-full text-muted-foreground hover:bg-secondary transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="space-y-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground block">
                    Our Design Thesis
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-primary">
                    Understatement as the Ultimate Form of Craft.
                  </h3>

                  <div className="aspect-video relative rounded-lg overflow-hidden bg-primary/90 flex items-center justify-center border border-border/20">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSjahhPK7GGoYfa8TgoFvnDWvE3mFk_XSs6vsn1BFxVxGuZD_9GE3bWj__4Iv6Pm7dzxN7-d8qFKGmxERGPm7HKMJmH9pps9vgi-GbaNorfsYDgerYVFbFTHM19gMfJqFuZnq31p83CUkCcrDTIBsVx8Uw7BhMCSIqIAmrO5h8ITVf-_M5TaXPt1_n2CQmVDTRvew8NRRHlfhItGQmIKZfRNKnGWn7mtXOhlyPyNroSEbZrLn9QIM4KyD2be5k5-LiFj4RCPo9VYbe"
                      alt="Story Concept drawing"
                      className="absolute inset-0 w-full h-full object-cover opacity-30"
                    />
                    <div className="relative text-center p-6 space-y-3">
                      <div className="mx-auto w-12 h-12 rounded-full bg-background flex items-center justify-center text-primary shadow-lg cursor-pointer hover:bg-secondary transition-transform hover:scale-105 active:scale-95">
                        <Play className="h-5 w-5 fill-current" />
                      </div>
                      <p className="text-xs font-mono text-background font-medium uppercase tracking-wider">
                        Virtual Walkthrough Thesis • 1:45
                      </p>
                    </div>
                  </div>

                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                    At <strong>MRM Unique Homes</strong>, we believe modern
                    architecture shouldn't dominate. It should recede, providing
                    a quiet frame for the natural rhythms of daily life. Our
                    signature theme—<strong>Arbor & Linen</strong>—gathers raw,
                    locally cut sandstone, forest timber, and breathable linen
                    panels into a cohesive sanctuary.
                  </p>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/10">
                    <div className="space-y-1">
                      <span className="block font-mono text-xs text-muted-foreground uppercase">
                        Integration
                      </span>
                      <p className="font-serif text-sm font-semibold text-primary">
                        100% Eco Footprint
                      </p>
                    </div>
                    <div className="space-y-1">
                      <span className="block font-mono text-xs text-muted-foreground uppercase">
                        Acoustics
                      </span>
                      <p className="font-serif text-sm font-semibold text-primary">
                        Low-Decibel Zoning
                      </p>
                    </div>
                    <div className="space-y-1">
                      <span className="block font-mono text-xs text-muted-foreground uppercase">
                        Material
                      </span>
                      <p className="font-serif text-sm font-semibold text-primary">
                        Solid Sandstone
                      </p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setShowStoryModal(false)}
                      className="w-full text-center bg-primary text-primary-foreground font-sans text-xs font-semibold uppercase tracking-widest py-3 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Continue Reading Journal
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
