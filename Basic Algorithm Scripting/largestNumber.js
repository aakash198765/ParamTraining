function largestOfFour(arr) {
  var max = arr[0][0];
  
  for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length;j++) {
      if(max<arr[i][j]){
        max = arr[i][j];
      }
    }
  }
  
  console.log("Largest Number is :");
  console.log(max);
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);