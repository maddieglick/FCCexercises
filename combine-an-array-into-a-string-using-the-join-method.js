// Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. The function should return a string. For example, I-like-Star-Wars would be converted to I like Star Wars. For this challenge, do not use the replace method.

function sentensify(str) {
  // Only change code below this line
  //use split to split it into an array of words divided by anything besides a letter
const wordArr = str.split(/\W/);

//use join to join the words into a sentence (string) by spaces

const sentence = wordArr.join(" ");

return sentence;

  // Only change code above this line
}

sentensify("May-the-force-be-with-you");
