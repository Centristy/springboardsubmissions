
DROP DATABASE IF EXISTS adoptly;
CREATE DATABASE adoptly;

\c adoptly


CREATE TABLE pets
(
    id BIGSERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    species TEXT NOT NULL,
    photo_url TEXT,
    age INTEGER,
    notes TEXT,
    available BOOlEAN NOT NULL DEFAULT TRUE

);



INSERT INTO pets ( name, species, photo_url, age, notes, available ) VALUES
('Fido', 'Dog', 'https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=600', 2, 'litter of six, one previous owner', true), 
('Ginger', 'Cat', 'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=600', 10, 'scratches and not person friendly', true )
