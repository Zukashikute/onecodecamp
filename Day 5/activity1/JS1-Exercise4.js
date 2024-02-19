// Exercise 4

// Write a JavaScript function that finds the largest number in an array of
// integers

const numList = [20, 15, 18, 25, 34, 5, 9]

const findTheLargest = () => {
   return Math.max(...numList)
}

console.log(findTheLargest());