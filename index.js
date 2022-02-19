const mysql = require("mysql");
// const util = require('util');
const inquirer = require("inquirer");

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
    start();
  }
});

//--------------------- End Connect to database-----------------------------//



async function viewAllDepartments() {
   db.query("SELECT * FROM department", (err, results) => {
    if(err) throw err;
    console.log('------------DEPARTMENT TABLE------------')
       console.table(results);
   });

}

// view all roles - READ - SELECT * FROM [table_name]
async function viewAllRoles() {
  db.query("SELECT * FROM role", (err, results) => {
    if(err) throw err;
    console.log('------------ROLE TABLE------------')
      console.table(results);
  });

}

//view all employees - READ - SELECT * FROM [table_name]
async function viewAllEmployees() {
  db.query("SELECT * FROM employee",(err, results) => {
    if(err) throw err;
    console.table(results);
  });
    
}
///FINISH


function start() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "answers",
        message: "what would you like to do today?",
        choices: [
          "Create an Employee",
          "View all Employees",
          //needs its own function
          "Update Employee Role",
          "Create a Department",
          "View all Departments",
          "Update Department Roles",
          "Create a Role",
          "View all Roles",
          "Update Role",
          "Quit",
        ],
      }
    ])
    .then((response) => {
      console.log(response);
      if (response.answers === "Create a Role") {
        createRole();
      } else if (response.answers === "View all Departments") {
        viewAllDepartments();
      } else if (response.answers === "View all Employees") {
        viewAllEmployees();
      } else if (response.answers === "View all Roles") {
        viewAllRoles();
      } else (response.answers === "Quit") 
    });
}

function createRole() {
  inquirer
    .prompt([
      // {
      //     type:'Input',
      //     name: 'employeeName',
      //     message:'What is the employee name?'
      // },
    
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
        function (res, err) {
          if (err) throw err;
          console.log(res);
        }
      );

      console.log("query", query);
    })
    .then(() => {
      start();
    });
}

