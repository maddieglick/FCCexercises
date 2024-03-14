function factorialize(num) {
  let factorial = 1;
  if(num == 0){
    return factorial;
  }
  else{
  for(let i = 1; i <= num; i++){
  factorial = factorial * i;
    }
    return factorial;
  } 
}
factorialize(5);
