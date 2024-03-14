/*Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.*/

function truncateString(str, num) {
  let trunc = "";
  if(str.length > num){
    for(let i=0; i<num; i++){
      trunc += str[i];
    }
    return trunc + '...';
  }
  else{
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
