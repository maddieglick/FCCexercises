//Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function spinalCase(str) {
  //const sentenceLower = str.toLowerCase();
  //we want to split the string at any whitespace, non-letter or number character, or any capital letter
  let seperator = /_|\s|\W|(?=[A-Z])/
  const sentenceArr = str.split(seperator);
  //but now we need to get all of it to be lowercase
  const sentenceLower = sentenceArr.map((word) => word.toLowerCase());
  const finalSpinal = sentenceLower.join('-');
  return finalSpinal;
}

spinalCase('This Is Spinal Tap');
