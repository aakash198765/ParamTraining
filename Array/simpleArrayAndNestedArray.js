//    ARRAY INTRODUCTION

// SIMPLE ARRAY
console.log("--------SIMPLE/ONE DIMENSIONAL ARRAY--------");
var arr = [1,8,9,6,3];    // array
console.log("Array elements after sorting : ");console.log(arr.sort()); // array sorting
console.log("Array element at 4th position : " + arr[3]);    // access array elements using [] bracket notation

//for loop on simple ARRAY
console.log("\nArray elements using for loop are:");
for( ele of arr) {
  console.log(ele);
}

// NESTED ARRAY
console.log("\n--------NESTED ARRAY--------");
var nestedArray = [
  [2, 5], [2, 6], [5, 9], [4, 6], [9, 0], [4, 5, 6], [6, 2, 3], [1, 5, 9]
  ];

console.log("Accessing nested array elements at 7[2] : " + nestedArray[7][2]); // accessing nested array elements

console.log("Accessing nestedArray elements using for-of loop : ");
for(ele of nestedArray){
  for(item of ele){
    console.log(item);
  }
}




