CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100) NOT NULL
);

INSERT INTO users(username, email, password)
values('james oddy', 'james17@gmail.com', 'michBeni30');

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

INSERT INTO items(stock, country, user_id)
VALUES(10, 'South Africa', 1);

CREATE TABLE shelves(
    id SERIAL PRIMARY KEY,
    shelf_position INT NOT NULL,
    item_id INT NOT NULL,
    FOREIGN KEY (item_id) REFERENCES items(id) ON DELETE CASCADE
);

INSERT INTO shelves(shelf_position, item_id)
VALUES(1,1)

app.get("/products",(req,res)=>{
    const productData = req.body["item"]
    productData.find((product)=> {
        if(product.id !== productdata.id) return null
    })
})
