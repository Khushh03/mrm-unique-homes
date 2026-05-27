import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Leaf, Building2 } from 'lucide-react';

export function Stats() {
  const [rating, setRating] = useState(0);
  const [amenities, setAmenities] = useState(0);
  const [sustainability, setSustainability] = useState(0);

  useEffect(() => {
    // Simple mock counting effect
    const duration = 1500;
    const interval = 30;
    const steps = duration / interval;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setRating(Math.min(5, Math.ceil((5 / steps) * step)));
      setAmenities(Math.min(15, Math.ceil((15 / steps) * step)));
      setSustainability(Math.min(100, Math.ceil((100 / steps) * step)));

      if (step >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const statsList = [
    {
      id: 'stat-rating',
      icon: Award,
      value: `${rating}★`,
      title: 'Resident Rating',
      desc: 'Top-tier satisfaction rating across all properties'
    },
    {
      id: 'stat-amenities',
      icon: Building2,
      value: `${amenities}+`,
      title: 'Bespoke Amenities',
      desc: 'Expertly designed social and private spaces'
    },
    {
      id: 'stat-service',
      icon: ShieldCheck,
      value: '24/7',
      title: 'Concierge & Security',
      desc: 'Private round-the-clock safety and assistance'
    },
    {
      id: 'stat-eco',
      icon: Leaf,
      value: `${sustainability}%`,
      title: 'Sustainable Design',
      desc: 'Engineered with sustainable, natural materials'
    }
  ];

  return (
    <section className="border-y border-outline-variant/20 py-12 bg-surface select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsList.map((stat, idx) => (
            <motion.div
              key={stat.id}
              id={stat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="p-3 bg-gray-50 border border-gray-150 rounded-full text-gray-400 group-hover:text-black group-hover:bg-gray-100 transition-all duration-300 mb-3">
                <stat.icon className="h-6 w-6" />
              </div>
              <p className="font-serif text-3xl md:text-4xl font-bold text-primary mb-1">
                {stat.value}
              </p>
              <p className="font-sans text-xs font-semibold uppercase tracking-widest text-on-surface-variant group-hover:text-primary duration-300">
                {stat.title}
              </p>
              <p className="hidden lg:block font-sans text-[10px] text-on-surface-variant/70 mt-1 max-w-[150px]">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
