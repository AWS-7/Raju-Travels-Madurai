import { Package, Destination, ItineraryDay } from '../types';

export const packages: Package[] = [
  {
    id: 'goa-couple',
    title: 'Goa Couple Package',
    subtitle: 'Romance by the Sea',
    image: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '2 Nights / 3 Days',
    price: 6499,
    badge: 'Best Seller',
    badgeColor: 'gold',
    inclusions: [
      'Train Fare (2nd Class Sleeper)',
      'Hotel with Swimming Pool',
      'Bike Rental Included',
      'Welcome Drinks on Arrival',
      'Daily Breakfast',
    ],
    exclusions: [
      'Personal Expenses',
      'Airfare (if upgraded)',
      'Meals other than Breakfast',
      'Entry Tickets to Attractions',
    ],
  },
  {
    id: 'manali-winter',
    title: 'Manali Winter Trip',
    subtitle: 'Snow-Capped Adventure',
    image: 'https://images.pexels.com/photos/2387871/pexels-photo-2387871.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '3 Nights / 4 Days',
    price: null,
    badge: 'Group Discount',
    badgeColor: 'blue',
    tieredPricing: [
      { label: '2 Members', price: 6999 },
      { label: '3-5 Members', price: 5999 },
      { label: '6+ Members', price: 4999 },
    ],
    inclusions: [
      'Volvo Bus Travel (AC)',
      'Hotel Stay (3 Star)',
      'Solang Valley Snow Activity',
      'Rohtang Pass Excursion',
      'Daily Breakfast & Dinner',
    ],
    exclusions: [
      'Personal Expenses',
      'Rohtang Pass Permit (₹550)',
      'Snow Activity Equipment',
      'Travel Insurance',
    ],
  },
  {
    id: 'andaman',
    title: 'Andaman Island Escape',
    subtitle: 'Paradise Awaits',
    image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '4 Nights / 5 Days',
    price: 14999,
    badge: 'Premium',
    badgeColor: 'gold',
    inclusions: [
      'Round Trip Flight',
      'Beach Resort Stay',
      'Havelock Island Day Trip',
      'Scuba Diving (1 Dive)',
      'All Meals Included',
    ],
    exclusions: [
      'Personal Shopping',
      'Extra Water Sports',
      'Visa (Foreign Nationals)',
      'Travel Insurance',
    ],
  },
  {
    id: 'kashmir',
    title: 'Kashmir — Heaven on Earth',
    subtitle: 'Valley of Dreams',
    image: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800',
    duration: '5 Nights / 6 Days',
    price: 17999,
    badge: 'Popular',
    badgeColor: 'blue',
    inclusions: [
      'Houseboat Stay in Dal Lake',
      'Shikara Ride',
      'Gulmarg Gondola Ride',
      'Pahalgam Valley Tour',
      'Daily Breakfast & Dinner',
    ],
    exclusions: [
      'Airfare',
      'Personal Expenses',
      'Pony Rides',
      'Travel Insurance',
    ],
  },
];

export const destinations: Destination[] = [
  {
    name: 'Wayanad',
    image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Nature & Wildlife',
  },
  {
    name: 'Munnar',
    image: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Tea Gardens',
  },
  {
    name: 'Ooty',
    image: 'https://images.pexels.com/photos/1574843/pexels-photo-1574843.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Hill Station',
  },
  {
    name: 'Kodaikanal',
    image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Princess of Hills',
  },
  {
    name: 'Andaman',
    image: 'https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Island Paradise',
  },
  {
    name: 'Kashmir',
    image: 'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=600',
    tag: 'Heaven on Earth',
  },
];

export const goaItinerary: ItineraryDay[] = [
  {
    day: 1,
    title: 'Arrival & North Goa Beaches',
    activities: [
      'Arrive at Goa railway station, hotel check-in',
      'Visit Calangute & Baga Beach',
      'Sunset at Vagator Beach',
      'Evening at Tito\'s Lane — music & nightlife',
    ],
    highlight: 'Welcome drinks at hotel pool',
  },
  {
    day: 2,
    title: 'South Goa & Water Sports',
    activities: [
      'Morning bike ride along the coastline',
      'Colva Beach & Benaulim Beach',
      'Water sports: Jet Ski, Parasailing, Banana Boat',
      'Se Cathedral & Old Goa Churches',
      'Dinner at a beachside shack',
    ],
    highlight: 'Full day on bike — freedom to explore!',
  },
  {
    day: 3,
    title: 'Spice Farm & Departure',
    activities: [
      'Morning swim in hotel pool',
      'Sahakari Spice Farm tour with Goan lunch',
      'Last-minute shopping at Mapusa Market',
      'Check-out & drop to railway station',
    ],
    highlight: 'Take home authentic Goan spices & cashews',
  },
];
