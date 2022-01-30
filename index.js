const mysql = require('mysql2');
const inquirer = require('inquirer');
const db = require('./db/connection');

inquirer
    .prompt([
        {
            type: "list",
            name: "department_id",
            message: "Choice a department",
            choices: [
                { name: "Sales",  value: 1},
                { name: "Accounting", value: 2 },
            ]
        }
    ])