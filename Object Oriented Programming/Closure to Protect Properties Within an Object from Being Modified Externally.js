/*
The simplest way to make this public property private is by creating a variable within the constructor function. 
This changes the scope of that variable to be within the constructor function versus available globally. 
This way, the variable can only be accessed and changed by methods also within the constructor function.
*/


function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount();

/*
Here getHatchedEggCount is a privileged method, because it has access to the private variable hatchedEgg. 
This is possible because hatchedEgg is declared in the same context as getHatchedEggCount. 
In JavaScript, a function always has access to the context in which it was created.
 This is called closure.
 */