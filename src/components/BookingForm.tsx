import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, CheckCircle2, User, Phone, MapPin, Calendar, Users, MessageSquare, Map } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { BookingFormData } from '../types';

const DESTINATIONS = [
  'Goa', 'Manali', 'Kashmir', 'Andaman', 'Wayanad',
  'Munnar', 'Ooty', 'Kodaikanal', 'Other',
];

interface BookingFormProps {
  defaultDestination?: string;
}

export default function BookingForm({ defaultDestination = '' }: BookingFormProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const [form, setForm] = useState<BookingFormData>({
    name: '',
    phone: '',
    current_location: '',
    destination: defaultDestination,
    tour_date: '',
    num_members: 1,
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: name === 'num_members' ? Number(value) : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const { error: dbError } = await supabase.from('bookings').insert([form]);

    if (dbError) {
      setError('Something went wrong. Please try again or WhatsApp us directly.');
    } else {
      setSuccess(true);
    }
    setLoading(false);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C9952A]/40 focus:border-[#C9952A] bg-white text-gray-800 text-sm transition-all duration-200 placeholder-gray-400';

  return (
    <section id="booking" className="py-20 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-[#C9952A]/10 text-[#C9952A] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
            Book Your Trip
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F2C59] mb-4">
            Ready to Explore?
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm sm:text-base">
            Fill out the form below and our travel expert will call you within 2 hours!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <motion.div
            className="lg:col-span-3 bg-[#F8F6F1] rounded-3xl p-6 sm:p-8 shadow-sm"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {success ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-[#0F2C59] font-bold text-2xl mb-2">Booking Received!</h3>
                <p className="text-gray-500 text-sm mb-6">
                  Thank you, <strong>{form.name}</strong>! Our team will call you within 2 hours to confirm your{' '}
                  <strong>{form.destination}</strong> trip.
                </p>
                <button
                  onClick={() => { setSuccess(false); setForm({ name: '', phone: '', current_location: '', destination: '', tour_date: '', num_members: 1, message: '' }); }}
                  className="bg-[#0F2C59] hover:bg-[#C9952A] text-white px-6 py-3 rounded-xl font-bold text-sm transition-colors"
                >
                  Book Another Trip
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={`${inputClass} pl-10`}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 97916 97030"
                        className={`${inputClass} pl-10`}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
                      Current Location *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        name="current_location"
                        required
                        value={form.current_location}
                        onChange={handleChange}
                        placeholder="Your city / state"
                        className={`${inputClass} pl-10`}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
                      Destination *
                    </label>
                    <div className="relative">
                      <Map className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <select
                        name="destination"
                        required
                        value={form.destination}
                        onChange={handleChange}
                        className={`${inputClass} pl-10 appearance-none`}
                      >
                        <option value="">Select destination</option>
                        {DESTINATIONS.map((d) => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
                      Tour Date *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="date"
                        name="tour_date"
                        required
                        value={form.tour_date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className={`${inputClass} pl-10`}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
                      Number of Members *
                    </label>
                    <div className="relative">
                      <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="number"
                        name="num_members"
                        required
                        min={1}
                        max={50}
                        value={form.num_members}
                        onChange={handleChange}
                        className={`${inputClass} pl-10`}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
                    Special Requests (Optional)
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
                    <textarea
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Any special requirements, dietary needs, or questions..."
                      className={`${inputClass} pl-10 resize-none`}
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-red-500 text-xs bg-red-50 px-4 py-3 rounded-xl">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-[#0F2C59] hover:bg-[#C9952A] text-white py-4 rounded-xl font-bold text-sm transition-all duration-200 hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Booking Request
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[#0F2C59] rounded-2xl p-5 text-white">
              <h3 className="font-bold text-base mb-1">Why Book With Us?</h3>
              <p className="text-white/60 text-xs mb-4">Trusted by 2000+ happy travelers nationwide</p>
              {[
                'Best Price Guarantee',
                'Flexible Cancellation',
                '24/7 Trip Support',
                'Customizable Packages',
                'Train & Bus Bookings Included',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 py-2 border-b border-white/10 last:border-0">
                  <div className="w-1.5 h-1.5 bg-[#C9952A] rounded-full flex-shrink-0" />
                  <span className="text-white/80 text-xs">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-[#C9952A]/10 border border-[#C9952A]/20 rounded-2xl p-5">
              <p className="text-[#0F2C59] font-bold text-sm mb-1">Prefer to chat directly?</p>
              <p className="text-gray-500 text-xs mb-3">
                Message us on WhatsApp for instant replies and personalized packages.
              </p>
              <a
                href={`https://wa.me/919791697030?text=${encodeURIComponent('Hi! I want to book a trip with Blessings Tours & Travels.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white py-2.5 px-4 rounded-xl font-bold text-xs transition-colors w-full"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us Now
              </a>
            </div>

            <div className="bg-[#F8F6F1] rounded-2xl p-5 border border-gray-100">
              <p className="text-[#0F2C59] font-bold text-sm mb-3">Call Us Directly</p>
              <a
                href="tel:+919791697030"
                className="text-[#C9952A] font-extrabold text-xl hover:text-[#0F2C59] transition-colors block"
              >
                +91 97916 97030
              </a>
              <p className="text-gray-400 text-xs mt-1">Mon – Sun: 9 AM – 9 PM</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
