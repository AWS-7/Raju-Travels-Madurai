import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const reviews = [
  {
    id: 1,
    name: 'Ramesh Kumar',
    location: 'Chennai',
    date: 'March 2024',
    rating: 5,
    tour: 'South India 5-Day Tour',
    review: 'Excellent service from Blessings Tours & Travels! The vehicle was clean and comfortable, driver was very professional and knowledgeable about all the routes. Made our family trip to Madurai and Rameshwaram memorable.',
    highlight: 'Professional Driver & Clean Vehicle'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Bangalore',
    date: 'February 2024',
    rating: 5,
    tour: 'Pondicherry Weekend Trip',
    review: 'Booked Innova Crysta for our weekend trip to Pondicherry. The pricing was very reasonable compared to other providers. Vehicle was well-maintained and the driver was punctual. Highly recommend!',
    highlight: 'Best Rates & Punctual Service'
  },
  {
    id: 3,
    name: 'Mohammed Ali',
    location: 'Hyderabad',
    date: 'January 2024',
    rating: 4,
    tour: 'Tempo Traveller for Group',
    review: 'Hired AC Tempo Traveller for our group of 12 people for Kanyakumari trip. Vehicle was spacious and comfortable. Driver was cooperative with our schedule. Minor delay in pickup but overall good experience.',
    highlight: 'Spacious & Comfortable'
  },
  {
    id: 4,
    name: 'Anjali Nair',
    location: 'Kochi',
    date: 'December 2023',
    rating: 5,
    tour: 'Kanyakumari Family Tour',
    review: 'Wonderful experience with Blessings Tours! The Urbania van was luxurious and perfect for our family. Driver took us to all the best spots and even suggested some hidden gems. Will definitely book again!',
    highlight: 'Luxury Van & Expert Guidance'
  },
  {
    id: 5,
    name: 'Suresh Babu',
    location: 'Coimbatore',
    date: 'November 2023',
    rating: 5,
    tour: 'Thanjavur Temple Visit',
    review: 'Used their sedan car for our Thanjavur temple visit. Very affordable pricing and the driver knew all the shortcuts to avoid traffic. Vehicle was in excellent condition. Thank you!',
    highlight: 'Affordable & Time-Saving'
  },
  {
    id: 6,
    name: 'Divya Reddy',
    location: 'Tirupati',
    date: 'October 2023',
    rating: 4,
    tour: 'Multi-City Tour',
    review: 'Booked Ertiga for our multi-city tour covering Chennai, Pondicherry, and Madurai. Good value for money. Driver was experienced and helped with luggage. Overall satisfied with the service.',
    highlight: 'Great Value for Money'
  }
];

export default function Reviews() {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % reviews.length;
        if (scrollRef.current) {
          const cardWidth = scrollRef.current.scrollWidth / reviews.length;
          scrollRef.current.scrollTo({
            left: nextIndex * cardWidth,
            behavior: 'smooth'
          });
        }
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [inView]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-[#C9952A] fill-[#C9952A]' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-[#0F2C59] relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 20%, #C9952A 0%, transparent 50%), radial-gradient(circle at 70% 80%, #C9952A 0%, transparent 50%)',
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
            {t('reviews_badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            {t('reviews_title')}
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            {t('reviews_subtitle')}
          </p>
        </motion.div>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto max-w-6xl mx-auto pb-4 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {reviews.map((review, i) => (
            <motion.div
              key={review.id}
              className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#C9952A]/40 rounded-2xl p-6 transition-all duration-300 hover:bg-white/15 snap-center"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#C9952A] to-[#b07f20] rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base">{review.name}</h3>
                    <div className="flex items-center gap-2 text-white/60 text-xs">
                      <MapPin className="w-3 h-3" />
                      <span>{review.location}</span>
                      <span>•</span>
                      <Calendar className="w-3 h-3" />
                      <span>{review.date}</span>
                    </div>
                  </div>
                </div>
                <Quote className="w-6 h-6 text-[#C9952A]/20 group-hover:text-[#C9952A]/40 transition-colors" />
              </div>

              <div className="flex items-center gap-1 mb-3">
                {renderStars(review.rating)}
                <span className="text-white/60 text-xs ml-2">({review.rating}.0)</span>
              </div>

              <p className="text-white/80 text-sm leading-relaxed mb-3 line-clamp-3">
                {review.review}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <span className="text-[#C9952A] text-xs font-medium">
                  {review.tour}
                </span>
                {review.highlight && (
                  <span className="bg-[#C9952A]/20 text-[#C9952A] text-xs px-2 py-1 rounded-full">
                    {review.highlight}
                  </span>
                )}
              </div>
              </motion.div>
            ))}
        </div>

        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-[#C9952A]/20 to-[#b07f20]/20 border border-[#C9952A]/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('join_travelers')}
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              {t('join_travelers_text')}
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
