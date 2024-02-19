// Exercise 8

// Write a function called applyFunction that takes a function and an array as parameters. It
// should apply the given function to each element of the array and return a new array with
// the results.

const letters = ["a", "b", "c", "d"]

const applyFunction = (func, collection) => {
   const resultArray = collection.map(func)
   return resultArray;
}

const addLetter = (letter) => {
   return letter.concat("s")
}

console.log(applyFunction(addLetter, letters))