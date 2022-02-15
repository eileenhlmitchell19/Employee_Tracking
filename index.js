const mysql = require('mysql');
// const util = require('util');
const inquirer = require('inquirer');

const PORT = 3306;


//--------------------- Connect to database-----------------------------//
const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        // MySQL username,
        user: 'root',
        port: PORT,
        // MySQL password
        password: 'password',
        database: 'employee_db'
    });

db.connect(function (err) {
    if (err) {
        throw err;
    } else {
        console.log(`Successfully connected to mysql on PORT: ${PORT}`);

        let interval = setInterval(() => {
            start()
            clearInterval(interval);
        }, 1000);
    
    }

    
});

    module.exports = mysql;
// ----------------------------------------------------------------------//

    //25 mins into sql vid
    //Present user with options



    //------------ View all Departments, Roles, Employees Functions-------------//
    //17:17 into vid
    //view all departments - READ - SELECT * FROM [table_name]
    async function viewAllDepartments() {

        const employees = await db.query('SELECT * FROM departments')

        console.table(results);

    }

    // view all roles - READ - SELECT * FROM [table_name]
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
        // const departments = [
        //     {
        //         id: 1,
        //         name: "Executive Officer"
        //     },
        //     {
        //         id: 2,
        //         name: "Analyst"
        //     },
        //     {
        //         id: 3,
        //         name: "Clerk"
        //     },
        //     {
        //         id: 4,
        //         name: "City Council"
        //     }
        // ];
            // .map() the results from `roles` to question data for inquirer
            // const choices = department.map( department => {
            //     return {
            //         name: department.name,
            //         value: department.id
            //     }
            // })


// no foreign ids are in this one
        //    inquirer
        //     .prompt([
        //         {
        //             type: "list",
        //             name: "role_table",
        //             message: "Choose an employee role.",
        //             choices: [
        //                 { name: "Civil Engineering", value: 1 },
        //                 { name: "Planning", value: 2},
        //                 { name: "CAD", value: 3},
        //                 { name: "Survey", value: 4},
        //             ]
        //         }
        //     ])
        //     .then((answers) => {
        //         console.log(answers)
        //     })

        function start(){

            inquirer
            .prompt([
                {
                    type: "list",
                    name: "selection",
                    message: "what would you liek to do today?",
                    choices: [ 'Create an Employee', 'Create a Department', 'Create a Role', 'Nothing']
                }
            ])
            .then((answers) => {
                console.log(answers)
                if(answers.selection === 'Create a Role'){
                    createRole()
                }
            })
        }

            // function buildTeam() {
            //     inquirer.prompt([
            //         {
            //             type:'list',
            //             name: 'employeeChoice',
            //             message:'What is the employees name?',
            //         }, 
            //     ]).then((answers) => {
            //         console.log(answers)
                    // if(answers.employeeChoice == 'Engineer') { // IF `Add Engineer` -> `Ask for engineer info`
                    //     createEngineer();
                    // } else if (answers.employeeChoice == 'Planner') { // IF `Add Planner` -> `Ask for planner info`
                    //     createPlanner();
                    // } else if (answers.employeeChoice == 'CAD') { // IF `Add CAD` -> `Ask for CAD info`
                    //     createCAD();
                    // }else if (answers.employeeChoice == 'Survey') { // IF `Add Survey` -> `Ask for survey info`
                    //     createSurvey();
                    // }else {
                    //     // By passing employees to generateHTML this pushes the class that was pushed in the init function this is referencing the file not the function
                    //     writeToFile("test.html", employeeTeam(teamMembers)); // IF `All done` -> `build an html page`
                    // }
            //     })
            // }

    function createRole(){
        inquirer.prompt([
            // {
            //     type:'Input',
            //     name: 'employeeName',
            //     message:'What is the employee name?'
            // },
            {
                type:'Input',
                name: 'roleID',
                message:'What is the roleID?'
            }, 
            {
                type:'Input',
                name: 'roleSalary',
                message:'What is the role salary?'
            }, 
            {
                type:'Input',
                name: 'roleTitle',
                message:'What is the role title?'
            }, 
        ]).then(answers => { 
            console.log(answers);

            let query = db.query('INSERT INTO role_table SET ?',
            {
                department_id: answers.roleID,
                title: answers.roleTitle,
                salary: answers.roleSalary
            }, function (res, err){
                if (err) throw err;
                console.log(res);

            })
        
            console.log('query',query)
            
        }).then(() => {
            start()
        })
    };


    // function createPlanner(){
    //     inquirer.prompt([
    //         {
    //             type:'Input',
    //             name: 'plannerName',
    //             message:'What is the planner name?'
    //         },
    //         {
    //             type:'Input',
    //             name: 'employeeID',
    //             message:'What is the planner employeeID?'
    //         }, 
    //         {
    //             type:'Input',
    //             name: 'employeeSalary',
    //             message:'What is the planner salary?'
    //         }, 
    //         {
    //             type:'Input',
    //             name: 'employeeTitle',
    //             message:'What is the planner title?'
    //         }, 
        
    //     ]).then(answers => { 
    //         teamMembers.push( new Planner ( answers.engineerName, answers.employeeID, answers.emailAddress, answers.githubUsername ));
    //         // arrayID.push(engineer.id)
    //         console.log(teamMembers)
            
    //         buildTeam();
    //     })
    // };


    // function createPlanner(){
    //     inquirer.prompt([
    //         {
    //             type:'Input',
    //             name: 'plannerName',
    //             message:'What is the CAD name?'
    //         },
    //         {
    //             type:'Input',
    //             name: 'employeeID',
    //             message:'What is the CAD employeeID?'
    //         }, 
    //         {
    //             type:'Input',
    //             name: 'employeeSalary',
    //             message:'What is the CAD salary?'
    //         }, 
    //         {
    //             type:'Input',
    //             name: 'employeeTitle',
    //             message:'What is the CAD title?'
    //         }, 
        
    //     ]).then(answers => { 
    //         teamMembers.push( new CAD ( answers.engineerName, answers.employeeID, answers.emailAddress, answers.githubUsername ));
    //         // arrayID.push(engineer.id)
    //         console.log(teamMembers)
            
    //         buildTeam();
    //     })
    // };


    // function createSurveyor(){
    //     inquirer.prompt([
    //         {
    //             type:'Input',
    //             name: 'surveyName',
    //             message:'What is the surveyor name?'
    //         },
    //         {
    //             type:'Input',
    //             name: 'employeeID',
    //             message:'What is the surveyor employeeID?'
    //         }, 
    //         {
    //             type:'Input',
    //             name: 'employeeSalary',
    //             message:'What is the surveyor salary?'
    //         }, 
    //         {
    //             type:'Input',
    //             name: 'employeeTitle',
    //             message:'What is the surveyor title?'
    //         }, 
        
    //     ]).then(answers => { 
    //         teamMembers.push( new Survey ( answers.engineerName, answers.employeeID, answers.emailAddress, answers.githubUsername ));
    //         // arrayID.push(engineer.id)
    //         console.log(teamMembers)
            
    //         buildTeam();
    //     })
    // };
//--------------------------------------------------------------------------//

  


        // THEN prompt the user for role information (inquirer)

            // Take the user's answers and go INSERT them into the `role` table

    //add an employee - CREATE -

    //update an employee

    //review of all steps in min 30 of demo