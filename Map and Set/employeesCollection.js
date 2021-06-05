//Working employee details

// create an empty employees dictionary/collection using Map()
const employees = new Map();

// Assign the employees details to employees Dictionary 
employees.set("Id",[100, 101, 102, 103, 104, 105]);
employees.set("employeeName", ["Abhinash", "Juhi", "Raj", "Divya", "Gaurav"]);
employees.set("Department", ["Cloud", "Web Technology", "Block Chain"]);
employees.set("Designation", ["Design", "Development", "Marketing"]);

// Print to check the employee Dictionary is created correctly
//console.log(employees);

// Print each item of the employee dictionary
for( item of employees) {
  console.log(item);
}

//Check whether the employee is working or not in this company
console.log(employees.has('Id'));

// Make a new record/dictionary/collection to keep record of 
//which employee is working in which department and his/her designation
const employeeDetail = new Map();


const Ids = employees.get('Id');
console.log("The IDs are: " + Ids); // check for the IDs present in the employees dict. 
//and assign employee details to the employee IDs

//other details of the employee
const employeeNames = employees.get('employeeName');
const departments = employees.get('Department');
const designations = employees.get('Designation');

employeeDetail.set(Ids[0], [employeeNames[0], departments[1], designations[2] ]);
employeeDetail.set(Ids[1], [employeeNames[1], departments[0], designations[1] ]);
employeeDetail.set(Ids[2], [employeeNames[2], departments[2], designations[0] ]);
employeeDetail.set(Ids[3], [employeeNames[3], departments[1], designations[2] ]);
employeeDetail.set(Ids[4], [employeeNames[4], departments[0], designations[0] ]);

//Print the employee Details 
console.log(employeeDetail);

