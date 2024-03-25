function convertHTML(str) {
 //loop through the string
 //if charcodeat(i) == one of the chars
 //replace with corresponding html entity
 //need to make sure it doesnt stop after the first one
 //if no html entities, return string
let strToArr = str.split('')
let htmlEnt = ''
for(let i=0; i<str.length; i++){
  switch(str.charCodeAt(i)){
    case 38:
    htmlEnt = '&amp;'
    break
    case 60: 
    htmlEnt = '&lt;'
    break
    case 62: 
    htmlEnt = '&gt;'
    break
    case 34:
    htmlEnt = '&quot;'
    break
    case 39:
    htmlEnt = '&apos;'
    break
    default:
    htmlEnt = str
    }
    console.log(htmlEnt)
  return htmlEnt;
  }
}

convertHTML("Dolce & Gabbana");


