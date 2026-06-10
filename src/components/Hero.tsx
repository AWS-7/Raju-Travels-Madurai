import { ArrowDown, Sparkles, CheckCircle, MapPin, Users, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const handleExplorePackages = () => {
    const el = document.getElementById('packages');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookTrip = () => {
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[75vh] sm:min-h-screen flex items-center overflow-hidden"
    >
      {/* Hero Background */}
      <div className="absolute inset-0">
        <img
          src="https://i.pinimg.com/736x/11/7b/55/117b55497cbf1aaf447b87be05c3b0e3.jpg"
          alt="Luxury Travel - India Destinations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2C59]/90 via-[#0F2C59]/70 to-[#0F2C59]/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#C9952A]/15 backdrop-blur-xl border border-[#C9952A]/30 rounded-full px-5 py-2.5 mb-8 mx-auto">
              <Sparkles className="w-4 h-4 text-[#C9952A]" fill="#C9952A" />
              <span className="text-[#C9952A] text-xs font-bold tracking-widest uppercase">
                Trusted by 2000+ Happy Travelers
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8">
              Explore India
              <br />
              With{' '}
              <span className="text-[#C9952A]">
                Blessings Tours & Travels
              </span>
            </h1>

            <p className="text-white/85 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
              11+ years of creating unforgettable journeys with customized tour packages and memorable travel experiences.
            </p>

            {/* Trust Points */}
            <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
              {[
                { icon: Calendar, text: '11+ Years Experience' },
                { icon: Users, text: '2000+ Happy Travelers' },
                { icon: MapPin, text: '40+ Destinations' },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5"
                >
                  <item.icon className="w-8 h-8 text-[#C9952A] mb-3 mx-auto" />
                  <span className="text-white text-sm font-medium block">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <button
                onClick={handleExplorePackages}
                className="w-full sm:w-auto bg-gradient-to-r from-[#C9952A] to-[#b07f20] hover:from-[#b07f20] hover:to-[#9a6a18] text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 shadow-xl"
              >
                Explore Packages
              </button>
              <button
                onClick={handleBookTrip}
                className="w-full sm:w-auto bg-white/10 backdrop-blur-xl hover:bg-white/20 border-2 border-white/30 hover:border-[#C9952A]/50 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Book Your Trip
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <span className="text-white/40 text-xs uppercase tracking-[0.2em] font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-[#C9952A]" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F8F6F1] to-transparent" />
    </section>
  );
}
