function repeatStringNumTimes(str, num) {
  let endString = "";
  if(num <= 0){
    endString = "";
  }
  else{
  for(let i=0; i<num; i++){
    endString = endString.concat(str);
    }
  }
  return endString;
}

repeatStringNumTimes("abc", 3);

/*issue i was having was that i had endstring initially set to str instead of just an empty string. idk. i wish FCC showed ur output each time you run it */
