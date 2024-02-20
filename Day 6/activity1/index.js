// Task 1: Use arrow functions to calculate the square of a given number and log the result
// to the console.
const squaredValue = (num) => num * num

console.log(squaredValue(2))

// Task 2: Use template literals to create a welcome message that includes the name and
// age of a person
const helloName = (name, age) => `Hello, my name is ${name} and I'm ${age} years old`

console.log(helloName("Jared", 27))

// Task 3: Use destructuring to extract the first and last name from a person object and log
// them to the console.
const personInfo = {
   firstName: "John",
   lastName: "Doe",
   age: "28"
}

const { firstName, lastName } = personInfo;

const showInfo = (firstName, lastName) => console.log(`${firstName} ${lastName}`);

showInfo();

// Task 4: Use the spread operator to merge two arrays into a single array
const numList1 = [1, 2, 3, 4]
const numList2 = [5, 6, 7, 8]
const mergedNumList = [...numList1, ...numList2]

// Task 5: Use default parameters to create a function that calculates the area of a
// rectangle. If no arguments are provided, assume a default length and width of 1.
const rectangleArea = (width = 1, length = 1) => width * length

// Task 6: Create a class called "Person" with properties for name and age, and a method
// to introduce the person. Instantiate an object of the class and call the introduce
// method.
class Person {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }

   introduce() {
      console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
   }
}

const person1 = new Person("John", 25);

person1.introduce();