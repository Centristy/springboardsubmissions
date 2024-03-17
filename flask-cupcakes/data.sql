
DROP DATABASE IF EXISTS cupcakes;
CREATE DATABASE cupcakes;

\c cupcakes


CREATE TABLE cupcakes
(
    id BIGSERIAL PRIMARY KEY,
    flavor TEXT NOT NULL,
    size TEXT NOT NULL,
    rating FLOAT NOT NULL,
    image TEXT NOT NULL DEFAULT "https://tinyurl.com/demo-cupcake"

);