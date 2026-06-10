import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Car, Map, Users, Plane, Hotel, Utensils } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

function useServices() {
  const { t } = useLanguage();
  return [
    {
      icon: Car,
      title: 'Car Rental',
      description: 'Premium cars with professional drivers for your comfortable journey.',
      color: '#C9952A',
    },
    {
      icon: Map,
      title: 'Tour Packages',
      description: 'Customized tour packages for all your travel needs and budget.',
      color: '#0F2C59',
    },
    {
      icon: Users,
      title: 'Group Tours',
      description: 'Perfect group travel packages with great discounts and comfort.',
      color: '#C9952A',
    },
    {
      icon: Plane,
      title: 'Ticket Booking',
      description: 'Flight, train and bus ticket booking assistance for your trip.',
      color: '#0F2C59',
    },
    {
      icon: Hotel,
      title: 'Hotel Booking',
      description: 'Comfortable and affordable hotel bookings at your destination.',
      color: '#C9952A',
    },
    {
      icon: Utensils,
      title: 'Food & Dining',
      description: 'Experience authentic local cuisine at the best restaurants.',
      color: '#0F2C59',
    },
  ];
}

export default function OurServices() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { t } = useLanguage();
  const services = useServices();

  return (
    <section id="services" className="py-20 bg-[#F8F6F1]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-[#C9952A]/10 text-[#C9952A] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2C59] mb-4">
            What We Offer
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Complete travel solutions to make your journey hassle-free and memorable.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#C9952A]/20"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `${service.color}15` }}
              >
                <service.icon className="w-7 h-7" style={{ color: service.color }} />
              </div>
              <h3 className="text-[#0F2C59] font-bold text-xl mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
