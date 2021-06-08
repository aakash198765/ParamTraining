//------Use  of this keyword in the object to make it more Reusable

let dog = {
	name : "doggy",
	numLegs : 4,

	sayLegs : function(){
		return "this dog has" + this.numLegs + "legs.";
	}
}

dog.sayLegs();