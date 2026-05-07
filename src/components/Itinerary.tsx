import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Star, Utensils, Bike } from 'lucide-react';
import { southIndiaItinerary } from '../data/packages';

const dayIcons = [MapPin, Bike, Utensils, Star, MapPin];
const dayColors = ['#C9952A', '#0F2C59', '#C9952A', '#0F2C59', '#C9952A'];

export default function Itinerary() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="itinerary" className="py-20 bg-[#F8F6F1]" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-[#C9952A]/10 text-[#C9952A] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Day-by-Day Guide
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2C59] mb-4">
            South India 5-Day Tour
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            Every moment planned, every experience curated — your perfect South India journey starts here.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#C9952A] via-[#0F2C59] to-[#C9952A] sm:-translate-x-0.5" />

          <div className="space-y-10">
            {southIndiaItinerary.map((day, i) => {
              const Icon = dayIcons[i % dayIcons.length];
              const color = dayColors[i % dayColors.length];
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={day.day}
                  className={`relative flex items-start gap-6 sm:gap-0 ${
                    isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  <div
                    className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg border-4 border-[#F8F6F1] sm:mx-auto sm:self-start"
                    style={{ backgroundColor: color }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white border-2 flex items-center justify-center text-xs font-extrabold"
                      style={{ color, borderColor: color }}>
                      {day.day}
                    </span>
                  </div>

                  <div className={`flex-1 sm:w-5/12 ${isLeft ? 'sm:mr-auto sm:pr-10' : 'sm:ml-auto sm:pl-10'}`}>
                    <div className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider" style={{ color }}>
                            Day {day.day}
                          </span>
                          <h3 className="text-[#0F2C59] font-bold text-lg leading-tight mt-0.5">
                            {day.title}
                          </h3>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {day.activities.map((activity) => (
                          <li key={activity} className="flex items-start gap-2 text-gray-600 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: color }} />
                            {activity}
                          </li>
                        ))}
                      </ul>

                      {day.highlight && (
                        <div
                          className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold"
                          style={{ backgroundColor: `${color}15`, color }}
                        >
                          <Star className="w-3.5 h-3.5 flex-shrink-0" fill={color} />
                          {day.highlight}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
