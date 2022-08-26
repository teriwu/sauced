\connect sauce_db

-----------------------|
-- create limitations  |
-----------------------|

CREATE TABLE locations (
    id INTEGER NOT NULL PRIMARY KEY,
    address TEXT NOT NULL,
    city TEXT NOT NULL,
    zip_code INTEGER NOT NULL,
    country TEXT NOT NULL,
    state TEXT NOT NULL
);

CREATE TABLE pictures (
    id INTEGER NOT NULL PRIMARY KEY,
    url VARCHAR DEFAULT ''
);

CREATE TABLE hours (
    id INTEGER NOT NULL PRIMARY KEY,
    is_overnight BOOLEAN DEFAULT 'false',
    "end" INTEGER NOT NULL,
    day INTEGER NOT NULL,
    "start" INTEGER NOT NULL
);

CREATE TABLE categories (
    id INTEGER NOT NULL PRIMARY KEY,
    title TEXT NOT NULL,
    alias TEXT NOT NULL
);

CREATE TABLE restaurants (
    id INTEGER NOT NULL PRIMARY KEY,
    price TEXT NOT NULL,
    rating FLOAT DEFAULT 0,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    location_id INTEGER NOT NULL REFERENCES locations(id) ON DELETE CASCADE,
    category_id INTEGER NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    hour_id INTEGER NOT NULL REFERENCES hours(id) ON DELETE CASCADE,
    picture_id INTEGER NOT NULL REFERENCES pictures(id) ON DELETE CASCADE
);


CREATE TABLE users (
    id INTEGER NOT NULL PRIMARY KEY,
    password VARCHAR NOT NULL,
    first TEXT NOT NULL, 
    last TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    username TEXT NOT NULL UNIQUE
);

CREATE TABLE reviews (
    id INTEGER NOT NULL PRIMARY KEY, 
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    reviewer_id INTEGER REFERENCES users("id") ON DELETE CASCADE,
    rating INTEGER NOT NULL check(rating = 1 or rating = 2 or rating = 3 or rating = 4 or rating = 5),
    restaurant_id INTEGER NOT NULL REFERENCES restaurants("id") ON DELETE CASCADE
);