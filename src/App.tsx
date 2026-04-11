import { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Destinations from './components/Destinations';
import Itinerary from './components/Itinerary';
import Gallery from './components/Gallery';
import BookingSteps from './components/BookingSteps';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [searchDest, setSearchDest] = useState('');
  const [bookingDest, setBookingDest] = useState('');
  const bookingRef = useRef<HTMLDivElement>(null);

  const handleSearch = (destination: string) => {
    setSearchDest(destination);
    const el = document.getElementById('packages');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBook = (destination: string) => {
    setBookingDest(destination);
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero onSearch={handleSearch} />
      <Packages highlightDestination={searchDest} onBook={handleBook} />
      <Destinations onBook={handleBook} />
      <Itinerary />
      <Gallery />
      <BookingSteps />
      <div ref={bookingRef}>
        <BookingForm defaultDestination={bookingDest} />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
