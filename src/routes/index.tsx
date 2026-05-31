import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { Navbar } from './-components/sections/Navbar'
import { Hero } from './-components/sections/Hero'
import { Stats } from './-components/sections/Stats'
import { Amenities } from './-components/sections/Amenities'
import { Residences } from './-components/sections/Residences'
import { ConnectedLiving } from './-components/sections/ConnectedLiving'
import { Testimonials } from './-components/sections/Testimonials'
import { VisualJournal } from './-components/sections/VisualJournal'
import { FaqSection } from './-components/sections/FaqSection'
import { LeadCapture } from './-components/sections/LeadCapture'
import { Footer } from './-components/sections/Footer'
import { BookingModal } from './-components/sections/BookingModal'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const [bookingOpen, setBookingOpen] = useState(false)
  const [selectedResidenceId, setSelectedResidenceId] = useState<
    string | undefined
  >(undefined)
  const [currentPage, setCurrentPage] = useState<'home' | 'amenities'>(() =>
    typeof window !== 'undefined' && window.location.hash === '#amenities-page'
      ? 'amenities'
      : 'home',
  )

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(
        window.location.hash === '#amenities-page' ? 'amenities' : 'home',
      )
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleOpenBooking = () => {
    setSelectedResidenceId(undefined)
    setBookingOpen(true)
  }

  const handleOpenBookingWithId = (id: string) => {
    setSelectedResidenceId(id)
    setBookingOpen(true)
  }

  return (
    <div className="relative min-h-screen bg-background text-foreground flex flex-col justify-between selection:bg-primary selection:text-primary-foreground">
      {/* Absolute top announcement ticker bar */}
      {/* <div className="bg-primary text-primary-foreground text-[10px] uppercase font-mono tracking-widest text-center py-2 relative z-50">
        Announcing Arbor &amp; Linen Spring cycles • Secure Private Walkthrough
        slots available
      </div> */}

      {/* Main Top Header Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Master Content Stage Wrapper */}
      <main className="flex-1">
        {currentPage === 'home' ? (
          <>
            {/* Hero Slideshow Section */}
            <Hero />

            {/* Dynamic Numerical Stat Bar */}
            <Stats />

            {/* Curated Social & Private Amenities Section */}
            <Amenities maxItems={6} showMore showMoreHash="#amenities-page" />

            {/* Residences Tier Presentation & Spec Sheet Section */}
            <Residences onOpenBookingWithId={handleOpenBookingWithId} />

            {/* Google Reviews & Testimonials Section */}
            <Testimonials />

            {/* connected-living Interactive Local Minimap Section */}
            <ConnectedLiving />

            {/* Live Instagram Stream/Replies Light-box Section  */}
            <VisualJournal />

            {/* FAQ Inquiries Accordion Section */}
            <FaqSection />

            {/* Bottom Lead-Capture callback Section */}
            <LeadCapture />
          </>
        ) : (
          <Amenities showBackHome />
        )}
      </main>

      {/* Structured Agency Footer */}
      <Footer />

      {/* Overlay Booking Form Panel */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        initialResidenceId={selectedResidenceId}
      />
    </div>
  )
}
