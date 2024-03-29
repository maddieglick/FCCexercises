//The function must accept an indeterminate number of arguments, also known as a variadic function. You can access the additional arguments by adding a rest parameter to the function definition or using the arguments object.

//change the arguments to arr, ...args so that we can take multiple args
function destroyer(arr, ...args) {
  //create an array containing ...args
  const argArray = [...args];
  //filter through arr to see if any args items are in it
  const filteredArr = arr.filter(function(val){
    // for values in arr
    for(let i=0; i<arr.length; i++){
      //if a value in arr (val) is not included in the args, we put it in the final filtered array
      if(argArray.includes(val) == false){
        return val;
      }
    }
  })
  return filteredArr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
