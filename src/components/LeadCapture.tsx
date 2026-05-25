/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PhoneCall, CheckCircle2, ShieldAlert } from 'lucide-react';

export function LeadCapture() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const formatPhoneNumber = (value: string) => {
    // Basic auto-formatting for (XXX) XXX-XXXX
    const cleaned = value.replace(/\D/g, '');
    if (cleaned.length === 0) return '';
    if (cleaned.length <= 3) return cleaned;
    if (cleaned.length <= 6) return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
  };

  const handleInputPhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
    if (formatted) setErrorMsg('');
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanNumbers = phoneNumber.replace(/\D/g, '');
    if (cleanNumbers.length < 10) {
      setErrorMsg('Please enter a complete 10-digit telephone number.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1100);
  };

  return (
    <section id="lead-capture" className="max-w-7xl mx-auto px-6 md:px-20 py-16 select-none">
      <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20 text-center border border-gray-100 shadow-2xl relative overflow-hidden">
        
        <div className="relative max-w-xl mx-auto space-y-6">
          <AnimatePresence mode="wait">
            {!success ? (
              <motion.div
                key="lead-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="mx-auto w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-black border border-gray-100 shadow-sm">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight text-black">
                  Begin Your Residency
                </h2>
                <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed max-w-sm mx-auto">
                  Leave your details below. Our reservation concierge team will contact you directly within 24 hours to coordinate a personal viewing.
                </p>

                {/* Form layout */}
                <form onSubmit={handleLeadSubmit} className="space-y-4 max-w-md mx-auto pt-2">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1">
                      <input
                        id="lead-phone-input"
                        required
                        type="tel"
                        value={phoneNumber}
                        onChange={handleInputPhone}
                        placeholder="Enter your phone number"
                        className={`w-full bg-gray-50 border rounded-xl px-6 py-4 font-sans text-sm text-black placeholder:text-gray-400 outline-none transition-all ${
                          errorMsg 
                            ? 'border-red-500 focus:ring-1 focus:ring-red-500' 
                            : 'border-gray-250 focus:border-black focus:ring-1 focus:ring-black'
                        }`}
                      />
                    </div>
                    <button
                      id="lead-submit-btn"
                      type="submit"
                      disabled={loading}
                      className="bg-black text-white font-sans text-xs font-semibold uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-neutral-800 transition-all shrink-0 hover:shadow-lg active:scale-95 duration-200 cursor-pointer flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          Submitting...
                        </>
                      ) : (
                        'Get Callback'
                      )}
                    </button>
                  </div>

                  {/* Input Validation notice */}
                  <AnimatePresence>
                    {errorMsg && (
                      <motion.div
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="text-left text-xs text-red-600 font-sans font-medium pl-3 flex items-center gap-1.5"
                      >
                        <ShieldAlert className="h-4 w-4 shrink-0" />
                        <span>{errorMsg}</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="lead-success"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="space-y-6 py-4"
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-gray-50 border border-gray-150 text-black flex items-center justify-center">
                  <CheckCircle2 className="h-10 w-10 text-black" />
                </div>
                <span className="font-sans text-[10px] uppercase font-semibold tracking-widest text-gray-400">
                  Call-Back Placed
                </span>
                <h3 className="font-serif text-3xl font-bold text-black">
                  Sanctuary Awaits
                </h3>
                <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed max-w-sm mx-auto font-light">
                  Thank you. An appointments concierge has queued your phone line <strong>{phoneNumber}</strong> details. Expect our secure call back contact within the next hour.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => { setSuccess(false); setPhoneNumber(''); }}
                    className="text-xs font-semibold uppercase text-gray-400 hover:text-black tracking-wider transition-colors"
                  >
                    Submit another lines contact
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
