CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

INSERT INTO users (username, email, password)
VALUES
  ('James oddy', 'james17@gmail.com', 'michBeni30'),
  ('Eren derack', 'ederack@gmail.com', 'lu#2artdu'),
  ('Scimmia laplace', 'laprack@gmail.com', 'lupdeni34'),
  ('Manny audituri', 'kimishaudi@gmail.com', 'systAnayst2*'),
  ('Meteo Leoni', 'meteoLeoNene@gmail.com', 'saviordarleni^8'),
  ('Lucia Caminos', 'camiCon23@gmail.com', 'Blockblazer#%');

UPDATE users
SET username = 'Nenemis centauri'
WHERE id = 1;

CREATE TABLE items(
    id SERIAL PRIMARY KEY NOT NULL,
    stock int NOT NULL,
    arrival TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    country VARCHAR(50) NOT NULL,
    user_id int NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

INSERT INTO items (stock, country, user_id)
VALUES
  (10, 'South Africa', 1),
  (7, 'Saudi Arabia', 2),
  (8, 'Japan', 3),
  (5, 'Jamaica', 4),
  (17, 'Colombia', 5),
  (5, 'Saint Lucia',6);

SELECT id, stock, country FROM items
WHERE country LIKE 'S%'
ORDER BY id ASC

CREATE TABLE shelves(
    id SERIAL PRIMARY KEY,
    shelf_position INT NOT NULL,
    item_id INT NOT NULL,
    FOREIGN KEY (item_id) REFERENCES items(id) ON DELETE CASCADE
);

INSERT INTO shelves(shelf_position, item_id)
VALUES(1,1)
