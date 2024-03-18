function translatePigLatin(str) {
//let vowelIndex = index of the first instance of a vowel
let toTranslate = str.slice(0,);
let pigLatin = ''
const vowels = /[aeiou]/; //regex for vowels
let vowelIndex = toTranslate.search(vowels); //search string for vowels, vowelIndex = index of first vowel

if(vowelIndex == 0){ //if vowelIndex = 0
  pigLatin = toTranslate + 'way'; //add 'way' to the end of it. (else -> elseway)
}
else if(vowelIndex == -1){ //if vowelIndex = -1
  pigLatin = toTranslate + 'ay'; //add 'ay' to the end (no vowels)
}
else if(vowelIndex > 0){ //if vowelIndex > 0
  let consonants = str.substring(0,vowelIndex); //the consonants before 1st vowel
  let secondHalf = str.substring(vowelIndex); //vowel & the rest of the word
  pigLatin = secondHalf + consonants + 'ay' //concatenating to make the new translated word
}
return pigLatin;
}

translatePigLatin("schwartz");
