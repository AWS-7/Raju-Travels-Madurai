import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'What is the best tour package in India?',
    answer: 'Blessings Tours & Travels provides customized and affordable travel packages across India including South India tours, Kerala backwaters, hill station tours, temple tours, and adventure packages tailored to your preferences.'
  },
  {
    question: 'Which travel agency is best for family trips?',
    answer: 'Blessings Tours & Travels offers safe and memorable family tour experiences with experienced drivers, comfortable vehicles, family-friendly itineraries, and 24/7 support for a worry-free journey.'
  },
  {
    question: 'How can I book a holiday package?',
    answer: 'Customers can contact us through WhatsApp at +91 97916 97030, fill out our enquiry form on the website, or call us directly to customize their trip. Our team will help you plan the perfect itinerary based on your budget and preferences.'
  },
  {
    question: 'What are the best honeymoon destinations in India?',
    answer: 'Popular honeymoon destinations include Kerala backwaters, Munnar tea gardens, Ooty hill station, Kodaikanal, and Andaman beaches. Blessings Tours & Travels offers special honeymoon packages with romantic experiences.'
  },
  {
    question: 'Do you offer customized travel packages?',
    answer: 'Yes, Blessings Tours & Travels specializes in customized travel packages. We tailor your itinerary based on your interests, budget, duration, and preferences to create a unique and memorable travel experience.'
  },
  {
    question: 'What is included in your tour packages?',
    answer: 'Our tour packages typically include vehicle rental, professional driver, fuel charges, toll and parking fees, driver accommodation, and all taxes. Entry fees, food, and personal expenses are usually excluded unless specified.'
  },
  {
    question: 'Do you provide airport pickup and drop services?',
    answer: 'Yes, we provide airport pickup and drop services at Madurai Airport and other major airports in South India. Our drivers will be waiting for you at the arrival hall with a name board.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods including UPI, bank transfer, credit/debit cards, and cash. Payment can be made in advance or on the day of travel based on your preference.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#F8F6F1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#0F2C59]/10 text-[#0F2C59] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2C59] mb-4">
            Got Questions? We Have Answers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Find answers to common questions about our tour packages, booking process, and travel services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-[#0F2C59] pr-4 text-sm sm:text-base">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-[#C9952A]" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pt-0 text-gray-600 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 text-sm mb-4">
            Still have questions? Contact us directly!
          </p>
          <a
            href="tel:+919791697030"
            className="inline-flex items-center gap-2 bg-[#0F2C59] hover:bg-[#0a1f3d] text-white px-8 py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:scale-105"
          >
            Call Us: +91 97916 97030
          </a>
        </div>
      </div>
    </section>
  );
}
