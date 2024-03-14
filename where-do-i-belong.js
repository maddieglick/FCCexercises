//we want to place the num in chronological order in the array
// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

// we want the returned value to be a number, ie, the index where it goes in the array
function getIndexToIns(arr, num) {
 //sort array from least to greatest
 let sortedArr = arr.sort(function(a,b){return a-b});
 //declare variable to hold the result index
 let ans = 0;
 for(let i=1; i<sortedArr.length; i++){
   //if num is in between two consecutive numbers return the lower index + 1
   // ie arr[i-1] < num < arr[i]
   if(num <= sortedArr[i] && num > sortedArr[i-1]){
     //then ans is the higher index from above (i)
     ans = sortedArr.indexOf(sortedArr[i]);
   }else if(num >= sortedArr[sortedArr.length - 1] ){
   //if its higher than the greatest number, add onto the end
      ans = sortedArr.length;
   }else if(num < sortedArr[0]){
  //if its lower than all elements, it's now the first element
      ans = 0;
}
 }
 console.log(ans)
 return ans;
}

getIndexToIns([40, 60], 50);

