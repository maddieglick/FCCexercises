function uniteUnique(arrOne, arrTwo, ...otherArrs) { //changed to accept 2+ args
  
  const allArrs = arrOne.concat(arrTwo, ...otherArrs) //all arrs concatenated
  
  const uniqueObject = new Set(allArrs); //create set(keeps only unique values)

  const uniqueValueArr = Array.from(uniqueObject); //convert object to array
  
  return uniqueValueArr;

  
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
