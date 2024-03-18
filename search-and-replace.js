function myReplace(str, before, after) {
  let properCaseAfter = after.slice(0,);
  
  if(before[0] == before[0].toUpperCase()){ //if the first letter of the before is capitalized
    properCaseAfter = after[0].toUpperCase() + after.slice(1,); //capitalize the first letter of the replacement
  }
  else if(before[0] != before[0].toUpperCase()){ //if the first letter of the before is lowercase 
    properCaseAfter = after[0].toLowerCase() + after.slice(1,); //lower the first letter of the replacement
  }
  
 return str.split(before).join(properCaseAfter); //split by the before and join by the after
  
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
