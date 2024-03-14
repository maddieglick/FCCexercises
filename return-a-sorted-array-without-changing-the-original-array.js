// Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
//slice arr so that the original is not mutated
const slicedArr = arr.slice(0,);
//use slicedArr to sort in ascending order
const sortedArr = slicedArr.sort(function(a, b){
  return a - b;
});
return sortedArr;
  // Only change code above this line
}

nonMutatingSort(globalArray);
