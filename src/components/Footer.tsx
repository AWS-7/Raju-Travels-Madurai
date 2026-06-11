import { Plane, Instagram, Facebook, Youtube, Phone, Mail, MapPin, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

function useQuickLinks() {
  const { t } = useLanguage();
  return [
    { label: t('nav_home'), href: '#home' },
    { label: t('nav_packages'), href: '#packages' },
    { label: t('nav_destinations'), href: '#destinations' },
    { label: t('nav_book_now'), href: '#booking' },
  ];
}

const destinations = ['Goa', 'Manali', 'Kashmir', 'Andaman', 'Wayanad', 'Munnar', 'Ooty', 'Kodaikanal'];

export default function Footer() {
  const { t } = useLanguage();
  const quickLinks = useQuickLinks();
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080F1F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="mb-4">
              <div className="p-3 bg-white rounded-xl mb-3 inline-block">
                <img 
                  src="/images/logo-new.png" 
                  alt="Blessings Tours & Travels Logo" 
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-white/50 text-xs leading-relaxed mb-5">
                {t('footer_desc')}
              </p>
            </div>
            <div className="flex gap-3">
              {[
                { icon: Instagram, label: 'Instagram' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Youtube, label: 'YouTube' },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 bg-white/5 hover:bg-[#C9952A] rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">{t('quick_links')}</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/50 hover:text-[#C9952A] text-sm transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">{t('destinations_title_footer')}</h4>
            <ul className="space-y-2.5">
              {destinations.map((dest) => (
                <li key={dest}>
                  <button
                    onClick={() => handleNavClick('#booking')}
                    className="text-white/50 hover:text-[#C9952A] text-sm transition-colors duration-200 text-left flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 bg-[#C9952A]/40 group-hover:bg-[#C9952A] rounded-full transition-colors" />
                    {dest}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">{t('contact_us')}</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919791697030"
                  className="flex items-start gap-3 text-white/50 hover:text-[#C9952A] transition-colors group"
                >
                  <div className="w-8 h-8 bg-white/5 group-hover:bg-[#C9952A]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-3.5 h-3.5 text-[#C9952A]" />
                  </div>
                  <div>
                    <span className="block text-white text-sm font-medium">+91 97916 97030</span>
                    <span className="text-xs">{t('call_time')}</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+916383936813"
                  className="flex items-start gap-3 text-white/50 hover:text-[#C9952A] transition-colors group"
                >
                  <div className="w-8 h-8 bg-white/5 group-hover:bg-[#C9952A]/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-3.5 h-3.5 text-[#C9952A]" />
                  </div>
                  <div>
                    <span className="block text-white text-sm font-medium">+91 63839 36813</span>
                    <span className="text-xs">{t('call_time')}</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:ezekieledinbaro@gmail.com"
                  className="flex items-start gap-3 text-white/50 hover:text-[#C9952A] transition-colors group"
                >
                  <div className="w-8 h-8 bg-white/5 group-hover:bg-[#C9952A]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-3.5 h-3.5 text-[#C9952A]" />
                  </div>
                  <span className="text-sm text-white self-center">ezekieledinbaro@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/50">
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-[#C9952A]" />
                  </div>
                  <span className="text-sm text-white/50">India (Pan-India Tours)</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} {t('rights')}
          </p>
          <p className="text-white/30 text-xs flex items-center gap-1">
            {t('made_with')} <Heart className="w-3 h-3 text-red-400 fill-red-400" /> {t('for_travelers')}
          </p>
        </div>

        <div className="border-t border-white/10 pt-4 mt-4 text-center">
          <p className="text-white/40 text-xs">
            Developed By <span className="text-[#C9952A] font-semibold">AWS-Agni Web Solution</span> - <a href="tel:+919080700642" className="text-[#C9952A] hover:text-[#b07f20] transition-colors">9080700642</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
