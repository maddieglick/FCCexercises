function titleCase(str) {
  // letting the string equal itself but lowercase
  let newStr = str.toLowerCase();
  let finalStr = newStr[0].toUpperCase();

  //change letter to capital if it is either the very first, or if it follows whitespace
  for(let i=1; i<newStr.length; i++){
      let newVal;
    //if it follows whitespace, next character is capitalized
    //when i=0 we dont want to add to finalStr

    if(newStr[i-1] == ' '){
        newVal = newStr[i].toUpperCase();
    } else{
      newVal = newStr[i];
    }

    finalStr += newVal;
  }
  return finalStr;
 }

titleCase("I'm a little tea pot");

