import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Shield, Car, Users, MapPin, Award } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '24/7 Service',
    description: 'Round-the-clock customer support for all your travel needs and emergencies.',
    color: '#C9952A',
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Well-maintained vehicles with experienced drivers ensuring your safety throughout the journey.',
    color: '#0F2C59',
  },
  {
    icon: Car,
    title: 'Wide Fleet',
    description: 'From budget cars to luxury vans, we have the perfect vehicle for every group size and budget.',
    color: '#C9952A',
  },
  {
    icon: Users,
    title: 'Expert Drivers',
    description: 'Professional, courteous drivers with extensive knowledge of South Indian routes and destinations.',
    color: '#0F2C59',
  },
  {
    icon: MapPin,
    title: 'Pan-India Coverage',
    description: 'Serving all major cities and tourist destinations across South India with reliable transportation.',
    color: '#C9952A',
  },
  {
    icon: Award,
    title: 'Best Rates',
    description: 'Competitive pricing with no hidden charges. Transparent billing for complete peace of mind.',
    color: '#0F2C59',
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

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
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2C59] mb-4">
            Your Trusted Travel Partner
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Experience the difference with our professional service, well-maintained fleet, and commitment to customer satisfaction.
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
            Ready to Explore South India?
          </h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have experienced the beauty of South India with our reliable and comfortable transportation services.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                const el = document.getElementById('booking');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#C9952A] hover:bg-[#b07f20] text-white px-8 py-3 rounded-full font-bold transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Book Your Trip
            </button>
            <button
              onClick={() => {
                window.location.href = 'tel:+919791697030';
              }}
              className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-3 rounded-full font-bold transition-all duration-200"
            >
              Call Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
