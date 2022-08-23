\connect sauce_db

CREATE TABLE locations (
    id SERIAL NOT NULL PRIMARY KEY,
    address TEXT NOT NULL,
    city TEXT NOT NULL,
    zip_code INTEGER NOT NULL,
    country TEXT NOT NULL,
    state TEXT NOT NULL,
);

CREATE TABLE pictures (
    id SERIAL NOT NULL PRIMARY KEY,
    url VARCHAR DEFAULT "", 
);

CREATE TABLE hours (
    id SERIAL NOT NULL PRIMARY KEY,
    is_overnight BOOLEAN DEFAULT false,
    end INTEGER NOT NULL,
    day INTEGER NOT NULL,
    start INTEGER NOT NULL,
);

CREATE TABLE categories (
    id SERIAL NOT NULL PRIMARY KEY,
    title TEXT NOT NULL,
    alias TEXT NOT NULL,
);

CREATE TABLE resaurants (
    id SERIAL NOT NULL PRIMARY KEY,
    price TEXT NOT NULL,
    alias TEXT NOT NULL,
    rating FLOAT DEFAULT 0,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    location_id TEXT NOT NULL REFERENCES locations(id) ON DELETE CASCADE,
    category_id TEXT NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    hour_id TEXT NOT NULL REFERENCES hours(id) ON DELETE CASCADE,
    picture_id TEXT NOT NULL REFERENCES pictures(id) ON DELETE CASCADE,
);
