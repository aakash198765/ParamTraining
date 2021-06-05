//Creating a SHOPPING list using Nested Array


//create a shopping list having value "itemName" and "numberOfItems"
var shoppingList = [
  ["Blazer", 1],
  ["Shirts", 3],
  ["Tshirts", 4],
  ["Pants", 6]
  ];

//Access the items and numberOfItems to be purchased

//Acess the items which you have bought
console.log("The items which have been bought : ");
for(ele of shoppingList){
  console.log(ele[0]);
}

// Check total how many items have been bought
var count = 0;
for(ele of shoppingList){
  count += ele[1];
}
console.log("\nTotal no. of items which have been bought : " + count);


// Display the items and numberOfItems correspondingly
console.log("\nThe Shopping List");
for(ele of shoppingList) {
  console.log(ele[0] + " => " + ele[1]);
} 