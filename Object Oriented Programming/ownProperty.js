function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}





// add the properties to an arrya "ownProps"

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
for(let key in canary) {
  if(canary.hasOwnProperty(key)){
    ownProps.push(key);
  }
}

console.log(ownProps);