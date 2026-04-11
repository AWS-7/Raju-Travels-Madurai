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

export const galleryImages = [
  {
    id: '1',
    url: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Sunset at Palolem Beach',
    location: 'Goa',
  },
  {
    id: '2',
    url: 'https://images.pexels.com/photos/2387871/pexels-photo-2387871.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Snowy Peaks of Manali',
    location: 'Manali',
  },
  {
    id: '3',
    url: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Crystal Clear Waters',
    location: 'Andaman',
  },
  {
    id: '4',
    url: 'https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Dal Lake Houseboat',
    location: 'Kashmir',
  },
  {
    id: '5',
    url: 'https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Tea Garden Hills',
    location: 'Munnar',
  },
  {
    id: '6',
    url: 'https://images.pexels.com/photos/1574843/pexels-photo-1574843.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Ooty Lake View',
    location: 'Ooty',
  },
  {
    id: '7',
    url: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Wayanad Wildlife',
    location: 'Wayanad',
  },
  {
    id: '8',
    url: 'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Gulmarg Valley',
    location: 'Kashmir',
  },
];

export const galleryVideos = [
  {
    id: 'v1',
    title: 'Goa Beach Adventure',
    location: 'Goa',
    duration: '2:34',
    thumbnail: 'https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=800',
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    id: 'v2',
    title: 'Manali Snow Experience',
    location: 'Manali',
    duration: '3:15',
    thumbnail: 'https://images.pexels.com/photos/2387871/pexels-photo-2387871.jpeg?auto=compress&cs=tinysrgb&w=800',
    youtubeId: 'dQw4w9WgXcQ',
  },
  {
    id: 'v3',
    title: 'Andaman Island Tour',
    location: 'Andaman',
    duration: '4:02',
    thumbnail: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=800',
    youtubeId: 'dQw4w9WgXcQ',
  },
];
