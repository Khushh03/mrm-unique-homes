/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Landmark } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple intersection highlight for nav items
      const sections = ['home', 'residences', 'amenities', 'connected-living', 'visual-journal', 'inquiries'];
      for (const sectionId of sections.reverse()) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { label: 'Residences', fallbackId: 'residences' },
    { label: 'Amenities', fallbackId: 'amenities' },
    { label: 'The Experience', fallbackId: 'home' },
    { label: 'Location', fallbackId: 'connected-living' },
    { label: 'Inquiry', fallbackId: 'inquiries' }
  ];

  return (
    <nav
      id="top-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/90 backdrop-blur-md py-4 shadow-sm border-b border-outline-variant/10'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex justify-between items-center">
        {/* Brand Name */}
        <button
          id="nav-logo"
          onClick={() => scrollToSection('home')}
          className="font-serif text-xl md:text-2xl font-bold tracking-tight text-primary italic cursor-pointer outline-none hover:opacity-90 transition-opacity"
        >
          MRM Unique Homes
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const isSelected = activeSection === link.fallbackId;
            return (
              <button
                key={link.label}
                id={`nav-link-${link.fallbackId}`}
                onClick={() => scrollToSection(link.fallbackId)}
                className={`text-xs uppercase tracking-widest font-semibold transition-all duration-300 relative py-1 cursor-pointer outline-none ${
                  isSelected
                    ? 'text-primary'
                    : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.label}
                {isSelected && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Booking Action Button */}
        <div className="hidden md:block">
          <button
            id="nav-tour-btn"
            onClick={onOpenBooking}
            className="bg-black text-white text-xs font-semibold uppercase tracking-widest py-3.5 px-6 rounded-xl hover:bg-neutral-800 transition-all shadow-sm transform active:scale-95 duration-200 cursor-pointer"
          >
            Book a Tour
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          id="nav-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-primary p-1.5 rounded-full hover:bg-surface-container transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-outline-variant/10 overflow-hidden"
            id="nav-mobile-menu"
          >
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => {
                const isSelected = activeSection === link.fallbackId;
                return (
                  <button
                    key={link.label}
                    id={`nav-mobile-link-${link.fallbackId}`}
                    onClick={() => scrollToSection(link.fallbackId)}
                    className={`block w-full text-left text-sm py-2 font-medium transition-colors ${
                      isSelected
                        ? 'text-primary font-semibold'
                        : 'text-on-surface-variant'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              <div className="pt-4 border-t border-outline-variant/10">
                <button
                  id="nav-mobile-tour-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full text-center bg-primary-container text-on-primary text-xs font-semibold uppercase tracking-widest py-3.5 rounded-full hover:bg-secondary transition-colors"
                >
                  Book a Tour
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
