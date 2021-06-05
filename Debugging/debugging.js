//Types of Debugging  - Syntax, Logical and Runtime error


// 1.
//Syntax error - Missing Paranthesis brackets
console.log("Syntax Error - Missing Paranthesis brackets");
/*
let myArray = [1, 2, 3;
let arraySum = myArray.reduce((previous, current =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);
*/

// --> Correct code
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current )=>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);



// 2. 
// Logic Error
consol.log("Logic Error");
// to print 3*2 matrix
/*
function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray

    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
*/

// --> Correct Code
function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  let row = [];
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray

    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
    row = [];
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);


// Runtime Error - 
//Runtime errors, also called exceptions, occur during execution (after compilation/interpretation).

//or example, the following line causes a runtime error because here the syntax is correct, but at runtime, it is trying to call a method that does not exis
console.log("Run Time Error Example");
<script type = "text/javascript">
   <!--
      window.printme();
   -->
</script>

