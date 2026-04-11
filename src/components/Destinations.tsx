import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { destinations } from '../data/packages';

interface DestinationsProps {
  onBook: (destination: string) => void;
}

export default function Destinations({ onBook }: DestinationsProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="destinations" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-[#0F2C59]/10 text-[#0F2C59] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Featured Destinations
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2C59] mb-4">
            India's Most Loved Places
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Explore the diversity of India — from misty hill stations to tropical beaches,
            we'll take you there with comfort and style.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {destinations.map((dest, i) => (
            <motion.button
              key={dest.name}
              onClick={() => onBook(dest.name)}
              className="relative group rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer text-left"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-[#0F2C59]/0 group-hover:bg-[#0F2C59]/30 transition-colors duration-300" />

              <div className="absolute bottom-0 left-0 right-0 p-3">
                <div className="flex items-center gap-1 mb-0.5">
                  <MapPin className="w-3 h-3 text-[#C9952A]" fill="#C9952A" />
                  <span className="text-[#C9952A] text-xs font-bold">{dest.tag}</span>
                </div>
                <span className="text-white font-bold text-sm leading-tight block">{dest.name}</span>
              </div>

              <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-[#C9952A] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  Book Now
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
