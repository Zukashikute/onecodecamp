// Exercise 3

// Write a JavaScript function that checks if a given positive integer is a
// multiple of 3, 5, or both..

const multiNum = (mulNum) => {
   return mulNum % 3 == 0 || mulNum % 5 == 0 ? true : false;
}

console.log(multiNum(10));