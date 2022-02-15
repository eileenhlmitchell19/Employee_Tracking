DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;



CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE role (
    id  INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL UNSIGNED NOT NULL,
    department_id INT NOT NULL,
    
    CONSTRAINT fk_department
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE CASCADE
    
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role_id INT,
    manager_id INT,
    PRIMARY KEY(id),

    CONSTRAINT fk_role
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE CASCADE,

    CONSTRAINT fk_employee
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    ON DELETE SET NULL
);



