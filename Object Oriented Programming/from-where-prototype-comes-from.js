console.log("---------Understand Where an Object’s Prototype Comes From-----------");




function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line
Dog.prototype.isPrototypeOf(beagle); //Checks whether Dog is prototype(parent) of beagle