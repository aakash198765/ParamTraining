console.log("--------Don't use endsWith(argument) for this program--------");


function confirmEnding(str, target) {

	return str.slice(-target.length) === target;
}

confirmEnding("I am Aakash Kumar", "mar");



//------------------my way without using slice() function

function confirmEnding(str, target) {
var strMatch = "";
    for(var i=str.length-target.length; i<str.length; i++){
        strMatch += str[i];
    }

 return strMatch === target;
}

confirmEnding("Bastian", "an");