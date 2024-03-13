-- ### **Part Two: Craigslist**

-- Design a schema for Craigslist! Your schema should keep track of the following

-- - The region of the craigslist post (San Francisco, Atlanta, Seattle, etc)
-- - Users and preferred region
-- - Posts: contains title, text, the user who has posted, the location of the posting, the region of the posting
-- - Categories that each post belongs to



-- from the terminal run:
-- psql < craigslist.sql

DROP DATABASE IF EXISTS craigslist;

CREATE DATABASE craigslist;

\c craigslist


CREATE TABLE users
(
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    date_joined TIMESTAMP NOT NULL,
    eamil TEXT NOT NULL,
    preferred_region TEXT NOT NULL
);
CREATE TABLE posts
(
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    user_id INTEGER NOT NULL REFERENCES users(id),
    region TEXT NOT NULL,
    location TEXT NOT NULL,
    content TEXT NOT NULL
);
