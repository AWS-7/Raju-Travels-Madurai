import { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Packages from './components/Packages';
import Destinations from './components/Destinations';
import Itinerary from './components/Itinerary';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [bookingDest, setBookingDest] = useState('');
  const bookingRef = useRef<HTMLDivElement>(null);

  const handleBook = (destination: string) => {
    setBookingDest(destination);
    const el = document.getElementById('booking');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero />
      <Packages onBook={handleBook} />
      <Destinations onBook={handleBook} />
      <Itinerary />
      <Gallery />
      <WhyChooseUs />
      <Reviews />
      <div ref={bookingRef}>
        <BookingForm defaultDestination={bookingDest} />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
