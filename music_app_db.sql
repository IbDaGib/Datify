-- Table to store artist information
CREATE TABLE artists (
  id SERIAL PRIMARY KEY,
  stacks_address VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table to store song information
CREATE TABLE songs (
  id SERIAL PRIMARY KEY,
  artist_id INTEGER REFERENCES artists(id),
  title VARCHAR(255) NOT NULL,
  play_count INTEGER DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table for storing payments and royalties
CREATE TABLE royalties (
  id SERIAL PRIMARY KEY,
  artist_id INTEGER REFERENCES artists(id),
  song_id INTEGER REFERENCES songs(id),
  amount DECIMAL(10, 2) NOT NULL,
  paid_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
