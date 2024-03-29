function sumFibs(num) {
  let fib = [0, 1];
  for(let i = 0; fib[i] < num; i++){ //fib sequence into an array
  if( fib[i] + fib[i+1] <= num){
    fib.push(fib[i] + fib[i+1])
    }
  }console.log(fib)
  let oddFibs = fib.filter((num) => num%2 == 1)
  let sumOddFibs = oddFibs.reduce((start, next) => start+next)
  return sumOddFibs
  //filter to grab only odd numbers
  //map to add all odd numbers together
  //return sum of odd fibonacci numbers

}

sumFibs(75025);
