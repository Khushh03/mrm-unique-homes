/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Share2, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const [copied, setCopied] = useState(false);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'MRM Unique Homes',
        text: 'Bespoke living and architectural integrity.',
        url: window.location.href
      }).catch(console.error);
    } else {
      // Fallback
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <footer className="bg-surface-container w-full pt-20 pb-12 border-t border-outline-variant/10 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        
        {/* Main Grid split */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-serif text-2xl font-bold italic tracking-tight text-primary hover:opacity-90 transition-opacity cursor-pointer outline-none block text-left"
            >
              MRM Unique Homes
            </button>
            <p className="font-sans text-xs md:text-sm text-on-surface-variant max-w-sm leading-relaxed">
              Architectural Integrity &amp; Bespoke Living. Elevating the standard of modern residency.
            </p>
          </div>

          {/* Explore Links Col */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs uppercase tracking-widest font-semibold text-primary">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => scrollToId('residences')}
                  className="font-sans text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                >
                  The Residences
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToId('amenities')}
                  className="font-sans text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                >
                  Curated Amenities
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToId('connected-living')}
                  className="font-sans text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                >
                  Neighborhood Locality
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToId('home')}
                  className="font-sans text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                >
                  Our Philosophy
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="space-y-4">
            <h4 className="font-sans text-xs uppercase tracking-widest font-semibold text-primary">
              Contact Concierge
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-soft-sage shrink-0" />
                <a
                  href="mailto:concierge@mrmhomes.com"
                  className="font-sans text-on-surface-variant hover:text-primary transition-colors"
                >
                  concierge@mrmhomes.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-soft-sage shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="font-sans text-on-surface-variant hover:text-primary transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-soft-sage shrink-0 mt-0.5" />
                <p className="font-sans text-on-surface-variant leading-relaxed text-xs">
                  (C – 124, Anand Niketan, South Motibagh), New Delhi - 110021
                </p>
              </li>
              <li className="pt-2 flex items-center gap-3 relative">
                <button
                  id="footer-share-btn"
                  onClick={handleShare}
                  className="text-black hover:text-gray-400 hover:bg-gray-50 transition-all duration-300 p-2 bg-white border border-gray-150 rounded-full shadow-sm hover:shadow-md cursor-pointer"
                  title="Share This Page"
                >
                  <Share2 className="h-4 w-4" />
                </button>
                <a
                  id="footer-insta-btn"
                  href="https://instagram.com"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-400 hover:bg-gray-50 transition-all duration-300 p-2 bg-white border border-gray-150 rounded-full shadow-sm hover:shadow-md"
                  title="Instagram Profile"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                {copied && (
                  <span className="absolute left-24 bg-black text-white text-[9px] font-bold px-2.5 py-1 rounded shadow-md uppercase tracking-widest whitespace-nowrap animate-none">
                    Copied!
                  </span>
                )}
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Base */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-outline-variant/10 text-[11px] text-on-surface-variant/70 gap-4">
          <p className="font-sans text-center md:text-left">
            © {new Date().getFullYear()} MRM Unique Homes. Architectural Integrity &amp; Bespoke Living. All private rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-sans hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="font-sans hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
