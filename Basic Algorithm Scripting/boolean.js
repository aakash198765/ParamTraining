// Checking for boolean primitives true or false
function booWho(bool) {
  var boo = bool===true || bool===false ?true:false;
  return boo;
}

booWho(null);