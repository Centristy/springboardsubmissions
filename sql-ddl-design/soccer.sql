-- from the terminal run:
-- psql < soccer.sql

-- ### **Part Three: Soccer League**

-- Design a schema for a simple sports league. Your schema should keep track of

-- - All of the teams in the league
-- - All of the goals scored by every player for each game
-- - All of the players in the league and their corresponding teams
-- - All of the referees who have been part of each game
-- - All of the matches played between teams
-- - All of the start and end dates for season that a league has
-- - The standings/rankings of each team in the league (This doesn’t have to be its own table if the data can be captured somehow).

DROP DATABASE IF EXISTS soccer;

CREATE DATABASE soccer;

\c soccer


CREATE TABLE teams
(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE players
(
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    team_id INTEGER NOT NULL REFERENCES teams(id)
);

CREATE TABLE games
(
    id SERIAL PRIMARY KEY,
    home_team INTEGER NOT NULL REFERENCES teams(id),
    away_team INTEGER NOT NULL REFERENCES teams(id)
);


CREATE TABLE goals
(
    id SERIAL PRIMARY KEY,
    game_id INTEGER NOT NULL REFERENCES games(id),
    player_id INTEGER NOT NULL REFERENCES players(id)
);

CREATE TABLE seasons
(
    id SERIAL PRIMARY KEY,
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP NOT NULL

);

