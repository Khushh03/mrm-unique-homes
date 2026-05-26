/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Amenities } from './components/Amenities';
import { Residences } from './components/Residences';
import { ConnectedLiving } from './components/ConnectedLiving';
import { VisualJournal } from './components/VisualJournal';
import { FaqSection } from './components/FaqSection';
import { LeadCapture } from './components/LeadCapture';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedResidenceId, setSelectedResidenceId] = useState<string | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState<'home' | 'amenities'>(() =>
    window.location.hash === '#amenities-page' ? 'amenities' : 'home'
  );

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(window.location.hash === '#amenities-page' ? 'amenities' : 'home');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleOpenBooking = () => {
    setSelectedResidenceId(undefined);
    setBookingOpen(true);
  };

  const handleOpenBookingWithId = (id: string) => {
    setSelectedResidenceId(id);
    setBookingOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-background text-on-surface flex flex-col justify-between selection:bg-primary selection:text-on-primary">
      {/* Absolute top announcement ticker bar */}
      <div className="bg-primary text-on-primary text-[10px] uppercase font-mono tracking-widest text-center py-2 relative z-50">
        Announcing Arbor &amp; Linen Spring cycles • Secure Private Walkthrough slots available
      </div>

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
  );
}
