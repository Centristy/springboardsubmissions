-- from the terminal run:
-- psql < hospital.sql

DROP DATABASE IF EXISTS hospital;

CREATE DATABASE hospital;

\c hospital


CREATE TABLE doctors
(
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL
);

CREATE TABLE patients
(
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL
);


CREATE TABLE visits
(
    id SERIAL PRIMARY KEY,
    doctor_id INTEGER NOT NULL REFERENCES doctors(id),
    patient_id INTEGER NOT NULL REFERENCES patients(id),
    date_of_visit TIMESTAMP NOT NULL
);


CREATE TABLE illness
(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE diagnoses
(   
    id SERIAL PRIMARY KEY,
    patient_id INTEGER REFERENCES patients(id),
    illness_id INTEGER REFERENCES illness(id)
);
