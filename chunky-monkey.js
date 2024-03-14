function chunkArrayInGroups(arr, size) {
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

let newArr = [];
let finalArr = [];
//newArr = arr.slice(0, size);
//params in loop need to be i, size+i
let newArrTwo = arr.slice(size,)

let partOne = arr.slice(0, size)
//console.log(partOne);
newArr.push(partOne)


for(let i=size; i < arr.length; i += size){
  let partTwo = arr.slice(i, i+size);
  //console.log(partTwo)
  newArr.push(partTwo);
}
return newArr;

}

//chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2))
