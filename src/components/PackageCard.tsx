import { Clock, CheckCircle2, XCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface PackageCardProps {
  pkg: Package;
  onBook: (packageTitle: string) => void;
}

export default function PackageCard({ pkg, onBook }: PackageCardProps) {
  const [expanded, setExpanded] = useState(false);
  const { t } = useLanguage();

  return (
    <motion.div
      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group"
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="relative overflow-hidden h-52 sm:h-56">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {pkg.badge && (
          <div
            className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
              pkg.badgeColor === 'gold'
                ? 'bg-[#C9952A] text-white'
                : 'bg-[#0F2C59] text-white'
            }`}
          >
            {pkg.badge}
          </div>
        )}

        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-bold text-lg leading-tight">{pkg.title}</h3>
          <p className="text-white/80 text-xs mt-0.5">{pkg.subtitle}</p>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1.5 text-gray-500 text-sm">
            <Clock className="w-4 h-4 text-[#C9952A]" />
            <span className="font-medium">{pkg.duration}</span>
          </div>

          {pkg.tieredPricing ? (
            <div className="flex flex-col items-end gap-0.5">
              {pkg.tieredPricing.map((tier) => (
                <div key={tier.label} className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">{tier.label}:</span>
                  <span className="text-[#C9952A] font-bold text-sm">
                    ₹{tier.price.toLocaleString('en-IN')}
                    <span className="text-gray-400 font-normal text-xs"> PP</span>
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-right">
              <span className="text-[#C9952A] font-extrabold text-2xl">
                ₹{pkg.price?.toLocaleString('en-IN')}
              </span>
              <span className="text-gray-400 text-xs font-normal block">Per Person</span>
            </div>
          )}
        </div>

        <div className="mb-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-xs font-semibold text-[#0F2C59] hover:text-[#C9952A] transition-colors"
          >
            {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            {expanded ? t('hide_details') : t('view_details')}
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="pt-3 grid grid-cols-1 gap-3">
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">{t('included')}</p>
                    <ul className="space-y-1">
                      {pkg.inclusions.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" fill="none" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">{t('not_included')}</p>
                    <ul className="space-y-1">
                      {pkg.exclusions.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                          <XCircle className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-auto">
          <button
            onClick={() => onBook(pkg.title)}
            className="w-full bg-[#0F2C59] hover:bg-[#1a4080] text-white py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:shadow-lg group-hover:bg-[#C9952A]"
          >
            {t('book_package')}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
