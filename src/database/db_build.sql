BEGIN;

DROP TABLE IF EXISTS db-morning-challenge CASCADE;

CREATE TABLE db-morning-challenge (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    feelings TEXT NOT NULL
);

INSERT INTO db-morning-challenge (name, feelings)
VALUES
    ('Anna', 'angery'),
    ('Bobby', 'frustrated')
    ('Ryan', 'distracted');

COMMIT;