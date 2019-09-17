DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(150) NOT NULL,
  department_name VARCHAR(150) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INTEGER(10) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("42 inch TV", "electronics", 499.99, 23);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("50 inch TV", "electronics", 799.95, 16);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("60 inch TV", "electronics", 849.95, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("70 inch 4K TV", "electronics", 1500.95, 31);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("kitchen dishes", "housewheres", 50.37, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("baking sheet", "housewheres", 38.50, 11);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dell Laptop", "electronics", 595.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("washing machine", "electronics", 495.95, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("slimjim", "grocery", 2.48, 43);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("12 pk mtn dew", "grocery", 4.95, 20);