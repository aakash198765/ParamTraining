console.log("----------Object -- > hasOwnProperty(key) & Object.keys()-----------");
//JavaScript Object



// obj.hasOwnProperty(key);
console.log("\n<--- obj.hasOwnProperty(key) ---->");

const car = {
  name : "Suzuki",
  model : "AQR23D",
  color : "Red",
  price : "$23456.00"
}

console.log("Car name : " + car.hasOwnProperty("name")); // returns 1 if true

// Object.keys(objectName); //will return all the keys as Array
console.log("\n<--- Object.keys(objectName) ---->");

console.log("All the key Values are : ");
console.log(Object.keys(car));
