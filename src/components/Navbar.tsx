import { useState, useEffect } from 'react';
import { Menu, X, Plane, Phone, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

function useNavLinks() {
  const { t } = useLanguage();
  return [
    { label: t('nav_home'), href: '#home' },
    { label: t('nav_packages'), href: '#packages' },
    { label: t('nav_destinations'), href: '#destinations' },
    { label: t('nav_itinerary'), href: '#itinerary' },
    { label: t('nav_gallery'), href: '#gallery' },
    { label: t('nav_book_now'), href: '#booking' },
  ];
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const navLinks = useNavLinks();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0F2C59] shadow-xl py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 bg-[#C9952A] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Plane className="w-5 h-5 text-white" fill="white" />
            </div>
            <div className="leading-tight">
              <span className="block text-white font-bold text-lg tracking-wide">Blessings Tours & Travels</span>
              <span className="block text-[#C9952A] text-xs font-medium tracking-widest uppercase">{t('tagline')}</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, index) =>
              index === navLinks.length - 1 ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="bg-[#C9952A] hover:bg-[#b07f20] text-white px-5 py-2 rounded-full font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:scale-105"
                >
                  {t('nav_book_now')}
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-white/90 hover:text-[#C9952A] font-medium text-sm transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C9952A] group-hover:w-full transition-all duration-300" />
                </a>
              )
            )}
            <button
              onClick={() => setLang(lang === 'en' ? 'ta' : 'en')}
              className="flex items-center gap-1.5 text-white/80 hover:text-[#C9952A] text-sm transition-colors px-2 py-1 rounded-lg hover:bg-white/10"
              title={t('language')}
            >
              <Globe className="w-4 h-4" />
              <span className="hidden lg:inline font-semibold">{lang === 'en' ? 'தமிழ்' : 'English'}</span>
            </button>
            <a
              href="tel:+919791697030"
              className="flex items-center gap-1.5 text-white/80 hover:text-[#C9952A] text-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">+91 97916 97030</span>
            </a>
          </div>

          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0F2C59] border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`py-3 px-4 rounded-lg font-medium text-sm transition-all duration-200 ${
                    link.label === t('nav_book_now')
                      ? 'bg-[#C9952A] text-white text-center mt-2'
                      : 'text-white/90 hover:bg-white/10 hover:text-[#C9952A]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+919791697030"
                className="flex items-center gap-2 py-3 px-4 text-white/70 text-sm"
              >
                <Phone className="w-4 h-4" />
                +91 97916 97030
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
