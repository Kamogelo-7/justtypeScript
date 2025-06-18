CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(100) UNIQUE,
    password VARCHAR(100) NOT NULL
);

INSERT INTO users(username, email, password);
values('james oddy', 'james17@gmail.com', 'michBeni30')

UPDATE users
SET username = 'Nenemis centauri'
WHERE id = 1

CREATE TABLE items(
    id SERIAL PRIMARY KEY,
    stock int NOT NULL,
    arrival DATE NOT NULL,
    country VARCHAR(50) NOT NULL,
    user_id int NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO items(stock, arrival, country, user_id);
VALUES(10, '2025-05-03', 'South Africa', 1)


app.get("/products",(req,res)=>{
    const productData = req.body["item"]
    productData.find((product)=> {
        if(product.id !== productdata.id) return null
    })
})
