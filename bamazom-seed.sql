DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(150) NOT NULL,
  department_name VARCHAR(150) NOT NULL,
  price INTEGER(10) NOT NULL,
  stock_quantity INTEGER(10) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("42 inch TV", "electronics", 500, 23);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("50 inch TV", "electronics", 800, 16);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("60 inch TV", "electronics", 850, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("70 inch 4K TV", "electronics", 1500, 31);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("kitchen dishes", "housewheres", 50, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("baking sheet", "housewheres", 38, 11);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dell Laptop", "electronics", 595, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("washing machine", "electronics", 495, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("slimjim", "grocery", 2, 43);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("12 pk mtn dew", "grocery", 4, 20);