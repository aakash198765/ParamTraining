console.log("----------Spread Operator-----------");
//Spread Operator 



// combine arrays with Spread Operator
console.log("Combine arrays with spread operator : ");
let fragment = ['to', 'code'];
let sentence = ['Learning', ...fragment, 'is', 'fun.'];

console.log(sentence);


// copy array elements with spread operator
console.log("Copy array elements using Spread Operator : ");
let myIntro = ['I', 'am', 'Aakash', 'Kumar'];
let myIntroCopy = [...myIntro];
console.log(myIntroCopy)