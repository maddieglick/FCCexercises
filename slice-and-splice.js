/*You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs. */

function frankenSplice(arr1, arr2, n) {
  
  let newArr = [];
  newArr.splice(0, 0, ...arr2);
  newArr.splice(n, 0, ...arr1);
  return newArr;
  
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);

// remember that using ... (the spread operator) allows you to copy the /elements of/ and array instead of the whole array, which avoids the brackets also being copied. 
