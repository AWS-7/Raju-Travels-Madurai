import { useRef } from 'react';
import { Star, Users, Award, MapPin } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F2C59]/80 via-[#0F2C59]/60 to-[#0F2C59]/90" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#C9952A]/20 border border-[#C9952A]/40 rounded-full px-4 py-1.5 mb-6">
            <Star className="w-3.5 h-3.5 text-[#C9952A]" fill="#C9952A" />
            <span className="text-[#C9952A] text-xs font-semibold tracking-widest uppercase">
              Trusted by 2000+ Happy Travelers
            </span>
          </div>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Explore India with{' '}
          <span className="text-[#C9952A] relative">
            Blessings Tours & Travels
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 10 Q75 2 150 8 Q225 14 298 6"
                stroke="#C9952A"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>
        </motion.h1>

        <motion.p
          className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          2+ years of creating unforgettable journeys. Budget-friendly packages, handcrafted
          itineraries, and memories that last a lifetime.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
        >
          {[
            { icon: Award, label: '2+ Years', sub: 'of Experience' },
            { icon: Users, label: '2000+', sub: 'Happy Guests' },
            { icon: MapPin, label: '50+', sub: 'Destinations' },
          ].map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3"
            >
              <div className="w-9 h-9 bg-[#C9952A]/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4 text-[#C9952A]" />
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-base leading-none">{label}</div>
                <div className="text-white/60 text-xs mt-0.5">{sub}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8F6F1] to-transparent" />
    </section>
  );
}
