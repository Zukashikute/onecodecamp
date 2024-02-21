class Car {
   constructor(name, year) {
      this.name = name;
      this.year = year;

   }
   carInfo = () => {
      console.log(this.name, this.year)
   }
}

// Creating instaces of Person objects
const car1 = new Car("Toyota", 2023)
const car2 = new Car("Honda", 2022)
car1.carInfo();
car2.carInfo();

function Person(name, age) {
   this.name = name;
   this.age = age;

   this.greet = () => {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`)
   }
}

// Creating instaces of Person objects
const person1 = new Person("Joe", 18)
const person2 = new Person("Aaron", 17)
person1.greet();
person2.greet();


// Encapsulation
class BankAccount {
   constructor(acctNum, balance) {
      this.acctNum = acctNum;
      this.balance = balance;
   }

   deposit(amount) {
      return this.balance += amount;
   }

   withdraw(amount) {
      return amount <= this.balance ? this.balance -= amount : "Insufficient funds available";
   }

   checkBalance() {
      return `Your balance is ${this.balance}.`
   }
}

const myBankAcct = new BankAccount("12345", 1000);
console.log(myBankAcct.deposit(200))
console.log(myBankAcct.checkBalance());
console.log(myBankAcct.withdraw(1500));
// bankAcct.withdraw(1500)


// Inheritance
class Animal {
   constructor(name) {
      this.name = name;
   }

   eat = () => {
      return `${this.name} is eating`
   }
}

class Dog extends Animal {
   bark = () => {
      return "Aw aw!"
   }
}

const myDog = new Dog("Bruno")
console.log(myDog.eat());
console.log(myDog.bark());


// Polymorphism
class Human {
   makeSound() {
      return "The person makes a noise"
   }
}

class Infant extends Human {
   makeSound() {
      return super.makeSound() + " saying wah wah wah when a baby is crying"
   }
}

const baby = new Infant()

console.log(baby.makeSound());


// Abstraction
class Vehicle {
   constructor(make, model) {
      this.make = make;
      this.model = model;
   }

   start = () => {
      return `${this.make} ${this.model} is starting the engine`
   }

   stop = () => {
      return `${this.make} ${this.model} is stopping the engine`
   }
}

const myVehicle = new Vehicle("Toyota", "Camry")
console.log(myVehicle.start())