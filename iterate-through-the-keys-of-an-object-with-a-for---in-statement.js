/*Use a for...in statement inside this function to loop through the allUsers object and return the number of users whose online property is set to true. Each user will have an online property set to either true or false. */
const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(allUsers) {
  // Only change code below this line
let result = 0;
for(const user in allUsers){
  if(allUsers[user].online === true){
  result += 1;
  }
}
return result;
  // Only change code above this line
}

console.log(countOnline(users));
