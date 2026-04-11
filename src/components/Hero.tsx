import { useState } from 'react';
import { Search, MapPin, Star, Users, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const popularSearches = ['Goa', 'Manali', 'Kashmir', 'Andaman', 'Ooty', 'Wayanad'];

interface HeroProps {
  onSearch: (destination: string) => void;
}

export default function Hero({ onSearch }: HeroProps) {
  const [search, setSearch] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) onSearch(search.trim());
  };

  const handleQuickSearch = (dest: string) => {
    setSearch(dest);
    onSearch(dest);
  };

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
            Raju Travels
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

        <motion.form
          onSubmit={handleSearch}
          className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          <div className="relative flex-1">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#C9952A]" />
            <input
              type="text"
              placeholder="Where do you want to go?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-gray-800 font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C9952A] shadow-xl text-sm sm:text-base"
            />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-[#C9952A] hover:bg-[#b07f20] text-white px-8 py-4 rounded-2xl font-bold text-sm sm:text-base transition-all duration-200 hover:shadow-xl hover:scale-105 whitespace-nowrap"
          >
            <Search className="w-5 h-5" />
            Search Trips
          </button>
        </motion.form>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-2 mb-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <span className="text-white/60 text-xs font-medium">Popular:</span>
          {popularSearches.map((dest) => (
            <button
              key={dest}
              onClick={() => handleQuickSearch(dest)}
              className="text-xs bg-white/10 hover:bg-[#C9952A]/30 border border-white/20 hover:border-[#C9952A]/50 text-white/80 hover:text-white px-3 py-1.5 rounded-full transition-all duration-200"
            >
              {dest}
            </button>
          ))}
        </motion.div>

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
