// Exercise 3
// Write a function called isEven that takes a number as a parameter and returns true if it's
// even and false if it's odd. Test the function with various numbers

const evenOrOdd = (num) => {
   return num % 2 == 0 ? "Even" : "Odd"
}

console.log(evenOrOdd(2));