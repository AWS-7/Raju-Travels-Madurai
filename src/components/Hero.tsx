import { ArrowDown, Sparkles, Menu, Plane } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';

export default function Hero() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleExplorePackages = () => {
    const el = document.getElementById('packages');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactUs = () => {
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Mobile Header */}
      <div className="absolute top-0 left-0 right-0 z-20 px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#C9952A] rounded-full flex items-center justify-center shadow-lg">
            <Plane className="w-5 h-5 text-white" fill="white" />
          </div>
          <div className="leading-tight">
            <span className="block text-white font-bold text-sm tracking-wide">Blessings Tours</span>
            <span className="block text-[#C9952A] text-[10px] font-medium tracking-widest uppercase">{t('tagline')}</span>
          </div>
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Hero Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F2C59]/85 via-[#0F2C59]/75 to-[#0F2C59]/90" />

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-4 sm:px-6 pt-20 pb-24">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#C9952A]/20 backdrop-blur-md border border-[#C9952A]/40 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-[#C9952A]" fill="#C9952A" />
              <span className="text-[#C9952A] text-xs font-semibold tracking-widest uppercase">
                {t('hero_trusted')}
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {t('hero_title')}{' '}
            <span className="text-[#C9952A] relative inline-block">
              {t('hero_company')}
              <svg
                className="absolute -bottom-1 sm:-bottom-2 left-0 w-full"
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
            className="text-white/90 text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {t('hero_subtitle')}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <button
              onClick={handleExplorePackages}
              className="w-full sm:w-auto bg-[#C9952A] hover:bg-[#b07f20] text-white px-8 py-4 rounded-full font-bold text-base transition-all duration-200 hover:shadow-xl hover:scale-105"
            >
              {t('cta_explore_packages') || 'Explore Packages'}
            </button>
            <button
              onClick={handleContactUs}
              className="w-full sm:w-auto bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/30 text-white px-8 py-4 rounded-full font-bold text-base transition-all duration-200 hover:shadow-xl"
            >
              {t('cta_contact_us') || 'Contact Us'}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1 }}
      >
        <span className="text-white/50 text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-[#C9952A]" />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8F6F1] to-transparent" />
    </section>
  );
}
