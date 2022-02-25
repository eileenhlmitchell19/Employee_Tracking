const mysql = require("mysql");
// const util = require('util');
const inquirer = require("inquirer");
const teamMembers = [];
const PORT = 3306;

//--------------------- Connect to database-----------------------------//
const db = mysql.createConnection({
  host: "127.0.0.1",
  // MySQL username,
  user: "root",
  port: PORT,
  // MySQL password
  password: "password",
  database: "employee_db",
});

db.connect(function (err) {
  if (err) {
    throw err;
  } else {
    start()
  }
});

function start() {
  inquirer
    .prompt({
      type: "list",
      name: "answers",
      message: "what would you like to do today?",
      choices: [
        "Create an Employee",
        "View all Employees",
        "Create Department",
        "View all Departments",
        "Create Role",
        "View all Roles",
        "Quit",
      ],
    })
    .then((response) => {
      console.log("this is response: ", response);
      if (response.answers === "Create Role") {
        createRole();
      } else if (response.answers === "View all Roles") {
        viewAllRoles();
      } else if (response.answers === "View all Employees") {
        viewAllEmployees();
      } else if (response.answers === "Create an Employee") {
        createEmployee();
      } else if (response.answers === "View all Departments") {
        viewAllDepartments();
      } else if (response.answers === "Create Department") {
        createDepartment();
      } else {
        db.end();
      }
    });
}

//--------------------- End Connect to database-----------------------------//

//--------------------- VIEW ALL DEPARTMENTS -----------------------------//
function viewAllDepartments() {
  db.query("SELECT * FROM department", (err, results) => {
    if (err) throw err;
    console.log("------------DEPARTMENT TABLE------------");
    console.table(results);
  });
}

//--------------------- VIEW ALL ROLES  -----------------------------//
// view all roles - READ - SELECT * FROM [table_name]
function viewAllRoles() {
  db.query("SELECT * FROM role", (err, results) => {
    if (err) throw err;
    console.log("------------ROLE TABLE------------");
    console.table(results);
    
  });
}

//--------------------- VIEW ALL EMPLOYEES -----------------------------//
//view all employees - READ - SELECT * FROM [table_name]
function viewAllEmployees() {
  db.query("SELECT * FROM employee", (err, results) => {
    if (err) throw err;
    console.table(results);
  });
}
///FINISH



//--------------------- CREATE DEPARTMENT -----------------------------//
function createDepartment() {
  inquirer
    .prompt([
      {
        type: "Input",
        name: "departmentName",
        message: "What is the department name?",
      },
    ])
    .then((answers) => {
      console.log("let be ", answers.departmentName);
      let query = db.query(
        "INSERT INTO department SET name = ?",
        answers.departmentName,

        function (err, result) {
          if (err) throw err;
          //console.log(result);
        }
      );
    })
    .then(() => {
      start();
    })
}

//-------------------------------------------------------------------//

//--------------------- CREATE EMPLOYEE -----------------------------//
function createEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "What is the employees first name?",
      },
      {
        type: "input",
        name: "last_name",
        message: "What is the employees last name?",
      },
      {
        type: "input",
        name: "role_id",
        message:
          "What is the role id of the employee (Engineering = 1, Planning = 2)?",
      },
      {
        type: "input",
        name: "manager_id",
        message: "Who is the manager of this employee, please use manager id",
      },
    ])
    .then((answers) => {
      console.log(answers);

      let query = db.query(
          "INSERT INTO employee SET ?",
          {
            first_name: answers.first_name,
            last_name: answers.last_name,
            role_id: answers.role_id,
            manager_id: answers.managerId,
          },
          function (err, result) {
            if (err) throw err;
            console.log(
              "\n"+result.affectedRows + " employee(s) have been added!"
            );
          }
      );
      console.log(query.sql);
    })
    .then(() => {
      start();
    });
}
//-------------------------------------------------------------------//

//--------------------- CREATE ROLE -----------------------------//
function createRole() {
  inquirer
    .prompt([
      {
        type: "Input",
        name: "employeeName",
        message: "What is the employee name?",
      },
      {
        type: "Input",
        name: "roleSalary",
        message: "What is the role salary?",
      },
      {
        type: "Input",
        name: "roleTitle",
        message: "What is the role title?",
      },
      {
        type: "Input",
        name: "departmentId",
        message: "What is the department id?",
      },
    ])
    .then((answers) => {
      console.log(answers);

      let query = db.query(
        "INSERT INTO role SET ?",
        {
          title: answers.roleTitle,
          salary: answers.roleSalary,
          department_id: answers.departmentId,
        },
        function (err, result) {
          if (err) throw err;
          // console.log(result);
        }
      );

      // console.log("query", query.sql);
    })
    .then(() => {
      start();
    });
}

