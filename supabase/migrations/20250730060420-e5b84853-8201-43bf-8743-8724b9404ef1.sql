-- Insert sample stories for testing
INSERT INTO public.stories (title, narrator, duration, region, description, category, audio_url, user_id) VALUES 
(
  'The Three Little Pigs',
  'Grandmother Rose',
  '8 min',
  'England',
  'A classic tale of three little pigs who build houses of different materials to protect themselves from the big bad wolf.',
  'Fairy Tale',
  'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
  gen_random_uuid()
),
(
  'The Tortoise and the Hare',
  'Uncle James',
  '5 min',
  'Ancient Greece',
  'Aesop''s timeless fable about a slow but steady tortoise who wins a race against a fast but overconfident hare.',
  'Fable',
  'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
  gen_random_uuid()
),
(
  'Anansi and the Wisdom Pot',
  'Aunt Akosua',
  '12 min',
  'West Africa',
  'A traditional Akan folk tale about the spider trickster Anansi who tries to hoard all the world''s wisdom in a pot.',
  'Folk Tale',
  'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
  gen_random_uuid()
),
(
  'The Legend of the Rainbow Serpent',
  'Elder Mary',
  '15 min',
  'Aboriginal Australia',
  'An ancient Dreamtime story about the Rainbow Serpent who shaped the land and brought water to the people.',
  'Legend',
  'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
  gen_random_uuid()
),
(
  'The Phoenix and the Dragon',
  'Master Li',
  '10 min',
  'Ancient China',
  'A mystical tale of friendship between a phoenix and a dragon who must work together to save their kingdom.',
  'Fantasy',
  'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
  gen_random_uuid()
),
(
  'How Raven Stole the Sun',
  'Storyteller Tom',
  '7 min',
  'Pacific Northwest',
  'A traditional Native American myth about the clever raven who brought light to the world by stealing the sun.',
  'Mythology',
  'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
  gen_random_uuid()
);