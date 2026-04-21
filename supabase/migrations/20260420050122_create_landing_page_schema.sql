/*
  # Create landing page schema

  1. New Tables
    - `email_signups`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamp)
      - `status` (text, tracks signup status)
  
  2. Security
    - Enable RLS on `email_signups` table
    - Add policy for inserting new signups
    - Add policy for public read access to count
*/

CREATE TABLE IF NOT EXISTS email_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

ALTER TABLE email_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert email signups"
  ON email_signups
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Public can read signup count"
  ON email_signups
  FOR SELECT
  USING (true);