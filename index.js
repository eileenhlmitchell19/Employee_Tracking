    const mysql = require('mysql');
    const db = require('db');
    const util = require('util');
    const inquire = require('inquire');
const inquirer = require('inquirer');

// const connection = require('mysql2/typings/mysql/lib/Connection');

db.query = util.promisify( db.query );

db.query('SELECT * FROM employee')
    .then((results) => {

    // console.log(err);
    console.table(results);

});

//--------------------- Connect to database-----------------------------//
    const db = mysql.createConnection(
        {
        host: 'l127.0.0.1',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'password',
        database: 'employees'
        });

        Connection.connect(function (err) {
            if (err) {
                throw err;
        } else {
            console.log('Successfully connected to mysql')
        }
    });

    module.exports = connection;
//-----------------------------------------------------------------------//




    //25 mins into sql vid
    //Present user with options



    //------------ View all Departments, Roles, Employees Functions-------------//
    //17:17 into vid
    //view all departments - READ - SELECT * FROM [table_name]
    async function viewAllDepartments() {

        const employees = await db.query('SELECT * FROM departments')

        console.table(results);

    }

    //view all roles - READ - SELECT * FROM [table_name]
    async function viewAllRoles(){

        const employees = await db.query('SELECT * FROM roles')

        console.table(results);

    }


    //view all employees - READ - SELECT * FROM [table_name]
    async function viewAllEmployees(){

        const employees = await db.query('SELECT * FROM employee')

        console.table(results);

    }
//--------------------------------------------------------------------------//

//--------------------------- ADD A DEPARTMENT -----------------------------//
    //add a department - CREATE - "INSERT INTO [table_name] (col1, col2) VALUES (value1, value2)"


//--------------------------------------------------------------------------//




//------------------------------ ADD A ROLE --------------------------------//
    //add a role - CREATE - 



//--------------------------------------------------------------------------//


//----------------------------- SELECT A ROLE ------------------------------//
        // SELECT the existing roles out for the `roles` table
    const departments = [
        {
            id: 1,
            name: "Sales"
        },
        {
            id: 1,
            name: "Sales"
        }
    ];
            // .map() the results from `roles` to question data for inquirer
            const choices = department.map( department => {
                return {
                    name: department.name,
                    value: department.id
                }
            })


// no foreign ids are in this one
           const answers = await inquirer
            .prompt([
                {
                    type: "list",
                    name: "department_id",
                    message: "Choice a department",
                    choices: [
                        { name: "Sales", value: 1 },
                        { name: "Accounting", value: 2},
                    ]
                }
            ])
            .then((answers) => {
                console.log(answers);
            })
//--------------------------------------------------------------------------//



        // THEN prompt the user for role information (inquirer)

            // Take the user's answers and go INSERT them into the `role` table

    //add an employee - CREATE - 

    //update an employee

    //review of all steps in min 30 of demo