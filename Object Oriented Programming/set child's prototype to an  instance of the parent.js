



function Animal() { }		//	parent constructor

Animal.prototype = {		// parent prototype - super type
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }		// child constructor

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype); //creating child's prototype utilizing parent's ptototype using Object.create(ParentContructor.prototype)

let beagle = new Dog();

