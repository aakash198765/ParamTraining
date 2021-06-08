console.log("------------Splice Method--------------");
//splice(arrayIndex, No. of Items to be deleted, item1, item2,..)

//create an array of airports
let airports = ['Bengaluru', 'Mumbai', 'Delhi', 'Goa', 'Kolkata'];

// create an array to delete the item at position 
airports.splice(1,1);
console.log(airports);

//Add "Patna" airport at position 1
airports.splice(1, 1, "Patna");
console.log(airports);