function largestOfFour(arr) {
  let bigFour = [];
  let largest = arr[0][0];
  for(let i=0; i<arr.length; i++){
     largest = arr[i][0]
  for (let j=1; j<arr[i].length; j++){
    if(arr[i][j]>largest){
      largest = arr[i][j];
      }
    }
  bigFour.push(largest);
  }
  return bigFour;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

