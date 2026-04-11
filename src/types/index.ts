export interface BookingFormData {
  name: string;
  phone: string;
  current_location: string;
  destination: string;
  tour_date: string;
  num_members: number;
  message: string;
}

export interface Package {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  duration: string;
  price: number | null;
  tieredPricing?: TieredPrice[];
  inclusions: string[];
  exclusions: string[];
  badge?: string;
  badgeColor?: string;
}

export interface TieredPrice {
  label: string;
  price: number;
}

export interface Destination {
  name: string;
  image: string;
  tag: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
  highlight?: string;
}
