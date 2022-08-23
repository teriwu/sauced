\connect sauce_db

---
--- Create the tables in your database
---
-- CREATE TABLE categories (
--     id SERIAL NOT NULL PRIMARY KEY,
--     title VARCHAR(250) NOT NULL UNIQUE,
--     canon BOOLEAN DEFAULT true
-- );

-- CREATE TABLE games (
--     id SERIAL NOT NULL PRIMARY KEY,
--     episode_id INTEGER NOT NULL,
--     aired VARCHAR(10),
--     canon BOOLEAN DEFAULT true
-- );

-- CREATE TABLE clues (
--     id SERIAL NOT NULL PRIMARY KEY,
--     row_index INTEGER NOT NULL,
--     column_index INTEGER NOT NULL,
--     answer TEXT NOT NULL,
--     question TEXT NOT NULL,
--     game_id INTEGER REFERENCES games(id) ON DELETE CASCADE,
--     board_index INTEGER NOT NULL,
--     value INTEGER NOT NULL,
--     category_id INTEGER NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
--     invalid_count INTEGER DEFAULT 0,
--     canon BOOLEAN DEFAULT true
-- );

CREATE TABLE location (
    address TEXT NOT NULL,
    city TEXT NOT NULL,
    zip_code INTEGER NOT NULL,
    country TEXT NOT NULL,
    state TEXT NOT NULL,
);

CREATE TABLE pictures (
    url VARCHAR DEFAULT "", 
);




CREATE TABLE resaurants (
    id SERIAL NOT NULL PRIMARY KEY,
    price TEXT NOT NULL,
    alias TEXT NOT NULL,
    rating FLOAT DEFAULT 0,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    location TEXT NOT NULL REFERENCES locations(id) ON DELETE CASCADE,
    category TEXT NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    hour TEXT NOT NULL REFERENCES hours(id) ON DELETE CASCADE,
    picture TEXT NOT NULL REFERENCES pictures(id) ON DELETE CASCADE,
);

