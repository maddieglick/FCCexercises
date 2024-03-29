function sumFibs(num) {
  let fib = [0, 1]
  for(let i = 0; fib[i] < num; i++){ //fib sequence into an array
  if( fib[i] + fib[i+1] <= num){ //stop pushing when sum is <= num
    fib.push(fib[i] + fib[i+1])
    }
  }
  let oddFibSum = fib.filter((num) => num%2 == 1).reduce((start, next) => start+next) //remove even nums, sum remaining nums
  return oddFibSum

}

sumFibs(75025);
