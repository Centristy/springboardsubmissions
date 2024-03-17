
DROP DATABASE IF EXISTS cupcakes;
CREATE DATABASE cupcakes;

\c cupcakes


CREATE TABLE cupcakes
(
    id BIGSERIAL PRIMARY KEY,
    flavor TEXT NOT NULL,
    size TEXT NOT NULL,
    rating integer NOT NULL,
    image TEXT
    
);

INSERT INTO cupcakes(flavor, size, rating, image) VALUES ('cherry', 'large', 5, NULL), 
('chocolate','small', 9, 'https://www.bakedbyrachel.com/wp-content/uploads/2018/01/chocolatecupcakesccfrosting1_bakedbyrachel.jpg');

