// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
//*** got this with evan's help!


function whatIsInAName(collection, source) {
  // filtered array
  const arr = collection.filter((collectionObj, index) => {
    let timesMatched = 0; // number we will increment when theres a match with source values

    //Object.entries(obj) gives an array of arrays containing the key and value of the object(s)
    const timesNeededToMatch = Object.entries(source).length; // length of key/value pairs in source obj
    console.log(Object.entries(source));
    // loop for having access to key, val pair within collectionObj - represented with "key" and "value"
    //uses destructuring
    for (const [key, value] of Object.entries(collectionObj)) {
      // loop for having access to key value pair of source obj represented with "key2" and "value2"
      for (const [key2, value2] of Object.entries(source)) {
        // if key and value of collectionObj matches key and value of source obj
        if (key === key2 && value === value2) {
          //increment amount of times this matched
          timesMatched++;
        }
      }
    }
  
    if (timesMatched === timesNeededToMatch) {
      return collectionObj;
    }
    
  })

  return arr
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
