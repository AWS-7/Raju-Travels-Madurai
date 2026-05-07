import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { packages } from '../data/packages';
import PackageCard from './PackageCard';

interface PackagesProps {
  onBook: (packageTitle: string) => void;
}

export default function Packages({ onBook }: PackagesProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const displayed = packages;

  return (
    <section id="packages" className="py-20 bg-[#F8F6F1]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-[#C9952A]/10 text-[#C9952A] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Our Packages
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2C59] mb-4">
            Handcrafted Travel Experiences
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Complete service from car to bus at minimal rent. Vehicle rental varies by location.
            We offer all South India tours with professional drivers and comfortable vehicles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayed.map((pkg, i) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <PackageCard pkg={pkg} onBook={onBook} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
