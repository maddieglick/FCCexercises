function translatePigLatin(str) {
  //the function takes one word (a string) as the argument
  //if the word begins with a consonant or a consonant cluster, move it to the end and add "ay" to the end
  //if the word begins with a vowel, just add "way" to the end of it
  //if no vowels, just add 'ay' to the end.
  //make empty str
//if num consonants == str.length, add 'ay' to the end

  let pigLatin = ''
  //regex for vowels
  const vowels = /[aeiou]/;
  console.log(str[0]==vowels)
  //regex for consonants
  //const consonants = 
  // for(let i=0; i<str.length; i++){
  //   if(str[0] == 'a'|| str[0] == 'e' || str[0] == 'i' || str[0] == 'o' || str[0] == 'u'){
  //     pigLatin = str.concat('way'); //if str starts w a vowel, add 'way' to the end
  //   }
  //   else if(str[i+1]){

  //   }
  // }
//return pigLatin
  //split string into an array of letters
  //loop through array 
    //if first 
};

translatePigLatin("alligator");
