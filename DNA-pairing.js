function pairElement(str) {

const letters = str.split(''); //split into array of letters
let dnaArr = letters.map((letter) => [letter]); //make 2D array

//add pairs to single letters
  for(let i in dnaArr){
  if(dnaArr[i].includes('G') == true){
   dnaArr[i].push('C')
    }else if(dnaArr[i].includes('C') == true){
    dnaArr[i].push('G')
    }else if(dnaArr[i].includes('A') == true){
      dnaArr[i].push('T')
    }else if(dnaArr[i].includes('T') == true){
      dnaArr[i].push('A')
    }
}
return dnaArr;
}

pairElement("GCG");
