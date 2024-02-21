/* Exercise 1
   Create a class Person with properties name and age. Implement a method “introduce”
   that logs "Hi, I'm {name} and I'm {age} years old."
*/


// class Person {
//    constructor(name, age) {
//       this.name = name;
//       this.age = age;
//    }

//    greet() {
//       console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
//    }
// }

// const person1 = new Person("Aria", 3)
// person1.greet();

/* Exercise 2
   Create a class Rectangle with properties width and height. Implement methods to
   calculate the area and perimeter of the rectangle.
*/

// class Rectangle {
//    constructor(width, height) {
//       this.width = width;
//       this.height = height;
//    }

//    getArea() {
//       return this.width * this.height
//    }

//    getPerimeter() {
//       return 2 * (this.width + this.height)
//    }
// }

// const rectShape = new Rectangle(5, 3);
// console.log(rectShape.getArea());
// console.log(rectShape.getPerimeter());

/* Exercise 3
   Create a base class Shape with a method calculateArea(). Create derived classes Circle
   and Rectangle that calculate their respective areas.
*/

// class Shape {
//    calculateArea() {
//       return 0
//    }
// }

// class Circle extends Shape {
//    constructor(radius) {
//       super();
//       this.radius = radius;
//    }

//    calculateArea() {
//       return Math.PI * this.radius ** 2
//    }
// }

// class Rectangle extends Shape {
//    constructor(length, width) {
//       super();
//       this.length = length;
//       this.width = width;
//    }

//    calculateArea() {
//       return this.length * this.width
//    }
// }

// const circleShape = new Circle(4);
// const rectangleShape = new Rectangle(5, 3);

// console.log(circleShape.calculateArea());
// console.log(rectangleShape.calculateArea());

/* Exercise 4
   Implement a class BankAccount with properties accountNumber and balance. Add
   methods to deposit, withdraw, and get the account info.
*/

class BankAccount {
   constructor(accountNumber, balance) {
      this.accountNumber = accountNumber;
      this.balance = balance;
   }

   deposit(amount) {
      return this.balance += amount;
   }

   withdraw(amount) {
      return amount > this.balance ? "Insufficient funds" : this.balance -= amount;
   }

   accountInfo() {
      return `Account Number: ${this.accountNumber} and Balance Amount: ${this.balance}`;
   }
}

const myBankAcct = new BankAccount("12345", 1000);
console.log(myBankAcct.deposit(200))
console.log(myBankAcct.accountInfo());
console.log(myBankAcct.withdraw(1500));

/* Exercise 5
   Create a class Animal with properties name and species. Implement a method
   makeSound that logs the sound the animal makes.
*/

class Animal {
   constructor(name, species) {
      this.name = name;
      this.species = species;
   }

   makeSound() {
      return "This animal makes this sound: "
   }
}


/* Exercise 6
   Extend the Animal class to create specific animal classes like Dog, Cat, and Bird.
   Implement their own makeSound methods.
*/

class Dog extends Animal {
   constructor(name, species) {
      super(name, species);
   }

   makeSound() {
      return super.makeSound() + "arf arf!";
   }
}

class Cat extends Animal {
   constructor(name, species) {
      super(name, species);
   }

   makeSound() {
      return super.makeSound() + "meow meow!";
   }
}

class Bird extends Animal {
   constructor(name, species) {
      super(name, species);
   }

   makeSound() {
      return super.makeSound() + `${this.name} says tweet tweet!`;
   }
}

const myDog = new Dog("Bruno", "mammal");
const myCat = new Cat("Musa", "mammal");
const myBird = new Bird("Ernie", "bird");

console.log(myDog.makeSound());
console.log(myCat.makeSound());
console.log(myBird.makeSound());


/* Exercise 7
   Implement a class Shape with properties color and name. Create classes Circle and
   Square that inherit from Shape and add their own properties.
*/

class Shape {
   constructor(color, name) {
      this.color = color;
      this.name = name;
   }
}

class Circle extends Shape {
   constructor(color, name, radius) {
      super(color, name);
      this.radius = radius;
   }
}

class Square extends Shape {
   constructor(color, name, length, width) {
      super(color, name);
      this.length = length;
      this.width = width;
   }
}

const redCircle = new Circle("red", "Circle 1", 5);
const blueSquare = new Square("blue", "Square 1", 4, 6);


/* Exercise 8
   Create a class Person with properties name and age. Implement a method greet that
   logs a greeting message.
*/

class Person {
   constructor(name, age) {
      this.name = name;
      this.age = age;
   }

   greet() {
      return `Hello ${this.name}, nice to meet you. `
   }
}

/* Exercise 9
   Implement a class Student that inherits from Person and adds a property studentID.
   Configure the “greet” method to include the student's ID.
*/

class Student extends Person {
   constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
   }

   greet() {
      return super.greet() + `(${this.studentId})`
   }
}

const student1 = new Student("Aria", 10, 12345);
console.log(student1.greet());