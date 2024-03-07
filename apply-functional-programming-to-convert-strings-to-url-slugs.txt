// Only change code below this line
function urlSlug(title) {
//split string into words
const splitTitle = title.split(" ");
//filter to get rid of spaces
const words = splitTitle.filter((word) => word !== "")
//use map to make all words lowercase
const lowercaseWords = words.map((word) => word.toLowerCase())
//join words with dashes
const finalSlug = lowercaseWords.join('-');
//console.log(finalSlug)
return finalSlug;
}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
