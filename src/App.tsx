import { useState, useRef, Suspense, lazy } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import HeroStats from './components/HeroStats';
import Packages from './components/Packages';
import Destinations from './components/Destinations';
import CarRental from './components/CarRental';
import WhyChooseUs from './components/WhyChooseUs';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Lazy load non-critical components
const Gallery = lazy(() => import('./components/Gallery'));
const Reviews = lazy(() => import('./components/Reviews'));
const FAQ = lazy(() => import('./components/FAQ'));

function App() {
  const [bookingDest, setBookingDest] = useState('');
  const [showAllGallery, setShowAllGallery] = useState(false);
  const bookingRef = useRef<HTMLDivElement>(null);

  const handleBook = (destination: string) => {
    setBookingDest(destination);
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <LanguageProvider>
      <div className="font-sans antialiased">
        <Navbar />
        <Hero />
        <About />
        <HeroStats />
        <Packages onBook={handleBook} />
          <Destinations onBook={handleBook} />
        <CarRental />
          <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading gallery...</div>}>
          <Gallery limit={showAllGallery ? undefined : 10} onViewAll={() => setShowAllGallery(true)} />
        </Suspense>
        <WhyChooseUs />
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading reviews...</div>}>
          <Reviews />
        </Suspense>
        <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading FAQ...</div>}>
          <FAQ />
        </Suspense>
        <div ref={bookingRef}>
          <BookingForm defaultDestination={bookingDest} />
        </div>
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}

export default App;
