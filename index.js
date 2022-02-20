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
    start();
  }
});

//--------------------- End Connect to database-----------------------------//


//--------------------- VIEW ALL DEPARTMENTS -----------------------------//
async function viewAllDepartments() {
   db.query("SELECT * FROM department", (err, results) => {
    if(err) throw err;
    console.log('------------DEPARTMENT TABLE------------')
       console.table(results);
   });

}


//--------------------- VIEW ALL ROLES  -----------------------------//
// view all roles - READ - SELECT * FROM [table_name]
async function viewAllRoles() {
  db.query("SELECT * FROM role", (err, results) => {
    if(err) throw err;
    console.log('------------ROLE TABLE------------')
      console.table(results);
  });

}


//--------------------- VIEW ALL EMPLOYEES -----------------------------//
//view all employees - READ - SELECT * FROM [table_name]
async function viewAllEmployees() {
  db.query("SELECT * FROM employee",(err, results) => {
    if(err) throw err;
    console.table(results);
  });
    
}
///FINISH

//--------------------- START FUNCTION -----------------------------//
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
          "Update Employee",
          "Create a Department",
          "View all Departments",
          "Create a Role",
          "View all Roles",
          "Quit"
        ],
      }
    ])
    .then((response) => {
      console.log(response);
      if (response.answers === "Create a Role") {
        createRole();
      } else if (response.answers === "View all Roles") {
        viewAllRoles();
      } else if (response.answers === "Update a Role") {
        updateRole();
      } else if (response.answers === "View all Employees") {
       viewAllEmployees();
        } else if (response.answers === "Create Employee") {
           createEmployee();
        } else if (response.answers === "View all Departments") {
       viewAllDepartments();
      } else if (response.answers === "Create Department") {
        updateDepartment();
      } else (response.answers === "Quit") 
    });
}
//-------------------------------------------------------------------//




//--------------------- CREATE DEPARTMENT -----------------------------//
function createDepartment() {
  inquirer
    .prompt([
      {
          type:'Input',
          name: 'departmentName',
          message:'What is the department name?'
      }
    ])
    // .then(answers => {
    //   console.log(answers);
    .then(answers => { 
        teamMembers.push( new Department ( answers.departmentName));
        // arrayID.push(manager.id)
        console.log(answers)
        console.log(teamMembers)
        // buildTeam();
    })
//-------------------------------------------------------------------//

//--------------------- CREATE EMPLOYEE -----------------------------//
function createEmployee() {
  inquirer
    .prompt([
      {
          type:'Input',
          name: 'firstName',
          message:'What is the employees first name?'
      },
      {
          type:'Input',
          name: 'lastName',
          message:'What is the employees last name?'
      },
      {
          type:'Input',
          name: 'lastName',
          message:'What is the role id of the employee (Engineering = 1, Planning = 2)?'
      }
    ])
    // .then(answers => {
    //   console.log(answers);
    .then(answers => { 
        teamMembers.push( new Employee ( answers.employeeName));
        // arrayID.push(manager.id)
        console.log(answers)
        console.log(teamMembers)
        // buildTeam();
    })
//-------------------------------------------------------------------//

//--------------------- CREATE ROLE -----------------------------//
function createRole() {
  inquirer
    .prompt([
      {
          type:'Input',
          name: 'employeeName',
          message:'What is the employee name?'
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
//-------------------------------------------------------------------//
}};
