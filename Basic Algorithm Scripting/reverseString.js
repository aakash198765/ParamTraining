function stringReverse(str) {
	var strSplit = str.split(''); // to split the string in the array so it can be converted using array.reverse()

	var strReverse = strSplit.reverse(); // reverse the array

	var rev = strReverse.join();

	return rev; // return the reversed string

}


// write a function call
stringReverse('Hello');