import React from 'react';
import { motion } from 'motion/react';
import { 
  Snowflake, 
  Zap, 
  Bus, 
  Wifi, 
  Shield, 
  Heart, 
  Wind, 
  Utensils, 
  Clock, 
  Droplet, 
  Tv, 
  MapPin 
} from 'lucide-react';

interface AmenityCard {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const GIRLS_ONLY_AMENITIES: AmenityCard[] = [
  {
    id: 'ac',
    name: 'AC-Equipped Rooms',
    description: 'Individual air conditioning in every room for year-round comfort.',
    icon: Snowflake
  },
  {
    id: 'power',
    name: '24/7 Power Backup',
    description: 'Uninterrupted electricity with full generator backup at all times.',
    icon: Zap
  },
  {
    id: 'shuttle',
    name: 'Free Campus Shuttle',
    description: 'Complimentary drop and pick-up service to college every day.',
    icon: Bus
  },
  {
    id: 'wifi',
    name: 'High-Speed Wi-Fi',
    description: 'Fast, reliable internet across all rooms and common areas.',
    icon: Wifi
  },
  {
    id: 'security',
    name: 'CCTV & Security',
    description: '360° surveillance with trained security personnel round the clock.',
    icon: Shield
  },
  {
    id: 'care',
    name: 'Motherly Care',
    description: 'Warm personal attention from our owner — you\'re family here.',
    icon: Heart
  },
  {
    id: 'water',
    name: 'Geyser & Hot Water',
    description: 'Instant hot water available at all hours, every single day.',
    icon: Wind
  },
  {
    id: 'meals',
    name: 'Home-Style Meals',
    description: 'Freshly prepared, hygienic and nutritious meals daily.',
    icon: Utensils
  },
  {
    id: 'laundry',
    name: 'Washing Machine',
    description: 'Shared laundry facility available to all residents at no extra cost.',
    icon: Clock
  },
  {
    id: 'tv',
    name: 'Smart TV Lounge',
    description: 'Relax and unwind with a premium smart TV in the shared lounge.',
    icon: Tv
  },
  {
    id: 'transport',
    name: 'NCR Transport',
    description: 'Convenient transport options available across the NCR region.',
    icon: Droplet
  },
  {
    id: 'study',
    name: 'Student-Friendly Space',
    description: 'Peaceful atmosphere designed for focused study and growth.',
    icon: MapPin
  }
];

export function GirlsOnlyAmenities() {
  return (
    <section className="min-h-screen py-20 md:py-24 px-6 md:px-12 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-gray-500 mb-4">
            MRM Unique Homes · Girls-Only PG
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 mb-6 leading-tight">
            Accommodation with Complete Care
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
            Safe, comfortable, and fully secure accommodation for girls with thoughtfully designed amenities and warm hospitality.
          </p>
        </motion.div>

        {/* Grid of Amenities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-200 mb-16">
          {GIRLS_ONLY_AMENITIES.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <motion.div
                key={amenity.id}
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: index * 0.06, 
                  duration: 0.55 
                }}
                viewport={{ once: true, margin: '-50px' }}
                className="group border-r border-b border-gray-200 p-8 md:p-10 text-center bg-gray-50 hover:bg-white transition-colors duration-300 cursor-default"
              >
                {/* Icon Circle */}
                <div className="flex justify-center mb-6">
                  <div className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center bg-transparent group-hover:border-gray-900 group-hover:bg-gray-900 transition-all duration-300">
                    <Icon className="w-5 h-5 text-gray-900 group-hover:text-white transition-colors duration-300 stroke-[1.5]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-serif text-lg md:text-xl font-semibold text-gray-900 mb-3">
                  {amenity.name}
                </h3>
                <p className="text-xs md:text-sm font-light text-gray-600 leading-relaxed mb-5 min-h-12">
                  {amenity.description}
                </p>

                {/* Learn More Link */}
                <motion.a
                  href="#"
                  whileHover={{ x: 4 }}
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-gray-900 transition-colors duration-250"
                >
                  Learn More
                  <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </motion.a>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-3 border border-gray-900 text-gray-900 font-semibold uppercase text-xs tracking-wider hover:bg-gray-900 hover:text-white transition-all duration-300 rounded-full"
          >
            Book Your Stay
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
