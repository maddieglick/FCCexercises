let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+[0-9]*$|^[a-z][0-9][0-9]+$/gi; // Change this line

let result = userCheck.test(username);

/*
num and letters 
0 or more numbers, must be at the end if any
cannot start with number /\d$* /
must be at least two characters long ^[a-z]^[a-z]+
if two characters, must only use letters


[a-z]+[a-z]+\d+$ this was in it and this was the problem 
^[a-z]+[^0-9]+[a-z]+[0-9]+$ this was also there and didnt need to be



[a-z][a-z]+\D -> consists of at least two characters, only letters, no numbers ( i dont think \D is necessary)


*/ 
