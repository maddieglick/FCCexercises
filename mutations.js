// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

function mutation(arr) {
//word one and wordTwo are strings
let wordOne = arr[0].toLowerCase();
let wordTwo = arr[1].toLowerCase();
//wordTwoLetts needs to be and array of the letters that compose wordTwo
let wordTwoLetts = [];
for(let x = 0; x<wordTwo.length; x++){
   wordTwoLetts.push(wordTwo[x]);
 }

for(let i in wordTwoLetts){
// if the letter in word two does not have an index in word one, return false
    if(wordOne.indexOf(wordTwoLetts[i]) == -1){
      return false;
    }
  }
  //if all letters have an index in word one, return true
  return true;
}

mutation(["hello", "hey"]);

// issue i had: i had the return true line inside of the for loop and it was messing with the code and making it return true as soon as the first letter was a match.
