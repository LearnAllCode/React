// CONST & LET
let name = "John";
name = "Mike";

console.log(name);

const person = {
  name: "John",
  age: 22
};

person.name = "Tony";
console.log(person);

const nums = [1, 2, 3, 4];
nums.push(5);

// ARROW FUNCTIONS
//function sayHello() {
//  console.log("Hello");
//}

const sayHello = (name, greet) => {
  //console.log("Hello " + name + greet);
  console.log(`Hello ${name} ${greet}`); // template literal
};

sayHello("mike", "by");

// FOR EACH
const fruits = ["apples", "oranges", "grapes"];
fruits.forEach((fruit, index) => {
  console.log(fruit);
  console.log(index);
});

// MAP - returns an array
const singleFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());
console.log(singleFruit);

// FILTER - returns array with things filtered out - deleting things from states
const people = [
  { id: 1, name: "Mike" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Joe" }
];

const people2 = people.filter(person => person.id !== 2);
console.log(people2);

// SPREAD - basically copy array contents
const arr = [1, 32, 34];
const arr2 = [...arr, 4];

console.log(arr2);

const pers = {
  name: "Frank",
  age: 33
};

const newPers = {
  ...pers,
  email: "frank@gmail.com"
};
console.log(newPers);

const arr3 = [...arr.filter(num => num !== 1)];
console.log(arr3);

// DESTRUCTURING
const profile = {
  namez: "John doe",
  address: {
    street: "40 main st",
    city: "new york"
  },
  hobbies: ["movies", "music"]
};

const { namez, address, hobbies } = profile;
console.log(profile, address.street, hobbies[0]);
//console.log(profile.namez);

// CLASSES
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    console.log("ran");
  }
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age}`;
  }
}

const person1 = new Person("Mike", 23);
const person2 = new Person("Sara", 32);
console.log(person1.name);
console.log(person2.name);
console.log(person1.greet());
// SUBCLASSES
class Customer extends Person {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }

  info() {
    return `${this.name} owes ${this.balance}`;
  }
}

const cus1 = new Customer("Billy", 32, 500);
console.log(cus1);
console.log(cus1.info());

// MODULES

// file1 (file1.js)
//export const name = "Jeff";
// export const nums = [1,2,3];
//export default Person;

// file2 (file2.js)
//import { name, nums } from "./file1";
//import Person from './file1'

//console.log(name);
