/*
It's possible to override an inherited method.
It's done the same way - by adding a method to ChildObject.prototype using the same method name as the one to override.
 */



 function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line
Penguin.prototype.fly = function() { return "Alas, this is a flightless bird.";}


// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());