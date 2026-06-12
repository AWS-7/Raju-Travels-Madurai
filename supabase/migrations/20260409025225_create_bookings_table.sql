
/*
  # Create Bookings Table for Blessings Tours & Travels

  ## Summary
  Creates the bookings table to store travel inquiry/booking requests submitted
  through the website's booking form.

  ## New Tables

  ### bookings
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text, not null) - Full name of the traveler
  - `phone` (text, not null) - Contact phone number
  - `current_location` (text, not null) - Traveler's current city/location
  - `destination` (text, not null) - Desired travel destination
  - `tour_date` (date, not null) - Preferred travel date
  - `num_members` (integer, not null) - Number of travelers in the group
  - `message` (text) - Optional special requests or message
  - `status` (text) - Booking status: 'pending', 'confirmed', 'cancelled'
  - `created_at` (timestamptz) - Timestamp of submission

  ## Security
  - RLS enabled on bookings table
  - Anyone can insert (submit a booking inquiry) - public form
  - Only authenticated users (admins) can read all bookings
  - Users cannot update/delete bookings directly
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  current_location text NOT NULL,
  destination text NOT NULL,
  tour_date date NOT NULL,
  num_members integer NOT NULL DEFAULT 1,
  message text DEFAULT '',
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a booking inquiry"
  ON bookings FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all bookings"
  ON bookings FOR SELECT
  TO authenticated
  USING (true);
