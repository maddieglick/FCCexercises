function reverseString(str) {
  let backwards = ""
  for(let i = str.length - 1; i >= 0; i--){
    str.concat(str[i]);
    backwards = backwards.concat(str[i]);
  }
  return backwards;
}

reverseString("hello");
