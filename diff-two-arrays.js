function diffArray(arr1, arr2) {

//we basically want to say if the index of a value in either array is -1, add it to new array
//create empty array to add items to if there's only one
  const singleWords = [];

  arr1.filter(function(val){
  if (arr1.indexOf(val) == -1 || arr2.indexOf(val) == -1){
    singleWords.push(val);
  }
  });
  //do the same thing but the other way around 
  arr2.filter(function(val){
    if(arr2.indexOf(val) == -1 || arr1.indexOf(val) == -1){
      singleWords.push(val);
    }
  })
return singleWords;
  
};


diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
