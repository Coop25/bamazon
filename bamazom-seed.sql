DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(150) NOT NULL,
  department_name VARCHAR(150) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INTEGER(10) NOT NULL,
  product_sales DECIMAL(10,2) DEFAULT 0,
  PRIMARY KEY (id)
);

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(150) NOT NULL,
  over_head_costs DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("42 inch TV", "electronics", 499.99, 23),
("50 inch TV", "electronics", 799.95, 16),
("60 inch TV", "electronics", 849.95, 2),
("70 inch 4K TV", "electronics", 1500.95, 31),
("kitchen dishes", "housewheres", 50.37, 12),
("baking sheet", "housewheres", 38.50, 11),
("Dell Laptop", "electronics", 595.99, 10),
("washing machine", "electronics", 495.95, 6),
("slimjim", "grocery", 2.48, 43),
("12 pk mtn dew", "grocery", 4.95, 20);


INSERT INTO departments (department_name, over_head_costs)
VALUES ("electronics", 845.12),
("housewheres", 837.12),
("grocery", 62.30);


SELECT * FROM products;
SELECT * FROM departments;