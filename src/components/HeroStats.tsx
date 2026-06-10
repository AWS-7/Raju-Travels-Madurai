import { Users, Award, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

export default function HeroStats() {
  const { t } = useLanguage();

  return (
    <section className="relative -mt-20 z-30 px-4 sm:px-6 pb-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {[
            { icon: Award, label: t('hero_stat_years'), sub: t('hero_stat_years_sub') },
            { icon: Users, label: t('hero_stat_guests'), sub: t('hero_stat_guests_sub') },
            { icon: MapPin, label: t('hero_stat_destinations'), sub: t('hero_stat_destinations_sub') },
          ].map(({ icon: Icon, label, sub }, index) => (
            <motion.div
              key={label}
              className="bg-black/30 backdrop-blur-xl border border-white/20 rounded-2xl p-3 sm:p-4 text-center hover:bg-black/40 hover:border-[#C9952A]/50 transition-all duration-300 shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-[#C9952A] to-[#b07f20] rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div className="text-white font-bold text-sm sm:text-base leading-none">{label}</div>
              <div className="text-white/70 text-[10px] sm:text-xs mt-1">{sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
