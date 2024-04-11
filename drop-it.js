let dropElements = (arr, func) => {
  //we want to loop through arr and remove elements until an element returns function(n) == true
  //loop through arr
  //if function(arr[i]) == false, remove arr[i] from arr and continue until you hit a true
  //when you hit a true, return the rest of the array remaining
  //or if none are true, return the empty array

  for (let i=0; i<arr.length; i++){
    while(func(arr[i])==false){
      arr.shift(arr[i]);
      //i++;
    // }else if(func(arr[i])==true){
    //   return arr
    }
    break;
  }
  return arr
}

console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));
