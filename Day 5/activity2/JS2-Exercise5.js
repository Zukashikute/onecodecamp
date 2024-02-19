// Exercise 5

// Write a function named hoistedFunction and call it before the function declaration in your
// code. Does it work? Explain the behavior..


// You need to ensure that you declare the function before attempting to call it. hoistedFunction is not a function error
hoistedFunction();

var hoistedFunction = function hoist() {
   console.log("This is working");
}