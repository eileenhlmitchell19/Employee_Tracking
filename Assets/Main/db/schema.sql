DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

SELECT DATABASE();

CREATE TABLE employee (
-- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
id INT NOT NULL ,
-- Makes a string column "name" which cannot contain null --
name VARCHAR(100) NOT NULL
);