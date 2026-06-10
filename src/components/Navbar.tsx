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
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden fixed top-0 right-0 h-full w-3/4 max-w-sm bg-[#0F2C59] shadow-2xl z-50 overflow-y-auto"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#C9952A] rounded-full flex items-center justify-center">
                    <Plane className="w-4 h-4 text-white" fill="white" />
                  </div>
                  <span className="text-white font-bold text-sm">Blessings Tours</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/70 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-2 flex-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: index * 0.05 }}
                    className={`py-3 px-4 rounded-xl font-medium text-sm transition-all duration-200 ${
                      link.label === t('nav_book_now')
                        ? 'bg-gradient-to-r from-[#C9952A] to-[#b07f20] text-white text-center mt-4 shadow-lg'
                        : 'text-white/90 hover:bg-white/10 hover:text-[#C9952A] border border-transparent hover:border-white/10'
                    }`}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href="tel:+919791697030"
                  className="flex items-center gap-3 py-3 px-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 bg-[#C9952A]/20 rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#C9952A]" />
                  </div>
                  <div>
                    <span className="block text-white text-sm font-medium">+91 97916 97030</span>
                    <span className="text-xs text-white/50">Call us now</span>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </nav>
  );
}
