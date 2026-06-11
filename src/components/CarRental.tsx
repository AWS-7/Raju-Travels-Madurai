import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Car, Users, MapPin, Users as UsersIcon, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

function useCarServices() {
  const { t } = useLanguage();
  return [
    {
      icon: Car,
      title: t('car_rental_service1'),
      description: t('car_rental_service1_desc'),
      color: '#C9952A',
    },
    {
      icon: Users,
      title: t('car_rental_service2'),
      description: t('car_rental_service2_desc'),
      color: '#0F2C59',
    },
    {
      icon: MapPin,
      title: t('car_rental_service3'),
      description: t('car_rental_service3_desc'),
      color: '#C9952A',
    },
    {
      icon: UsersIcon,
      title: t('car_rental_service4'),
      description: t('car_rental_service4_desc'),
      color: '#0F2C59',
    },
  ];
}

function useTrustPoints() {
  const { t } = useLanguage();
  return [
    t('car_trust_1'),
    t('car_trust_2'),
    t('car_trust_3'),
    t('car_trust_4'),
    t('car_trust_5'),
  ];
}

export default function CarRental() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { t } = useLanguage();
  const services = useCarServices();
  const trustPoints = useTrustPoints();

  return (
    <section className="py-20 bg-gradient-to-br from-[#0F2C59]/5 to-[#C9952A]/5" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://i.pinimg.com/736x/89/de/d7/89ded76624f85cf9c28b078abf09303a.jpg"
                alt="Premium car rental with family on scenic road trip"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2C59]/70 to-transparent"></div>
            </div>
            {/* Floating card */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#C9952A]/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-[#C9952A]" />
                </div>
                <div>
                  <p className="text-[#0F2C59] font-bold text-lg">100%</p>
                  <p className="text-gray-500 text-sm">Verified Partners</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-[#C9952A]/10 text-[#C9952A] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
              {t('car_rental_badge')}
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2C59] mb-4 leading-tight">
              {t('car_rental_title')}
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {t('car_rental_description')}
            </p>

            {/* Services Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="bg-white rounded-2xl p-5 shadow-md border border-gray-100 hover:shadow-xl hover:border-[#C9952A]/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${service.color}15` }}
                    >
                      <service.icon className="w-5 h-5" style={{ color: service.color }} />
                    </div>
                    <div>
                      <h3 className="text-[#0F2C59] font-bold text-base mb-1">{service.title}</h3>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Points */}
            <div className="mb-8">
              <h3 className="text-[#0F2C59] font-bold text-xl mb-4">{t('car_trust_title')}</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {trustPoints.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-[#C9952A] flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <button
                onClick={() => {
                  const el = document.getElementById('booking');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-travel bg-[#C9952A] hover:bg-[#b07f20] text-white px-8 py-3 rounded-full font-bold transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                {t('car_cta_book')}
              </button>
              <button
                onClick={() => {
                  window.location.href = 'https://wa.me/919791697030?text=Hi! I want to rent a car for my trip with Blessings Tours & Travels.';
                }}
                className="btn-travel bg-white border-2 border-[#0F2C59] text-[#0F2C59] hover:bg-[#0F2C59] hover:text-white px-8 py-3 rounded-full font-bold transition-all duration-200"
              >
                {t('car_cta_contact')}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
