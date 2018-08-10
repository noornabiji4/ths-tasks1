// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};
function checkObj(checkProp) {
  // Your Code Here
  if (checkProp=="gift"){
  return "pony";
  }
  else if(checkProp=="pet"){
    return "kitten";

  }
    else if(checkProp=="bed"){
      return "seligh";
  }
  else {
    return "Not Found";
  }
}

// Test your code by modifying these values
checkObj("gift");
