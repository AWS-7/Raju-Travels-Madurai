import { Users, Award, MapPin, ArrowDown, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

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
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F2C59]/90 via-[#0F2C59]/70 to-[#1a3a5c]/85" />
      
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-[#C9952A]/10 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-40 right-10 w-32 h-32 bg-[#C9952A]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20 sm:pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#C9952A]/20 border border-[#C9952A]/40 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C9952A]" fill="#C9952A" />
            <span className="text-[#C9952A] text-xs font-semibold tracking-widest uppercase">
              {t('hero_trusted')}
            </span>
          </div>
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-4"
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
          className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {t('hero_subtitle')}
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl mx-auto px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {[
            { icon: Award, label: t('hero_stat_years'), sub: t('hero_stat_years_sub') },
            { icon: Users, label: t('hero_stat_guests'), sub: t('hero_stat_guests_sub') },
            { icon: MapPin, label: t('hero_stat_destinations'), sub: t('hero_stat_destinations_sub') },
          ].map(({ icon: Icon, label, sub }, index) => (
            <motion.div
              key={label}
              className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 sm:py-4 hover:bg-white/15 hover:border-[#C9952A]/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 sm:w-9 sm:h-9 bg-gradient-to-br from-[#C9952A] to-[#b07f20] rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <Icon className="w-4 h-4 sm:w-4 sm:h-4 text-white" />
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-base sm:text-base leading-none">{label}</div>
                <div className="text-white/60 text-xs mt-0.5">{sub}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.2 }}
        >
          <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-[#C9952A]" />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F8F6F1] to-transparent" />
    </section>
  );
}
