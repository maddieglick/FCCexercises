// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

// For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
//use slice to make a new array so we dont change the original
const tempArr = arr.slice(0,)
//sort so that they're from least to greatest
const newArr = tempArr.sort(function(a, b){
  return a - b;
});
//make last value a variable
const endVal = newArr[1];
// set missing val to the first value. this will change, so we use let
let missingVal = newArr[0]; 

//while missing value is less than the end val, add 1 and push that to newArr
while(missingVal < endVal -1){
  missingVal += 1;
  newArr.push(missingVal);
}
//sort for ease of understanding the code
const sortedArr = newArr.sort(function(a, b){
  return a - b;
});

//finally, get the sum
const sum = sortedArr.reduce((a,b) => a + b, 0)
return sum;
}

sumAll([1, 4]);
