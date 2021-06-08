function findLongestWordLength(str) { 
  var strSplit = str.split(' ');
  
  var num = [];
  for(let i=0; i<strSplit.length;i++){
    num.push(strSplit[i].length);
  }

  var max=num[0];
  for(let i=1;i<num.length;i++){
      if(max<=num[i]){
        max = num[i];
      }
  }

  return max;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");