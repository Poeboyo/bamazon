DROP DATABASE IF EXISTS bamazonDB;
CREATE DATABASE bamazonDB;
USE bamazonDB;

CREATE TABLE products(
item_id INT AUTO_INCREMENT,
product_name VARCHAR(255),
department_name VARCHAR(255),
price INT,
stock_quantity INT,
PRIMARY KEY(item_id)
);