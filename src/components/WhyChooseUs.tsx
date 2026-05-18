import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Shield, Car, Users, MapPin, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

function useFeatures() {
  const { t } = useLanguage();
  return [
    {
      icon: Clock,
      title: t('feature_24_7'),
      description: t('feature_24_7_desc'),
      color: '#C9952A',
    },
    {
      icon: Shield,
      title: t('feature_safe'),
      description: t('feature_safe_desc'),
      color: '#0F2C59',
    },
    {
      icon: Car,
      title: t('feature_fleet'),
      description: t('feature_fleet_desc'),
      color: '#C9952A',
    },
    {
      icon: Users,
      title: t('feature_drivers'),
      description: t('feature_drivers_desc'),
      color: '#0F2C59',
    },
    {
      icon: MapPin,
      title: t('feature_coverage'),
      description: t('feature_coverage_desc'),
      color: '#C9952A',
    },
    {
      icon: Award,
      title: t('feature_rates'),
      description: t('feature_rates_desc'),
      color: '#0F2C59',
    },
  ];
}

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { t } = useLanguage();
  const features = useFeatures();

  return (
    <section className="py-20 bg-[#F8F6F1]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-[#C9952A]/10 text-[#C9952A] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            {t('why_badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2C59] mb-4">
            {t('why_title')}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            {t('why_subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 h-full border border-gray-100 hover:border-[#C9952A]/20">
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#0F2C59] font-bold text-lg mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14 bg-gradient-to-r from-[#0F2C59] to-[#1a3d7a] rounded-2xl p-8 sm:p-10 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            {t('cta_title')}
          </h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            {t('cta_subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                const el = document.getElementById('booking');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#C9952A] hover:bg-[#b07f20] text-white px-8 py-3 rounded-full font-bold transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              {t('cta_book')}
            </button>
            <button
              onClick={() => {
                window.location.href = 'https://wa.me/919791697030?text=Hi! I want to book a trip with Blessings Tours & Travels.';
              }}
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-3 rounded-full font-bold transition-all duration-200"
            >
              {t('cta_whatsapp')}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
