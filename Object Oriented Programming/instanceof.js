function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(9);

console.log(myHouse instanceof House);

// returns either true or false 
// instanceof is used to compare the instance/object to it's constructor 