-- from the terminal run:
-- psql < outer_space.sql

DROP DATABASE IF EXISTS outer_space;

CREATE DATABASE outer_space;

\c outer_space


CREATE TABLE planets
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  orbital_period_in_years FLOAT NOT NULL,
  orbits_around TEXT NOT NULL
);


CREATE TABLE galaxies
(
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);


CREATE TABLE galaxy_planets
(
  id SERIAL PRIMARY KEY,
  galaxy_id INTEGER NOT NULL REFERENCES galaxies(id),
  planet_id INTEGER NOT NULL REFERENCES planets(id)
);

CREATE TABLE moons
(

  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  planet_id INTEGER NOT NULL REFERENCES planets(id)

);

CREATE TABLE orbitals
(
  id SERIAL PRIMARY KEY,
  satellite TEXT NOT NULL,
  body TEXT NOT NULL
);

