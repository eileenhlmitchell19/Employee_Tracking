INSERT INTO department ( name )
VALUES
    ( "Engineering"),
    ( "Planning"),


INSERT INTO role 
    (title, salary, department_id )
    VALUES
        ( "Planning Director", 100000, 1 ),
        ( "Planner", 80000, 1 ),
        ( "Associate Planner", 70000, 1 ),
        ( "Engineering Director", 60000, 2 ),
        ( "Civil Engineer", 100000, 2 ),
        ( "Design Engineer", 80000, 2 ),
        ( "EIT", 70000, 2 ),
        ( "Engineering Director", 60000, 2 );


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ( "Clay", "Shmay" , 2, NULL),
    ( "Matt", "Hat", 2, NULL ),
    ( "Ian", "Mian", 2, NULL ),
    ( "Sami", "Crami", 2, NULL ),
    ( "Eileen", "Smiling", 2, NULL ),
    ( "Isaac", "Pieisaac", 2, NULL ),
    ( "Darrell", "Parrell" , 1, NULL ),
    ( "Tom", "Fom", 1, NULL ),
    ( "Joe", "Schmoe", 1, NULL ),
    ( "Jesse", "Sayshe", 1, NULL ),
    ( "Sang", "Fang", 1, NULL ),
    ( "Sam", "Ham", 1, NULL ),

    