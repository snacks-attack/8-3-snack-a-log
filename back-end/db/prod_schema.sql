\c d98cufhggcs4gi;

DROP TABLE IF EXISTS snacks;
CREATE TABLE snacks (
    id SERIAL NOT NULL PRIMARY KEY,
    name TEXT NOT NULL,
    fiber INT DEFAULT 0,
    protein INT DEFAULT 0,
    added_sugar INT DEFAULT 0,
    is_healthy BOOLEAN,
    image TEXT
);

CREATE TABLE users (
    id SERIAL NOT NULL PRIMARY KEY,
    username TEXT NOT NULL,
    password TEXT NOT NULL,
    email TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE userSnacks (
    id SERIAL NOT NULL PRIMARY KEY,
    userID INT NOT NULL REFERENCES users(id),
    name TEXT NOT NULL,
    fiber INT DEFAULT 0,
    protein INT DEFAULT 0,
    added_sugar INT DEFAULT 0,
    is_healthy BOOLEAN,
    image TEXT
);