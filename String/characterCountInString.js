var originalStr = 'check whether character already exist or not in the set'; // read a string 

originalStr = originalStr.toLowerCase(); // convert the string character to toLowerCase
console.log(originalStr);

var exist = new Set(); // to store the unique characters of the string

var count = 0;
for( ele of originalStr){ // take each character one by one
  
  if(!exist.has(ele)){  // check whether character already exist or not in the set 
  for(item of originalStr){ // take each character of strin
        exist.add(ele);     // add each character to the exist, exist hold unique character
        
        if(ele != ' ') {
    if(item === ele){     // check the character exists
      count += 1;        //  increase the count if character matches
    }
  }
  }
  
  if (ele !== ' '){
  console.log(ele + " = " + count);
  }
  count = 0;
}
}




