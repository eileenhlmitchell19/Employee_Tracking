DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;



CREATE TABLE department_table (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE role_table (
    id  INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30),
    salary DECIMAL(10,2),
    department_id INT,
    
    PRIMARY KEY(id),
    CONSTRAINT fk_department_table
    FOREIGN KEY (department_id)
    REFERENCES department_table(id)
    ON DELETE CASCADE
);

CREATE TABLE employee_table (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role_id INT,
    manager_id INT,
    PRIMARY KEY(id),

    CONSTRAINT fk_role_table
    FOREIGN KEY (role_id)
    REFERENCES role_table(id)
    ON DELETE CASCADE,

    CONSTRAINT fk_employee_table
    FOREIGN KEY (manager_id)
    REFERENCES employee_table(id)
    ON DELETE SET NULL
);



