const squareList = arr => {
  // Only change code below this line
  //goal: get an array of the squares of only the positive INTEGERS
  //filter to get only positive integers
  const positiveInts = arr.filter((num) => num > 0 && num%1==0)
  //map to get the squares of the filtered array
  const squares = positiveInts.map((num) => num*num)
  return squares;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
