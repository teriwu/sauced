\connect sauce_db

-----------------------|
-- create limitations  |
-----------------------|

CREATE TABLE public.locations (
    id SERIAL NOT NULL UNIQUE,
    address TEXT NOT NULL,
    city TEXT NOT NULL,
    zip_code INTEGER NOT NULL,
    country TEXT NOT NULL,
    state TEXT NOT NULL
);

CREATE TABLE public.pictures (
    id SERIAL NOT NULL UNIQUE,
    url VARCHAR DEFAULT ''
);

CREATE TABLE public.hours (
    id SERIAL NOT NULL UNIQUE,
    is_overnight BOOLEAN DEFAULT 'false',
    end_ INTEGER NOT NULL,
    day INTEGER NOT NULL,
    start_ INTEGER NOT NULL
);

CREATE TABLE public.categories (
    id SERIAL NOT NULL UNIQUE,
    title TEXT NOT NULL,
    alias TEXT NOT NULL
);

CREATE TABLE public.restaurants (
    id SERIAL NOT NULL UNIQUE,
    price TEXT NOT NULL,
    rating FLOAT DEFAULT 0,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    address TEXT NOT NULL,
    city TEXT NOT NULL,
    zip_code INTEGER NOT NULL,
    country TEXT NOT NULL,
    state TEXT NOT NULL,
    start_ TEXT NOT NULL,
    end_ TEXT NOT NULL,
    day TEXT NOT NULL,
    picture VARCHAR DEFAULT ''
    -- FOREIGN KEY (location_id) REFERENCES locations(id) ON DELETE CASCADE,
    -- FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
    -- FOREIGN KEY (hour_id) REFERENCES hours(id) ON DELETE CASCADE,
    -- FOREIGN KEY (picture_id) REFERENCES pictures(id) ON DELETE CASCADE
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
    id SERIAL NOT NULL UNIQUE, 
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    post_date DATE NOT NULL DEFAULT CURRENT_DATE,
    rating INTEGER DEFAULT 5
    -- rating INTEGER NOT NULL check(rating = 1 or rating = 2 or rating = 3 or rating = 4 or rating = 5),
    -- reviewer_id INTEGER REFERENCES users("id") ON DELETE CASCADE,
    -- restaurant_id INTEGER NOT NULL REFERENCES restaurants("id") ON DELETE CASCADE
);