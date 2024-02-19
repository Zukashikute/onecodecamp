// Exercise 6

// Create a higher-order function called mathOperation that takes two numbers and a
// callback function as parameters. The callback function should perform a mathematical
// operation. Use this higher-order function to add, subtract, multiply, and divide two
// numbers.

const mathOperation = (num1, num2, operation) => {
   return operation(num1, num2);
}

const add = (num1, num2) => {
   return num1 + num2;
}

const subtract = (num1, num2) => {
   return num1 - num2;
}

const multiply = (num1, num2) => {
   return num1 * num2;
}

const divide = (num1, num2) => {
   return num1 / num2;
}

console.log(mathOperation(5, 10, add));

