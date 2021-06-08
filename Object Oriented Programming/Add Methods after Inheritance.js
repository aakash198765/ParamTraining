/*
A constructor function that inherits its prototype object from a supertype constructor function 
can still have its own methods in addition to inherited methods.
*/


function Animal() { } //Super Constructor
Animal.prototype.eat = function() { console.log("nom nom nom"); }; // Super Prototype

function Dog() { } //Child Constructor

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype); // intializing child prototype
Dog.prototype.constructor = Dog;	// resetting the Dog.prototype constructor back to its Dog constructor, because when you initialize 
									// Dog.prototype to Animal.prototype - its constructor property changed to Animal.

Dog.prototype.bark = function() {
  console.log("Woof!");
}




// Only change code above this line

let beagle = new Dog();
beagle.eat();
beagle.bark();