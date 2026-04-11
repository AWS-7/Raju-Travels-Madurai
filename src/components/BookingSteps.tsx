import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, CreditCard, FileCheck, Plane } from 'lucide-react';

const steps = [
  {
    icon: MessageCircle,
    step: '01',
    title: 'Enquire & Choose',
    description: 'Contact us on WhatsApp or fill the booking form. Choose your dream destination and dates.',
    color: '#C9952A',
  },
  {
    icon: CreditCard,
    step: '02',
    title: 'Pay Token Advance',
    description: 'Confirm your booking with a token advance of just ₹2,500 per person to lock your dates.',
    color: '#0F2C59',
    highlight: 'Token: ₹2,500',
  },
  {
    icon: FileCheck,
    step: '03',
    title: 'Receive Itinerary',
    description: 'Get your detailed day-by-day itinerary, hotel confirmations, and train/bus tickets.',
    color: '#C9952A',
  },
  {
    icon: Plane,
    step: '04',
    title: 'Travel & Enjoy!',
    description: 'Pack your bags! Our team is available 24/7 during your trip for any assistance.',
    color: '#0F2C59',
  },
];

export default function BookingSteps() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="py-20 bg-[#0F2C59] relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #C9952A 0%, transparent 50%), radial-gradient(circle at 80% 50%, #C9952A 0%, transparent 50%)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-[#C9952A]/20 text-[#C9952A] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Book in 4 Easy Steps
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-sm sm:text-base">
            We've made booking your dream vacation as simple as possible. Start your journey today!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#C9952A]/30 via-[#C9952A]/60 to-[#C9952A]/30" />

          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div className="bg-white/5 border border-white/10 hover:border-[#C9952A]/40 rounded-2xl p-6 text-center group hover:bg-white/10 transition-all duration-300">
                <div className="relative inline-flex mb-5">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${step.color}20`, border: `2px solid ${step.color}40` }}
                  >
                    <step.icon className="w-8 h-8" style={{ color: step.color }} />
                  </div>
                  <span
                    className="absolute -top-1 -right-1 w-6 h-6 rounded-full text-xs font-extrabold text-white flex items-center justify-center"
                    style={{ backgroundColor: step.color }}
                  >
                    {i + 1}
                  </span>
                </div>

                <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed">{step.description}</p>

                {step.highlight && (
                  <div className="mt-3 inline-block bg-[#C9952A] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {step.highlight}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14 bg-white/5 border border-[#C9952A]/30 rounded-2xl p-6 sm:p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-white/80 text-sm sm:text-base mb-2">
            <span className="text-[#C9952A] font-bold">Note:</span> Balance payment to be made 7 days before departure.
            We accept UPI, Bank Transfer, and Cash.
          </p>
          <p className="text-white/50 text-xs">
            Cancellation policy: 50% refund if cancelled 10+ days before departure. No refund within 7 days.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
