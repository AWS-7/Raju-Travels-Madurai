import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Users, Calendar, Heart, Shield, Car } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="py-20 bg-[#F8F6F1]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://i.pinimg.com/736x/99/de/98/99de98eb4e7bd078d39db104da78444e.jpg"
              alt="Blessings Tours & Travels - About Us"
              className="rounded-3xl shadow-2xl w-full h-[450px] object-cover"
            />
            {/* Decorative Badge */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#C9952A] to-[#b07f20] rounded-2xl shadow-2xl p-6 text-white">
              <p className="text-4xl font-black">11+</p>
              <p className="text-sm font-medium">Years Experience</p>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block bg-[#C9952A]/15 text-[#C9952A] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2C59] mb-6">
              Your Trusted Travel Partner
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-8">
              At Blessings Tours & Travels, we believe every journey should be unforgettable. With 11+ years of experience, we've helped thousands of travelers explore the beauty of India with comfort, safety, and joy.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { icon: MapPin, text: '40+ Destinations' },
                { icon: Users, text: '2000+ Happy Travelers' },
                { icon: Shield, text: '100% Safe Travel' },
                { icon: Car, text: 'Premium Vehicles' },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-md"
                >
                  <div className="w-10 h-10 bg-[#C9952A]/15 rounded-full flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-[#C9952A]" />
                  </div>
                  <span className="text-[#0F2C59] font-semibold text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Our team of professional drivers, curated itineraries, and commitment to customer satisfaction make us the perfect choice for your next adventure.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
