export type Language = 'en' | 'ta';

interface TranslationSet {
  [key: string]: string;
}

export const translations: Record<Language, TranslationSet> = {
  en: {
    // Navbar
    nav_home: 'Home',
    nav_packages: 'Packages',
    nav_destinations: 'Destinations',
    nav_itinerary: 'Itinerary',
    nav_gallery: 'Gallery',
    nav_book_now: 'Book Now',
    tagline: 'Your Journey Begins Here',

    // Hero
    hero_trusted: 'Trusted by 2000+ Happy Travelers',
    hero_title: 'Explore India with',
    hero_company: 'Blessings Tours & Travels',
    hero_subtitle:
      '11 years of creating unforgettable journeys. Budget-friendly packages, handcrafted itineraries, and memories that last a lifetime.',
    hero_stat_years: '11+ Years',
    hero_stat_years_sub: 'of Experience',
    hero_stat_guests: '2000+',
    hero_stat_guests_sub: 'Happy Guests',
    hero_stat_destinations: '50+',
    hero_stat_destinations_sub: 'Destinations',

    // Packages
    packages_badge: 'Our Packages',
    packages_title: 'Handcrafted Travel Experiences',
    packages_subtitle:
      'Complete service from car to bus at minimal rent. Vehicle rental varies by location. We offer all South India tours with professional drivers and comfortable vehicles.',
    book_package: 'Book This Package',
    view_details: 'View Inclusions / Exclusions',
    hide_details: 'Hide Details',
    included: 'Included',
    not_included: 'Not Included',
    per_person: 'Per Person',

    // Destinations
    destinations_badge: 'Featured Destinations',
    destinations_title: "India's Most Loved Places",
    destinations_subtitle:
      'Explore the diversity of India — from misty hill stations to tropical beaches, we\'ll take you there with comfort and style.',
    book_now: 'Book Now',

    // Itinerary
    itinerary_badge: 'Day-by-Day Guide',
    itinerary_title: 'South India 5-Day Tour',
    itinerary_subtitle:
      'Every moment planned, every experience curated — your perfect South India journey starts here.',
    day: 'Day',

    // Gallery
    gallery_badge: 'Memories Captured',
    gallery_title: 'Gallery & Videos',
    gallery_subtitle:
      'Relive the magic through our lens. Explore stunning moments from trips across India.',
    photos: 'Photos',
    videos: 'Videos',

    // Why Choose Us
    why_badge: 'Why Choose Us',
    why_title: 'Your Trusted Travel Partner',
    why_subtitle:
      'Experience the difference with our professional service, well-maintained fleet, and commitment to customer satisfaction.',
    feature_24_7: '24/7 Service',
    feature_24_7_desc:
      'Round-the-clock customer support for all your travel needs and emergencies.',
    feature_safe: 'Safe & Secure',
    feature_safe_desc:
      'Well-maintained vehicles with experienced drivers ensuring your safety throughout the journey.',
    feature_fleet: 'Wide Fleet',
    feature_fleet_desc:
      'From budget cars to luxury vans, we have the perfect vehicle for every group size and budget.',
    feature_drivers: 'Expert Drivers',
    feature_drivers_desc:
      'Professional, courteous drivers with extensive knowledge of South Indian routes and destinations.',
    feature_coverage: 'Pan-India Coverage',
    feature_coverage_desc:
      'Serving all major cities and tourist destinations across South India with reliable transportation.',
    feature_rates: 'Best Rates',
    feature_rates_desc:
      'Competitive pricing with no hidden charges. Transparent billing for complete peace of mind.',
    cta_title: 'Ready to Explore South India?',
    cta_subtitle:
      'Join thousands of satisfied customers who have experienced the beauty of South India with our reliable and comfortable transportation services.',
    cta_book: 'Book Your Trip',
    cta_whatsapp: 'WhatsApp Us Now',

    // Booking Steps
    steps_badge: 'Simple Process',
    steps_title: 'Book in 4 Easy Steps',
    steps_subtitle:
      "We've made booking your dream vacation as simple as possible. Start your journey today!",
    step1_title: 'Enquire & Choose',
    step1_desc:
      'Contact us on WhatsApp or fill the booking form. Choose your dream destination and dates.',
    step2_title: 'Pay Token Advance',
    step2_desc:
      'Confirm your booking with a token advance of just ₹2,500 per person to lock your dates.',
    step2_highlight: 'Token: ₹2,500',
    step3_title: 'Receive Itinerary',
    step3_desc:
      'Get your detailed day-by-day itinerary, hotel confirmations, and train/bus tickets.',
    step4_title: 'Travel & Enjoy!',
    step4_desc:
      'Pack your bags! Our team is available 24/7 during your trip for any assistance.',
    steps_note:
      'Balance payment to be made 7 days before departure. We accept UPI, Bank Transfer, and Cash.',
    steps_cancellation:
      'Cancellation policy: 50% refund if cancelled 10+ days before departure. No refund within 7 days.',

    // Booking Form
    booking_badge: 'Book Your Trip',
    booking_title: 'Ready to Explore?',
    booking_subtitle:
      'Fill out the form below and our travel expert will call you within 2 hours!',
    label_name: 'Full Name *',
    placeholder_name: 'Your full name',
    label_phone: 'Phone Number *',
    placeholder_phone: '+91 97916 97030',
    label_location: 'Current Location *',
    placeholder_location: 'Your city / state',
    label_destination: 'Destination *',
    placeholder_destination: 'Select destination',
    label_date: 'Tour Date *',
    label_members: 'Number of Members *',
    label_message: 'Special Requests (Optional)',
    placeholder_message:
      'Any special requirements, dietary needs, or questions...',
    submit_booking: 'Send Booking Request',
    booking_success_title: 'Booking Received!',
    booking_success_text:
      'Thank you, {name}! Our team will call you within 2 hours to confirm your {destination} trip.',
    book_another: 'Book Another Trip',
    why_book_title: 'Why Book With Us?',
    why_book_subtitle: 'Trusted by 2000+ happy travelers nationwide',
    benefit_price: 'Best Price Guarantee',
    benefit_cancel: 'Flexible Cancellation',
    benefit_support: '24/7 Trip Support',
    benefit_custom: 'Customizable Packages',
    benefit_train: 'Train & Bus Bookings Included',
    whatsapp_card_title: 'Prefer to chat directly?',
    whatsapp_card_text:
      'Message us on WhatsApp for instant replies and personalized packages.',
    whatsapp_us: 'WhatsApp Us Now',
    call_title: 'Call Us Directly',
    call_hours: 'Mon – Sun: 9 AM – 9 PM',

    // Reviews
    reviews_badge: 'Customer Reviews',
    reviews_title: 'What Our Travelers Say',
    reviews_subtitle:
      'Real experiences from real customers who trusted Blessings Tours & Travels for their journey across South India.',
    join_travelers: 'Join Our Happy Travelers!',
    join_travelers_text:
      'Over 2000+ satisfied customers have explored South India with us. Your next adventure is just a call away!',

    // Footer
    footer_desc:
      '11 years of experience handling 2000+ guests nationwide. We make travel affordable, memorable, and completely hassle-free.',
    quick_links: 'Quick Links',
    destinations_title_footer: 'Destinations',
    contact_us: 'Contact Us',
    call_time: 'Mon–Sun: 9 AM – 9 PM',
    rights: 'Blessings Tours & Travels. All rights reserved.',
    made_with: 'Made with',
    for_travelers: 'for travelers across India',

    // Car Rental
    car_rental_badge: 'Rent A Car For Your Journey',
    car_rental_title: 'Planning A Trip But Don\'t Have A Car?',
    car_rental_description: 'Don\'t worry. We help you find comfortable and reliable cars from trusted vehicle partners for your travel needs.',
    car_rental_service1: '🚗 Car Rental',
    car_rental_service1_desc: 'Choose the right vehicle for your trip',
    car_rental_service2: '👨‍👩‍👧 Family Trips',
    car_rental_service2_desc: 'Comfortable cars for family journeys',
    car_rental_service3: '🛣️ Long Distance Travel',
    car_rental_service3_desc: 'Reliable vehicles for outstation trips',
    car_rental_service4: '🎒 Group Travel',
    car_rental_service4_desc: 'Spacious vehicles for friends and groups',
    car_trust_title: 'Why Choose Our Car Rental:',
    car_trust_1: '✓ Verified vehicle partners',
    car_trust_2: '✓ Well maintained cars',
    car_trust_3: '✓ Affordable pricing',
    car_trust_4: '✓ Comfortable travel experience',
    car_trust_5: '✓ Support during your journey',
    car_cta_book: 'Book A Car',
    car_cta_contact: 'Contact Us',

    // Language toggle
    language: 'Language',
  },
  ta: {
    // Navbar
    nav_home: 'முகப்பு',
    nav_packages: 'சுற்றுலா பேக்கேஜ்கள்',
    nav_destinations: 'சுற்றுலா தலங்கள்',
    nav_itinerary: 'பயணத் திட்டம்',
    nav_gallery: 'காட்சியகம்',
    nav_book_now: 'இப்போது முன்பதிவு செய்க',
    tagline: 'உங்கள் பயணம் இங்கே தொடங்குகிறது',

    // Hero
    hero_trusted: '2000+ மகிழ்ச்சியான பயணிகளால் நம்பப்பட்டது',
    hero_title: 'இந்தியாவை ஆராயுங்கள்',
    hero_company: 'பிளசிங்ஸ் டூர்ஸ் & டிராவல்ஸ்',
    hero_subtitle:
      '11 ஆண்டுகளாக மறக்கமுடியாத பயணங்களை உருவாக்குகிறோம். பட்ஜெட்டுக்கு ஏற்ற பேக்கேஜ்கள், கையால் உருவாக்கப்பட்ட பயணத் திட்டங்கள், மற்றும் ஆயுள் முழுவதும் நிலைக்கும் நினைவுகள்.',
    hero_stat_years: '11+ ஆண்டுகள்',
    hero_stat_years_sub: 'அனுபவம்',
    hero_stat_guests: '2000+',
    hero_stat_guests_sub: 'மகிழ்ச்சியான விருந்தினர்கள்',
    hero_stat_destinations: '50+',
    hero_stat_destinations_sub: 'சுற்றுலா தலங்கள்',

    // Packages
    packages_badge: 'எங்கள் பேக்கேஜ்கள்',
    packages_title: 'கையால் உருவாக்கப்பட்ட பயண அனுபவங்கள்',
    packages_subtitle:
      'குறைந்த வாடகையில் கார் முதல் பஸ் வரை முழு சேவை. வாகன வாடகை இடத்திற்கு ஏற்ப மாறுபடும். தொழில்முறை ஓட்டுநர்கள் மற்றும் வசதியான வாகனங்களுடன் தென்னிந்திய சுற்றுலாக்களை வழங்குகிறோம்.',
    book_package: 'இந்த பேக்கேஜை முன்பதிவு செய்க',
    view_details: 'சேர்க்கைகள் / விலக்குகளைக் காண்க',
    hide_details: 'விவரங்களை மறை',
    included: 'சேர்க்கப்பட்டுள்ளது',
    not_included: 'சேர்க்கப்படவில்லை',
    per_person: 'ஒரு நபருக்கு',

    // Destinations
    destinations_badge: 'சிறந்த சுற்றுலா தலங்கள்',
    destinations_title: 'இந்தியாவின் மிகவும் விரும்பப்படும் இடங்கள்',
    destinations_subtitle:
      'இந்தியாவின் பல்வேறு தன்மையை ஆராயுங்கள் — மூடுபனி மலை வாசஸ்தலங்கள் முதல் வெப்பமண்டல கடற்கரைகள் வரை, வசதியாகவும் பாணியுடனும் உங்களை அங்கே அழைத்துச் செல்வோம்.',
    book_now: 'இப்போது முன்பதிவு செய்க',

    // Itinerary
    itinerary_badge: 'நாள்-க்கு-நாள் வழிகாட்டி',
    itinerary_title: 'தென்னிந்தியா 5-நாள் சுற்றுலா',
    itinerary_subtitle:
      'ஒவ்வொரு கணமும் திட்டமிடப்பட்டது, ஒவ்வொரு அனுபவமும் தேர்வு செய்யப்பட்டது — உங்கள் சரியான தென்னிந்திய பயணம் இங்கே தொடங்குகிறது.',
    day: 'நாள்',

    // Gallery
    gallery_badge: 'பிடிபட்ட நினைவுகள்',
    gallery_title: 'காட்சியகம் & வீடியோக்கள்',
    gallery_subtitle:
      'எங்கள் கண்ணாடி வழியாக மந்திரத்தை மீண்டும் அனுபவிக்கவும். இந்தியா முழுவதும் பயணங்களில் இருந்து அழகான தருணங்களை ஆராயுங்கள்.',
    photos: 'புகைப்படங்கள்',
    videos: 'வீடியோக்கள்',

    // Why Choose Us
    why_badge: 'எங்களை ஏன் தேர்வு செய்ய வேண்டும்',
    why_title: 'உங்கள் நம்பகமான பயண பார்ட்னர்',
    why_subtitle:
      'எங்கள் தொழில்முறை சேவை, நன்கு பராமரிக்கப்பட்ட வாகன கூட்டம், மற்றும் வாடிக்கையாளர் திருப்திக்கான அர்ப்பணிப்புடன் வித்தியாசத்தை அனுபவிக்கவும்.',
    feature_24_7: '24/7 சேவை',
    feature_24_7_desc:
      'உங்கள் அனைத்து பயணத் தேவைகள் மற்றும் அவசரங்களுக்கும் வட்டமடிக்கும் வாடிக்கையாளர் ஆதரவு.',
    feature_safe: 'பாதுகாப்பான & பாதுகாப்பு',
    feature_safe_desc:
      'அனுபவம் வாய்ந்த ஓட்டுநர்களுடன் நன்கு பராமரிக்கப்பட்ட வாகனங்கள், உங்கள் பாதுகாப்பை முழு பயணத்திலும் உறுதி செய்கின்றன.',
    feature_fleet: 'பரந்த வாகன கூட்டம்',
    feature_fleet_desc:
      'பட்ஜெட் கார்கள் முதல் ஆடம்பர வேன்கள் வரை, ஒவ்வொரு குழு அளவு மற்றும் பட்ஜெட்டிற்கும் சரியான வாகனம் எங்களிடம் உள்ளது.',
    feature_drivers: 'நிபுணர் ஓட்டுநர்கள்',
    feature_drivers_desc:
      'தென்னிந்திய வழிகள் மற்றும் சுற்றுலா தலங்களைப் பற்றி விரிவான அறிவு கொண்ட தொழில்முறை, கனிவான ஓட்டுநர்கள்.',
    feature_coverage: 'பான்-இந்தியா கவரேஜ்',
    feature_coverage_desc:
      'தென்னிந்தியா முழுவதும் நம்பகமான போக்குவரத்துடன் அனைத்து முக்கிய நகரங்களையும் சுற்றுலா தலங்களையும் சேவை செய்கிறோம்.',
    feature_rates: 'சிறந்த விலைகள்',
    feature_rates_desc:
      'மறைக்கப்பட்ட கட்டணங்கள் இல்லாமல் போட்டித்தன்மை வாய்ந்த விலையிடல். முழு மன அமைதிக்கு வெளிப்படையான பில்லிங்.',
    cta_title: 'தென்னிந்தியாவை ஆராய தயாரா?',
    cta_subtitle:
      'எங்கள் நம்பகமான மற்றும் வசதியான போக்குவரத்து சேவைகளுடன் தென்னிந்தியாவின் அழகை அனுபவித்த ஆயிரக்கணக்கான திருப்தியான வாடிக்கையாளர்களில் சேருங்கள்.',
    cta_book: 'உங்கள் பயணத்தை முன்பதிவு செய்க',
    cta_whatsapp: 'வாட்ஸ்அப் செய்க',

    // Booking Steps
    steps_badge: 'எளிய செயல்முறை',
    steps_title: '4 எளிய படிகளில் முன்பதிவு செய்க',
    steps_subtitle:
      'உங்கள் கனவு விடுமுறையை முன்பதிவு செய்வதை மிகவும் எளிமையாக்கியுள்ளோம். இன்றே உங்கள் பயணத்தைத் தொடங்குங்கள்!',
    step1_title: 'விசாரியுங்கள் & தேர்வு செய்க',
    step1_desc:
      'வாட்ஸ்அப்பில் எங்களை தொடர்பு கொள்ளுங்கள் அல்லது முன்பதிவு படிவத்தை நிரப்புங்கள். உங்கள் கனவு சுற்றுலா தலம் மற்றும் தேதிகளைத் தேர்வு செய்க.',
    step2_title: 'டோக்கன் முன்பணம் செலுத்துங்கள்',
    step2_desc:
      'ஒரு நபருக்கு வெறும் ₹2,500 டோக்கன் முன்பணம் செலுத்தி உங்கள் தேதிகளை உறுதி செய்க.',
    step2_highlight: 'டோக்கன்: ₹2,500',
    step3_title: 'பயணத் திட்டத்தைப் பெறுங்கள்',
    step3_desc:
      'விரிவான நாள்-க்கு-நாள் பயணத் திட்டம், ஹோட்டல் உறுதிப்படுத்தல்கள், மற்றும் ரயில்/பஸ் டிக்கெட்களைப் பெறுங்கள்.',
    step4_title: 'பயணியுங்கள் & மகிழுங்கள்!',
    step4_desc:
      'உங்கள் பைகளை கட்டுங்கள்! எந்த உதவிக்கும் உங்கள் பயணத்தின் போது எங்கள் குழு 24/7 கிடைக்கிறது.',
    steps_note:
      'புறப்படுவதற்கு 7 நாட்களுக்கு முன்பு மீதத் தொகை செலுத்த வேண்டும். UPI, வங்கி பரிமாற்றம், மற்றும் பணம் ஏற்கப்படுகிறது.',
    steps_cancellation:
      'ரத்து கொள்கை: புறப்படுவதற்கு 10+ நாட்களுக்கு முன்பு ரத்து செய்தால் 50% திரும்பப் பெறுதல். 7 நாட்களுக்குள் ரத்து செய்தால் திரும்பப் பெறுதல் இல்லை.',

    // Booking Form
    booking_badge: 'உங்கள் பயணத்தை முன்பதிவு செய்க',
    booking_title: 'ஆராய தயாரா?',
    booking_subtitle:
      'கீழே உள்ள படிவத்தை நிரப்புங்கள், எங்கள் பயண நிபுணர் 2 மணி நேரத்திற்குள் உங்களுக்கு அழைப்பார்!',
    label_name: 'முழு பெயர் *',
    placeholder_name: 'உங்கள் முழு பெயர்',
    label_phone: 'தொலைபேசி எண் *',
    placeholder_phone: '+91 97916 97030',
    label_location: 'தற்போதைய இடம் *',
    placeholder_location: 'உங்கள் நகரம் / மாநிலம்',
    label_destination: 'சுற்றுலா தலம் *',
    placeholder_destination: 'சுற்றுலா தலத்தைத் தேர்வு செய்க',
    label_date: 'சுற்றுலா தேதி *',
    label_members: 'உறுப்பினர்களின் எண்ணிக்கை *',
    label_message: 'சிறப்பு கோரிக்கைகள் (விருப்பம்)',
    placeholder_message:
      'எந்த சிறப்பு தேவைகள், உணவு தேவைகள், அல்லது கேள்விகள்...',
    submit_booking: 'முன்பதிவு கோரிக்கையை அனுப்புக',
    booking_success_title: 'முன்பதிவு பெறப்பட்டது!',
    booking_success_text:
      'நன்றி, {name}! உங்கள் {destination} பயணத்தை உறுதி செய்ய எங்கள் குழு 2 மணி நேரத்திற்குள் உங்களுக்கு அழைப்பார்கள்.',
    book_another: 'மற்றொரு பயணத்தை முன்பதிவு செய்க',
    why_book_title: 'எங்களுடன் முன்பதிவு செய்ய ஏன்?',
    why_book_subtitle: 'நாடு முழுவதும் 2000+ மகிழ்ச்சியான பயணிகளால் நம்பப்பட்டது',
    benefit_price: 'சிறந்த விலை உறுதி',
    benefit_cancel: 'நெகிழ்வான ரத்து',
    benefit_support: '24/7 பயண ஆதரவு',
    benefit_custom: 'தனிப்பயனாக்கக்கூடிய பேக்கேஜ்கள்',
    benefit_train: 'ரயில் & பஸ் முன்பதிவுகள் சேர்க்கப்பட்டுள்ளன',
    whatsapp_card_title: 'நேரடியாக அரட்டை அடிக்க விரும்புகிறீர்களா?',
    whatsapp_card_text:
      'உடனடி பதில்களுக்கும் தனிப்பயனாக்கப்பட்ட பேக்கேஜ்களுக்கும் வாட்ஸ்அப்பில் எங்களுக்கு செய்தி அனுப்புங்கள்.',
    whatsapp_us: 'வாட்ஸ்அப்பில் எங்களை தொடர்பு கொள்ளுங்கள்',
    call_title: 'நேரடியாக அழையுங்கள்',
    call_hours: 'திங் – ஞாயி: காலை 9 – இரவு 9',

    // Reviews
    reviews_badge: 'வாடிக்கையாளர் மதிப்புரைகள்',
    reviews_title: 'எங்கள் பயணிகள் சொல்வது என்ன',
    reviews_subtitle:
      'தென்னிந்தியா முழுவதும் தங்கள் பயணத்திற்கு பிளசிங்ஸ் டூர்ஸ் & டிராவல்ஸை நம்பிய உண்மையான வாடிக்கையாளர்களின் உண்மையான அனுபவங்கள்.',
    join_travelers: 'எங்கள் மகிழ்ச்சியான பயணிகளில் சேருங்கள்!',
    join_travelers_text:
      '2000+ திருப்தியான வாடிக்கையாளர்கள் எங்களுடன் தென்னிந்தியாவை ஆராய்ந்துள்ளனர். உங்கள் அடுத்த சாகசம் ஒரு அழைப்பில் தொலைவில் உள்ளது!',

    // Footer
    footer_desc:
      'நாடு முழுவதும் 2000+ விருந்தினர்களை கையாண்ட 11 ஆண்டுகள் அனுபவம். பயணத்தை மலிவானதாக, நினைவுகூரத்தக்கதாக, மற்றும் முழுமையாக பிரச்சனையற்றதாக ஆக்குகிறோம்.',
    quick_links: 'விரைவு இணைப்புகள்',
    destinations_title_footer: 'சுற்றுலா தலங்கள்',
    contact_us: 'எங்களை தொடர்பு கொள்ளுங்கள்',
    call_time: 'திங்–ஞாயி: காலை 9 – இரவு 9',
    rights: 'பிளசிங்ஸ் டூர்ஸ் & டிராவல்ஸ். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    made_with: 'உருவாக்கப்பட்டது',
    for_travelers: 'இந்தியா முழுவதும் பயணிகளுக்காக',

    // Car Rental
    car_rental_badge: 'உங்கள் பயணத்திற்கு கார் வாடகைக்கு எடுத்துக்கொள்ளுங்கள்',
    car_rental_title: 'பயணத்தை திட்டமிடுகிறீர்கள் ஆனால் கார் இல்லையா?',
    car_rental_description: 'கவலை விடாதீர்கள். உங்கள் பயணத் தேவைகளுக்கு நம்பகமான வாகன பங்காளர்களிடமிருந்து வசதியான மற்றும் நம்பகமான கார்களை கண்டுபிடிக்க நாங்கள் உதவுகிறோம்.',
    car_rental_service1: '🚗 கார் வாடகை',
    car_rental_service1_desc: 'உங்கள் பயணத்திற்கு சரியான வாகனத்தை தேர்வு செய்க',
    car_rental_service2: '👨‍👩‍👧 குடும்ப பயணங்கள்',
    car_rental_service2_desc: 'குடும்ப பயணங்களுக்கு வசதியான கார்கள்',
    car_rental_service3: '🛣️ நீண்ட தூர பயணம்',
    car_rental_service3_desc: 'வெளிநிலைய பயணங்களுக்கு நம்பகமான வாகனங்கள்',
    car_rental_service4: '🎒 குழு பயணம்',
    car_rental_service4_desc: 'நண்பர்கள் மற்றும் குழுக்களுக்கு விரிவான வாகனங்கள்',
    car_trust_title: 'எங்கள் கார் வாடகையை ஏன் தேர்வு செய்ய வேண்டும்:',
    car_trust_1: '✓ சரிபார்க்கப்பட்ட வாகன பங்காளர்கள்',
    car_trust_2: '✓ நன்கு பராமரிக்கப்பட்ட கார்கள்',
    car_trust_3: '✓ மலிவான விலை',
    car_trust_4: '✓ வசதியான பயண அனுபவம்',
    car_trust_5: '✓ உங்கள் பயணத்தின் போது ஆதரவு',
    car_cta_book: 'காரை முன்பதிவு செய்க',
    car_cta_contact: 'எங்களை தொடர்பு கொள்ளுங்கள்',

    // Language toggle
    language: 'மொழி',
  },
};
