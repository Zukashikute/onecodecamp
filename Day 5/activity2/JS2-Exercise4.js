// Exercise 4

// Declare a global variable globalVar with a value. Then, create a function that declares a
// local variable with the same name globalVar. Log the values of both variables inside and
// outside the function. What do you observe?

var globalVar = 10

const localFunction = () => {
  let globalVar = 5;
  console.log(globalVar);
}

localFunction();
console.log(globalVar);