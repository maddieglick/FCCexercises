let dropElements = (arr, func) => {

for (let i=0; i<arr.length; i++){
    while(func(arr[i])==false){ 
      arr.shift(arr[i]); //remove each i that returns false
    }
    break; //breaks when func(arr[i]) == true
  }
  return arr
}

console.log(dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}));
