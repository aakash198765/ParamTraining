/*
A common pattern in JavaScript is to execute a function as soon as it is declared:

(function () {
  console.log("Chirp, chirp!");
})();

This is an anonymous function expression that executes right away, and outputs Chirp, chirp! immediately.

Note that the function has no name and is not stored in a variable. 
The two parentheses () at the end of the function expression cause it to be immediately executed or invoked. 
This pattern is known as an immediately invoked function expression or IIFE.
*/


console.log("Rewrite the function makeNest and remove its call so instead it's an anonymous immediately invoked function"); 
console.log("expression (IIFE).");

(function () {
  console.log("A cozy nest is ready");
}) ();


// last two parentheses make the function to execute/invoked Immediately as it declared 