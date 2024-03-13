-- from the terminal run:
-- psql < music.sql

DROP DATABASE IF EXISTS music;

CREATE DATABASE music;

\c music


CREATE TABLE artists
(
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL

);

CREATE TABLE producers
(
  id SERIAL PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL

);

CREATE TABLE albums
(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  producer_id INTEGER NOT NULL REFERENCES producers(id)
);


CREATE TABLE songs
(
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  duration_in_seconds INTEGER NOT NULL,
  release_date DATE NOT NULL,
  album_id INTEGER REFERENCES albums(id)

);


CREATE TABLE artists_songs
(
  id SERIAL PRIMARY KEY,
  song_id INTEGER NOT NULL REFERENCES songs(id),
  artist_id INTEGER NOT NULL REFERENCES artists(id)
)